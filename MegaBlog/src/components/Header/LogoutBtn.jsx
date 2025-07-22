import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-100 transition-colors duration-300 rounded-full"
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn