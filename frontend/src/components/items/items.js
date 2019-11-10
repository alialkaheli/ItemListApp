import React from 'react';
import SingleItem from './singleItem'
import './items.css'

class Items extends React.Component {
    constructor() {
        super();

        this.state = {
            items: []
        };
    }

    componentWillMount() {
        // console.log(this.props.currentUser.id);
        this.props.fetchUserItems(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ items: newState.items });
    }

    render(){
        if (Object.values(this.props.items.length) === 0) {
            return (
            <div>
                    <h2 className="user-title">This user has no Items</h2>
            </div>
            )
        } else {

            return <div className="user-items-main">
                <h2 className="user-title">All of This users Items</h2>
                <div>
                    <div className="item-div > title-div">
                        <p className="each-el-item">Title</p>
                        <p className="each-el-item">Description</p>
                        <p className="each-el-item">Image</p>
                        <p className="each-el-item">Quantity</p>
                        <p>Delete</p>
                    </div>
                </div>
                {Object.values(this.props.items).map((item, idx) => (
                    <div className="each-item-div">
                        <SingleItem item={item} index={idx}/>
                        <button className="delete-button" onClick={() => this.props.delItem(item._id)}>Delete</button>
                        <br></br>
                    </div>
                    
                ))}
                
                
            </div>
        }
        
    }
}

export default Items