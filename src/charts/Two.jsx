import React from 'react'
import ReactECharts from 'echarts-for-react';
export const Two = () => {
 const option = {
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: 'Monday' },
          { value: 310, name: 'Tuesday' },
          { value: 274, name: 'Wednesday' },
          { value: 235, name: 'Thurtsday' },
          { value: 400, name: 'Friday' }
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)',
            size:'10px'
          },
          smooth: 0.2,
          length: 1,
          length2: 15
        },
        itemStyle: {
          // color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0)'
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };
  return (
    <ReactECharts option={option}  style={{ height: '190px',position:"relative",bottom:'45%',backgroundColor:'transparent' }} />
  )
}
