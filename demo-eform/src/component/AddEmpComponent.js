import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CompanyComponent from './CompanyComponent'
import DepartmentComponent from './DepartmentComponent'
import FirstNameComponent from './FirstNameComponent'
import LastNameComponent from './LastNameComponent'
import MarriageComponent from './MarriageComponent'
import SexComponent from './SexComponent'

const AddEmpComponent = () => {

    const [template_id, setTemplate_id] = useState('123')
    const [layout, setLayout] = useState([])
    console.log(template_id);

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <div className='card-body'>
                            <form>
                                <CompanyComponent />
                                <DepartmentComponent />
                                <FirstNameComponent />
                                <LastNameComponent />
                                <SexComponent />
                                <MarriageComponent />
                                <button className='btn btn-success'>Submit</button>
                                <Link to="/" className='btn btn-danger'>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmpComponent