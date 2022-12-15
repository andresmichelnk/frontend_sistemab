import axios from "axios";

// POST
export function createProducto(obj) {
    return axios.post('http://localhost:8080/api/producto/create', {...obj})
        .then((res) => {
            console.log(res)
            res.data
        }).catch((error) => console.log('No se Guardo los datos, API-REST no encontrada'))
}

// GET
export function getAllProducto() {
    return axios.get('http://localhost:8080/api/producto/all')
        .then((res) => res.data)
}

// PUT
export function updateProducto(filter, obj) {
    return axios.put(`http://localhost:8080/api/producto/update/codigo/${filter}`, {...obj})
        .then((res) => {
            console.log(res);
            return res.data
        }).catch((error) => console.log(`No se encuentra la API-REST :${error}`))
}

// DELETE
export function deleteProducto(filter, obj) {
    return axios.delete(`http://localhost:8080/api/producto/delete/codigo/${filter}`, {...obj})
        .then((res) => {
            console.log(res)
            return res.data
        })
}
