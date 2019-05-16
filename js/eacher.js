 

$(document).on('click', '.box-tab ul li', function()
{


    var $this = $(this).addClass('selected');
    var _index = $this.index();
    var $navs = $this.closest('.box-tab ul').find('li');
    var $contents = $('.box-chart-list li');
    var $item = $contents.eq(_index).addClass('selected');
    $navs.not( $this ).removeClass('selected');
    $contents.not( $item ).removeClass('selected');

});


$(function () {
    var option = {
        title: {
            text: 'Product1,layer1,DOI1,2019.04.16-2019.05.15',
            x: 'center',
            y: '0',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Defect1'],
            x: 'center',
            y: '30',
        },
        grid: {
            top:"80",
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: 90
            },
            // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            data: ['A01_W#1_2019-04-16', 'A01_W#8_2019-04-17',
                'A01_W#8_2019-04-18', 'A02_W#1_2019-04-19', 'A02_W#6_2019-04-20', 'A02_W#8_2019-04-21', 'A03_W#1_2019-04-22',
                'A03_W#6_2019-04-23', 'A03_W#6_2019-04-24', 'A04_W#1_2019-04-25', 'A04_W#6_2019-04-26', 'A04_W#8_2019-04-27',
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30','A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
                'A06_W#8_2019-05-03', 'A07_W#1_2019-05-04', 'A07_W#6_2019-05-05', 'A07_W#8_2019-05-06', 'A08_W#1_2019-05-07',
                'A08_W#6_2019-05-08', 'A08_W#8_2019-05-09', 'A09_W#2_2019-05-10', 'A09_W#6_2019-05-11', 'A09_W#8_2019-05-12',
                'A10_W#1_2019-05-13', 'A10_W#1_2019-05-14', 'A10_W#8_2019-05-15']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                 
                symbolSize: 7,
                connectNulls: true,
                name: 'Defect1',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [2, 1, 2, 1, 5, 1, 2, 1, 1, 1, 1, 2, 4, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 18, 1, 2, 2, 15, 1]
            },
            
        ]
    };

    var myChart = echarts.init(document.getElementById('main1'));
    myChart.setOption(option);
    $("body").on("click", ".main_rem", function () {
        $(this).parents('.main_box').remove()
    })
    $(".addChart1").on("click", function () {
        var num = new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
        $(this).parents(".box-content-chart").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main1' + num}'></div> </div>`)
        // var myChart1 = echarts.init(document.getElementById(`${'main' + num}`));
        // myChart1.setOption(option);
        setTimeout(() => {
            var myChart = echarts.init(document.getElementById(`${'main1' + num}`));
            myChart.setOption(option);
        }, 100);
    })
})





$(function () {
    var option = {
        title: {
            text: 'Product1,layer1,DOI1,2019.04.16-2019.05.15',
            x: 'center',
            y: '0',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['机台1 ChamberA', '机台1 ChamberB','机台2 ChamberA','机台2 ChamberB'],
            x: 'center',
            y: '30',
        },
        grid: {
            top:"80",
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: 90
            },
            // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            data: ['A01_W#1_2019-04-16', 'A01_W#8_2019-04-17',
                'A01_W#8_2019-04-18', 'A02_W#1_2019-04-19', 'A02_W#6_2019-04-20', 'A02_W#8_2019-04-21', 'A03_W#1_2019-04-22',
                'A03_W#6_2019-04-23', 'A03_W#6_2019-04-24', 'A04_W#1_2019-04-25', 'A04_W#6_2019-04-26', 'A04_W#8_2019-04-27',
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30','A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
                'A06_W#8_2019-05-03', 'A07_W#1_2019-05-04', 'A07_W#6_2019-05-05', 'A07_W#8_2019-05-06', 'A08_W#1_2019-05-07',
                'A08_W#6_2019-05-08', 'A08_W#8_2019-05-09', 'A09_W#1_2019-05-10', 'A09_W#6_2019-05-11', 'A09_W#8_2019-05-12',
                'A10_W#1_2019-05-13', 'A10_W#6_2019-05-14', 'A10_W#8_2019-05-15']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                 
                symbolSize: 7,
                connectNulls: true,
                name: '机台1 ChamberA',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [2, null, null, null, 5, null, null, null, 3, null, null, null, 4, null, null, null, 4, null, null, null, 3, null, null, null, 18, null, null, null, 15, null, null]
            },
            {
                
                symbolSize: 7,
                connectNulls: true,
                name: '机台1 ChamberB',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [null, 1, null, null, null, 2, null, null, null, 1, null, null, null, 1, null, null, null, 2, null, null, null, 1, null, null, null, 1, null, null, null, 1]
            },
            {
                 
                symbolSize: 7,
                connectNulls: true,
                name: '机台2 ChamberA',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [null, null, 2, null, null, null, 2, null, null, null, 1, null, null, null, 2, null, null, null, 1, null, null, null, 1, null, null, null, 2, null, null, null]
            },
            {
                 
                symbolSize: 7,
                connectNulls: true,
                name: '机台2 ChamberB',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 2, null, null, null]
            },
        ]
    };

    var myChart = echarts.init(document.getElementById('main2'));
    myChart.setOption(option);
    $("body").on("click", ".main_rem", function () {
        $(this).parents('.main_box').remove()
    })
    $(".addChart2").on("click", function () {
        var num = new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
        $(this).parents(".box-content-chart").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main2' + num}'></div> </div>`)
        // var myChart1 = echarts.init(document.getElementById(`${'main' + num}`));
        // myChart1.setOption(option);
        setTimeout(() => {
            var myChart = echarts.init(document.getElementById(`${'main2' + num}`));
            myChart.setOption(option);
        }, 100);
    })
})



