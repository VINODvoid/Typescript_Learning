interface Circle{
    kind: "Circle",
    radius:number
}

interface Square{
    kind: "Square"
    side:number
}
interface Rectangle{
    kind: "Rectangle"
    length:number,
    breadth:number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape:Shape)
{
    if(shape.kind === "Circle" || shape.kind === "Square" || shape.kind === "Rectangle")
    {
        return shape;
    }
    else{
        throw new Error("Invalid shape");
    }
}

function getArea(shape:Shape)
{
    switch(shape.kind)
    {
        case "Circle":
            return Math.PI * shape.radius ** 2;
        case "Square":
            return shape.side ** 2;
        case "Rectangle":
            return shape.length * shape.breadth;
        default:
            return getTrueShape(shape);
    }
}

let circle:Circle = {kind:"Circle",radius:10};
let square:Square = {kind:"Square",side:10};
let rectangle:Rectangle = {kind:"Rectangle",length:10,breadth:20};

console.log(getArea(circle));
console.log(getArea(square));
console.log(getArea(rectangle));


