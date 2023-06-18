import React from "react";
//import {get} from '../../../services/Http-service';
import './row.scss';

const Row = (props) => {
    return (
        <React.Fragment> 
            <td className="checkbox0"><input type="checkbox" className="checkbox" /></td>
            <td><img src={props.data.avatar} className="avatar" alt="avatar"/></td>
            <td className="name"><p>{props.data.first_name}</p></td>
            <td className="email"><p>{props.data.email}</p></td>
            <td className="title"><p>{props.data.title}</p></td>
            <td className="amount"><p>{props.data.amount}</p></td>
            <td className="status"><div className="status_text" >{props.data.status}</div></td>
            <td type="button" className="action"><div className="action_inner" >...</div></td>
        </React.Fragment>
    )
} 

export default Row;