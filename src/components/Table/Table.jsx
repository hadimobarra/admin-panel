import React, {useState, useEffect} from "react";
import {get, post} from '../../services/Http-service';
import Row from './Rows/Row';
import './Table.scss';
import Footer from "../Footer/Footer";
import UserSetting from "../UserSetting/UserSetting";

const PER_PAGE = 4;

const Table = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [fetchedData, setFetchedData] = useState([]);
    const fakeData = ['Image', 'Name', 'Email', 'Title', 'Amount', 'Status', 'Action'];

    useEffect(() => {
        get(`/api/users?page=${currentPage}&per_page=${PER_PAGE}`)
            .then(response => {
                const titleAndAmountAdded = response.data.map((object) => {
                    return {
                        ...object,
                        title: 'Title ' + object.id,
                        amount: 'Amount ' + object.id,
                        status: 'Danger',
                    }
                });
                const newResponse = {
                    ...response,
                    data: titleAndAmountAdded
                }
                setFetchedData(newResponse);
            });     
    }, [currentPage]);

    const sendUserDataToServer = (data) => {
        post('/api/users', data)
            .then(response => {
                const oldData = fetchedData.data;
                const newData = [...oldData];
                const resObject = {
                    image: 'avatar', 
                    first_name: response.name,
                    email: response.email,
                    title: response.title,
                    amount: 'Amount',
                    status: 'Danger',
                };
                newData.push(resObject);
                const addedNewPerson = {
                    ...fetchedData,
                    data: newData
                }
                setFetchedData(addedNewPerson)
            })
    }

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }

    const displayedPages = [];
    const pageDiff = Math.floor(PER_PAGE / 2);
    for (let i = currentPage - pageDiff; i <= currentPage + pageDiff; i++) {
      if (i > 0 && i <= fetchedData.total_pages) {
        displayedPages.push(i);
      }
    }

    return (
        <div className="box">
            <UserSetting onSubmit={sendUserDataToServer} allMembers={fetchedData.total} />
            <table className="table">
                <thead className="table-head" >
                    <tr>
                        <th className="table-head_checkbox" ><input type="checkbox" style={{width: "20px", height: "20px"}}/></th>
                        {fakeData.map((headerItem, i) => {
                            return <th key={i} className={`table-head_${headerItem.toLocaleLowerCase()}`}><p>{headerItem}</p></th>
                        })}
                    </tr>
                </thead>
                <tbody >
                {fetchedData.data ? fetchedData.data.map((row) => {
                return (<tr  style={{border: "1px solid"}} key={row.id} ><Row data={row}/></tr>)
                 }): <tr className="spinner" ></tr>
                }
                </tbody>
            </table>
            <Footer handlePageChange={handlePageChange} currentPage={currentPage} fetchedData={fetchedData} />
        </div>
    )
}

export default Table;