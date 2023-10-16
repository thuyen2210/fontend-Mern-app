import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { NavLink  } from 'react-router-dom'
import { useState,useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContex'
import AlertMessage from '../layout/AlertMessage'


function LoginForm (){

  //Context
  const {loginUser} = useContext(AuthContext)

  //Router
  // let navigate = useNavigate();

  //local storage
  const [loginForm,setLoginForm] = useState({
    username:'',
    password:''
  })

  //
  const [alert,setAlert] = useState(null);

  const {username, password} =LoginForm

  const onChangeLoginForm = event => setLoginForm({...loginForm,[event.target.name]:event.target.value})

  const login = async event =>{
    event.preventDefault()
    

    try {
      const loginData = await loginUser(loginForm)
      if(loginData.success){
        // navigate('/dashboard');
        
      }else {
        setAlert({type:'danger',message:loginData.message})
        setTimeout(() => setAlert(null),3000)
      }
    } catch (error) {
      console.log(error);
    }
    
  } 

  return (
    <>
      <Form className='my-5' onSubmit={login}>
        <AlertMessage info={alert}/>
        <Form.Group className='my-3'>
        <Form.Control type='text' placeholder='Username' name='username' required value={username}
        onChange={onChangeLoginForm} />
        </Form.Group>

        <Form.Group>
        <Form.Control type='password' placeholder='Password' name='password' required value={password}
        onChange={onChangeLoginForm} />
        </Form.Group>

        <Button className='my-3' variant='success' type='submit' >Login</Button>
      </Form>
      <p>Don't you have an account?
        <NavLink to='/register'>
          <Button variant='info' size='sm' className='ml-2'> Register</Button>
        </NavLink>
      </p>
    </>
  )
}

export default LoginForm