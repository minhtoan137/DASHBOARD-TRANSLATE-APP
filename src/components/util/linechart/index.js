import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = ({labels, label, data}) => (
  <Line
    data={{
      labels: labels,
      datasets: [{
        label: label,
        borderColor: '#08C3C8',
        backgroundColor: '#BEEEF0',
        data: data,
        cubicInterpolationMode: 'monotone'
      }]
    }}
    options={{
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      title: {
        display: false
      },
      tooltips: {
        mode: 'index'
      },
      hover: {
        mode: 'index'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: '#698691'
          },
          stacked: true,
          scaleLabel: {
            display: false
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#698691'
          },
          scaleLabel: {
            display: false
          }
        }]
      }
    }}
  />
)

export { LineChart }
