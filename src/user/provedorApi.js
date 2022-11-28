import { reactive,ref } from "vue"
import axios from "axios";
export default function getAll() {
  
 const state = reactive({
  provedores: [],
  producto:[]
  })

 axios.get('http://localhost:3000/provedor')
  .then((res) => res.data)
  .then((data) => {
    data.forEach((element, index) => {
      const provedor = {
        ...element,
        index: index + 1
      }
      state.provedores.push(provedor)
    });
  })

    return {state,getAll}
}