$(function () {
    var option = {
        title: {
            text: 'Product1,layer1,DOI1,2019.04.16-2019.05.15',
            x: 'center',
            y: '0',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Defect2'],
            x: 'center',
            y: '30',
        },
        grid: {
            top:"80",
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: 90
            },
            // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            data: ['A01_W#1_2019-04-16', 'A01_W#8_2019-04-17',
                'A01_W#8_2019-04-18', 'A02_W#1_2019-04-19', 'A02_W#6_2019-04-20', 'A02_W#8_2019-04-21', 'A03_W#1_2019-04-22',
                'A03_W#6_2019-04-23', 'A03_W#6_2019-04-24', 'A04_W#1_2019-04-25', 'A04_W#6_2019-04-26', 'A04_W#8_2019-04-27',
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30','A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
                'A06_W#8_2019-05-03', 'A07_W#1_2019-05-04', 'A07_W#6_2019-05-05', 'A07_W#1_2019-05-06', 'A08_W#1_2019-05-07',
                'A08_W#6_2019-05-08', 'A08_W#8_2019-05-09', 'A09_W#1_2019-05-10', 'A09_W#6_2019-05-11', 'A09_W#8_2019-05-12',
                'A10_W#1_2019-05-13', 'A10_W#2_2019-05-14', 'A10_W#8_2019-05-15']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                 
                symbolSize: 7,
                connectNulls: true,
                name: 'Defect2',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [2, 1, 2, 1, 1, 5, 2, 1, 1, 3, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 17, 1, 1, 1, 1, 1, 1, 2, 15, 1]
            },
            
        ]
    };

    var myChart = echarts.init(document.getElementById('main3'));
    myChart.setOption(option);
    $("body").on("click", ".main_rem", function () {
        $(this).parents('.main_box').remove()
    })
    $(".addChart3").on("click", function () {
        var num = new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
        $(this).parents(".box-content-chart").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main3' + num}'></div> </div>`)
        // var myChart1 = echarts.init(document.getElementById(`${'main' + num}`));
        // myChart1.setOption(option);
        setTimeout(() => {
            var myChart = echarts.init(document.getElementById(`${'main3' + num}`));
            myChart.setOption(option);
        }, 100);
    })
})





$(function () {
    var option = {
        title: {
            text: 'Product1,layer1,DOI1,2019.04.16-2019.05.15',
            x: 'center',
            y: '0',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['机台1 ChamberA', '机台1 ChamberB','机台2 ChamberA','机台2 ChamberB'],
            x: 'center',
            y: '30',
        },
        grid: {

            top:"80",
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: 90
            },
            // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            data: ['A01_W#1_2019-04-16', 'A01_W#8_2019-04-17',
                'A01_W#8_2019-04-18', 'A02_W#1_2019-04-19', 'A02_W#6_2019-04-20', 'A02_W#8_2019-04-21', 'A03_W#1_2019-04-22',
                'A03_W#6_2019-04-23', 'A03_W#6_2019-04-24', 'A04_W#1_2019-04-25', 'A04_W#6_2019-04-26', 'A04_W#8_2019-04-27',
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30','A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
                'A06_W#8_2019-05-03', 'A07_W#1_2019-05-04', 'A07_W#6_2019-05-05', 'A07_W#1_2019-05-06', 'A08_W#1_2019-05-07',
                'A08_W#6_2019-05-08', 'A08_W#8_2019-05-09', 'A09_W#1_2019-05-10', 'A09_W#6_2019-05-11', 'A09_W#8_2019-05-12',
                'A10_W#1_2019-05-13', 'A10_W#2_2019-05-14', 'A10_W#8_2019-05-15']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                 
                symbolSize: 7,
                connectNulls: true,
                name: '机台1 ChamberA',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [2, null, null, null, 5, null, null, null, 4, null, null, null, 4, null, null, null, 3, null, null, null, 17, null, null, null, 3, null, null, null, 15, null, null]
            },
            {
                
                symbolSize: 7,
                connectNulls: true,
                name: '机台1 ChamberB',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [null, 1, null, null, null, 2, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 0]
            },
            {
                 
                symbolSize: 7,
                connectNulls: true,
                name: '机台2 ChamberA',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [null, null, 2, null, null, null, 2, null, null, null, 1, null, null, null, 2, null, null, null, 1, null, null, null, 1, null, null, null, 2, null, null, null]
            },
            {
                 
                symbolSize: 7,
                connectNulls: true,
                name: '机台2 ChamberB',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 2, null, null, null]
            },
        ]
    };

    var myChart = echarts.init(document.getElementById('main4'));
    myChart.setOption(option);
    $("body").on("click", ".main_rem", function () {
        $(this).parents('.main_box').remove()
    })
    $(".addChart4").on("click", function () {
        var num = new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
        $(this).parents(".box-content-chart").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main4' + num}'></div> </div>`)
        // var myChart1 = echarts.init(document.getElementById(`${'main' + num}`));
        // myChart1.setOption(option);
        setTimeout(() => {
            var myChart = echarts.init(document.getElementById(`${'main4' + num}`));
            myChart.setOption(option);
        }, 100);
    })
})



