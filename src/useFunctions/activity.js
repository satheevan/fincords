export const Activity = {
    message: {
        hello: function () {
            return "hello";
        },
        success: () => {
            return "success";
        }
    },
    calculation: {
        addition: (a, b) => {
            return a + b;
        },
        subtraction: (a, b) => {
            return a - b;
        },
        multiple: (a, b) => {
            return a * b;
        },
        division: (a, b) => {
            return a / b;
        },
    },
    tablelist: {

        TableHead: (cols) => {
            return (
                <tr>
                    {Object.keys(cols).map(d => (
                        <th>{d}</th>
                    ))}
                </tr>
            )
        },

        TableRow: (data) => {
            //TO BRING KEYS
            console.log("@@@@@", data);
            return (<tr>
                {Object.values(data).map(v => (
                    <td>{v}</td>
                ))}
            </tr>)
        }
    }
}

