import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import mockData from "../mock-data.json";

const Table = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState([]);

  const data = useMemo(() => mockData, []);

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      columns: [
        {
          header: "First Name",
          accessorKey: "first_name",
        },
        {
          header: "Last Name",
          accessorKey: "last_name",
        },
      ],
      // accessorFn: row => `${row.first_name} ${row.last_name}`
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
    {
      header: "Date of Birth",
      accessorKey: "dob",
      cell: (info) => {
        return new Date(info.getValue()).toLocaleString();
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div
      className="w3-container table"
      style={{
        margin: "1.5rem 1rem",
      }}
    >
      <div className="filters">
        <input type="text" value={filtering} onChange={(e) => setFiltering(e.target.value)} />
      </div>
      <table className="w3-table-all">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                      }
                      {
                        {
                          asc: "    ⬇️",
                          desc: "    ⬆️",
                        }[header.column.getIsSorted() ?? null]
                      }
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="pagination"
        style={{
          display: "flex",
          columnGap: "0.5rem",
        }}
      >
        <button onClick={() => table.setPageIndex(0)}>First Page</button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous Page
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next Page
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Last Page
        </button>
      </div>
    </div>
  );
};

export default Table;
