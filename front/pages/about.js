import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

export default function About() {

  const bancos = fetch('http://localhost:9292/bancos')
  .then(res => res.json())
  .then(json => json);
  console.log( bancos);

  return (
    <Layout>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet...</p>
      
    </Layout>
  )
}