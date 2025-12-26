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

// | ----------> union type 
// &------------> intersection type
}