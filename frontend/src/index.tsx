import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './assets/globalStyles'
import { ThemeProvider } from './context/ThemeContext'
import { App } from './components/App'
import { StoreProvider } from 'easy-peasy'
import { store } from './store'

render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider>
        <Router>
          <App />
          <GlobalStyle />
        </Router>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
