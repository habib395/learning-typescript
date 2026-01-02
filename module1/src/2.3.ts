{
    //Generic type
    type GenericArray<T> = Array<T>;
    
    const rollNumbers : GenericArray<number> = [3, 6, 9];

    const mentors: GenericArray<string> = ['habib', 'sujon'];

    const boolArray: GenericArray<Boolean> = [true, false];

    interface User {
        name: string;
        age: number
    }

    const user: GenericArray<User> = [
        {
            name: 'sujon',
            age: 20
        },
        {
            name: 'habib',
            age: 24
        }
    ]


    const add = (x: number, y: number) => x + y;

    // console.log(add(30, 20))

    //generic tuple
    type GenericTuple<X, Y> = [X, Y];

    const manush: GenericTuple<string, string> = ['habib', 'sujon'];

    const UserWithID : GenericTuple<number, { name: string, email: string}> =[
        1234, 
        { 
            name: 'habib', email: 'md.habiburrahmanjwd@gmai.com'
        }
    ]














    //
}