$(function () {
    var option = {
        title: {
            text: 'Product1,layer1,DOI1,2019.04.16-2019.05.15',
            x: 'center',
            y: '0',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Defect3'],
            x: 'center',
            y: '30',
        },
        grid: {
            top:"80",
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: 90
            },
            // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            data: ['A01_W#1_2019-04-16', 'A01_W#8_2019-04-17',
                'A01_W#8_2019-04-18', 'A02_W#1_2019-04-19', 'A02_W#6_2019-04-20', 'A02_W#8_2019-04-21', 'A03_W#1_2019-04-22',
                'A03_W#6_2019-04-23', 'A03_W#6_2019-04-24', 'A04_W#1_2019-04-25', 'A04_W#6_2019-04-26', 'A04_W#8_2019-04-27',
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30','A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
                'A06_W#8_2019-05-03', 'A06_W#9_2019-05-04', 'A07_W#6_2019-05-05', 'A07_W#1_2019-05-06', 'A08_W#1_2019-05-07',
                'A08_W#6_2019-05-08', 'A08_W#8_2019-05-09', 'A09_W#1_2019-05-10', 'A09_W#6_2019-05-11', 'A09_W#8_2019-05-12',
                'A10_W#1_2019-05-13', 'A10_W#6_2019-05-14', 'A10_W#8_2019-05-15']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                 
                symbolSize: 7,
                connectNulls: true,
                name: 'Defect3',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 22, 1, 1, 1, 1, 1, 1, 1, 14, 1]
            },
            
        ]
    };

    var myChart = echarts.init(document.getElementById('main5'));
    myChart.setOption(option);
    $("body").on("click", ".main_rem", function () {
        $(this).parents('.main_box').remove()
    })
    $(".addChart5").on("click", function () {
        var num = new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
        $(this).parents(".box-content-chart").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main5' + num}'></div> </div>`)
        // var myChart1 = echarts.init(document.getElementById(`${'main' + num}`));
        // myChart1.setOption(option);
        setTimeout(() => {
            var myChart = echarts.init(document.getElementById(`${'main5' + num}`));
            myChart.setOption(option);
        }, 100);
    })
})





$(function () {
    var option = {
        title: {
            text: 'Product1,layer1,DOI1,2019.04.16-2019.05.15',
            x: 'center',
            y: '0',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['机台1 ChamberA', '机台1 ChamberB','机台2 ChamberA','机台2 ChamberB'],
            x: 'center',
            y: '30',
        },
        grid: {

            top:"80",
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 0,
                rotate: 90
            },
            // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            data: ['A01_W#1_2019-04-16', 'A01_W#8_2019-04-17',
                'A01_W#8_2019-04-18', 'A02_W#1_2019-04-19', 'A02_W#6_2019-04-20', 'A02_W#8_2019-04-21', 'A03_W#1_2019-04-22',
                'A03_W#6_2019-04-23', 'A03_W#6_2019-04-24', 'A04_W#1_2019-04-25', 'A04_W#6_2019-04-26', 'A04_W#8_2019-04-27',
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30','A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
                'A06_W#8_2019-05-03', 'A07_W#1_2019-05-04', 'A07_W#6_2019-05-05', 'A07_W#1_2019-05-06', 'A08_W#1_2019-05-07',
                'A08_W#6_2019-05-08', 'A08_W#8_2019-05-09', 'A09_W#1_2019-05-10', 'A09_W#6_2019-05-11', 'A09_W#8_2019-05-12',
                'A10_W#1_2019-05-13', 'A10_W#2_2019-05-14', 'A10_W#8_2019-05-15']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                 
                symbolSize: 7,
                connectNulls: true,
                name: '机台1 ChamberA',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [2, null, null, null, 4, null, null, null, 3, null, null, null, 5, null, null, null, 4, null, null, null, 22, null, null, null, 3, null, null, null, 14, null, null]
            },
            {
                
                symbolSize: 7,
                connectNulls: true,
                name: '机台1 ChamberB',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1]
            },
            {
                 
                symbolSize: 7,
                connectNulls: true,
                name: '机台2 ChamberA',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [null, null, 2, null, null, null, 2, null, null, null, 1, null, null, null, 2, null, null, null, 1, null, null, null, 1, null, null, null, 2, null, null, null]
            },
            {
                 
                symbolSize: 7,
                connectNulls: true,
                name: '机台2 ChamberB',
                type: 'line',
                stack: '总量',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null]
            },
        ]
    };

    var myChart = echarts.init(document.getElementById('main6'));
    myChart.setOption(option);
    $("body").on("click", ".main_rem", function () {
        $(this).parents('.main_box').remove()
    })
    $(".addChart6").on("click", function () {
        var num = new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
        $(this).parents(".box-content-chart").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main6' + num}'></div> </div>`)
        // var myChart1 = echarts.init(document.getElementById(`${'main' + num}`));
        // myChart1.setOption(option);
        setTimeout(() => {
            var myChart = echarts.init(document.getElementById(`${'main6' + num}`));
            myChart.setOption(option);
        }, 100);
    })
})