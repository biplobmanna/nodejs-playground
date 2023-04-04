import * as dotenv from 'dotenv';
dotenv.config();

import {cpus} from 'node:os';
console.log(cpus().length)
console.log(cpus())

/*
import Express from 'express';
import axios from 'axios';

const app = Express();

app.get('/pulse', (req, res) => {
	res.send('');
});

app.get('/stress', async (req, res) => {
	const rStr = Math.floor(Math.random() * 10000).toString();
	try {
		const data = await axios.get(`https://duckduckgo.com`);
		res.send(data.toString());
	} catch(err) {
		// console.log(err)
		console.log('Problem with fetching link!');
		res.status(429).send('Problem with fetching link!');
	}
})

app.listen(process.env.PORT, () => {
	console.log(`Server started @ http://localhost:${process.env.PORT}`)
});
*/
