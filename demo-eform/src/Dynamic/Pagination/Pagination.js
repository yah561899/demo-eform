import { set } from 'date-fns'
import { ar } from 'date-fns/locale'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import nullData from './NullData'
import './Pagination.css'

const Pagination = ({ testData, nowData }) => {

    const [data, setData] = useState(testData)
    const [dataSlice, setDataSlice] = useState(data.slice(0, 50))
    const [pageNumber, setPageNumber] = useState(0)
    const [order, setOrder] = useState('ASC')
    const [arrow, setArrow] = useState("")
    const [current, setCurrent] = useState("")

    useEffect(() => {
        if (testData.length > 0) {
            setData(testData)
        }
    }, [testData])

    const datasPerPage = 10
    const pagesVisited = pageNumber * datasPerPage

    const displayDatas = data.slice(pagesVisited, pagesVisited + datasPerPage).map((datas, i) => {
        return (
            <tr key={"tr" + i} onClick={() => trClick(datas.ExternalID)}>
                {Object.keys(data[0]).map((key) => (
                    <td key={key + i}>{datas[key]}</td>
                ))}
            </tr>
        )
    })

    const pageCount = Math.ceil(data.length / datasPerPage)

    const changepage = ({ selected }) => {
        setPageNumber(selected)
    }

    const sorting = (key) => {
        console.log(key);
        if (order === 'ASC') {
            const sorted = [...data].sort((a, b) =>
                a[key] > b[key] ? 1 : -1
            );
            setData(sorted);
            setOrder("DSC")
            setArrow(' ↑')
            setCurrent(key)
        }
        if (order === 'DSC') {
            const sorted = [...data].sort((a, b) =>
                a[key] < b[key] ? 1 : -1
            );
            setData(sorted);
            setOrder("ASC")
            setArrow(' ↓')
            setCurrent(key)
        }
    }

    const trClick = (key) => {
        alert(key)
    }

    const nowArrow = (key) => {
        if (current === key) {
            return <span>{arrow}</span>
        }

    }
    if (testData.length === 0) {
        return (
            <div className="table-responsive">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>{Object.keys(nowData[0]).map((key, i) => (
                            <th onClick={() => sorting(key)} scope="col" key={i}>{key}{nowArrow(key)}</th>
                        ))}
                        </tr>
                    </thead>
                </table>
                <h2>查無資料</h2>
            </div>
        )
    } else {
        return (
            <div className="table-responsive">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>{Object.keys(data[0]).map((key, i) => (
                            <th onClick={() => sorting(key)} scope="col" key={i}>{key}{nowArrow(key)}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {displayDatas}
                    </tbody>
                </table>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changepage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttns"}
                    nextLinkClassName={"nextBttns"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        )
    }

}

export default Pagination

{/* <div className="table-responsive">
<table className="table table-hover table-striped">
    <thead>
        <tr><th scope="col" key="col">#</th>{Object.keys(dataSlice[0]).map((key) => (<th scope="col" key={key}>{key}</th>))}</tr>
    </thead>
    <tbody>
        {dataSlice.map((items, i) => (
            <tr key={"tr" + i}>
                <th scope="row" key={"th" + i}>{i + 1}</th>
                {Object.keys(dataSlice[i]).map((key) => (
                    <td key={key + i}>{items[key]}</td>
                ))}
            </tr>
        ))}
    </tbody>
</table>
</div> */}