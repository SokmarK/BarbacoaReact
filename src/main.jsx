import React from 'react'
import './index.css' 
import { createRoot } from 'react-dom/client'
import { Nav } from './navbar'
import { index } from './Index'

const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <Nav />
    
  </>
)

