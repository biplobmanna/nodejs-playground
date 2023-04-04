import * as dotenv from 'dotenv';
dotenv.config();

import Express from 'express';

const app = Express();

app.get('/', (req, res) => {
	res.send('');
});

app.listen(process.env.PORT, () => {
	console.log(`Server started @ http://localhost:${process.env.PORT}`)
});
