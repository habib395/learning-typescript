{

//type alias
type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string; 
    address: string;
}

const student1: Student
// {
//     name: string;
//     age: number;
//     gender: string;
//     contactNo: string;
//     address: string;
// }
 = {
    name: 'Sujon',
    age: 24,
    gender: 'male',
    contactNo: '01742923499',
    address: 'Rajshahi'
};

const student2 : Student ={
    name: 'Habib',
    age: 25,
    gender: 'Male',
    address: 'Dhaka'
}


type UserName = string
type IsAdmin = boolean

const userName: UserName = 'Habibur'
const isAdmin : IsAdmin = true

type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;
}