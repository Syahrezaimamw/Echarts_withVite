import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { SignIn } from './Signin'
// import { Grafana } from './Grafana'
import { SignUp } from './Signup'
import { Homedua } from './Homedua'
// import { SignUp } from './Signup'
export default function App() {
  return (
    <div>
      
      <BrowserRouter>

<Routes>

  <Route path="/*" element={<Home/>} />
  <Route path="/Echarts_withVite/signin" element={<SignIn/>} />
  <Route path="/Echarts_withVite/homedua" element={<Homedua/>} />
  <Route path="/Echarts_withVite/signup" element={<SignUp/>} />
  {/* <Route path="/grafana" element={<Grafana/>} /> */}
  {/* <Route path="/signin" element={<SignIn/>} /> */}
  {/* <Route path="/signup" element={<SignUp/>}/> */}
  {/* <Route path="/login" element={<Login/>} /> */}
  {/* <Route path="/page" element={<Page/>} /> */}
  {/* <Route path="/chart" element={<Charst/>} /> */}

</Routes>


</BrowserRouter>
    </div>
  )
}
