import React from 'react'
import InputTask from './components/InputTask'

export default function App() {
  return (
    <main>

      <div id="notifications-continer">
      </div>
      <section className="container vh-100 d-flex align-items-center justify-content-center ">

        <div className=" w-75 rounded-3 p-lg-5 bg-light">
          <InputTask />
          
        </div>
      </section>
    </main>
  )
}
