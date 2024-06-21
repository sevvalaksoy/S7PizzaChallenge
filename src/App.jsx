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
  const [price] = useState(initialPrice);
  const [formData, setFormData] = useState(initialData);
  const [responseData, setResponseData] = useState(null);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/order" exact>
          <Order price={price} formData={formData} setFormData={setFormData} count={count} setCount={setCount} initialPrice={initialPrice} initialData={initialData} setResponseData={setResponseData}/>
        </Route>
        <Route path="/success" exact>
          <Success responseData={responseData}/>
        </Route>
      </Switch>
    </>
  )
}

export default App
