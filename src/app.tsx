import CompleteIcon from './assets/complete.svg'
import InfoError from './assets/info-error.svg'
import InfoOk from './assets/info-ok.svg'
import LogoBP from './assets/logo-BP.svg'
import './app.scss'

function App() {
  return (
    <div className="app">
      <h1>Evaluación Semestral 2023</h1>
      <section>
        <h2>Colores</h2>
        <div className="app__color-container">
          <span className="app__color-title">Primario</span>
          <div className="app__color app__color--primary"></div>
          <code>#FFDD00</code>
        </div>
        <div className="app__color-container">
          <span className="app__color-title">Secundario</span>
          <div className="app__color app__color--secondary"></div>
          <code>#0F265C</code>
        </div>
        <div className="app__color-container">
          <span className="app__color-title">Gris</span>
          <div className="app__color app__color--gray"></div>
          <code>#979797</code>
        </div>
        <div className="app__color-container">
          <span className="app__color-title">Negro</span>
          <div className="app__color app__color--black"></div>
          <code>#000000</code>
        </div>
        <div className="app__color-container">
          <span className="app__color-title">Blanco</span>
          <div className="app__color app__color--white"></div>
          <code>#FFFF</code>
        </div>
      </section>
      <section>
        <h2>Íconos</h2>
        <div className="app__icon-container">
          <div className="app__icon-description">
            <img className="app__icon" src={CompleteIcon} alt="Delete icon" />
            <span>Complete icon</span>
          </div>
          <div className="app__icon-description">
            <img className="app__icon" src={InfoError} alt="Info error icon" />
            <span className="app__color-title">Info error icon</span>
          </div>
          <div className="app__icon-description">
            <img className="app__icon" src={InfoOk} alt="Info ok icon" />
            <span className="app__color-title">Info ok icon</span>
          </div>
          <div className="app__icon-description">
            <img className="app__icon" src={LogoBP} alt="Logo Banco Pichincha" />
            <span className="app__color-title">Logo Banco Pichincha</span>
          </div>
        </div>
      </section>
      <section>
        <h2>API REST</h2>
        <p>
          Ejecute el servidor en local con el siguiente comando: <code>yarn serve</code>
        </p>
        <p>La documentación del API REST la puede ver en el archivo README.md</p>
      </section>
    </div>
  )
}

export default App
