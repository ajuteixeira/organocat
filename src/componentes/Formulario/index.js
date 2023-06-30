import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

  const times = [
    'Selecionar...',
    'Gordinhos',
    'Danados',
    'Preguiçosos'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do gatinho :)</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome do gatinho" />
        <CampoTexto obrigatorio={true} label="Raça" placeholder="Digite a raça do gatinho" />
        <CampoTexto label="Imagem" placeholder="Digite o link da imagem do gatinho" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario