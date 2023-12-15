// interface 

interface User {
    readonly dbId?:number,
    email:string,
    userId :number,
    googleId? :string,
    startTrial :() => string,
    getCoupon (couponName:string) :number;
    

}
// const user2 :User = {dbId:22,email:"example@example.com",userId:123,startTrial :() => "trial started",getCoupon : (couponName:string) => 123}
// user2.email = "view@example.com"

// * reopens the interface and adds new properties

interface User {
    githubId :string,
}

interface Admin extends User {

    role:string,
}
