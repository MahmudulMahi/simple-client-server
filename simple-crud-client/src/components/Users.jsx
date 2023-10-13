import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
  const loadedusers=useLoaderData()

  const [users,setUsers]=useState(loadedusers)

  const handleDelet=_id=>{
    console.log(_id)
    fetch(`http://localhost:5000/users/${_id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount>0){
        alert('delete success')
        const remaining=users.filter(user =>user._id !==_id)
        setUsers(remaining)
      }
    })
  }
  return (
    <div>
      <h2>{users.length}</h2>
      {
        users.map(user=> <p key={user._id} 
        >{user.name}:{user.email}
         <Link to={`/update/${user._id}`}>
          <button>update</button>
        </Link>
         <button onClick={()=>handleDelet(user._id)}
        >X</button></p>)
      }
    </div>
  );
};

export default Users;