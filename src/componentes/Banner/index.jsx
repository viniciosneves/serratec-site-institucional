import imagem from './frontend.png'
import './estilos.css'

const Banner = () => {
  return (
    <section className="principal fundo-escuro ">
      <div>
        <img src={imagem} alt="" />
        <h1>Trabalhar com frontend é sensacional.</h1>
      </div>
    </section>
  )
}

export default Banner