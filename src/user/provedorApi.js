import axios from "axios";


export function createProvedor(obj) {
    const id = `${Math.floor((Math.random() * 100))}`
    return axios.post('http://localhost:8080/api/proveedor/create', {
        id,
        ...obj
    }).then((res) => {
        console.log(res)
        res.data
    })
        .catch((error) => console.log('No se encuentra la API-REST'))
}

export function getAllProvedor() {
    return axios.get('http://localhost:8080/api/proveedor/all')
        .then((res) => res.data)
        .catch((error) => {
            state.e = "No se Encontro la lista de Provedores"
            state.status = true
            console.log('No se encuentra la API-REST')
        })
}

      
    

  
