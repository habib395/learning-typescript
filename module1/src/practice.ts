{
    //practice for this first module

    // let friends : string[] = ['animal', 'human', 'baby'];

    // let eligibleRollList : number[] = [1, 2];

    // eligibleRollList.push(9)
    
    // let coordinates : [number, number] = [10, 12];

    // let ageName: [number, string, boolean] = [20, 'habib', false];

    // const age = '20'

    // ageName[0] = parseFloat(age)
    // ageName[0] = age

    // type User = {
    //     company : 'SN',
    //     firstName: string,
    //     middleName?: string,
    //     lastName?: string,
    //     isMarried: boolean
    // }

    // const user : User = {
    //     company: 'SN',
    //     firstName: 'habibur',
    //     isMarried: false
    // }


    function add (num1: number, num2: string): number 
        {
           return num1 + parseFloat(num2)
        }

        add(2, '1');


    // const addArrow = (num1: number, num2: number): number => num1 + num2;

    const addNumber = (num1: number, num2: number) : number => num1 + num2;
    
    const poorUser = {
        name: 'sujon',
        balance: 0,
        addBalance (balance: number): number {
            return this.balance + balance
        }
    }

    const richUser = {
        name: 'habib',
        balance: 100000,
        reduceBalance(balance: number) : number {
                return this.balance - balance
            }
    }

    const mainUser = {
        name: 'Hamja',
        balance: 1000,
        doubleBalance(balance: number){
            return this.balance * balance
        }
    }


    const arr: number[] = [1, 3, 4];
    
    const newArr: number[] = arr.map((num: number) =>  num * num)

    const smallArr : number[] = [1, 3 , 4];

    const smallArray: number[] = smallArr.map((elem : number) =>  elem / 2);


    const friend1 : string[] = ['habib', 'sujon', 'habibur'];

    const friend2 : string[] = ['nagib', 'hafiz', 'mafi'];

    const friends = {
        ...friend1,
        ...friend2
    }

    const mentor1 = {
        typescript: 'this month',
        express: 'this month',
        nextJs: 'this month',
        nodeJs: 'this month'
    }

    const mentor2 = {
        prisma: 'next month',
        docker: 'next month',
        mongoose: 'next month',
        prosgreSql: 'next month',
    }

    const janFebMonthPlan = {
        ...mentor1,
        ...mentor2
    }

    





















}