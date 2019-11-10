import React from 'react';
import './createItem.css'


class CreateItems extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.item;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        this.props.composeItem(this.state).then(action => {
            this.props.history.push(`/items`);
        });

    }

    update(property) {
        return e => this.setState({
            [property]: e.target.value
        });
    }

    render() {
        return <div className="main-item-div">
            <form onSubmit={this.handleSubmit}>
                <div className="item-form-div">
                    <h5>Create an Item to add in the list</h5>
                    <label>Title: 
                    <input className="item-cred" placeholder="Title" type="text" value={this.state.title} onChange={this.update("title")} />
                    </label>
                    <br />
                    <label>Description:
                    <textarea rows="4" cols="50" className="item-cred > description" placeholder="Description" type="date" value={this.state.body} onChange={this.update("body")}></textarea>
                    </label>
                    <br />
                    <label>Quantity: 
                    <input className="item-cred" type="quantity" min="0" max="1000" value={this.state.quantity} onChange={this.update("quantity")} placeholder="quantity..." />
                    </label>
                    <br />
                    <label>Image Url: (optional)
                    <input className="item-cred" type="text" value={this.state.image} onChange={this.update("image")} placeholder="image url" />
                    </label>

                    <br />
                    <input className="submit-button" type="submit" value="Submit" />
                </div>
            </form>

            <br />
        </div>;
    }

}

export default CreateItems
