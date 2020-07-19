import React, {Fragment, Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ["0 min", "5 min","10 min","15 min","20 min","25 min","30 min", "35 min","40 min","45 min","50 min","55 min","60 min"],
  datasets: [
    {
      label: 'Grados Centígrados en el Condensador',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 25, 35, 25, 10, 10, 10, 25, 35, 25, 10, 10, 10]
    }
  ]
};

class Pruebas extends Component {
  render() {
    return (

    <Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col-12"> 
            <Link className="btn btn-primary btn-lg" to="/" role="button">Volver</Link>
          </div>
        </div>
        
        <h2 className="title text-center">Prueba nº1 Condensador sin tapar (0%)</h2>
        <p className="lead text-left pt-3">Como se observa en la grafica 1.1, el comportamiento del enfriador es regular, la maquina realiza ciclos de paro-marcha de 30 minutos, para ir reponiendo el hielo consumido en esta prueba, aquí vemos que el calor absorbido en el evaporador lo disipa el condensador al 100%. El paro es constante, de 20 minutos, que es el tiempo programado por el control de espesor de hielo. La diferencia de temperaturas entre las dos sondas del control que utilizamos para hacer las comparaciones es de 11ºC, con unos resultados óptimos de funcionamiento.</p>
        <Line ref="chart" data={data} />
      </div> 
    </Fragment>
    );
  }

}

export default withRouter(Pruebas);