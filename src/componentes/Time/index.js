import Gato from '../Gato'
import './Time.css'

const Time = (props) => {
  return (
    (props.gatos.length > 0) ? <section className='time' style={{
      backgroundColor: props.corSecundaria
    }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className='gatos'>
        {props.gatos.map(gato => <Gato corDeFundo={props.corPrimaria} key={gato.nome} nome={gato.nome} raca={gato.raca} imagem={gato.imagem} />)}
      </div>
    </section>
      : ''
  )
}

export default Time