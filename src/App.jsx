import './App.css'

function App() {

  function PrivacyPolicy() {
    window.location.href = "PrivacyPolicy";
  }

  function irAlHome() {
    window.location.href = "/home";
  } 

  return (
    <div className="container">
      <div className='mitad1'>
        <div className='foto'>
        </div>
      </div>
      <div className='mitad2'>
        <h1>Hola, mi nombre es Florencia Fernandez</h1>
        <h2>Argentina y desarrolladora FrontEnd. Proximamente diseñadora Ux/UI</h2>

        <button class="cssbuttons-io-button" onclick="irAlHome()">
          <span>Ingresar</span>
          <div class="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
            </svg>
          </div>
        </button>

        <div className='footer'>
          <h3 onClick={PrivacyPolicy}>Política de privacidad</h3>
          <h3>©2024 Creado con amor por Flopi ♥️</h3>
        </div>
      </div>
    </div>
  )
}
export default App






// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
