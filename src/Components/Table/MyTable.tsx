// MyTable.tsx
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from '@tanstack/react-table';

import { defaultData, defaultColumns } from './data';

export default function MyTable() {
    const table = useReactTable({
        data: defaultData,
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table className="table-auto border-collapse border border-gray-300 w-full mt-4">
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} className="border p-2 bg-gray-100 text-left">
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className="border p-2">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
