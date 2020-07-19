import React, {Fragment, Component} from 'react';

import { Link, withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    return (

    <Fragment>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#saberMas"><i className="fas fa-glass-cheers" ></i></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarColor02">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <Link className="nav-link" to="/resultados"> <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#"></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#saberMas"></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#"></a>
                        </li>
                      </ul>
                      <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" disabled="disabled" />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit"disabled="disabled">Search</button>
                      </form>
                    </div>
            </nav>
      </header>


        <div className="container">
            <div className="jumbotron">
                <h2 className="display-4">Controlador de Averías Automátizado</h2>
                <h3>Objetivo</h3>
                <h4>Este dispositivo está diseñado para diagnosticar las averías más comunes, tener monitorizado el enfriador los 365 días al año de manera automática y poder adelantarse a las averías más comunes, antes de sufrir sus consecuencias.</h4>
                <hr className="my-4"/>
                <h3>Beneficios</h3>
                <h4>Muestra información acerca del estado del enfriador, para que la empresa encargada del mantenimiento disponga de un diagnostico previo, pudiendo planificar y preparar sus actuaciones para una correcta y efectiva actuación, de esta manera solventar la avería en una sola visita al cliente.</h4>

                
            </div>
            
        </div>

        <div class="container">
            <div class="row">
                <div className="col-sm-4 border px-3 py-2">
                    <h3 className="pt-2">Estudio</h3>
                    <hr className="my-4"/>
                    <p className="text-left">Todas las pruebas se han realizado en mantenimiento del banco de hielo, es decir, sin consumo de producto en horas de no venta.</p>
                    <p className="text-left"> El calor absorbido provinente de el circuito de riego, la propia agitación del agua de la cubeta realizada por el motor agitador y el calor ambiental donde se realizan las pruebas es el causante del desgaste del bloque de hielo.</p>
                    <Link className="btn btn-primary btn-lg" to="/estudio" role="button">Ver Estudio</Link>
                </div>
                <div className="col-sm-4 border px-3 py-2">
                    <h3 className="pt-2">Pruebas</h3>
                    <hr className="my-4"/>
                    <p className="text-left">Las pruebas se han basado en un sistema de sondas de temperatura para la correcta monitorización del enfriador.</p> 
                    <p className="text-left">Se han realizando diferentes lecturas de temperatura de cada parte importante de la máquina, conociendo así al detalle el estado del enfriador y el ciclo de funcionamiento del mismo.</p>
                    <Link className="btn btn-primary btn-lg" to="/pruebas" role="button">Ver Pruebas</Link>
                </div>
                <div className="col-sm-4 border px-3 py-2">
                    <h3 className="pt-2">Resultados</h3>
                    <hr className="my-4"/>        
                    <p className="text-left">Se ha diseñado un prototipo capaz de detectar un mal funcionamiento del enfriador, y distinguir entre los tipos de averías que ocurren.</p>
                    <p className="text-left">Puede detectar diferentes tipos de error en el enfriador, ya sea prevención o avería, en un ciclo de marcha/paro, facilitando al mecánico la resolución del problema en una sola visita al cliente.</p>
                    <Link className="btn btn-primary btn-lg" to="/resultados" role="button">Ver Resultado</Link>
                    
                </div>
            </div>
        </div>
        
    {/* <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <img src="/img/envfiador-V100.jpg"/>
            </div>
            
        </div>
    </div>    */}    
    <footer class="py-4 bg-dark text-white-50 mt-3">
        <div class="container text-center">
        <small>Correo electrónico: Kenneth.ferre@gmail.com</small>
        </div>
    </footer>



    </Fragment>
    );
  }

/*   componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  } */
}

export default withRouter(Home);