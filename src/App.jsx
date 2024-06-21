import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Home from './pages/home'
import Order from './pages/order'
import Success from './pages/success'
import { useState } from 'react'

let initialPrice = 85.50;

const initialData = {
  isim: "",
  adet: 1,
  boyut: "",
  kalınlık: "",
  malzemeler: [],
  not: ""
}

function App() {
  const [count, setCount] = useState(1);
  const [formData, setFormData] = useState(initialData);
  const [responseData, setResponseData] = useState(null);
  const price = initialPrice;


  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/order" exact>
          <Order price={price} formData={formData} setFormData={setFormData} count={count} setCount={setCount} initialData={initialData} setResponseData={setResponseData}/>
        </Route>
        <Route path="/success" exact>
          <Success responseData={responseData} price={price} formData={formData} count={count}/>
        </Route>
      </Switch>
    </>
  )
}

export default App
