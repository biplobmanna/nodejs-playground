import axios from 'axios';
import {AsyncDebugger} from '../lib/async-debugger.mjs';

const testHttp = async () => {
  await axios.get('https://www.npmjs.com/')

	await axios.get('https://www.rust-lang.org/')
}


const ad = new AsyncDebugger();
ad.startTracking('test', testHttp);
