interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => firstName[0] + '. ' + lastName;

// interface constructorInterface {
//     (firstName: string, lastName:string): string
//   }

interface studentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements studentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
// export interface studentClassConstructor {
//   new (firstName: string, lastName: string): IStudentClass;
// }

// export function createStudent(ctor: studentClassConstructor, firstName: string, lastName: string): studentClass {
//   return new ctor(firstName, lastName);
// }