import Layout from '../components/Layout.js'
import axios from 'axios'

export default class extends React.Component {

  static async getInitialProps({ query }){
    const respuesta = await axios.get('http://localhost:9393/bancos')
    const bancos = respuesta.data
    return { bancos }
  }

  render() {
    return(
      <Layout>

      <div className="formulario">
        <h1>Hello </h1>
        <p> { this.props.bancos.map( (b) => <p>{b.name}</p> ) } </p>
      </div>
      
      { /* Formulario styles */ }
       <style jsx>{`
        .formulario{ background: red}
      `}</style>

      </Layout>
    )
  }

}
