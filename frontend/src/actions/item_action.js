import {
    getUserItems,
    writeItem,
    deleteItem,
    getItem
} from "../util/item_util";

export const RECEIVE_USER_ITEMS = "RECEIVE_USER_ITEMS";
export const RECEIVE_NEW_ITEM = "RECEIVE_NEW_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const RECEIVE_ITEM = "RECEIVE_ITEM";



export const receiveUserItems = items => ({
    type: RECEIVE_USER_ITEMS,
    items
});

export const receiveNewItem = item => ({
    type: RECEIVE_NEW_ITEM,
    item
});
export const removeItem = id => ({
    itemId: id.data,
    type: REMOVE_ITEM
})

export const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
});



export const fetchUserItems = id => dispatch => (
    getUserItems(id)
        .then(items => dispatch(receiveUserItems(items)))
        .catch(err => console.log(err))
);

export const composeItem = data => dispatch => (
    writeItem(data)
        .then(item => dispatch(receiveNewItem(item)))
        .catch(err => console.log(err))
);


export const delItem = id => dispatch => (
    deleteItem(id)
        .then(resId => dispatch(removeItem(resId)))
        .catch(err => console.log(err))
)

export const fetchItem = (item) => dispatch => (
    getItem(item)
        .then(item => dispatch(receiveItem(item)))
        .catch(err => console.log(err))
);