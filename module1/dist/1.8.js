"use strict";
//destructuring
{
    const user = {
        id: 345,
        name: {
            firstName: 'Habibur',
            middleName: 'Rahman',
            lastName: 'Sujon'
        },
        contactNo: "01742923499",
        address: 'Bangladesh',
    };
    const { contactNo, name: { middleName: midName } //name alias
     } = user;
    //array destructuring
    const myFriends = ['salman', 'kafi', 'mafi', 'copy'];
    const [a, b, c] = myFriends;
    const [, , bestFriend, ...rest] = myFriends;
}
