
$(function () {
    var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['Layer1','Layer2','Layer3','Layer4']
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Reference Lot','WWk1','WWk12','WWk3','WWk4','WWk5','WWk6']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        formatter: '{value} %'
                    },
                }
            ],
            series : [
                
                 {
                    name:'Layer1',
                    type:'bar',
                    barWidth : 50,
                    stack: 'Product',
                    color:'#eb4848',
                     
                    data:[2, 2, 3, 2, 2, 2, 2]
                },
                {
                    name:'Layer2',
                    type:'bar',
                    stack: 'Product',
                    color:'#64c828',
                    data:[2, 3, 2, 3, 2, 2, 1]
                },
                {
                    name:'Layer3',
                    type:'bar',
                    stack: 'Product',
                    color:'#fead2e',
                    data:[1, 4, 3, 3, 3.5, 3, 2]
                },
                {
                    name:'Layer4',
                    type:'bar',
                    stack: 'Product',
                    color:'#30a5ff',
                    data:[2, 4, 4, 2, 2, 2, 2]
                },
                 
                
            ]
        };

    var option2 = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['Layer1','Layer2','Layer3','Layer4']
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Reference Lot','Lot1','Lot12','Lot3','Lot4','Lot5','Lot6']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        formatter: '{value} %'
                    },
                }
            ],
            series : [
                
                {
                    name:'Layer1',
                    type:'bar',
                    barWidth : 50,
                    stack: 'Product',
                    color:'#eb4848',

                    data:[2, 3, 2, 3, 2, 1, 2]
                },
                {
                    name:'Layer2',
                    type:'bar',
                    stack: 'Product',
                    color:'#64c828',
                    data:[1, 2, 2, 2, 2, 4, 3]
                },
                {
                    name:'Layer3',
                    type:'bar',
                    stack: 'Product',
                    color:'#fead2e',
                    data:[1, 4, 3, 3, 4, 2, 2]
                },
                {
                    name:'Layer4',
                    type:'bar',
                    stack: 'Product',
                    color:'#30a5ff',
                    data:[2, 4, 4, 2, 2, 2, 1]
                },
                 
                
            ]
        };


    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(option);

    var myChart2 = echarts.init(document.getElementById('main2'));
    myChart2.setOption(option2);


    $("body").on("click",".main_rem",function() {
        $(this).parents('.main_box').remove()
    })
    $(".addChart").on("click", function () {
        var len = $(".chart-box-content").children().length
        $(this).parents(".chart-box-content").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main' + len}'></div> </div>`)
        var myChart1 = echarts.init(document.getElementById(`${'main' + len}`));
        myChart1.setOption(option);
    })

    $(".addChart2").on("click", function () {
        var len = $(".chart-box-content").children().length
        $(this).parents(".chart-box-content").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main2' + len}'></div> </div>`)
        var myChart21 = echarts.init(document.getElementById(`${'main2' + len}`));
        myChart21.setOption(option2);
    })
})
