{
    //
    // type assertion
    
    let anything : any;

    anything = 'Next level Web Development';

    anything = 222;

    const kgToGm = (value: string | number) : string | number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if(typeof value === 'number'){
            return value * 1000;
        }
    }  
    const result1 = kgToGm('33');
    const result2 = kgToGm(33);
    console.log({ result1, result2});

    type CustomError = {
        message: string;
    };

    try{

    }catch(error){
        console.log((error as CustomError).message)
    }
    

    //
}