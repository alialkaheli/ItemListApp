import {
    RECEIVE_USER_ITEMS,
    RECEIVE_NEW_ITEM,
    REMOVE_ITEM,
    RECEIVE_ITEM
} from "../actions/item_action";

const ItemsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);
    let betterFormat = {};
    switch (action.type) {
        
        case RECEIVE_USER_ITEMS:
            // newState.user = action.items.data;

            action.items.data.forEach(obj => betterFormat[obj._id] = obj);

            newState.user = betterFormat;
            return newState;
        case RECEIVE_ITEM:
            return Object.assign({}, state, { [action.item.data._id]: action.item.data });
        case RECEIVE_NEW_ITEM:
            newState.new = action.item.data;
            return newState;
        case REMOVE_ITEM:
            delete newState.all[action.itemId];
            delete newState.user[action.itemId];

            // console.log(newState[action.item.itemId.data]);
            return newState
        default:
            return state;
    }
};

export default ItemsReducer;