// HEAP
export type Listeners = { string: Function }
interface HeapObjectInterface {
  readonly id: string
  readonly funcName: string
  listeners: Listeners
  contents(): void
}
export class HeapObject implements HeapObjectInterface {
  id: string
  funcName: string
  listeners: Listeners
  constructor(id: string, funcName: string) {
    this.id = id
    this.funcName = funcName
    this.listeners = {
      ["error" as keyof Listeners]: (e: Error) => console.log(e),
    }
  }
  contents(): void {
    console.log(this)
  }
  attach(e: string, callback: Function): void {
    this.listeners[e as keyof Listeners] = callback
  }
}
/**
 *
 * @param id string
 * @param funcName Function
 * @returns HeapObject
 */
export function hob(id: string, funcName: string): HeapObject {
  return new HeapObject(id, funcName)
}
export type Heap = HeapObject[]

// Using the Heap to create a heap of heap objects
export class ObjectHeap {
  heap: Heap
  constructor() {
    this.heap = []
  }
  push(hob: HeapObject): void {
    this.heap.push(hob)
  }
  remove(ix: number | undefined): HeapObject | undefined {
    // remove the HeapObject specified by the index & return
    if (ix == undefined || ix < 0 || ix >= this.heap.length) {
      return undefined
    }
    const hob = this.heap[ix]
    this.heap.splice(ix, 1)
    return hob
  }
  search(id: string): number {
    // return the ix of the HeapObject in Memory
    // that matched given id
    for (let i = 0; i < this.heap.length; i++) {
      if (this.heap[i].id === id) {
        return i
      }
    }
    return -1
  }
  len(): number {
    return this.heap.length
  }
}
