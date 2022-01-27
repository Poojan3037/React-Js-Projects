import React from 'react';
import './Table.css'

const Table = (props) => {

    let { countries } = props;

    return (
        <>
            <div className="table">
                {
                    countries.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td><strong>{item.country}</strong></td>
                                    <td><strong>{item.cases}</strong></td>
                                </tr>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Table;