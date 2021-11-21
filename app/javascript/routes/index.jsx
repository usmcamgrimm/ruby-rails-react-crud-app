import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

export default (
  <Router>
    <Routes>
      <Route path="/" exact component={Home} />
    </Routes>
  </Router>
)