//write your code here to make the tests pass

class Document{
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName
    }
}

class Employee{
    constructor(name) {
        this.name = name
    }

    work(office){
        [1,2,3,4,5,6,7,8,9,10].forEach(_ => office.documents.push(new Document(this.name)))
    }
}

class Manager{
    employees=[]
    name =''

    constructor(name){
        this.employees=[]
        this.name=name
    }

    hireEmployee(name){
        this.employees.push(new Employee(name))
    }

    askEmployeesToWork(office){
        this.employees.forEach(employee => employee.work(office));
    }
}

class Cleaner{
    name='';
    constructor(neme){
        this.name = neme;
    }

    clean(){
        console.log('Clean');
    }
}

class Office{
    constructor(){
        this.cleaners=[]
        this.managers=[]
        this.documents=[]
    }


    hireCleaner(name){
        this.cleaners.push(new Cleaner(name));
    }

    hireManager(name){
        this.managers.push(new Manager(name))
    }

    startWorkDay(){
        this.managers.forEach(manager=>manager.askEmployeesToWork(this))
    }
}



