import {reactive} from "vue"
import axios from "axios";

export default function getAll() {

    //GET
 const state = reactive({
  provedores: [],
  e:"",
  status:false
  })

 axios.get('http://localhost:8080/api/proveedor/all')
  .then((res) => res.data)
  .then((data) => {
    data.forEach((element) => {
      const provedor = {
        ...element
      }
      state.provedores.push(provedor)
    })
  })
  .catch((err)=>{
       state.e = "No se Encontro la Lista de Provedores"
       state.status = true
    console.error('No encuentra la API-REST')
  })


    // POST
    const form = reactive({
        id: `${Math.floor((Math.random()*100))}`,
        nombre: "",
        direccion:""
    })
    const submit = () => {
       axios.post('http://localhost:8080/api/proveedor/create',form)
        .then((res)=>{
            console.log(res)
            res.data
        })
        .catch((error)=> console.error('No encuentra la API-REST'))
      
    }

    return {state,form,submit,getAll}
}
