import '../styles/reset.css'
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
  return <div id="root">
  <Component {...pageProps} />
  <style jsx global>
    {`
    body {
      overflow: hidden;
    }
    
    #root {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -50px;
    }
    `}
  </style>
  </div> 
}

export default MyApp
