{
//union type

type FrontEndDeveloper = 'fakibaz Developer' | 'junior Developer'
type FullstackDeveloper = 'fakibaj Developer' | 'junior Developer' | 'expertDeveloper'

type Developer = FrontendDeveloper | FullstackDeveloper

const newDeveloper : FrontEndDeveloper = 'junior Developer'

type User = {
    name: string;
    email?: string;
    gender: 'male' | 'female';
    bloodGroup: 'o+' | 'A+' | 'AB+'
}

const user1: User ={
    name: 'habib',
    gender: 'male',
    bloodGroup: 'o+'
}

type FrontendDeveloper ={
    skills: string[];
    designation1: 'Frontend Developer'
}
type BackendDeveloper ={
    skills: string[];
    designation2: 'Backend Developer'
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

const fullStackDeveloper : FullStackDeveloper ={
    skills: ['HTMl', 'CSS', 'Express'],
    designation1:"Frontend Developer",
    designation2: 'Backend Developer'
}

// | ----------> union type (jekono akta)
// &------------> intersection type( total guloi)


    type BackendDeveloper2 = {
        skills: string[];
        designation: 'junior backend Developer' | 'Fakibaj Developer'
    }

    const backendDeveloper : BackendDeveloper2 ={
        skills: ['Express', 'MongoDb'],
        designation: 'junior backend Developer'
    }

    type PremKori1 = {
        duration: string;
        designation1: 'butterfly'| 'muskan juberi' | 'jhinuk'
    }

    type premKori2 = {
        duration: string;
        designation2: 'mayabini' | 'ghorer rani'| 'manusi'
    }

    type premKorci = PremKori1 & premKori2

    const aharePrem : premKorci = {
        duration: '3 years',
        designation1: 'butterfly',
        designation2: 'manusi'
    }

}