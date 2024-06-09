export function InsertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function DeleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function UpdateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
