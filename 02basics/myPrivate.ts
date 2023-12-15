class User {
    public email:string;
    name:string;
    private readonly pinCode:number;
    constructor(email:string,name:string)
    {
        this.email = email;
        this.name = name;
    }
}
const user1 = new User("i@gmail.com","i");
user1.name = "i";