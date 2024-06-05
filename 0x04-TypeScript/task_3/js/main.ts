/// <reference path="./crud.d.ts"/>
import { rowID, rowElement } from './interface'
import * as CRUD from './crud'

const row: rowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {...row, age: 23};
CRUD.updatedRow(newRowID, updatedRow);
CRUD.deleterow(newRowID);
