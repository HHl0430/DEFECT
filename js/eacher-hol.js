
$(function () {
    var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['Layer1','Layer2','DOI1','DOI2']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Reference Lot','WWk1','WWk12','WWk3','WWk4','WWk5','WWk6']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                
                 {
                    name:'Layer1',
                    type:'bar',
                    barWidth : 50,
                    stack: 'Product',
                    color:'#eb4848',
                    data:[340, 162, 141, 174, 90, 240, 220]
                },
                {
                    name:'Layer2',
                    type:'bar',
                    stack: 'Product',
                    color:'#64c828',
                    data:[280, 182, 191, 234, 290, 330, 290]
                },
                {
                    name:'DOI1',
                    type:'bar',
                    stack: 'Product',
                    color:'#fead2e',
                    data:[250, 232, 201, 154, 190, 330, 320]
                },
                {
                    name:'DOI2',
                    type:'bar',
                    stack: 'Product',
                    color:'#30a5ff',
                    data:[380, 232, 201, 154, 190, 330, 240]
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
                data:['Layer1','Layer2','DOI1','DOI2']
            },
            grid: {
                left: '3%',
                right: '4%',
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
                    type : 'value'
                }
            ],
            series : [
                
                {
                    name:'Layer1',
                    type:'bar',
                    barWidth : 50,
                    stack: 'Product',
                    color:'#eb4848',
                    data:[340, 162, 141, 174, 90, 240, 220]
                },
                {
                    name:'Layer2',
                    type:'bar',
                    stack: 'Product',
                    color:'#64c828',
                    data:[280, 182, 191, 234, 290, 330, 290]
                },
                {
                    name:'DOI1',
                    type:'bar',
                    stack: 'Product',
                    color:'#fead2e',
                    data:[250, 232, 201, 154, 190, 330, 320]
                },
                {
                    name:'DOI2',
                    type:'bar',
                    stack: 'Product',
                    color:'#30a5ff',
                    data:[380, 232, 201, 154, 190, 330, 240]
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
