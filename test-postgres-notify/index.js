const express = require('express');
const app = express();

const { Client } = require('pg');

const client = new Client({
	host: 'localhost',port: '5432',user: 'fastbyte', database: 'testDb', 
})

const actionOnNotification = (channel, payload) => {
	console.log(' ===> ');
	switch(channel){
		case 'testing_update_notification':
			console.log(payload);
			break;
	}
}

// client.connect((err, client) => {
// 	if(err){
// 		console.log('error in db connection');
// 	}else{
// 		console.log('db connected');
// 		const text = 'INSERT INTO testing(id, name) VALUES($1, $2) RETURNING *'
// 		const values = ['5', 'rui']

// 		const res = await client.query(text, values)
// 		console.log(res.rows[0])
// 		// client.query("LISTEN testing_update_notification");
// 		// client.on('notification', (msg) => {
// 		// 	console.log(msg);
// 		// 	actionOnNotification(msg.channel, msg.payload);
// 		// });
// 	}
// });

async function foo() {
	await client.connect()

	const res = await client.query('LISTEN my_table_update');
	console.log(res);
	client.on('notification', (msg) => {
		console.log(msg);
	});
	client.query(`NOTIFY my_table_update, 'bar!'`)

	const text = 'INSERT INTO testing(id, name) VALUES($1, $2) RETURNING *'
	const values = ['9', 'JR']

	const insRes = await client.query(text, values)
	console.log(insRes.rows[0], insRes.rowCount)
}

foo();

// app.listen(3001, () => {
// 	foo()
// })
