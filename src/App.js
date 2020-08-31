// author: angshuman

import React from 'react'
import './App.css'

import Form from './util/components/Form'
import TodoList from './util/components/TodoList';

function App() {
  return (
    <div className="App">
      <h2 class="beforeYouDie">What do you want to do</h2>
      <h1 class="beforeYouDie">before you die</h1>
      <Form />
      <TodoList />
    </div>
  )
}

export default App;
