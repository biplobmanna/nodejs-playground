import { HeapObject } from "./heap"
import { FunctionStack, sf } from "./stack"

class QueueItem {
  event: string
  hob: HeapObject
  constructor(event: string, hob: HeapObject) {
    this.event = event
    this.hob = hob
  }
}
export function qi(event: string, hob: HeapObject): QueueItem {
  return new QueueItem(event, hob)
}
type Queue = QueueItem[]
export class EventQueue {
  queue: Queue
  constructor() {
    this.queue = []
  }
  add(item: QueueItem) {
    this.queue.push(item)
  }
  operate(stackRef: FunctionStack) {
    const first = this.queue[0]
    this.queue.shift()
    // push stack frame onto stack
    stackRef.add(sf(first.event, first.hob))
  }
  len(): number {
    return this.queue.length
  }
}
