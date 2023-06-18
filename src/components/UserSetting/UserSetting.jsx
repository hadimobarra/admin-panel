import React , {useState }from "react";
import { FaSearch, FaSort, FaCog } from 'react-icons/fa';
import './UserSetting.scss';
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

const UserSetting = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return (
        <div className="userSetting">
            <div className="userSetting-add">
                <p>All ({props.allMembers})</p>
                <button className="userSetting-add_btn" onClick={openModal}>ADD NEW +</button>
                {isModalOpen && (
                        <Modal closeModal={closeModal}>
                            <Form onSubmit={props.onSubmit} submited={closeModal}/>
                        </Modal>
                )}
            </div>
            <div className="userSetting-icons"> 
             <FaSearch />
             <FaCog />
             <FaSort />
            </div>
        </div>
    )
}

export default UserSetting;