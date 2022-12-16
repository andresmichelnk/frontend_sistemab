import {_axios} from "@/plugins/axios";

// POST
export function createProducto(obj) {
    return _axios.post('/producto/create', {...obj})
        .then((res) => {
            console.log(res)
            res.data
        }).catch((error) => console.log('No se Guardo los datos, API-REST no encontrada'))
}

// GET
export function getAllProducto() {
    return _axios.get('/producto/all')
        .then((res) => res.data)
}

// PUT
export function updateProducto(filter, obj) {
    return _axios.put(`/producto/update/codigo/${filter}`, {...obj})
        .then((res) => {
            console.log(res);
            return res.data
        }).catch((error) => console.log(`No se encuentra la API-REST :${error}`))
}

// DELETE
export function deleteProducto(filter, obj) {
    return _axios.delete(`/producto/delete/codigo/${filter}`, {...obj})
        .then((res) => {
            console.log(res)
            return res.data
        })
}
