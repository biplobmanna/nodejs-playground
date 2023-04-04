import {AsyncDebugger} from '../lib/async-debugger.mjs'

const TIMEOUT_MS = 10;
const INTERVAL_MS = 2000;
const asyncDebugger = new AsyncDebugger();

// test different functions

const testTImeout = () => {
	setTimeout(() => {}, TIMEOUT_MS);
}

const testInterval = () => {
	setInterval(() => {}, INTERVAL_MS);
}

const testImmediate = () => {
	setImmediate(() => {});
}

const testNextTick = () => {
	process.nextTick(() => {});
}

const testAsyncFunction = async () => {}

const testPromise = () => {
	new Promise(resolve => resolve(true).then(a => {}));
}

const testConsoleLog = () => {
	console.log('I am a console log!');
}

asyncDebugger.startTracking('test', testPromise);
