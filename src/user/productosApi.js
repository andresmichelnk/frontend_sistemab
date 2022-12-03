import { reactive,ref } from "vue"
import axios from "axios";
export default function getAll() {
  
 const state = reactive({
  producto:[]
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
 



  return {state,getAll}
}