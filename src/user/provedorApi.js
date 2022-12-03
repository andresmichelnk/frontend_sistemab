import { reactive } from "vue"
import axios from "axios";
export default function getAll() {

 const state = reactive({
  provedores: [],
  producto:[],
  name:"",
  address:""
  })

    //GET
 axios.get('http://localhost:8080/api/proveedor/all')
  .then((res) => res.data)
  .then((data) => {
    data.forEach((element) => {
      const provedor = {
        ...element
      }
      state.provedores.push(provedor)
    });
  })

    return {state,getAll}
}
