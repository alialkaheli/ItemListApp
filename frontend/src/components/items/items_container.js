import { connect } from 'react-redux';
import { fetchUserItems, composeItem, delItem } from '../../actions/item_action';
import Item from './items';

const mapStateToProps = (state) => {
    let item = {
        title: "",
        body: "",
        image: "",
        quantity: 0
    }
    return {
        currentUser: state.session.user,
        item: item,
        items: Object.values(state.items.user)
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserItems: id => dispatch(fetchUserItems(id)),
        composeItem: data => dispatch(composeItem(data)),
        delItem: dataId => dispatch(delItem(dataId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);