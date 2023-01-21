import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom';

import { Input, Button, Navbar } from "../../components"
import { users } from "../../data"
import { AppContext } from "../../context"

const Login = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(AppContext);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onLogin = () => {
    const isValidUser = users.find(user => (user.email === email) && (user.password === password))
    if(isValidUser){
      alert("Login Successful!")
      setData({
        ...data,
        currentUser: isValidUser
      })
      localStorage.setItem('userId', isValidUser.id)
      navigate('/dashboard')
      return
    }
    alert("Invalid Credentials!")
  }

  return(
    <>
      <Navbar />
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              <Input
                label="Email Address" 
                type="email"
                name="email"
                required={true} 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                label="Password" 
                type="password"
                name="password"
                required={true} 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Button
                label="Sign in"
                type="submit"
                onClick={onLogin}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login