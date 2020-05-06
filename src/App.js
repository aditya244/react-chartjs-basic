import React from 'react';
import {Pie, Doughnut, Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      barThickness: 45,
      categoryWidth: 1,
      minBarLength: 2,
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center"> Chart JS App</h1>
        </div>
        <div className="data-div col-md-6 float-left">
        <Pie
          data={state}
          // width={"500px"}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'left',
            }
          }}
        />
        </div>
        <div className="data-div col-md-6 float-left">
        <Doughnut
          // width={"500px"}
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'left'
            },
            responsive: true,
            maintainAspectRatio: true
          }}
        />
      </div>
      <div className="data-div col-md-6 float-left">
      <Bar 
          data={state}
          options = {{
            scales: {
              yAxes: [{
                 ticks: {
                    min: 10,
                    max: 100,
                    stepSize: 10
                 }
              }],
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
            }
          }
        }}
        />
      </div>
      </div>
    );
  }
}