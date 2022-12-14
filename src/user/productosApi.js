import axios from "axios";


export function createProducto(obj) {
    return axios.post('http://localhost:8080/api/producto/create', {
        ...obj
    }).then((res) => {
        console.log(res)
        res.data
    }).catch((error) => console.log('No se Guardo los datos, API-REST no encontrada'))
}

export function getAllProducto() {
    return axios.get('http://localhost:8080/api/producto/all')
        .then((res) => res.data)
}

// PUT
export function updateProducto(filter, obj) {
    return axios.put(`http://localhost:8080/api/producto/update/id/${filter}`, {
        ...obj
    }).then((res) => {
        console.log(res);
        return res.data
    }).catch((error) => console.log(`No se encuentra la API-REST :${error}`))
}
