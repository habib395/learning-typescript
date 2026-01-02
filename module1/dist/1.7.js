"use strict";
{
    //spread operator
    //rest operator
    //destructuring
    //learn  spread Operator
    const bros1 = ['Mir', 'kafi', 'Mizan'];
    const bros2 = ['Tomato', 'Banana', 'Orange'];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: 'sujon',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    //learn rest opeartor
    const greetFriends = (...friends) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('Abul', 'babul', 'kabul');
}
