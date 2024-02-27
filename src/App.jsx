import React from 'react';
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="container">
      <div className='mitad1'>
        <div className='foto'>
        </div>
      </div>
      <div className='mitad2'>
        <h1>Hola, mi nombre es Florencia Fernandez</h1>
        <h2>Argentina y desarrolladora FrontEnd. Proximamente diseñadora Ux/UI</h2>

        <Link to='/home'>
          <button class="cssbuttons-io-button">
            <span>Ingresar</span>
            <div class="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
              </svg>
            </div>
          </button>
        </Link>

        <div className='footer'>
          <Link to='/privacypolicy'>
            <h3>Política de privacidad</h3>
          </Link>
          <h3>©2024 Creado con amor por Flopi ♥️</h3>
        </div>
      </div>
    </div>
  )
}
export default App

