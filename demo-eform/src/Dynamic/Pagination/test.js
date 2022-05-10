import React from 'react'

const test = ({testData}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Category</th>
                <th>ExternalID</th>
                <th>Name</th>
                <th>RevitID</th>
                <th>Room</th>
            </tr>
                {testData.map((item,i) => (
                    <tr key={i}>
                        <td>{item.Category}</td>
                        <td>{item.ExternalID}</td>
                        <td>{item.Name}</td>
                        <td>{item.RevitID}</td>
                        <td>{item.Room}</td>
                    </tr>
                ))}
        </tbody>
    </table>
  )
}

export default test