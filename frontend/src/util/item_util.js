import axios from 'axios';


export const getUserItems = id => {
    return axios.get(`/api/items/user/${id}`);
};

export const writeItem = data => {
    return axios.post('/api/items/', data);
};

export const getItem = id => {
    return axios.get(`api/items/${id}`)
}

export const deleteItem = dataid => {
    return axios.delete(`/api/items/${dataid}`);
};