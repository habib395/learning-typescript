{
    //contrains

    const addCourseToStudent = < T extends { id: number; name: string; email: string }>(
        student: T
     ) => {
        const course = 'This is bangladesh';
        return {
            ...student,
            course,
        };
    };

    const student3 = addCourseToStudent({
        id: 44,
        name: 'sujon',
        email: 'sujon@gmail.com',
        emni: 'emni',
        tumi: 'tumi'
    });

    const student1 = addCourseToStudent<{
        id: number,
        name: string,
        email: string,
        devType: string;
    }>({
        id: 22,
        name: 'habib',
        email:'habib@gmail.com',
        devType: 'NIUM'
    })

    const student2 = addCourseToStudent({
        id: 33,
        name: 'sujon',
        email: 'sujon@gmail.com',
        hasWatch: 'Apple Watch',
    })
















    //
}