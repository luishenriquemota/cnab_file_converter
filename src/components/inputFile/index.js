import axios from "axios"
import { InputFileStyled } from "./style"
import { useTransactions } from "../../providers/transactions"


const InputUpload = ({children}) => {

  const {setList} = useTransactions()

  const upload = (e) => {
    const data = {
      "file": e.target.files[0],
      "description": e.target.files[0].name
    }

    axios.post("http://127.0.0.1:8000/api/upload/", data, {
      headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": "Token 2eb15d3586fe5bda32fb6ad245bfc1825b1e66ca"
    }})
    .then((res) => {
      convert(res.data.id)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const convert = (id) => {
    axios.post(`http://127.0.0.1:8000/api/convert/${id}/`, {headers : {
      "Authorization": "Token 2eb15d3586fe5bda32fb6ad245bfc1825b1e66ca"
    }})
    .then((res) => setList(res.data))
    .catch((err) => console.log(err))
  }



  return(
    <InputFileStyled>
        {children}
        <input type={"file"} onChange={(e) => upload(e)}/>
    </InputFileStyled>
  )
}
export default InputUpload