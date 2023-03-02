import { EventEmitter, errorMonitor } from "events"
import "colors"
// import { EventEmitter } from "stream"

// const EventEmitter = require("node:events")

class CustomEmitter extends EventEmitter {
  constructor(options?: Object | undefined) {
    super((options = options))
  }
}

const customEmitter: EventEmitter = new CustomEmitter({
  captureRejections: true,
})

// registering events and emitting them
customEmitter.on("event", function (this: EventEmitter, a, b) {
  console.log("custom event 1 triggered!".blue)
  // console.log(a, b, this)
  setTimeout(function () {
    console.log("setTimeout() from inside event capture 1".blue)
  }, 0)
})

customEmitter.on("event", function (this: EventEmitter, a, b) {
  console.log("custom event 2 emitted!".yellow)
  // console.log(a, b, this)
})

// Asynchronous handling of events
customEmitter.on("forcedAsync", function (this: EventEmitter) {
  setImmediate(function (this: EventEmitter) {
    console.log("This happens Async!".cyan)
  })
})
customEmitter.emit("forcedAsync")

// Prev Event Emitter
customEmitter.emit("event", "a", "b")

// registering events for once operation
customEmitter.once("once", function (this: EventEmitter) {
  console.log("Only once!".magenta)
})

customEmitter.emit("once")
customEmitter.emit("once")
customEmitter.emit("once")
customEmitter.emit("once")

// monitor events without consuming
customEmitter.on(errorMonitor, console.log)
// Error events
customEmitter.on("error", function (err: Error) {
  console.log((err.stack || err).toString().red)
})

customEmitter.emit("error", new Error("Whoops!"))

// Capture rejection of promises
customEmitter.on("async", async () => {
  throw new Error("kaboom!")
})
customEmitter.emit("async")
// customEmitter[Symbol.for("nodejs.rejection")] = console.log
