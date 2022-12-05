import {useState} from 'react'
import "./App.css"
import {Users} from "./users"
import Table from './Table';

function App() {
  const [query , setQuery] = useState("");

  const keys = ["first_name" , "last_name" , "email"]

  const search = (data) =>{
    return data.filter(
      item => 
     keys.some((key) => item[key].toLowerCase().includes(query)) 
     //some() birden çok || kullanmamak için(first_name , last_name , email)
  )}

  console.log(query)
  return (
    <div>
       <input type="text" placeholder='Search...' className="search" onChange={e => setQuery(e.target.value)}/>
       {/* <ul className='list'>
        {Users.filter((user)=> user.first_name.toLowerCase().includes(query)).map((user) => (
          <li key={user.id} className='listItem'>{user.first_name}</li>
        ))}
       </ul> */}
       <Table data={search(Users)}/>
    </div>
  )
}

export default App