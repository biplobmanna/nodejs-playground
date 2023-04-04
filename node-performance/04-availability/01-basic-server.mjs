import * as dotenv from 'dotenv';
dotenv.config();

import Express from 'express';
import axios from 'axios';

const app = Express();

app.get('/pulse', (req, res) => {
	res.send('');
});

app.get('/stress', async (req, res) => {
	const rStr = Math.floor(Math.random() * 10000).toString();
	const data = await axios.get(`https://www.google.com/search?q=${rStr}`);
	res.send(data.toString());
})

app.listen(process.env.PORT, () => {
	console.log(`Server started @ http://localhost:${process.env.PORT}`)
});
