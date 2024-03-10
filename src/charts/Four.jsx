import React from 'react'
import ReactECharts from 'echarts-for-react';
export const Four = () => {
   const option = {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    tooltip:{
      show:true
    },
    series: [
      {
        type: 'candlestick',
        data: [
          [10, 34, 10, 38],
          [40, 34, 50, 50],
          [7, 38, 33, 44],
          [38, 15, 5, 42]
        ]
      }
    ]
  };
  return (
    <ReactECharts option={option}  className='position-relative' style={{height:'230px',margin:'0px',bottom:"43px"}}/>
  )
}
