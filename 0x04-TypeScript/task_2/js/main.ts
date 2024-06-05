interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface{

  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

interface employeeInterface {
  (salary: number): Director | Teacher
}

const createEmployee: employeeInterface = (salary: number): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(employee: Teacher | Director): boolean {
  if (employee instanceof Director) {
    return true;
  } else {
    return false;
  }
}

function executeWork(employee: Teacher | Director): void {
  if (employee instanceof Director) {
    employee.workDirectorTasks()
  } else {
    employee.workTeacherTasks()
  }
}

type Subjects = ('Math' | 'History')

function teachClass(todayClass: string) {
  if (todayClass === 'Math') {
    return 'Teaching Math'
  } else {
    return 'Teaching History'
  }
}
