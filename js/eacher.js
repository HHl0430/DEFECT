
$(function () {
    var render = function () {
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
                top: "80",
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                // boundaryGap: false,
                // axisLabel: {
                //     interval: 0,
                //     rotate: 90
                // },
                // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                data: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2',
                    '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '3.0', '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8', '3.9', '4.0',
                    '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '5.0', '5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '6.0', '6.1',
                    '6.2', '6.3', '6.4', '6.5', '6.6', '6.7', '6.8', '6.9', '7.0', '7.1', '7.2', '7.3', '7.4', '7.5', '7.6', '7.7', '7.8', '7.9', '8.0']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    markPoint: {
                        data: [
                            // { name: 'Defect1', value: -2, xAxis: 2.1, yAxis: -1.5 },
                            { name: 'Defect1', value: 'Si', xAxis: 20, yAxis: 225 },
                            { name: 'Defect1', value: 'Sn', xAxis: 36, yAxis: 130 }
                        ]
                    },
                    symbolSize: 7,
                    connectNulls: true,
                    name: 'Defect1',
                    symbol: 'none',
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'red' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'red' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    type: 'line',
                    stack: '总量',
                    // itemStyle: {
                    //     normal: {
                    //         lineStyle: {
                    //             color: '#ccc',
                    //             width: 3
                    //         }
                    //     }
                    // },1
                    data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                        10, 11, 12, 13, 14, 15, 17, 18, 19, 20,
                        225, 20, 20, 19, 18, 17, 16, 15, 14, 13,
                        12, 12, 14, 12, 12, 12, 130, 12, 14, 14,
                        12, 12, 14, 12, 12, 12, 12, 12, 14, 14,
                        12, 12, 14, 12, 12, 12, 12, 12, 14, 14,
                        12, 12, 14, 12, 12, 12, 12, 12, 14, 14,
                        12, 12, 14, 12, 12, 12, 12, 12, 14, 14,]
                },

            ]
        };
        var myChart = echarts.init(document.getElementById('defect_chart4_b'));
        myChart.setOption(option);

        var option1 = {
            title: {
                text: 'Product1,layer1,DOI2,2019.04.16-2019.05.15',
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
                data: ['Defect4'],
                x: 'center',
                y: '30',
            },
            grid: {
                top: "80",
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
                    'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30', 'A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
                    'A06_W#8_2019-05-03', 'A07_W#1_2019-05-04', 'A07_W#6_2019-05-05', 'A07_W#1_2019-05-06', 'A08_W#1_2019-05-07',
                    'A08_W#6_2019-05-08', 'A08_W#8_2019-05-09', 'A09_W#1_2019-05-10', 'A09_W#6_2019-05-11', 'A09_W#8_2019-05-12',
                    'A10_W#1_2019-05-13', 'A10_W#2_2019-05-14', 'A10_W#8_2019-05-15', 'A10_W#3_2019-05-14', 'A10_W#4_2019-05-14']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {

                    symbolSize: 7,
                    connectNulls: true,
                    name: 'Defect4',
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
                    data: [2, 1, 2, 1, 1, 5, 2, 1, 1, 3, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 17, 1, 1, 1, 1, 1, 1, 2, 15, 1, 5, 2]
                },

            ]
        };
        var myChart = echarts.init(document.getElementById('defect_chart4_c'));
        myChart.setOption(option1);
    }
    $(document).on('click', '.box-tab ul li', function () {


        var $this = $(this).addClass('selected');
        var _index = $this.index();
        var $navs = $this.closest('.box-tab ul').find('li');
        var $contents = $('.box-chart-list li');
        var $item = $contents.eq(_index).addClass('selected');
        $navs.not($this).removeClass('selected');
        $contents.not($item).removeClass('selected');
        // console.log($('.box-tab ul li a').text(), $(this).children())
        $('.box-tab ul li a').each((i,e) => {
            $('.box-tab ul li').eq(i).removeClass('selected')
            if(e.text ===$(this).children().text() ) {
                $('.box-tab ul li').eq(i).addClass('selected')
            }
        })
        if ($(this).children().text() === 'Defect2') {

            $(".commonality").show()
            $(".commonality3").hide()
            $(".commonality2").hide()
            $(".commonality4").hide()
            $(".cd_tb_red").css({
                color: '#333'
            })

        } else if ($(this).children().text() === 'Defect1') {
            $(".commonality").hide()
            $(".commonality2").show()
            $(".commonality3").hide()
            $(".commonality4").hide()
            $(".cd_tb_red").css({
                color: 'red'
            })
        } else if ($(this).children().text() === 'Defect3') {
            $(".commonality").hide()
            $(".commonality3").show()
            $(".commonality2").hide()
            $(".commonality4").hide()
            $(".cd_tb_red").css({
                color: '#333'
            })
        } else {
            $(".commonality").hide()
            $(".commonality3").hide()
            $(".commonality2").hide()
            $(".commonality4").show()
            render()
        }
    });
    // $(".tog_box li").on("click", function () {
    //     $(this).siblings().removeClass("active");
    //     $(this).addClass("active");
    //     var ar = '.' + $(this).attr("data-type");
    //     $(this).parents('.box').find('.box-content').hide();
    //     $(ar).show()
    // })
})


