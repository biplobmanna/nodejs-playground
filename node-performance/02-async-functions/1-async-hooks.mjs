"use strict"

import { createHook, executionAsyncId } from "node:async_hooks";
import { writeSync } from "fs";

const TIMEOUT_MS = 10;

// async hook
createHook({
	init(asyncId, type, triggerAsyncId, resource) {
		const executionId = executionAsyncId();
		writeSync(1, `>> ${type}(id=${asyncId}) :: trigger(id=${triggerAsyncId}) :: execution(id=${executionId})\n`);
	}
}).enable();

// console.log()
setTimeout(() => {}, TIMEOUT_MS);
