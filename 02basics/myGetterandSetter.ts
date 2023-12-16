class App{
    protected _courseCount =1
    readonly city: string = "Delhi";
    constructor (
        public name: string,
        public age: number,
        public country: string
    ){}
    get getName(){
        return this.name;
    }
    get courseCount():number{
        return this._courseCount;
    }
    set courseCount(count:number){
        this._courseCount = count;
    }
}

class subApp  extends App{
    isFamily: boolean = true;
    changecourseCount(){
        this._courseCount = 4;
    }
}

