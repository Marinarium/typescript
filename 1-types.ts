const str: string = 'Hello';

const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 42.2;

const numberArray: number[] = [1, 1, 2, 3, 4];
const numberArrayTwo: Array<number> = [1, 1, 2, 3, 4];

const words: string[] = ['hi', 'hey', 'hello'];

// Tuple
const contact: [string, number] = ['Marina', 444309];

// Any
let variable: any = 42;
variable = 'some string';

// Function
function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('Marina');

// Never
function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while(true) {

    }
}

// Type
type Login = string;

const login: Login = 'admin';
// const login2: Login = 2; --- we can't do it

type ID = string | number;
const id1: ID = 1234;
const id2: ID = 'my-id';
// const id3: ID = true; --- we can't do it

type someType = string | null | undefined;

