{
    //function with generics

    const createArray = (param1:string, param2: string ): string[] => {
        return [param1, param2];
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const res1 = createArray('Bangldesh', 'pakisthan');
    // console.log(res1);

    const resGeneric = createArrayWithGeneric <string>('Bangladesh');
    // console.log(resGeneric);

    type User = {
        id: number;
        name: string;
    }

    const resGenericObj = createArrayWithGeneric<User>({
        id: 222,
        name: 'sujon'
    })

    const createArrayWithTuple = <T, Q>( param1:T, param2:Q ): [T, Q] =>{
        return [param1, param2];
    };

    const res10 = createArrayWithTuple<string, number>('Bangladesh', 200);
    // console.log(res10);
    
    const res11 = createArrayWithTuple<string, {name: string}>('Bangladesh',
    {
        name: 'Habib',
    });
    // console.log(res11)

    const addCourseToStudent = <T>(student: T) => {
        const course = 'this is bangladesh';
        return {
            ...student,
            course,
        };
    };

    const student1 = addCourseToStudent({
        name: 'habib',
        email: 'habib@gmail.com',
        devType: 'NILM',
    });

    const student2 = addCourseToStudent({
        name: 'Sujon',
        email: 'sujon@gmail.com',
        hasWatch: 'KILM',
    });
}