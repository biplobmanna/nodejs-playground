import {readFile} from 'node:fs';
import {AsyncDebugger} from '../lib/async-debugger.mjs';

const testIO = async () => {
	readFile('../../package.json', () => {})
}

const ad = new AsyncDebugger();
ad.startTracking('test', testIO);
