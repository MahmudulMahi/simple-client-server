
import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const loadedUser=useLoaderData()

  const handelUpdate =event =>{
    event.preventDefault();
    const form= event.target;
    const name=form.name.value
    const email=form.email.value
    console.log(name,email)
    const updatedUser={name,email}

    fetch(`http://localhost:5000/users/${loadedUser._id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(updatedUser)
    })
      .then(res =>res.json())
      .then(data =>{
        console.log(data)
        if(data.modifiedCount>0){
          alert('user update')
        }
      })
  }
  return (
    <div>
      <h3>update information {loadedUser.name}</h3>
      <form onSubmit={handelUpdate}>
        <input type="name" name="name" defaultValue={loadedUser?.name} id="" />
        <br />
        <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
        <br />
        <input type="submit" value="Upadate"  />
      </form>
    </div>
  );
};

export default Update;