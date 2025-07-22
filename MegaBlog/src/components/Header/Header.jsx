import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()
  const navItems=[
    {
    name:'Home',
    slug: "/",
    active:true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='py-4 shadow-md bg-white/80 backdrop-blur-md border-b border-gray-200'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>

            <Link to='/'>
              <Logo width='70px' />
            </Link>

          </div>

          <ul className='flex ml-auto items-center space-x-2'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                  onClick={() => navigate(item.slug) }
                  className='px-5 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-100 transition-colors duration-300 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}

            
          </ul>


        </nav>
        </Container>
    </header>
  )
}

export default Header