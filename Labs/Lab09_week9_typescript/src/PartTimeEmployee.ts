import Employee from "./Employee";

export default class PartTimeEmployee extends Employee{

    hoursWorked : number
    hourlyRate : number

    constructor(
        empId : number, 
        fname : string, 
        lname: string, 
        department: string,
        hours : number,
        rate : number,
        salary : number = 0.0,
    ){
        super(empId, fname, lname, department, salary)

        this.hourlyRate = rate
        this.hoursWorked = hours

        this.getSalary()
    }

    protected getSalary() : number{
        this.salary = this.hourlyRate * this.hoursWorked
        return this.salary
    }

    //overriding function from the parent class
    showDetails(): void {
        super.showDetails()
        console.log("hourly rate : $", this.hourlyRate);
        console.log("hours : ", this.hoursWorked);
    }
}