import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import MyButton from './components/MyButton'
import './App.css'
import UsersContainer from './components/Users/UsersContainer'
import CreateUser from './components/Users/CreateUser'
import LoginUser from './components/Users/LoginUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'


function App() {
  const [count, setCount] = useState(0)

  const items = [
    {
      label: 'Usuarios', 
      icon: 'pi pi-users',
      url: '/usuarios'
    }
  ]
  
  return (
    <BrowserRouter>
      <Menubar model={items} />
      <h1>Vite + React</h1>
      <Routes>
        <Route path='/usuarios' element={<UsersContainer />} />  
        <Route path='/nuevo_usuario' element={<CreateUser />} />  
        <Route path='/inicio-sesion' element={<LoginUser />} /> 
      </Routes>
      <div className="card">
        <MyButton count={count} setCount={setCount}/>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </BrowserRouter>
  )
}
export default App
