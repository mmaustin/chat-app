import { useState } from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App

// function App() {

//   return (
//     <div className="app">
//       app
//     </div>
//   )
// }

// export default App
