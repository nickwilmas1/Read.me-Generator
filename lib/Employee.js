class Employee {
    constructor (name, id, email) { // contrust employee object
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        return this.name; // return name
    }
    
    getId () {
        return this.id; // return id
    }

    getEmail () {
        return this.email; // return email
    }

    getRole() {
        return "Employee"
    }

}

module.exports = Employee;