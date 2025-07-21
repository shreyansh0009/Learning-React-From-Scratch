import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: "space-between",
      gap: '1rem',
      padding: '1rem',
      background: '#eee',
      marginBottom: '1rem'
    }}>

        <NavLink to = "/"> Home </NavLink>

        <NavLink to = "/about"> About </NavLink>

        <NavLink to = "/contact"> Contact Us </NavLink>

        <NavLink to = "/login"> Login </NavLink>


    </div>
  )
}

export default Navbar