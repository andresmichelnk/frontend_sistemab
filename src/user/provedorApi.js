import {_axios} from "@/plugins/axios";


// POST
export function createProvedor(obj) {
    const id = `${Math.floor((Math.random() * 100))}`
    return _axios.post('http://localhost:8080/api/proveedor/create', {id, ...obj})
        .then((res) => {
            console.log(res)
            res.data
        }).catch((error) => console.log('No se encuentra la API-REST'))
}

// GET
export function getAllProvedor() {
    return _axios.get('http://localhost:8080/api/proveedor/all')
        .then((res) => res.data)
}

// PUT
export function updateProvedor(filter, obj) {
    return _axios.put(`http://localhost:8080/api/proveedor/update/id/${filter}`, {...obj})
        .then((res) => {
            console.log(res);
            return res.data
        }).catch((error) => console.log(`No se encuentra la API-REST :${error}`))
}

// DELETE
export function deleteProvedor(filter, obj) {
    return _axios.delete(`http://localhost:8080/api/proveedor/delete/id/${filter}`, {...obj})
        .then((res) => {
            console.log(res)
            return res.data
        })
}
    

  
