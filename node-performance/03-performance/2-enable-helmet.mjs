import * as dotenv from 'dotenv';
dotenv.config();

import Express from 'express';
import helmet from 'helmet';

const app = Express();
app.use(helmet());

app.get('/', (req, res) => {
	res.send('');
});

app.listen(process.env.PORT, () => {
	console.log(`Server started @ http://localhost:${process.env.PORT}`)
});
