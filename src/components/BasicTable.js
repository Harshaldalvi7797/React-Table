import React, { useMemo } from 'react'
import { useTable } from "react-table"
import Mock_Data from "./MOCK_DATA.json";
import { COLUMNS } from "./Columns";
import "./table.css";

const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Mock_Data, [])
    const tableInstance = useTable({
        columns,
        data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } = tableInstance;
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {
                                                    cell.render("Cell")
                                                }

                                            </td>
                                        )
                                    })
                                }

                            </tr>
                        )

                    })
                }
            </tbody>
            <tfoot>
                {
                    footerGroups.map(footerGroup =>
                        (
                            <tr {...footerGroup}>
                                {footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps}>
                                        {
                                            column.render("Footer")
                                        }

                                    </td>

                                ))
                                }

                            </tr>
                        ))

                }

            </tfoot>
        </table>
    )
}
export default BasicTable;