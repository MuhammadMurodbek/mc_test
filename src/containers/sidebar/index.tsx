import { NavLink} from 'react-router-dom'
import "./index.css"

const navList = [
  {
    to:'/profile',
    name:'Profile'
  },
  {
    to:'/users',
    name:'Users'
  },
  {
    to:'/login',
    name:'Logout'
  }
]

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='d-flex flex-column '>
        {
          navList.map(item=>{
            return <NavLink 
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}  
              to={item.to} >
                {item.name}
              </NavLink>
          })
        }
      </div>
    </div>
  )
}

export default Sidebar