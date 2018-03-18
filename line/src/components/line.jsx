'use strict';
import React,{ PureComponent } from 'react';
// 引入 ECharts 主模块——必须
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


export default class Line extends PureComponent {


    render(){
        return(
            <div className="container">
                <div id="echarts-line" />
            </div>
        );
    }

    componentDidMount(){

        let myChart = echarts.init(document.getElementById("echarts-line"));
        myChart.showLoading({
            text: '正在努力的读取数据中...',
        });
        let xAxis = ['01.23', '01.24', '01.25', '01.26', '01.27', '01.28', '01.29',];
        let option = {
            xAxis: {
                type: 'category',
                data: xAxis,
                boundaryGap: ['10%', '10%',],//坐标轴两边留白
                axisLine: {//坐标轴
                    lineStyle:{
                        opacity: 0.01,//设置透明度就可以控制显示不显示X或者Y轴
                    },
                },
                splitLine: {//网格
                    // show: false,//网格线
                    lineStyle:{
                        color: '#eeeeee',
                    },
                },
                axisTick: {//刻度
                    show: false,//去掉刻度线
                    lineStyle:{
                        color: '#eeeeee',
                    },
                },
            },
            yAxis: {
                min:0,
                max:25,
                type: 'value',
                name:'℃         ',
                nameTextStyle: {
                    color:'#444e65',
                    align:'left',
                    verticalAlign:'middle',
                },
                axisTick: {//刻度
                    show: false,//去掉刻度线
                },
                axisLine: {//坐标轴
                    lineStyle:{
                        opacity: 0,
                    },
                },
                splitLine: {//网格
                    // show: false,//网格线
                    lineStyle:{
                        color: '#eeeeee',
                    },
                },
            },
            series: [{
                data: [15, 14, 10, 11, 14.58, 10, 11.5,],
                type: 'line',
                label: {//图形上的文本标签
                    normal:{
                        formatter: '{@data}℃',
                        show: true,//显示数据
                        color: '#00af58',
                        position: 'top',
                        fontSize:'14',
                    },
                },
                itemStyle: {//折线拐点标志的样式。
                    normal: {
                        color: '#00af58',
                    },
                },
                areaStyle: {//区域填充样式
                    normal:{
                        color: {
                            type:'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(0, 175, 88, 0.4)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0, 175, 88, 0.01)',
                                },
                            ],
                            globaCoord: false,
                        },
                    },
                },
            },],
        };
        myChart.setOption(option);
        myChart.hideLoading();
        window.addEventListener('resize', ()=>{
            this.onWindowResize(myChart);
        });
    }
    onWindowResize(myChart){
        myChart.resize();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }
}