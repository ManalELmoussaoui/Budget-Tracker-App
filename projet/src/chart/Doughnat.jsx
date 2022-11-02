import React from 'react'
import {Line, Pie} from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'


const data = {
    labels: [
      'Phone',
      'Ecole ',
      'Salary',
      'Voiture'
    ],
    datasets: [{
      label: 'Line',
      data: [300, 500, 600,300],
      backgroundColor: [
        '#ffb5b5',
        '#ffebbb',
        '#ffcbcb',
        '#e0ffcd',
      ],
      hoverOffset: 4,
      borderRadius:10,
      spacing:5
    }]

  };


export default function Doughnat() {
  return (
    <div className='diadrame'>
      <h1 className='d'>Diagrame</h1>
      <div className='global'>
      <div className='as'>
     
     <Line data={data}/>
     </div>
     <div className='asd'>
    
     <Pie data={data}/>
     </div>
    
      </div>
     
    </div>
  )
}