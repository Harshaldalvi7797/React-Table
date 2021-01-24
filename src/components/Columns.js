export const COLUMNS = [
    {
        Header: "Id",
        Footer: "Ids",
        accessor: "id"


    },
    {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name"

    },

    {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name"
    },
    {
        Header: "Date Of Birth",
        Footer: "Date Of Birth",
        accessor: "Date Of Birth"

    },
    {
        Header: "email",
        Footer: "email",
        accessor: "email"
    },
    {
        Header: "age",
        Footer: "age",
        accessor: "age"
    },
    {
        Header: "country",
        Footer: "country",
        accessor: "country"
    },
    {
        Header: "phone",
        Footer: "phone",
        accessor: "phone"
    }
]

export const GROUPED_COLUMNS = [
    {
        Header: "Id",
        Footer: "Id",
        accessor: "id"

    },
    {
        Header: "Name",
        Footer: "Name",
        columns: [
            {
                Header: "First Name",
                Footer: "First Name",
                accessor: "first_name"

            },

            {
                Header: "Last Name",
                Footer: "Last Name",
                accessor: "last_name"
            }

        ]
    },
    {
        Header: "Info",
        Footer: "Info",
        columns: [
            {
                Header: "Date Of Birth",
                Footer: "Date Of Birth",
                accessor: "Date Of Birth"

            },
            {
                Header: "email",
                Footer: "email",
                accessor: "email"
            },
            {
                Header: "age",
                Footer: "age",
                accessor: "age"
            },
            {
                Header: "country",
                Footer: "country",
                accessor: "country"
            },
            {
                Header: "phone",
                Footer: "phone",
                accessor: "phone"
            }

        ]
    }






]