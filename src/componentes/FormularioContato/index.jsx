import './estilos.css'

const FormularioContato = () => {
  return (
    <div>
      <section id="contato" className="subtitulo">
        <h2>Contato</h2>
      </section>
      <section className="contato">
        <form action="">
          <input className="form-control" type="text" placeholder="Nome" />
          <input className="form-control" type="text" placeholder="E-mail" />
          <textarea className="form-control" placeholder="Mensagem" />
          <button>Enviar mensagem</button>
        </form>
      </section>
    </div>
  )
}

export default FormularioContato