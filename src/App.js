import React from 'react'
import Result from './Result.js'

const App = () => {
  return (
    <div className="container">
      <h1>English Dictionary</h1>
      <form >
        <div className="row">
          <textarea name="" id="" cols="30" rows="4" placeholder='Enter text'></textarea>
          <div className="voices-icons">

            <div className="select-voices">
              <select name="" id="">
                <option value="">English</option>
                <option value="">English</option>
                <option value="">English</option>
              </select>
            </div>
            <i class="fa-solid fa-volume-high"/>

          </div>
        </div>
      </form>
      <Result/>
    </div>
  )
}

export default App