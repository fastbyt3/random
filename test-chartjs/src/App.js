import "./App.css";
import BarChart from "./components/barchart";
import PieChart from "./components/piechart";

function App() {
  const ticketStatusLabel = ["CREATED", "ASSIGNED", "CLOSED"];

  const ticketStatusData = {
    labels: ticketStatusLabel,
    datasets: [
      {
        label: "New Relic",
        data: [9, 29, 159],
        backgroundColor: "skyblue",
      },
    ],
  };

  const ticketPriorityLabel = ["MEDIUM", "HIGH", "CRITICAL"];

  const ticketPriorityData = {
    labels: ticketPriorityLabel,
    datasets: [
      {
        label: "# Tasks",
        data: [16, 95, 50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",
        rowGap: "1rem",
        columnGap: "1rem",
      }}
    >
      <BarChart data={ticketStatusData} />
      <PieChart data={ticketPriorityData} />
    </div>
  );
}

export default App;
