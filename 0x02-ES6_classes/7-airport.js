export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(nameValue) {
    this._name = nameValue;
  }

  set code(codeValue) {
    this._code = codeValue;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
