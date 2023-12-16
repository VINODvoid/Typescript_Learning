function detectType(val:number | string )
{
    if(typeof(val) === 'number')
    {
        console.log("It's a number");
    }
    else if(typeof(val) === 'string')
    {
        console.log("It's a string");
    }
    else
    {
        console.log("It's neither a number nor a string");
    }
}

function provideId(id:string | null)
{
    if(id)
    {
        return id;
    }
    else{
        console.log("No id provided");
    }

}



function printAll(str:string | string[] | null)
{
    if(str)
{
    if(typeof(str) === 'object')
    {
        for(const s of str)
        {
            console.log(s);
        }
    }
    else if(typeof(str) === 'string')
    {
        console.log(str);
    }
}
}