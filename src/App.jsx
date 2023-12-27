import './App.css'
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import HomePage from "./views/HomePage"
import CartPage from "./views/CartPage"
import PizzaPage from "./views/PizzaPage"
import NotFound from "./views/NotFound"

const App = () => {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/carrito"
          element={<CartPage />}
        />
        <Route
          path="/pizza/:id"
          element={<PizzaPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};
export default App