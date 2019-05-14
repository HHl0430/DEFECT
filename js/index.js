$(function () {
    var option = {
        title: {
            text: 'Peoduct1,layer1,DOI1,2019.04.01-2019.02.12',
            textAlign: 'center',
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
    var stepOption = {
        legend: {
            data: ['Current Step', 'Step1', 'Disappear']
        },
        xAxis: {
            type: 'category',
            data: ['Current Step', 'Step1', 'Disappear']

        },
        yAxis: {
            type: 'value'
        },
        series: [

            {
                barWidth: 20,
                stack: '总量',
                type: 'bar',
                data: [41, 36, 21]
            },
            {
                stack: '总量',
                width: '10%',
                type: 'bar',
                data: [0, 0, 21]
            }
        ]
    }

    $('.List li').on('click', function () {
        $(this).siblings().removeClass('cur')
        $(this).addClass('cur')
    })
    $(".model_btn").on("click", function () {
        var arr = [];
        $(".model_swich:checked").each(function () {
            arr.push($(this).val())
        })
        $("#dailog").show()
        arr.forEach(function (item) {
            var i = '.' + item;
            $(i).show()
        })
        var myCharta = echarts.init(document.getElementById('mein'));
        myCharta.setOption(option);
        // arr.foreach(function() {
        //     var cln = this;
        //     console.log(cln)
        // })
    })

    $(".a_d_tog").change(function (e) {
        console.log()
        var i = '.' + $(this).val()
        $(this).parents('.box-content').find('.y-axis').hide()
        $(this).parents('.box-content').find(i).show()
    })
    $(".more").on("click", function () {
        console.log(111)
        $("#more_dailog").show()
        var myCharta3 = echarts.init(document.getElementById('step'));
        myCharta3.setOption(stepOption);
    })
    $(".more-right li").on("click", function () {
        if ($(this).className() === 'li-box') {

        } else {
            $(this).siblings().removeClass()
            $(this).addClass("active")
            var src = $(this).find('img')[0].src
            var text = $(this).find('.text').text()
            $(".change_img").find("img").attr("src", src)
            $(".change_img").find(".text").text(text)
        }

    })

})