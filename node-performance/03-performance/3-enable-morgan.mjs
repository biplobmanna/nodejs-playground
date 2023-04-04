import * as dotenv from 'dotenv';
dotenv.config();

import Express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = Express();
app.use(helmet());
app.use(morgan('combined', {
	skip: (req, res) => {return res.statusCode < 400}
}))

app.get('/', (req, res) => {
	res.send('');
});

app.listen(process.env.PORT, () => {
	console.log(`Server started @ http://localhost:${process.env.PORT}`)
});
