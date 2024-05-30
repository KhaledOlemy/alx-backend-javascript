export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(clsName) {
    if (typeof clsName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = clsName;
  }

  get length() {
    return this._length;
  }

  set length(lengthValue) {
    if (typeof lengthValue !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = lengthValue;
  }

  get students() {
    return this._students;
  }

  set students(studentArray) {
    if (!Array.isArray(studentArray)) {
      throw new TypeError('students must be an Array');
    }
    this._students = studentArray;
  }
}
