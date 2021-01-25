import React, { useMemo } from 'react'
import { useTable, usePagination } from "react-table"
import Mock_Data from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./Columns";
import "./table.css";

const PaginationTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Mock_Data, [])
    const tableInstance = useTable({
        columns,
        data
    }, usePagination)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups
        ,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions, state


    } = tableInstance;
    const { pageIndex } = state
    return (
        <>
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
                        page.map((row) => {
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
            <div>
                <span>
                    Page{''}
                    <strong>
                        {
                            pageIndex + 1
                        }
                        of {
                            pageOptions.length
                        }
                        {''}

                    </strong>
                </span>
                <button onClick={() => { previousPage() }} disabled={!canPreviousPage}>Privious</button>
                <button onClick={() => { nextPage() }} disabled={!canNextPage} > Next</button>

            </div>
        </>
    )
}
export default PaginationTable;