
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
            axisLabel: {
                interval: 0,
                rotate: 20
            },
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
    $("body").on("click", ".main_rem", function () {
        $(this).parents('.main_box').remove()
    })
    $(".addChart").on("click", function () {
        var num = new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
        $(".out_box").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main' + num}'></div> </div>`)
        // var myChart1 = echarts.init(document.getElementById(`${'main' + num}`));
        // myChart1.setOption(option);
        setTimeout(() => {
            var myChart = echarts.init(document.getElementById(`${'main' + num}`));
            myChart.setOption(option);
        }, 100);
    })
})
