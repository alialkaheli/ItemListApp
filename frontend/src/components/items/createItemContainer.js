import { connect } from 'react-redux';
import { composeItem } from '../../actions/item_action';
import CreateItems from './createItems';

const msp = (state) => {
    let item = { user: state.session.user.id, title: "", body: "", quantity: 0, image: "X None"};
    console.log(state)
    return ({
        item: item
    })
}

const mdp = (dispatch) => {
    return ({
        composeItem: item => dispatch(composeItem(item))
    })
}

export default connect(msp, mdp)(CreateItems);