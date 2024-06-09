/// <reference path="crud.d.ts" />

import { RowId, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const rowId: RowId = CRUD.InsertRow(row);

const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 25,
}

CRUD.UpdateRow(rowId, updatedRow);
CRUD.DeleteRow(rowId);