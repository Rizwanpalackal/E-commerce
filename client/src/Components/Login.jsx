import React from 'react'

const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setpassword]=useState("")
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
<div className='sm:mx-auto sm:w-full sm:max-w-md'>
    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>LogIn to ypur Account</h2>

</div>
<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
  <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
    <form className='space-y-6'>
      <div>
        <label 
        htmlFor='email'
        className='block text-sm font-medium text-gray-700 '>
          Email Adress

        </label>
        <input className='appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm '
        type='email'
        name='email'
        required
        placeholder='Email'
        autoComplete='email'
        value={email}
        >
          
        </input>
        <label 
        htmlFor='email'
        className='block text-sm font-medium text-gray-700 '>
          Password

        </label>
        <input className='appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm '
        type='password'
        name='pasword'
        required
        placeholder='Password'
        autoComplete='current-password'
        value={password}
        >
          
        </input>
      </div>
    </form>

  </div>

</div>

    </div>
  )
}

export default Login