$(function () {
    $(".cd_tb_red").css({
        color: 'red'
    })
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
            top: "80",
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
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30', 'A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
                'A06_W#8_2019-05-03', 'A07_W#1_2019-05-04', 'A07_W#6_2019-05-05', 'A07_W#8_2019-05-06', 'A08_W#1_2019-05-07',
                'A08_W#6_2019-05-08', 'A08_W#8_2019-05-09', 'A09_W#2_2019-05-10', 'A09_W#6_2019-05-11', 'A09_W#8_2019-05-12',
                'A10_W#1_2019-05-13', 'A10_W#1_2019-05-14', 'A10_W#2_2019-05-14']
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
                data: [2, 1, 2, 1, 5, 1, 2, 1, 1, 1, 1, 2, 4, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 5, 1, 2, 2, 15, 1]
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
            text: 'Product1,layer1,DOI1,2019.04.16-2019.05.15_step 0110',
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
            data: ['E11-1 ChamberA', 'E11-1 ChamberB', 'E11 ChamberA', 'E11 ChamberB'],
            x: 'center',
            y: '30',
        },
        grid: {
            top: "80",
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
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30', 'A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
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
                name: 'E11-1 ChamberA',
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
                name: 'E11-1 ChamberB',
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
                name: 'E11 ChamberA',
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
                name: 'E11 ChamberB',
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
        option.title.text = 'Product1,layer1,DOI1,2019.04.16-2019.05.15_step ' + $(".change_select option:selected").text()
        switch ($(".change_select option:selected").text()) {
            case '0200':
                option.legend.data = ['E20-1 ChamberA', 'E20-1 ChamberB', 'E20 ChamberA', 'E20 ChamberB']
                option.series[0].name = 'E20-1 ChamberA'
                option.series[1].name = 'E20-1 ChamberB'
                option.series[2].name = 'E20 ChamberA'
                option.series[3].name = 'E20 ChamberB'
                break;
            case '0190':
                option.legend.data = ['E19-1 ChamberA', 'E19-1 ChamberB', 'E19 ChamberA', 'E19 ChamberB']
                option.series[0].name = 'E19-1 ChamberA'
                option.series[1].name = 'E19-1 ChamberB'
                option.series[2].name = 'E19 ChamberA'
                option.series[3].name = 'E19 ChamberB'
                break;
            case '0180':
                option.legend.data = ['E18-1 ChamberA', 'E18-1 ChamberB', 'E18 ChamberA', 'E18 ChamberB']
                option.series[0].name = 'E18-1 ChamberA'
                option.series[1].name = 'E18-1 ChamberB'
                option.series[2].name = 'E18 ChamberA'
                option.series[3].name = 'E18 ChamberB'
                break;
            case '0170':
                option.legend.data = ['E17-1 ChamberA', 'E17-1 ChamberB', 'E17 ChamberA', 'E17 ChamberB']
                option.series[0].name = 'E17-1 ChamberA'
                option.series[1].name = 'E17-1 ChamberB'
                option.series[2].name = 'E17 ChamberA'
                option.series[3].name = 'E17 ChamberB'
                break;
            case '0160':
                option.legend.data = ['E16-1 ChamberA', 'E16-1 ChamberB', 'E16 ChamberA', 'E16 ChamberB']
                option.series[0].name = 'E16-1 ChamberA'
                option.series[1].name = 'E16-1 ChamberB'
                option.series[2].name = 'E16 ChamberA'
                option.series[3].name = 'E16 ChamberB'
                break;
            case '0150':
                option.legend.data = ['E15-1 ChamberA', 'E15-1 ChamberB', 'E15 ChamberA', 'E15 ChamberB']
                option.series[0].name = 'E15-1 ChamberA'
                option.series[1].name = 'E15-1 ChamberB'
                option.series[2].name = 'E15 ChamberA'
                option.series[3].name = 'E15 ChamberB'
                break;
            case '0140':
                option.legend.data = ['E14-1 ChamberA', 'E14-1 ChamberB', 'E14 ChamberA', 'E14 ChamberB']
                option.series[0].name = 'E14-1 ChamberA'
                option.series[1].name = 'E14-1 ChamberB'
                option.series[2].name = 'E14 ChamberA'
                option.series[3].name = 'E14 ChamberB'
                break;
            case '0130':
                option.legend.data = ['E13-1 ChamberA', 'E13-1 ChamberB', 'E13 ChamberA', 'E13 ChamberB']
                option.series[0].name = 'E13-1 ChamberA'
                option.series[1].name = 'E13-1 ChamberB'
                option.series[2].name = 'E13 ChamberA'
                option.series[3].name = 'E13 ChamberB'
                break;
            case '0120':
                option.legend.data = ['E12-1 ChamberA', 'E12-1 ChamberB', 'E12 ChamberA', 'E12 ChamberB']
                option.series[0].name = 'E12-1 ChamberA'
                option.series[1].name = 'E12-1 ChamberB'
                option.series[2].name = 'E12 ChamberA'
                option.series[3].name = 'E12 ChamberB'
                break;
            case '0110':
                option.legend.data = ['E11-1 ChamberA', 'E11-1 ChamberB', 'E11 ChamberA', 'E11 ChamberB']
                option.series[0].name = 'E11-1 ChamberA'
                option.series[1].name = 'E11-1 ChamberB'
                option.series[2].name = 'E11 ChamberA'
                option.series[3].name = 'E11 ChamberB'
                break;
            default:
                console.log(333)
        }
        // if ($(".change_select option:selected").text() === '0200') {

        // }
        setTimeout(() => {
            var myChart = echarts.init(document.getElementById(`${'main2' + num}`));
            myChart.setOption(option);
        }, 100);
    })
})



