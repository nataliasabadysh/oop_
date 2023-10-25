// Handles salary calculation
class SalaryCalculator {
    calculateMonthlySalary(employee) {}
}

// Handles monthly hours report production
class WorkHoursService {
    workMonthlyHoursReport(employee) {}
}

// Handles saving modifications
class ModificationSaver {
    saveModifications(employee) {}
}

// Represents an employee
class Employee {
    constructor(name) {
        this.name = name;
        this.salaryCalculator = new SalaryCalculator();
        this.workHoursService = new WorkHoursService();
        this.modificationSaver = new ModificationSaver();
    }

    calculateMonthlySalary() {
        this.salaryCalculator.calculateMonthlySalary(this);
    }

    workMonthlyHoursReport() {
        this.workHoursService.produceMonthlyHoursReport(this);
    }

    saveModifications() {
        this.modificationSaver.saveModifications(this);
    }
}

// Example usage
const employee = new Employee('JohnDoe');

employee.calculateMonthlySalary();
employee.workMonthlyHoursReport();
employee.saveModifications();