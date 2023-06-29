import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do gatinho :)</h2>
        <CampoTexto label="Nome" placeholder="Digite o nome do gatinho" />
        <CampoTexto label="Raça" placeholder="Digite a raça do gatinho" />
        <CampoTexto label="Imagem" placeholder="Digite o link da imagem do gatinho" />
      </form>
    </section>
  )
}

export default Formulario