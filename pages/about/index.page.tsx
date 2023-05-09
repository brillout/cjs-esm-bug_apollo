import React from 'react'
import './code.css'
import {ApolloClient} from "@apollo/client"

export { Page }

function Page() {
  console.log(ApolloClient)

  return (
    <>
      <h1>About</h1>
      <p>
        Example of using <code>vite-plugin-ssr</code>.
      </p>
    </>
  )
}
