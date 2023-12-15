// interface 

interface User {
    readonly dbId?:number,
    email:string,
    userId :number,
    googleId? :string,
    startTrial :() => string,
    getCoupon (couponName:string) :number;
    

}
const user :User = {dbId:22,email:"example@example.com",userId:123,startTrial :() => "trial started",getCoupon : (couponName:string) => 123}
user.email = "view@example.com"

