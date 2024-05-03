import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import NavBar from './components/NavBar'
import Catalogo from './pages/Catalogo'
import Cart from './pages/Cart'
import Thanks from './pages/Thanks'

function App() {
  const [cart, setCart] = useState([])

  const handleAddCart = (product, quantity) => { // Define uma função chamada handleAddCart que aceita dois parâmetros: product e quantity

    setCart((previtems) => { // Chama a função setCart para atualizar o estado do carrinho, passando uma função de retorno de chamada que recebe o estado anterior do carrinho como previtems

      const itensExists = previtems.find((item) => item.id === product.id) // Verifica se um item com o mesmo id do produto já existe no carrinho

      if (itensExists) { // Se um item com o mesmo id já existe no carrinho

        toast.info(`Quantidade do item ${product.name} atualizada`) // Exibe uma mensagem informativa sobre a atualização da quantidade do item

        return previtems.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item) // Atualiza a quantidade do item existente no carrinho

      } else { // Se nenhum item com o mesmo id existe no carrinho

        toast.success(`${product.name} adicionado com sucesso`) // Exibe uma mensagem de sucesso sobre a adição do produto ao carrinho

        return [...previtems, { ...product, quantity }] // Adiciona um novo item ao carrinho

      }
    })

  }

  const handleDeleteItem = (id) => {

    toast.warning("Item removido com sucesso")
    setCart((previtems) => {
      return previtems.filter((item) => item.id !== id)
    })
  }

  const handleUpdateCart = (product, quantity) => {

    setCart((previtems) => {
      return previtems.map((item) => item.id === product.id ? { ...item, quantity: +quantity } : item)
    })

    if (quantity) {
      toast.info(`Quantidade do item ${product.name} atualizada`)
    }
  }

  

  return (
    <BrowserRouter>
      <NavBar />


      <div className="container-routes">
        <Routes>
          <Route
            path='/'
            element={
              <Catalogo
                onAddToCart={handleAddCart}
              />}
          />

          <Route
            path='/cart'
            element={
              <Cart
                cartItems={cart}
                setCart={setCart}
                onDelete={handleDeleteItem}
                onUpdateCart={handleUpdateCart}
              />}
          />

          <Route
            path='/thank-you'
            element={<Thanks cart={cart} />}
          />
        </Routes>
      </div>


      <ToastContainer
        position='top-right'
        autoClose={3500}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />

    </BrowserRouter>
  )
}

export default App
