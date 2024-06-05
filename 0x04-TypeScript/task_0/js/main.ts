interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'Khaled',
  lastName: 'Olemy',
  age: 28,
  location: 'Zifta',
}

const studentTwo: Student = {
  firstName: 'Abdelrahman',
  lastName: 'Bedier',
  age: 28,
  location: 'Giza'
}

const studentList: Array<Student> = [
  studentOne,
  studentTwo,
]

console.log(studentList);