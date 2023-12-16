abstract class takePhoto
{
    constructor(
        public cameraMode : string,
        public filter: string
    ){}

    abstract getsepia():void
}
// const vinod = new takePhoto("portrait","vintage"); // ? cannot create new instance of abstract class
class Instagram extends takePhoto{
    constructor(
        public cameraMode : string,
        public filter: string

    )
    {super(cameraMode,filter)}
        getsepia(): void {
            
        }
    }

const vinod = new Instagram("portrait","vintage"); // ? can create new instance of derived class