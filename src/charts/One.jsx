import React from 'react'
import ReactECharts from 'echarts-for-react';
// import * as echarts from 'echarts';
export const One = () => {
  const  data = [];
  for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
  }
  const option = {
    xAxis: {
      max: 'dataMax',
      axisLabel: {
        textStyle: {
            color: 'white'
        }
    },
    },
    yAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
            color: 'white'
        },
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)',
          size:'10px'
        },
    },
      data: ['M', 'T', 'W', 'T','F'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 3 // only the largest 3 bars will be displayed
    },
    series: [
      {
       itemStyle: {normal: {color: 'rgb(244, 244, 244)'}},
       realtimeSort: true,
       name: 'X',
       type: 'bar',
       data: data,
       label: {
        color:'white',
         show: true,
         position: 'right',
         valueAnimation: true
        },
        itemStyle: {
          // emphasis: {
          //     barBorderRadius: [50, 50],
          //     color:'white'
          //   },
            normal: {
            color:'white',
              barBorderRadius: [0, 3 , 3  ,0 ]
          }
      }
      }
    ],
  
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  };
  function run() {
    for (var i = 0; i < data.length; ++i) {
      if (Math.random() > 0.9) {
        data[i] += Math.round(Math.random() * 2000);
      } else {
        data[i] += Math.round(Math.random() * 200);
      }
    }
    // myChart.setOption({
      series: [
        {
          itemStyle: {normal: {color: 'rgba(255,255,255,0.4)'}},
          type: 'bar',
          data
        }
      ]
    // });
  }
  setTimeout(function () {
    run();
  }, 0);
  setInterval(function () {
    run();
  }, 5000);
  return (
<div className='col-12 '>
    <ReactECharts
    className=''
    option={option}
    style={{ height: '241px' ,position:'relative',top:'21px'}}
    />
   

    </div>
  )
}

