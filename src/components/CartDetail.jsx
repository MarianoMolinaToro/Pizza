import { useContext, } from "react"
import { Table, Image, Button, } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const CartDetail = () => {
  const { CLP, cart, total, setCart, cartFilter, } = useContext(DataContext)



  const incrementQty = (e) => {
    const cartIndex = cart.findIndex(item => {
      return item.id === e.target.value
    })
    const updateCart = [...cart]
    updateCart[cartIndex] = { ...updateCart[cartIndex], qty: updateCart[cartIndex].qty + 1 }
    setCart(updateCart)
  }

  const decrementQty = (e) => {
    const cartIndex = cart.findIndex(item => {
      return item.id === e.target.value
    })
    const updateCart = [...cart]
    updateCart[cartIndex] = { ...updateCart[cartIndex], qty: updateCart[cartIndex].qty - 1 }
    if (updateCart[cartIndex].qty <= 0) { updateCart[cartIndex].qty = 0 }
    setCart(updateCart)
  }


  return (
    <>
      <div id="cart_page" className="mt-2 justify-content-between d-flex flex-div gap-1">
        <div className="p-3 border rounded bg-white mb-3">
          <Table className="w-100">
            <thead>
              <tr>
                <th className="w-25"></th>
                <th className="w-100">Carrito</th>
                <th className="w-50">Subtotal</th>
                <th className="w-25"></th>
                <th className="w-25">Cantidad</th>
                <th className="w-25"></th>
              </tr>
            </thead>
            <tbody>
              {cartFilter.map((item) => (
                <tr className="align-middle" key={item.id}>
                  <td><Image src={item.img} className="img-thumbnail" /> </td>
                  <td className="text-capitalize">{item.name}</td>
                  <td>{CLP.format(item.price * item.qty)}</td>
                  <td><Button className="bg-primary" type="button" value={item.id} onClick={(e) => decrementQty(e, 'value')}>-</Button></td>
                  <td className="text-center fw-bolder">{item.qty}</td>
                  <td><Button className="bg-warning border-0 text-black" type="button"  value={item.id} onClick={(e) => incrementQty(e, 'value')}>+</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <strong>Total:</strong> {CLP.format(total.toFixed(2))}
        </div>
      </div>
      
    </>
  )
}

export default CartDetail