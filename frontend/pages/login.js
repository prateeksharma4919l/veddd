
import {useState} from "react"
import axios from "axios"

export default function Login(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const login=async()=>{

await axios.post(
"http://localhost:5000/api/auth/login",
{email,password}
)

alert("Login success")

}

return(

<div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}}>

<div>

<h1>Ved Logistics Login</h1>

<input
placeholder="email"
onChange={e=>setEmail(e.target.value)}
/>

<br/>

<input
type="password"
placeholder="password"
onChange={e=>setPassword(e.target.value)}
/>

<br/>

<button onClick={login}>
Login
</button>

</div>

</div>

)

}
