import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Home from './pages/home'
import Order from './pages/order'
import Success from './pages/success'

function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/order" exact>
          <Order/>
        </Route>
        <Route path="/success" exact>
          <Success/>
        </Route>
      </Switch>
    </>
  )
}

export default App
