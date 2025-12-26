//leaning function
//Normal function
//Arrow Function


function add( num1: number, num2: number = 10 ): number {
    return num1 + num2
}
// add(2,'3') 

const addArrow = (num1:number, num2: number): number => num1 + num2


//object --> function ---> method

const poorUser = {
    name: 'sujon',
    balance: 0,
    addBalance(balance:number): number {
        return this.balance+ balance
    }
}


const richUser = {
    name: 'Habib',
    balance: 1000,
    reduceBalance (balance: number): number{
        return this.balance - balance
    }
}

const mainUser = {
    name: 'Omar',
    balance: 2000,
    totalBalance( balance: number): string{
        return `My new balance is : ${this.balance + balance}`
    }
}

const arr: number[] = [1, 2, 3];

const newArray: number[] = arr.map((elem: number) => elem * elem)


const smallArr : number[] = [1, 4, 20];

const smallArray : number[] = smallArr.map((elem : number) => elem * elem)

