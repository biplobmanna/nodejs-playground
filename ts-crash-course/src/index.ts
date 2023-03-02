let id: number = 5
let company: string = "Learning From Traversy Media"
let isPublished: boolean = true
let x: any = "literally anything!"

let ids: number[] = [1, 2, 3, 4, 5, 4, 3, 2, 1]
ids.push(0)

let arr: any[] = ["1", 2, "hoohoo", [1, 2, 3], "bebe", undefined, null]
console.log(arr)

// tuples
let person: [number, string, boolean] = [1, "boogeyman", true]
// tuple arrays
let employee: [number, string][] = [
	[1, "massacre"],
	[2, "healing"],
	[3, "levelup"],
]

// union
let pid: string | number = "0x23a9834ccd"
pid = 22
console.log(pid)

// enum
enum direction {
	UP = "UP",
	DOWN = "DOWN",
	LEFT = "LEFT",
	RIGHT = "RIGHT",
}
console.log(direction["UP"])

// objects & types
type User = {
	id: number
	name: string
}
const user: User = {
	id: 1,
	name: "someone",
}

// type assertion
let cid: any = 1
// let custId = <number>cid
let custId = cid as number

// functions
function addNum(x: number, y: number): number {
	return x + y
}

function log(message: string | number): void {
	console.log(message)
}

// interfaces
interface UserInterface {
	readonly id: number
	name: string
	age?: number
}

const user2: UserInterface = {
	id: 2,
	name: "anyone else",
	age: 30,
}
// user2.id = 30

// function interfaces
interface MathFunc {
	(x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
	id: number
	name: string
	register(): string
}

// classes, access modifiers
class Person implements PersonInterface {
	id
	name

	constructor(id: number, name: string) {
		this.id = id
		this.name = name
	}

	register(): string {
		return `${this.name} is now registered!`
	}
}
const p1 = new Person(1, "p1")
const p2 = new Person(2, "p2")
console.log(p1.register())

class Employee extends Person {
	position: string

	constructor(id: number, name: string, position: string) {
		super(id, name)
		this.position = position
	}
}

const emp = new Employee(3, "e1", "CEO")

console.log(emp.id, emp.name, emp.position, emp.register())

// Generics
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let stringArray = getArray<string>(["one", "two", "three", "four"])

console.log(numArray)
console.log(stringArray)
