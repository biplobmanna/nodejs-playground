import { HeapObject, Listeners } from "./heap"

class StackFrame {
  event: string // store the event name that was fired
  hob: HeapObject
  constructor(event: string, hob: HeapObject) {
    this.event = event
    this.hob = hob
  }
}
export function sf(event: string, hob: HeapObject): StackFrame {
  return new StackFrame(event, hob)
}
type Stack = StackFrame[]
export class FunctionStack {
  stack: Stack
  constructor() {
    this.stack = []
  }
  add(frame: StackFrame): void {
    this.stack.push(frame)
  }
  operate(): void {
    if (this.stack.length <= 0) {
      return
    }
    const top = this.stack.pop()
    // fire the function with the matching event name
    top?.hob.listeners[top.event as keyof Listeners]()
  }
  len(): number {
    return this.stack.length
  }
}
