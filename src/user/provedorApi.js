import {reactive, ref} from "vue"
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
        nombre: "",
        direccion:""
    })

    axios.post('http://localhost:8080/api/proveedor/create',form)
        .then((res)=>{
            console.log(res)
        })
        .catch((error)=>error)

    const submit = () => {
        console.log(form)
    }

    return {state,form,submit,getAll}
}
