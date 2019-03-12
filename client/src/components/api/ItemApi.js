
import {Alert} from 'react-native';

import {SERVER_API_URI, headers} from './constants';

const request = (options) => {
    options.headers = headers;
    return fetch(options.url, options)
        .then(response => response.json().then(json => json.data )
        .catch(error => Alert.alert('Error: ', error.message)));
};

const encodedBody = (param, key) => {
   return [encodeURIComponent(key) + '=' + encodeURIComponent(param[key])].join("&");
};

export const getAll = () => {
    return request({
        url: SERVER_API_URI,
        method: 'GET'
    })
};

export const create = (item) => {
    return request({
        url: SERVER_API_URI + '/create',
        method: 'POST',
        body: encodedBody(item, 'title')
    })
};

export const update = (itemId, comment) => {
    return request({
        url: SERVER_API_URI + '/update?id=' + itemId,
        method: 'PUT',
        body: encodedBody(comment, 'comment')
    })
};

export const remove = (itemId) => {
    return request({
        url: SERVER_API_URI + '/delete?id=' + itemId,
        method: 'DELETE'
    })
};