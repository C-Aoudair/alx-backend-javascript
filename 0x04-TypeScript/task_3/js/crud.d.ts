import {RowId, RowElement} from './interface';

export declare function InsertRow(row: RowElement): RowId;
export declare function DeleteRow(rowId: RowId): void;
export declare function UpdateRow(rowId: RowId, row: RowElement): RowId;