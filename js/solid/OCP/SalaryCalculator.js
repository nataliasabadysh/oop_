// Abstract TaxCalculator class
class TaxCalculator {
    constructor(salary) {
        this.salary = salary;
    }

    // This is an abstract method to be overridden by subclasses.
    calculateTax() {
        throw new Error('Method calculateTax() must be implemented by subclasses');
    }
}

// TaxCalculator for Freelancers
class TaxCalculatorFreelance extends TaxCalculator {
    calculateTax() {
        // For instance, freelance tax might be 10% of the salary.
        return this.salary * 0.10;
    }
}

// TaxCalculator for FullTime employees
class TaxCalculatorFullTime extends TaxCalculator {
    calculateTax() {
        // For instance, full-time tax might be 20% of the salary.
        return this.salary * 0.20;
    }
}

// Factory to create TaxCalculator instances
class TaxCalculatorFactory {
    static createTaxCalculator(type, salary) {
        switch (type) {
            case 'freelance':
                return new TaxCalculatorFreelance(salary);
            case 'fulltime':
                return new TaxCalculatorFullTime(salary);
            default:
                throw new Error('Invalid tax calculator type');
        }
    }
}

// SalaryCalculator class
class SalaryCalculator {
    constructor(baseSalary, taxCalculatorType) {
        this.baseSalary = baseSalary;
        this.taxCalculator = TaxCalculatorFactory.createTaxCalculator(taxCalculatorType, baseSalary);
    }

    calculateNetSalary() {
        return this.baseSalary - this.taxCalculator.calculateTax();
    }
}

// Usage
const freelancerSalary = new SalaryCalculator(50000, 'freelance');
console.log('Freelancer Net Salary:', freelancerSalary.calculateNetSalary());  // Should consider 10% tax

const fullTimeSalary = new SalaryCalculator(50000, 'fulltime');
console.log('
