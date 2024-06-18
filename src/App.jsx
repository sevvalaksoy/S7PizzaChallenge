import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Home from './pages/home'
import Order from './pages/order'
import Success from './pages/success'

function App() {

  return (
    <>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/order">
          <Order/>
        </Route>
        <Route>
          <Success/>
        </Route>
      </Switch>
    </>
  )
}

export default App
