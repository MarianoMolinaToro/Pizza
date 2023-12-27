import { useContext } from "react"
import { Navbar, Container, } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { DataContext } from "../context/DataContext"

const Navigation = () => {
  const { CLP, total } = useContext(DataContext)
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)

  return (
    <Navbar className="navigation ">
      <Container>

        <Navbar.Brand>
        <NavLink
        to="/"
        
        className={setActiveClass}
        style={{ textDecoration: 'none', color: 'white' }}
            >  🍕Pizzería Mamma Mía!
            </NavLink> 
            </Navbar.Brand>

            <Navbar.Brand>
            <NavLink className="text-white"
            style={{ textDecoration: 'none' }}
              to="/carrito"
            >🛒Carrito:  {CLP.format(total)}
            </NavLink>
            </Navbar.Brand>
         
      
      </Container>
    </Navbar>
  )
}
export default Navigation