import { reactive,ref } from "vue"
import axios from "axios";
export default function getAll() {
  
 const state = reactive({
  producto:[],
   e:"",
  status:false
  })

  axios.get('http://localhost:8080/api/producto/all')
  .then((res) => res.data)
  .then((data) => {
    data.forEach((element, index) => {
      const productos = {
        ...element
      }
      state.producto.push(productos)
    });
  })
    .catch((err)=>{
       state.e = "No se Encontro la Lista de Productos"
       state.status = true
    console.error('No encuentra la API-REST')
  })
 



  return {state,getAll}
}