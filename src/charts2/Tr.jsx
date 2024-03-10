import React from 'react'
import ReactECharts from 'echarts-for-react';

export const Tr = () => {
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
        xAxisData.push('A' + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    const option = {
        title: {
            text: 'Investasion Data',
            textStyle:{
                color:'rgb(12,20,77)',
                // padding: [
                //     0,  // up
                //     0, // right
                //     0,  // down
                //     0, // left
                // ]
            }
            // top:'top',
            // textVerticalAlign: 'top',
            // itemGap:10,
            
        },
        itemStyle:{
            
            color:'rgb(12,20,77)'
        },
        legend: {
            data: ['Mounth', 'Year'],
            left: 'right',
            orient: 'vertical',
            align: 'left',
            padding: [
                0,  // up
                40, // right
                0,  // down
                0, // left
            ]
        },

        tooltip: {},
        xAxis: {
            data: xAxisData,
            splitLine: {
                show: false
            },
            axisLabel:{
                color:'rgb(12,20,77)',
                padding:[
                    10,0,0,0
                ]

            },

           
        },
        yAxis: {
            axisLabel:{
                color:'rgb(12,20,77)',
                padding:[
                    0,10,0,0
                ]

            },

        },
        series: [
            {
                name: 'Mounth',
                type: 'bar',
                data: data1,
               
                textStyle:{
                    color:'red'
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle:{
            
                    color:'rgb(12,20,77)'
                },
                animationDelay: function (idx) {
                    return idx * 10;
                }
            },
            {
                name: 'Year',
                type: 'bar',
                data: data2,
                emphasis: {
                    focus: 'series'
                },
                itemStyle:{
            
                    color:' rgb(52,82,205)'
                },
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    return (
        <ReactECharts option={option} style={{ position: 'relative', top: '0.7%', left: '2%', height: '544px', width: '100%' }} />
    )
}
