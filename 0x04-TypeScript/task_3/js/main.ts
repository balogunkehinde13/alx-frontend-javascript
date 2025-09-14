/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// 1️⃣ Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// 2️⃣ Insert row and get the new ID
const newRowID: RowID = CRUD.insertRow(row);

// 3️⃣ Create an updated row with an age field set to 23
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// 4️⃣ Call updateRow and deleteRow
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
