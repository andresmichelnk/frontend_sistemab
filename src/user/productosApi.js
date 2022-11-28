import { reactive,ref } from "vue"
import axios from "axios";
export default function getAll() {
  
 const state = reactive({
  producto:[]
  })

  axios.get('http://localhost:3000/productos')
  .then((res) => res.data)
  .then((data) => {
    data.forEach((element, index) => {
      const productos = {
        ...element,
        index: index + 1
      }
      state.producto.push(productos)
    });
  })
 



  return {state,getAll}
}