import React from "react";
import './Modal.scss';
import ReactDOM  from "react-dom";


const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.closeModal}/>
};

const ModalOverlay = (props) => {
    return (
        <div className="modal" >
            <div className="content" >{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    )
}

export default Modal;