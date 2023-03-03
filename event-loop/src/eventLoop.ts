import { HeapObject, ObjectHeap, hob } from "./heap"
import { EventQueue, qi } from "./queue"
import { FunctionStack } from "./stack"

class Memory {
  heap: ObjectHeap
  queue: EventQueue
  stack: FunctionStack
  constructor() {
    this.heap = new ObjectHeap()
    this.queue = new EventQueue()
    this.stack = new FunctionStack()
  }
  emit(e: string, hob: HeapObject) {
    const hobId = this.heap.search(hob.id)
    const removedHob = this.heap.remove(hobId)
    if (!removedHob) {
      console.error(`HeapObject(id=${hobId}) not in memory!`)
      return
    }

    // added to message queue
    this.queue.add(qi(e, hob))

    // start the event loop
    this.eventLoop()
  }
  eventLoop() {
    // start the event Loop
    this.queuePhase()
    this.stackPhase()
  }
  queuePhase() {
    // while (this.queue.len() > 0 || this.heap.len() > 0) {
    console.log(
      `Queue Phase: (items=${this.queue.len()})(frames=${this.stack.len()})`
    )
    if (this.queue.len() > 0) {
      this.queue.operate(this.stack)
    }
    // setTimeout(this.queuePhase, 100)
    // }
  }
  stackPhase() {
    // while (
    //   this.queue.len() > 0 ||
    //   this.stack.len() > 0 ||
    //   this.heap.len() > 0
    // ) {
    console.log(
      `Stack Phase: (items=${this.queue.len()})(frames=${this.stack.len()})`
    )
    if (this.stack.len() > 0) {
      this.stack.operate()
    }
    // setTimeout(this.stackPhase, 180)
    // }
  }
}

// Let's finally use it all
const mem = new Memory()
const hobList: HeapObject[] = []
for (let i = 0; i < 10; i++) {
  let istr = "" + i
  let hob = new HeapObject(istr, "f" + istr)
  let hob2 = new HeapObject(istr, "f" + istr)
  hobList.push(hob2)
  hob.attach("l" + istr, () => console.log(`Logging from Listener=l${i}`))
  mem.heap.push(hob)
}

// start the event loop
// Memory.eventLoop(mem)

console.log(mem.heap)
// emit
for (let i = 0; i < 10; i++) {
  let memHobId = mem.heap.search(hobList[i].id)
  mem.emit("l" + i, mem.heap.heap[memHobId])
}

console.log(mem.heap)
