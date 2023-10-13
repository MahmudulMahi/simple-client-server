
import './App.css'

function App() {

  const handelAddUser=e=>{
    e.preventDefault();

    const form =event.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email}
    console.log(user)
    
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert('user addes')
        form.reset()
      }
    })
  }
  return (
    <>
    
      <h1>simple crud</h1>
      <form onSubmit={handelAddUser} >
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add user" id="" />
      </form>

    </>
  )
}

export default App
