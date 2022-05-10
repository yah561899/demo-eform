import React from 'react'
import { Link } from 'react-router-dom'

const ListEmpComponent = () => {
  return (
    <div className='container'>
        <h2 className='text-center'>Emp List</h2>
        <Link to = "/add-employee" className='btn btn-primary mb-2'>Add Employee</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Emp Id</th>
                        <th>Emp FirstName</th>
                        <th>Emp LastName</th>
                        <th>Emp Sex</th>
                        <th>Emp Marriage</th>
                        <th>Emp RegisterDate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tr>
                </tbody>    
            </table>
    </div>
  )
}

export default ListEmpComponent