
$(function () {
    var option = {
        title: {
            text: 'Peoduct1,layer1,DOI1,2019.04.01-2019.02.12',
             
            x: 'center',
            y: 'top',
            textStyle: {
                fontSize: 16
            }
        },
        tooltip: {
            trigger: 'axis'
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            data: ['Lot 1_W#1_2019-04-01', 'Lot 1_W#1_2019-04-02',
                'Lot 1_W#1_2019-04-03', 'Lot 1_W#1_2019-04-04', 'Lot 1_W#1_2019-04-05', 'Lot 1_W#1_2019-04-06', 'Lot 1_W#1_2019-04-07',
                'Lot 1_W#1_2019-04-08', 'Lot 1_W#1_2019-04-09', 'Lot 1_W#1_2019-04-10', 'Lot 1_W#1_2019-04-11', 'Lot 1_W#1_2019-04-12',]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                symbol: 'circle',
                symbolSize: 7,
                name: '',
                type: 'line',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#1c92ed',
                        lineStyle: {
                            color: '#ccc',
                            width: 3
                        }
                    }
                },
                data: [38, 28, 41, 32, 34, 45, 39, 24, 23, 26, 43, 31]
            },
        ]
    };
   
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(option);
    $("body").on("click",".main_rem",function() {
        $(this).parents('.main_box').remove()
    })
    $(".addChart").on("click", function () {
        var len = $(".chart-box-content").children().length
        $(".chart-box-content").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main' + len}'></div> </div>`)
        var myChart1 = echarts.init(document.getElementById(`${'main' + len}`));
        myChart1.setOption(option);
    })
})
