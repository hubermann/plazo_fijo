import Head from 'next/head'
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  background: '#f0f5f5'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <title>Calculadora de plazos fijos</title>
    </Head>
    <Header />
    {props.children}
  </div>
)

export default Layout
