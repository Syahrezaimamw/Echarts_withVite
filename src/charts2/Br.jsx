import React from 'react'
import ReactECharts from 'echarts-for-react';
export const Br = () => {
  var series = [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      stack: 'a',
      name: 'a',
      itemStyle:{
            
            color:'rgb(38,57,114)'
        },
      },
      {
        data: [10, 46, 64, '-', 0, '-', 0],
        type: 'bar',
        stack: 'a',
        name: 'b',
        itemStyle:{
          color:' rgb(108,132,206)'
          
        },
      },
      {
        data: [30, '-', 0, 20, 10, '-', 0],
        type: 'bar',
        stack: 'a',
        name: 'c',
        itemStyle:{
        color:' rgb(63,93,188)'
              
      },
    },
    {
      data: [30, '-', 0, 20, 10, '-', 0],
      type: 'bar',
      stack: 'b',
      name: 'd',
      itemStyle:{
        color:' rgb(56,84,169)'
        
      },
    },
  {
    data: [10, 20, 150, 0, '-', 50, 10],
    type: 'bar',
      stack: 'b',
      name: 'e',
      itemStyle:{
    color:' rgb(48,71,143)'
              
    },
    }
  ];
  const stackInfo = {};
  for (let i = 0; i < series[0].data.length; ++i) {
    for (let j = 0; j < series.length; ++j) {
      const stackName = series[j].stack;
      if (!stackName) {
        continue;
      }
      if (!stackInfo[stackName]) {
        stackInfo[stackName] = {
          stackStart: [],
          stackEnd: []
        };
      }
      const info = stackInfo[stackName];
      const data = series[j].data[i];
      if (data && data !== '-') {
        if (info.stackStart[i] == null) {
          info.stackStart[i] = j;
        }
        info.stackEnd[i] = j;
      }
    }
  }
  for (let i = 0; i < series.length; ++i) {
    const data = series[i].data;
    const info = stackInfo[series[i].stack];
    for (let j = 0; j < series[i].data.length; ++j) {
      // const isStart = info.stackStart[j] === i;
      const isEnd = info.stackEnd[j] === i;
      const topBorder = isEnd ? 20 : 0;
      const bottomBorder = 0;
      data[j] = {
        value: data[j],
        itemStyle: {
          borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
        }
      };
    }
  }
  const option = {
    tooltip:{
      show:true
    },
    Title:{
      text:'Users Activity'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel:{
        color:'rgb(12,20,77)',
        padding:[
            0,0,0,0
        ]

    },
  },
  yAxis: {
    axisLabel:{
      color:'rgb(12,20,77)',
      padding:[
          0,0,0,0
      ]
  
  },
    type: 'value'
    },
    series:series,
    legend:{
      show:true,
      
  },
    // series:{
    //
      
    // }
  };
  return (
    <ReactECharts option={option}  style={{ position:'relative',top:'12%',left:'3%',height: '400px',width:'100%' }} />
  )
}
