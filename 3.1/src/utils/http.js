const baseUrl = 'http://localhost:3000';

function getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return headers;
}

const postJson = function(url, data) {
    const headers = getHeaders();

    return fetch(`${baseUrl}${url}`, {
        method: 'post',
        headers,
        body: JSON.stringify(data)
    }).then(res => res.json());
}

const putJson = function(url, data) {
    const headers = getHeaders();

    return fetch(`${baseUrl}${url}`, {
        method: 'put',
        headers,
        body: JSON.stringify(data)
    }).then(res => res.json());
}

const getJson = function(url) {
    const headers = getHeaders();

    return fetch(`${baseUrl}${url}`, {
        method: 'get',
        headers
    }).then(res => res.json());
}

const deleteJson = function(url) {
    const headers = getHeaders();

    return fetch(`${baseUrl}${url}`, {
        method: 'delete',
        headers
    }).then(res => res.json());
}


export default  {
    delete: deleteJson,
    get: getJson,
    post: postJson,
    put: putJson
};