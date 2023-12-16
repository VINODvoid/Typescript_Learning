
function anOtherFun<T,U extends DB>(val1:T,val2:U):object{
    return{
        val1,val2
    }
}

interface DB {
    connections: string,
    user: string,
    password: string
}

// anOtherFun(3,{"connections", "user" "password"})



interface Quiz {
    name:string,
    type:string
}
interface Course{
    name:string,
    author:string,
    Subject:string
}

class Sellable <T>
{
    public cart:T[] = [];
    addToCart(products:T)
    {
        this.cart.push(products);
    }
}


