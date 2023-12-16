const score:Array<number>=[]
const names:Array<string>=[]


function identityOne(val :boolean | number) : boolean | number
{
    return val
}
function identityTwo(val:any):any{
    return val
}
function identityThree<Type>(val:Type):Type{
    return val
}
function identityFour<T>(val:T):T{
    return val
}
identityThree(true)

interface Bootle{
    bramd :string,
    type:number
}
function identityFive<Bootle>(val:Bootle):Bootle{
    return val
}

function getSearchProducts<T> (products:T[]):T{
    return products[0]
}

const getMoreSearchProducts = <T>(val:T[]):T => {
    return val[0]
}