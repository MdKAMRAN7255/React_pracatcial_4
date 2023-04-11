import React from 'react';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from './TableData';
import Modal from './Modal';
import { useSelector } from 'react-redux';
function Index() {
    const data = useSelector((state) => state)
    return (
        <>
            <div className='main container bg-light'>
                <div className='row d-flex justify-content-center align-items-center g-0'>
                    <div className={`${data.modalToggle ? "col-5" : "col-12"} col-md-6 pt-4 pb-3
                              col-lg-8 overflow mb-2`}>
                        <TableData />
                    </div>
                    <div className={` ${data.modalToggle ? "col-7" : "col-0"} col-md-6 col-lg-4 d-flex justify-content-center align-items-center`}>
                        <Modal />
                    </div>
                </div>
            </div>
        </>);
}

export default Index;