import React from 'react'
import ReactECharts from 'echarts-for-react';
export const Bullet = () => {
   const option = {
        angleAxis: {
          axisLabel:{
            color:'rgb(12,20,77)',
            padding:[
                0,0,0,0
            ]
        
        },
        },
        title:{
            text:'Email Sent',
            show:true,
            textStyle:{
              color:"rgb(12,20,77)"
            }
        },
        tooltip:{
          show:true
        },
        radiusAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu'],
          z: 10,
          axisLabel:{
            color:'rgb(12,20,77)',
            padding:[
                0,0,0,0
            ]
        
        },
        },
        polar: {
          axisLabel:{
            color:'rgb(12,20,77)',
            padding:[
                0,0,0,0
            ]
        
        },
        },
        series: [
          {
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a',
            emphasis: {
              focus: 'series'
            },
            itemStyle:{
              color:' rgb(48,71,143)'
              // color:'rgb(38,57,114)'
                    
            },
          },
          {
            type: 'bar',
            data: [2, 4, 6, 8],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a',
            emphasis: {
              focus: 'series'
            },
            itemStyle:{
              color:' rgb(56,84,169)'
                    
            },
          },
          {
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a',
            emphasis: {
              focus: 'series'
            },
            itemStyle:{
              color:' rgb(108,132,206)'
                    
            },
            
          }
        ],
        legend: {
            left:'right',
          show: true,
          

        }
      };
  return (
     <ReactECharts option={option}  style={{ position:'relative',top:'12%',left:'1%',height: '400px',width:'100%' }} />
  )
}
