import React, { useState } from 'react'
import {Modal,ModalHeader, } from 'reactstrap';

function Popupdemo() {
    const [model,setModel]=useState(true);
    return(
        <>
        <Modal 
        size='lg' 
        isOpen={model} 
        toggle={()=> setModel(!model)}>
        <ModalHeader toggle={()=> setModel(!model)}>
        Popup
        </ModalHeader>
        </Modal>
        {/* // <button className='btn mt-3 bg-danger'  onClick={()=>setModel(true)}> Click</button> */}
        </>
    )
}
export default Popupdemo;