import IPerson from "./IPerson";

export default class Employee implements IPerson{

    //public property - default access - can be accessed everywhere in the app
    firstName: string; 
    lastName: string;

    //readonly - cannot be modified once initialized
    readonly empID : number
    //private - can be accessed within class only; cannot be accessed anywhere else; not even in the child class
    private department : string
    //protected - can be accessed within class and child only; cannot be accessed anywhere else; 
    protected salary : number

    constructor(empId : number, 
        fname : string, 
        lname: string, 
        department: string, 
        salary : number = 0.0){
        this.firstName = fname
        this.lastName = lname
        this.empID = empId
        this.department = department
        this.salary = salary
    }

    showDetails(): void {
        console.log("\n Employee information -----");
        console.log("Name : ", this.firstName, " ", this.lastName);
        console.log("Employee ID : ", this.empID);
        console.log("Department : ", this.department);
        console.log("Salary : $", this.salary);
    }

    getDepartment() : string{
        return this.department
    }
    
}