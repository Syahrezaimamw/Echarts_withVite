import React from 'react'
import ReactECharts from 'echarts-for-react';
export const Tree = () => {
    let base = +new Date(1988, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let data = [[base, Math.random() * 300]];
    for (let i = 1; i < 20000; i++) {
      let now = new Date((base += oneDay));
      data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
    }
    const option = {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
     
    //   toolbox: {
    //     feature: {
    //       dataZoom: {
    //         yAxisIndex: 'none'
    //       },
    //     //   restore: {},
    //     //   saveAsImage: {}
    //     }
    //   },
      xAxis: {
        type: 'time',
        boundaryGap: false,
        axisLabel:{
          padding:[0,0,0,0],
  
        },
        axisLine:{
          lineStyle:{
            color:'rgb(12,20,77)'
          }
        },
      },
      yAxis: {
        type: 'value',
        axisLine:{
          lineStyle:{
            color:'rgb(12,20,77)'
          }
        },
        axisLabel:{
          padding:[0,10,0,0],

        },
        boundaryGap: [0, '100%']
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 20
        },
        {
          start: 0,
          end: 20
        }
      ],
      series: [
        {
          // name: 'Fake Data',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data
        }
      ]
    };
  return (
    <div>
         <ReactECharts
    className=''
    option={option}
    style={{ height: '315px',position:'relative',bottom:'20px' }}
  />
    </div>
  )
}
