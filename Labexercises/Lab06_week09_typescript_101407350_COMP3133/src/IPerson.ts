//interface
export default interface IPerson{
    firstName : string
    lastName : string

    showDetails() : void

    //interface methods cannot have a body
    // showDetails() : {
    //     console.log(`firstname : ${this.firstName}`);
    // }
}