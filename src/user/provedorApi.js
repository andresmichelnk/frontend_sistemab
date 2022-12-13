import axios from "axios";

// POST
export function createProvedor(obj) {
    const id = `${Math.floor((Math.random() * 100))}`
    return axios.post('http://localhost:8080/api/proveedor/create', {
        id,
        ...obj
    }).then((res) => {
        console.log(res)
        res.data
    }).catch((error) => console.log('No se encuentra la API-REST'))
}

// GET
export function getAllProvedor() {
    return axios.get('http://localhost:8080/api/proveedor/all')
        .then((res) => res.data)
}

// PUT
export function updateProvedor(filter, obj) {
    return axios.put(`http://localhost:8080/api/proveedor/update/id/${filter}`, {
        ...obj
    }).then((res) => {
        console.log(res);
        return res.data
    }).catch((error) => console.log(`No se encuentra la API-REST :${error}`))
}
      
    

  
