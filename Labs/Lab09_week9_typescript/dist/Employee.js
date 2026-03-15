"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(empId, fname, lname, department, salary) {
        if (salary === void 0) { salary = 0.0; }
        this.firstName = fname;
        this.lastName = lname;
        this.empID = empId;
        this.department = department;
        this.salary = salary;
    }
    Employee.prototype.showDetails = function () {
        console.log("\n Employee information -----");
        console.log("Name : ", this.firstName, " ", this.lastName);
        console.log("Employee ID : ", this.empID);
        console.log("Department : ", this.department);
        console.log("Salary : $", this.salary);
    };
    Employee.prototype.getDepartment = function () {
        return this.department;
    };
    return Employee;
}());
exports.default = Employee;
