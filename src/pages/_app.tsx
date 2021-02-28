import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return ( //componentes aqui são renderizados em todas as telas
      <Component {...pageProps} />
  )
}

export default MyApp
