import {reactive} from "vue"
import axios from "axios";

export default function getAll() {

    //GET
 const state = reactive({
  provedores: []
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
  .catch((err)=>err)


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
        .catch((error)=>error)
      
    }

    return {state,form,submit,getAll}
}