$(function () {
    var option = {
        title: {
            text: 'Product1,layer1,DOI2,2019.04.16-2019.05.15',
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
            data: ['Defect4'],
            x: 'center',
            y: '30',
        },
        grid: {
            top: "80",
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
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30', 'A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
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
                name: 'Defect4',
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
    var myChart = echarts.init(document.getElementById('defect_chart4'));
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
            text: 'Product1,layer1,DOI1,2019.04.16-2019.05.15_Step 0110',
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
            data: ['E11 ChamberA', 'E11 ChamberB', 'E11-1 ChamberA', 'E11-1 ChamberB'],
            x: 'center',
            y: '30',
        },
        grid: {

            top: "80",
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
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30', 'A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
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
                name: 'E11 ChamberA',
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
                name: 'E11 ChamberB',
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
                name: 'E11-1 ChamberA',
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
                name: 'E11-1 ChamberB',
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
    var myChart = echarts.init(document.getElementById('defect_chart4_a'));
    myChart.setOption(option);
    $("body").on("click", ".main_rem", function () {
        $(this).parents('.main_box').remove()
    })
    $(".addChart4").on("click", function () {
        var num = new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
        $(this).parents(".box-content-chart").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main4' + num}'></div> </div>`)
        // var myChart1 = echarts.init(document.getElementById(`${'main' + num}`));
        // myChart1.setOption(option);
        option.title.text = 'Product1,layer1,DOI1,2019.04.16-2019.05.15_step ' + $(".change_select2 option:selected").text()
        switch ($(".change_select2 option:selected").text()) {
            case '0200':
                option.legend.data = ['E20-1 ChamberA', 'E20-1 ChamberB', 'E20 ChamberA', 'E20 ChamberB']
                option.series[0].name = 'E20-1 ChamberA'
                option.series[1].name = 'E20-1 ChamberB'
                option.series[2].name = 'E20 ChamberA'
                option.series[3].name = 'E20 ChamberB'
                break;
            case '0190':
                option.legend.data = ['E19-1 ChamberA', 'E19-1 ChamberB', 'E19 ChamberA', 'E19 ChamberB']
                option.series[0].name = 'E19-1 ChamberA'
                option.series[1].name = 'E19-1 ChamberB'
                option.series[2].name = 'E19 ChamberA'
                option.series[3].name = 'E19 ChamberB'
                break;
            case '0180':
                option.legend.data = ['E18-1 ChamberA', 'E18-1 ChamberB', 'E18 ChamberA', 'E18 ChamberB']
                option.series[0].name = 'E18-1 ChamberA'
                option.series[1].name = 'E18-1 ChamberB'
                option.series[2].name = 'E18 ChamberA'
                option.series[3].name = 'E18 ChamberB'
                break;
            case '0170':
                option.legend.data = ['E17-1 ChamberA', 'E17-1 ChamberB', 'E17 ChamberA', 'E17 ChamberB']
                option.series[0].name = 'E17-1 ChamberA'
                option.series[1].name = 'E17-1 ChamberB'
                option.series[2].name = 'E17 ChamberA'
                option.series[3].name = 'E17 ChamberB'
                break;
            case '0160':
                option.legend.data = ['E16-1 ChamberA', 'E16-1 ChamberB', 'E16 ChamberA', 'E16 ChamberB']
                option.series[0].name = 'E16-1 ChamberA'
                option.series[1].name = 'E16-1 ChamberB'
                option.series[2].name = 'E16 ChamberA'
                option.series[3].name = 'E16 ChamberB'
                break;
            case '0150':
                option.legend.data = ['E15-1 ChamberA', 'E15-1 ChamberB', 'E15 ChamberA', 'E15 ChamberB']
                option.series[0].name = 'E15-1 ChamberA'
                option.series[1].name = 'E15-1 ChamberB'
                option.series[2].name = 'E15 ChamberA'
                option.series[3].name = 'E15 ChamberB'
                break;
            case '0140':
                option.legend.data = ['E14-1 ChamberA', 'E14-1 ChamberB', 'E14 ChamberA', 'E14 ChamberB']
                option.series[0].name = 'E14-1 ChamberA'
                option.series[1].name = 'E14-1 ChamberB'
                option.series[2].name = 'E14 ChamberA'
                option.series[3].name = 'E14 ChamberB'
                break;
            case '0130':
                option.legend.data = ['E13-1 ChamberA', 'E13-1 ChamberB', 'E13 ChamberA', 'E13 ChamberB']
                option.series[0].name = 'E13-1 ChamberA'
                option.series[1].name = 'E13-1 ChamberB'
                option.series[2].name = 'E13 ChamberA'
                option.series[3].name = 'E13 ChamberB'
                break;
            case '0120':
                option.legend.data = ['E12-1 ChamberA', 'E12-1 ChamberB', 'E12 ChamberA', 'E12 ChamberB']
                option.series[0].name = 'E12-1 ChamberA'
                option.series[1].name = 'E12-1 ChamberB'
                option.series[2].name = 'E12 ChamberA'
                option.series[3].name = 'E12 ChamberB'
                break;
            case '0110':
                option.legend.data = ['E11-1 ChamberA', 'E11-1 ChamberB', 'E11 ChamberA', 'E11 ChamberB']
                option.series[0].name = 'E11-1 ChamberA'
                option.series[1].name = 'E11-1 ChamberB'
                option.series[2].name = 'E11 ChamberA'
                option.series[3].name = 'E11 ChamberB'
                break;
            default:
                console.log(333)
        }
        setTimeout(() => {
            var myChart = echarts.init(document.getElementById(`${'main4' + num}`));
            myChart.setOption(option);
        }, 100);
    })
    $(".addChart0").on("click", function () {
        var num = new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
        $(this).parents(".box-content-chart").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main4' + num}'></div> </div>`)
        option.title.text = 'Product1,layer1,DOI1,2019.04.16-2019.05.15_step ' + $(".change_select4 option:selected").text()
        switch ($(".change_select4 option:selected").text()) {
            case '0200':
                option.legend.data = ['E20-1 ChamberA', 'E20-1 ChamberB', 'E20 ChamberA', 'E20 ChamberB']
                option.series[0].name = 'E20-1 ChamberA'
                option.series[1].name = 'E20-1 ChamberB'
                option.series[2].name = 'E20 ChamberA'
                option.series[3].name = 'E20 ChamberB'
                break;
            case '0190':
                option.legend.data = ['E19-1 ChamberA', 'E19-1 ChamberB', 'E19 ChamberA', 'E19 ChamberB']
                option.series[0].name = 'E19-1 ChamberA'
                option.series[1].name = 'E19-1 ChamberB'
                option.series[2].name = 'E19 ChamberA'
                option.series[3].name = 'E19 ChamberB'
                break;
            case '0180':
                option.legend.data = ['E18-1 ChamberA', 'E18-1 ChamberB', 'E18 ChamberA', 'E18 ChamberB']
                option.series[0].name = 'E18-1 ChamberA'
                option.series[1].name = 'E18-1 ChamberB'
                option.series[2].name = 'E18 ChamberA'
                option.series[3].name = 'E18 ChamberB'
                break;
            case '0170':
                option.legend.data = ['E17-1 ChamberA', 'E17-1 ChamberB', 'E17 ChamberA', 'E17 ChamberB']
                option.series[0].name = 'E17-1 ChamberA'
                option.series[1].name = 'E17-1 ChamberB'
                option.series[2].name = 'E17 ChamberA'
                option.series[3].name = 'E17 ChamberB'
                break;
            case '0160':
                option.legend.data = ['E16-1 ChamberA', 'E16-1 ChamberB', 'E16 ChamberA', 'E16 ChamberB']
                option.series[0].name = 'E16-1 ChamberA'
                option.series[1].name = 'E16-1 ChamberB'
                option.series[2].name = 'E16 ChamberA'
                option.series[3].name = 'E16 ChamberB'
                break;
            case '0150':
                option.legend.data = ['E15-1 ChamberA', 'E15-1 ChamberB', 'E15 ChamberA', 'E15 ChamberB']
                option.series[0].name = 'E15-1 ChamberA'
                option.series[1].name = 'E15-1 ChamberB'
                option.series[2].name = 'E15 ChamberA'
                option.series[3].name = 'E15 ChamberB'
                break;
            case '0140':
                option.legend.data = ['E14-1 ChamberA', 'E14-1 ChamberB', 'E14 ChamberA', 'E14 ChamberB']
                option.series[0].name = 'E14-1 ChamberA'
                option.series[1].name = 'E14-1 ChamberB'
                option.series[2].name = 'E14 ChamberA'
                option.series[3].name = 'E14 ChamberB'
                break;
            case '0130':
                option.legend.data = ['E13-1 ChamberA', 'E13-1 ChamberB', 'E13 ChamberA', 'E13 ChamberB']
                option.series[0].name = 'E13-1 ChamberA'
                option.series[1].name = 'E13-1 ChamberB'
                option.series[2].name = 'E13 ChamberA'
                option.series[3].name = 'E13 ChamberB'
                break;
            case '0120':
                option.legend.data = ['E12-1 ChamberA', 'E12-1 ChamberB', 'E12 ChamberA', 'E12 ChamberB']
                option.series[0].name = 'E12-1 ChamberA'
                option.series[1].name = 'E12-1 ChamberB'
                option.series[2].name = 'E12 ChamberA'
                option.series[3].name = 'E12 ChamberB'
                break;
            case '0110':
                option.legend.data = ['E11-1 ChamberA', 'E11-1 ChamberB', 'E11 ChamberA', 'E11 ChamberB']
                option.series[0].name = 'E11-1 ChamberA'
                option.series[1].name = 'E11-1 ChamberB'
                option.series[2].name = 'E11 ChamberA'
                option.series[3].name = 'E11 ChamberB'
                break;
            default:
                console.log(333)
        }
        setTimeout(() => {
            var myChart = echarts.init(document.getElementById(`${'main4' + num}`));
            myChart.setOption(option);
        }, 100);
    })
})



$(function () {
    var option = {
        title: {
            text: 'Product1,layer1,DOI1,2019.04.16-2019.05.15_Step 0110',
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
            data: ['EQP-E11 ChamberA', 'EQP-E11 ChamberB'],
            x: 'center',
            y: '30',
        },
        grid: {
            top: "80",
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
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30', 'A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
                'A06_W#8_2019-05-03', 'A06_W#9_2019-05-04', 'A07_W#6_2019-05-05', 'A07_W#1_2019-05-06', 'A08_W#1_2019-05-07',
                'A08_W#6_2019-05-08', 'A08_W#8_2019-05-09', 'A09_W#1_2019-05-10', 'A09_W#6_2019-05-11', 'A09_W#8_2019-05-12',
                'A10_W#1_2019-05-13', 'A10_W#6_2019-05-14', 'A10_W#8_2019-05-15']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                markPoint: {
                    // data: [
                    //     // { name: 'Defect1', value: -2, xAxis: 2.1, yAxis: -1.5 },
                    //     { name: 'Defect1', value: 'PM', xAxis: 18, yAxis: 0 },
                    //     { name: 'Defect1', value: 'PM', xAxis: 26, yAxis: 0 },
                    // ]
                },
                symbolSize: 7,
                connectNulls: true,
                name: 'EQP-E11 ChamberA',
                type: 'line',
                data: [2, null, 2, null, 1, null, 2, null, 1, null, 1, null, 1, null, 1, null, 1, null, 0, null, 22, null, 1, null, 1, null, 0, null, 14, null]
            },
            {
                markPoint: {
                    // data: [
                    //     { name: 'Defect1', value: 'PM', xAxis: 5, yAxis: 1 },
                    //     { name: 'Defect1', value: 'PM', xAxis: 8, yAxis: 1 },
                    // ]
                },
                symbolSize: 7,
                connectNulls: true,
                name: 'EQP-E11 ChamberB',
                type: 'line',
                // itemStyle: {
                //     normal: {
                //         lineStyle: {
                //             color: '#ccc',
                //             width: 3
                //         }
                //     }
                // },
                data: [null, 1, null, 1, null, 1, null, 1, null, 1, null, 2, null, 1, null, 1, null, 2, null, 1, null, 1, null, 1, null, 1, null, 1, null, 1]
            },

        ]
    };

    var myChart = echarts.init(document.getElementById('main5'));
    myChart.setOption(option);
    $(".show_pm").on("click", function () {
        option.series[0].markPoint = {
            data: [
                // { name: 'Defect1', value: -2, xAxis: 2.1, yAxis: -1.5 },
                { name: 'Defect1', value: 'PM', xAxis: 18, yAxis: 0 },
                { name: 'Defect1', value: 'PM', xAxis: 26, yAxis: 0 },
            ]
        }
        option.series[1].markPoint = {
            data: [
                { name: 'Defect1', value: 'PM', xAxis: 5, yAxis: 1 },
                { name: 'Defect1', value: 'PM', xAxis: 8, yAxis: 1 },
            ]
        }
        var myChart = echarts.init(document.getElementById('main5'));
        myChart.setOption(option);
    })
    $("body").on("click", ".main_rem", function () {
        $(this).parents('.main_box').remove()
    })
    $(".addChart5").on("click", function () {
        var num = new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
        $(this).parents(".box-content-chart").append(`<div class='main_box'><span class='main_rem'>Remove</span><div class="main" id='${'main5' + num}'></div> </div>`)

        // var myChart1 = echarts.init(document.getElementById(`${'main' + num}`));
        // myChart1.setOption(option);
        option.title.text = 'Product1,layer1,DOI1,2019.04.16-2019.05.15_step ' + $(".change_select3 option:selected").text()
        switch ($(".change_select3 option:selected").text()) {
            case '0200':
                option.legend.data = ['E20 ChamberA', 'E20 ChamberB']
                option.series[0].name = 'E20 ChamberA'
                option.series[1].name = 'E20 ChamberB'
                // option.series[2].name = 'E20 ChamberA'
                // option.series[3].name = 'E20 ChamberB'
                break;
            case '0190':
                option.legend.data = ['E19 ChamberA', 'E19 ChamberB']
                option.series[0].name = 'E19 ChamberA'
                option.series[1].name = 'E19 ChamberB'
                break;
            case '0180':
                option.legend.data = ['E18 ChamberA', 'E18 ChamberB']
                option.series[0].name = 'E18 ChamberA'
                option.series[1].name = 'E18 ChamberB'
                break;
            case '0170':
                option.legend.data = ['E17 ChamberA', 'E17 ChamberB']
                option.series[0].name = 'E17 ChamberA'
                option.series[1].name = 'E17 ChamberB'
                break;
            case '0160':
                option.legend.data = ['E16 ChamberA', 'E16 ChamberB']
                option.series[0].name = 'E16 ChamberA'
                option.series[1].name = 'E16 ChamberB'
                break;
            case '0150':
                option.legend.data = ['E15 ChamberA', 'E15 ChamberB']
                option.series[0].name = 'E15 ChamberA'
                option.series[1].name = 'E15 ChamberB'
                break;
            case '0140':
                option.legend.data = ['E14 ChamberA', 'E14 ChamberB']
                option.series[0].name = 'E14 ChamberA'
                option.series[1].name = 'E14 ChamberB'
                break;
            case '0130':
                option.legend.data = ['E13 ChamberA', 'E13 ChamberB']
                option.series[0].name = 'E13 ChamberA'
                option.series[1].name = 'E13 ChamberB'
                break;
            case '0120':
                option.legend.data = ['E12 ChamberA', 'E12 ChamberB']
                option.series[0].name = 'E12 ChamberA'
                option.series[1].name = 'E12 ChamberB'
                break;
            case '0110':
                option.legend.data = ['E11 ChamberA', 'E11 ChamberB']
                option.series[0].name = 'E11 ChamberA'
                option.series[1].name = 'E11 ChamberB'
                break;
            default:
                console.log(333)
        }
        setTimeout(() => {
            var myChart = echarts.init(document.getElementById(`${'main5' + num}`));
            myChart.setOption(option);
        }, 100);
    })
})





