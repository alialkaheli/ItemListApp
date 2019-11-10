import React from 'react'
import './items.css'

 const SingleItem = (props) => {
    let image = "No Image"
     if (props.item.image !== 'X None'){
         image = <img src={props.item.image} alt="Not available"width="50" height="50" />
     }
    return (
        <div className="item-div">
            <p className="each-el-item">{props.item.title}</p>
            <p className="each-el-item">{props.item.body}</p>
            
            <p className="each-el-item">{image}</p>
            <p className="each-el-item">{props.item.quantity}</p>
        </div>
    )
}
export default SingleItem
