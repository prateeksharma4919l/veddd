
import {useEffect,useState} from "react"
import axios from "axios"

export default function Riders(){

const [riders,setRiders]=useState([])

useEffect(()=>{

axios.get("http://localhost:5000/api/riders")
.then(res=>setRiders(res.data))

},[])

return(

<div>

<h2>Riders</h2>

<table border="1">

<tr>
<th>Name</th>
<th>Bike</th>
<th>Status</th>
</tr>

{riders.map(r=>(
<tr key={r._id}>
<td>{r.name}</td>
<td>{r.bikeNumber}</td>
<td>{r.status}</td>
</tr>
))}

</table>

</div>

)

}