$(function () {
    var option = {
        title: {
            text: 'Product1,layer1,DOI3,2019.04.16-2019.05.15',
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
            data: ['defect3'],
            x: 'center',
            y: '30',
        },
        grid: {

            top: "80",
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
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30', 'A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
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
                name: 'defect3',
                type: 'line',
                stack: '总量',
                data: [2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 0, 1, 22, 1, 1, 1, 1, 1, 0, 1, 14, 1, 1]
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



$(function () {
    var
        option = {
            title: {
                text: 'Product1,layer1,DOI1,Step1,2019.04.16-2019.05.15',
                x: 'center',
                y: '0',
                textStyle: {
                    fontSize: 14
                }
            },
            legend: {
                data: ['E11-1 ChamberA', 'E11-1 ChamberB', 'E11 ChamberA', 'E11 ChamberB'],
                x: 'center',
                y: '30',
            },

            tooltip: {
                trigger: 'axis'
            },



            xAxis: {
                data: ['E11-1 ChamberA', 'E11-1 ChamberB', 'E11 ChamberA', 'E11 ChamberB'],
            },
            yAxis: {
                type: 'value'

            },



            series: [{
                type: 'k',
                data: [
                    [20, 30, 10, 45],
                    [40, 35, 30, 55],
                    [33, 38, 23, 40],
                    [40, 50, 32, 62]
                ],
                tooltip: {
                    formatter: function (param) {
                        return [
                            'Experiment ' + param.name + ': ',
                            'upper: ' + param.data[5],
                            'Q3: ' + param.data[4],
                            'median: ' + param.data[3],
                            'Q1: ' + param.data[2],
                            'lower: ' + param.data[1]
                        ].join('<br/>');
                    }
                }
            },]
        };





    var myChart = echarts.init(document.getElementById('myChart2'));
    myChart.setOption(option);
    $("body").on("click", ".main_rem", function () {
        $(this).parents('.main_box').remove()
    })

})

$(function () {


})

























