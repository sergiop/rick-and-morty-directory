import './vars.css'
import './global.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom'

import { MainLayout } from './layouts/MainLayout'
import reportWebVitals from './reportWebVitals'
import { CharacterRoot } from './routes/character/CharacterRoot'
import { CharactersRoot } from './routes/characters/CharactersRoot'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout
        content={(
          <Routes>
            <Route path="/" element={<Navigate replace to="/characters" />} />
            <Route path="/characters" element={<CharactersRoot />} />
            <Route path="/characters/:characterId" element={<CharacterRoot />} />
          </Routes>
        )}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
