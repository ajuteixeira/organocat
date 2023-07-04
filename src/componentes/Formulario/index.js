import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

  const times = [
    'Gordinhos',
    'Danados',
    'Preguiçosos'
  ]

  const [nome, setNome] = useState('')
  const [raca, setRaca] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoGatoCadastrado({
      nome,
      raca,
      imagem,
      time
    })
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do gatinho :)</h2>

        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do gatinho"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="Raça"
          placeholder="Digite a raça do gatinho"
          valor={raca}
          aoAlterado={valor => setRaca(valor)}
        />

        <CampoTexto
          label="Imagem"
          placeholder="Digite o link da imagem do gatinho"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />

        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario