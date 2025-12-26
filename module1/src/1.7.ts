{
    //spread operator
    //rest operator
    //destructuring

    //learn  spread Operator

    const bros1 : string[] = ['Mir', 'kafi', 'Mizan']
    const bros2 : string[] = ['Tomato', 'Banana', 'Orange']
    bros1.push(...bros2)


    const mentors1 = {
        typescript: 'sujon',
        redux: 'Mir',
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma:'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    //learn rest opeartor
    const  greetFriends = ( ...friends: string[]) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greetFriends('Abul', 'babul', 'kabul')

}