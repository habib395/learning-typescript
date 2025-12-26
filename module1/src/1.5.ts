//Reference type ---> Object

const user : {
    readonly company: 'SN'; //type--> literal types
    firstName: string;
    middleName?: string; //Optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: 'SN',
    firstName: 'Habibur',
    // middleName: 'Rahman',
    lastName: 'Sujon',
    isMarried: true
}

// user.company = 'SN'