import Layout from '../components/Layout.js'
import axios from 'axios'

export default class extends React.Component {

  static async getInitialProps({ query }){
    const respuesta = await axios.get('http://localhost:9292/bancos')
    const bancos = respuesta.data
    const importe = query.importe
    const porcentaje = query.porcentaje
    const ganancia = calcular(importe, porcentaje);

    function calcular(importe, porcentaje){
      return importe / 100 * porcentaje;
    }

    return { bancos, importe, ganancia }
  }

  render() {
    return(
      <Layout>
      <div id="wrapper">
        <div className="formulario">
          <h1>Calculadora de inversion.</h1>
          <h2>Ganancias: inversion: ${ this.props.importe } - Ganancia: { Math.round(this.props.ganancia) }%</h2>
          <form>
            <label>
              Monto a invertir: { this.props.importe }
            </label> <br />
            <input type="text" name="importe" />
            <br />

              {
                this.props.bancos.map( (b) =>
                  <div>
                    <h3>{b.name}</h3>
                    <p><input type="radio" id="{b.low}" name="porcentaje" value={b.low} /> 30 dias - Comision: {b.low} %</p>
                    <p><input type="radio" id="{b.soft}" name="porcentaje" value={b.soft} /> 60 dias - Comision: {b.soft} %</p>
                    <p><input type="radio" id="{b.high}" name="porcentaje" value={b.high} /> 90 dias - Comision: {b.high} %</p>
                  </div>
                )
              }

            <input type="submit" value="Calcular intereses" />
          </form>
        </div>
      </div>

      { /* Formulario styles */ }
       <style jsx>{`
         #wrapper { width:90%; margin: 1em auto; font-family: Arial, Helvetica, sans-serif}
         #wrapper h2{color:red}
        .formulario { background: #e0ebeb; padding:.8em; -webkit-border-radius: 8px;
          -moz-border-radius: 8px; border-radius: 8px; }
        .formulario label {padding: .8em 0; font-size:90%;}
        .formulario input {padding: .8em}
      `}</style>

      </Layout>
    )
  }

}
