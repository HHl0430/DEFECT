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
            type: 'scroll',
            show: true,
            data: ['Current Step', 'Common', 'Current Step Unique', 'Step3 Unique']
        },
        xAxis: {
            type: 'category',
            data: ['Current Step', 'Disappear']

        },
        yAxis: {
            type: 'value'
        },
        series: [

            {
                name: 'Current Step',
                barWidth: 20,
                stack: '总量',
                type: 'bar',
                data: [41, 0]
            },
            {
                name: 'Common',
                barWidth: 20,
                stack: '总量',
                type: 'bar',
                data: [0, 21]
            },
            {
                name: 'Current Step Unique',
                stack: '总量',
                width: '10%',
                type: 'bar',
                data: [0, -10]
            },
            ,
            {
                name: 'Step3 Unique',
                stack: '总量',
                width: '10%',
                type: 'bar',
                data: [0, 10]
            }
        ]
    }
    var trendOption = {
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
            data: ['A01_W#1_2019-04-16', 'A01_W#8_2019-04-17',
                'A01_W#8_2019-04-18', 'A02_W#1_2019-04-19', 'A02_W#6_2019-04-20', 'A02_W#8_2019-04-21', 'A03_W#1_2019-04-22',
                'A03_W#6_2019-04-23', 'A03_W#6_2019-04-24', 'A04_W#1_2019-04-25', 'A04_W#6_2019-04-26', 'A04_W#8_2019-04-27',
                'A05_W#8_2019-04-28', 'A05_W#6_2019-04-29', 'A05_W#8_2019-04-30', 'A06_W#1_2019-05-01', 'A06_W#6_2019-05-02',
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
                data: [2, 1, 2, 1, 5, 1, 2, 1, 1, 1, 1, 2, 4, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 18, 1, 2, 2, 15, 1]
            },

        ]
    };
    var crossOption = {
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
            data: ['机台1 ChamberA', '机台1 ChamberB', '机台2 ChamberA', '机台2 ChamberB'],
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
                name: '机台1 ChamberA',
                type: 'line',
                stack: '总量',
                data: [2, null, null, null, 5, null, null, null, 3, null, null, null, 4, null, null, null, 4, null, null, null, 3, null, null, null, 18, null, null, null, 15, null, null]
            },
            {
                symbolSize: 7,
                connectNulls: true,
                name: '机台1 ChamberB',
                type: 'line',
                stack: '总量',
                data: [null, 1, null, null, null, 2, null, null, null, 1, null, null, null, 1, null, null, null, 2, null, null, null, 1, null, null, null, 1, null, null, null, 1]
            },
            {
                symbolSize: 7,
                connectNulls: true,
                name: '机台2 ChamberA',
                type: 'line',
                stack: '总量',
                data: [null, null, 2, null, null, null, 2, null, null, null, 1, null, null, null, 2, null, null, null, 1, null, null, null, 1, null, null, null, 2, null, null, null]
            },
            {
                symbolSize: 7,
                connectNulls: true,
                name: '机台2 ChamberB',
                type: 'line',
                stack: '总量',
                data: [null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 1, null, null, null, 2, null, null, null]
            },
        ]
    };



    $('body').on('click', '.List li', function () {

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
            if (item === "trend_chart") {
                var myCharta = echarts.init(document.getElementById('mein'));
                myCharta.setOption(trendOption);
            }
            if (item === "cross_charts") {
                var myCharta2 = echarts.init(document.getElementById('mein2'));

                myCharta2.setOption(crossOption);
            }

        })
        // arr.foreach(function() {
        //     var cln = this;
        //     console.log(cln)
        // })
    })

    $(".a_d_tog").change(function (e) {
        var i = '.' + $(this).val()
        $(this).parents('.box-content').find('.chart2').hide()
        $(this).parents('.box-content').find(i).show()
    })

    $(".more").on("click", function () {
        $("#more_dailog").show()
        var myCharta3 = echarts.init(document.getElementById('step'));
        myCharta3.setOption(stepOption);
    })
    $(".more-left").on("click", function () {
        if ($(this).attr('class') === 'more-left active') {
            $(this).removeClass("active")
            list.map(item => {
                if (item.text === $(this).find('.text').text()) {
                    item.src = '';
                    item.text = "";
                }
            })
            render()
        } else {
            $(this).addClass("active")
            list[0].src = $(this).find('img')[0].src;
            list[0].text = $(this).find('.text').text();
            render()
        }
    })
    var list = [{
        src: './images/CurrentStep.png',
        text: 'Current Step',
        tableSrc: './images/CurrentConmmon.png',
        UniqueSrc: './images/CurrentUnique.png',
    },
    {
        src: './images/step1.png',
        text: 'Step1',
        tableSrc: './images/StepConmmon.png',
        UniqueSrc: './images/StepUnique.png',
    }]
    var defectRender = function () {
        $(".defect_right").empty()
        let defectHTML = `  <table style="width: 436px;text-align: center;">
        <thead>
            <tr>
                <th>location</th>
                <th>Step</th>
                <th>defect ID</th>
                <th>time</th>
                <th>image</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="2">7,8</td>
                <td>${list[0].text}</td>
                <td>22</td>
                <td>2019-04-30 12:00:00</td>
                <td id="mare_img"><img src="./images/WechatIMG119.jpeg" data-original="./images/WechatIMG119.jpeg" ></td>
            </tr>
            <tr>
                <td>${list[1].text}</td>
                <td>22</td>
                <td>2019-04-30 12:00:00</td>
                <td id="mare_img2"><img src="./images/WechatIMG120.jpeg" data-original="./images/WechatIMG120.jpeg" ></td>
            </tr>
            <tr>
                <td rowspan="2">5,6</td>
                <td>${list[0].text}</td>
                <td>22</td>
                <td>2019-04-30 12:00:00</td>
                <td id="mare_img3"><img src="./images/WechatIMG121.jpeg" data-original="./images/WechatIMG121.jpeg" ></td>
            </tr>
            <tr>
                <td>${list[1].text}</td>
                <td>22</td>
                <td>2019-04-30 12:00:00</td>
                <td id="mare_img4"><img src="./images/WechatIMG121.jpeg" data-original="./images/WechatIMG121.jpeg" ></td>
            </tr>
            <tr>
                <td rowspan="2">3,4</td>
                <td>${list[0].text}</td>
                <td>22</td>
                <td>2019-04-30 12:00:00</td>
                <td id="mare_img5"><img src="./images/WechatIMG122.jpeg" data-original="./images/WechatIMG122.jpeg" ></td>
            </tr>
            <tr>
                <td>${list[1].text}</td>
                <td>22</td>
                <td>2019-04-30 12:00:00</td>
                <td id="mare_img6"><img src="./images/WechatIMG122.jpeg" data-original="./images/WechatIMG122.jpeg" ></td>
            </tr>
           
        </tbody>
    </table>`

        $(".defect_right").append(defectHTML)
        var viewer = new Viewer(document.getElementById('mare_img'), {
            url: 'data-original'
        });
        var viewer2 = new Viewer(document.getElementById('mare_img2'), {
            url: 'data-original'
        });
        var viewer3 = new Viewer(document.getElementById('mare_img3'), {
            url: 'data-original'
        });
        var viewer4 = new Viewer(document.getElementById('mare_img4'), {
            url: 'data-original'
        });
        var viewer5 = new Viewer(document.getElementById('mare_img5'), {
            url: 'data-original'
        });
        var viewer6 = new Viewer(document.getElementById('mare_img6'), {
            url: 'data-original'
        });
    }
    defectRender()
    var render = function () {
        $(".enting_left").empty()
        $(".defect_left").empty()
        list.map(item => {
            let html = `<div style="width:50%;float: left;">
                    <img src="${item.src}" alt="">
                    <div class="text">${item.text}</div>
                </div>`
            $(".enting_left").append(html)
        })
        let tableHtml = `<table class="contrast">
        <tr>
            <td></td>
            <td>${list[0].text}</td>
            <td>${list[1].text}</td>
        </tr>
        <tr>
            <td>Conmmon</td>
            <td class="active"><img class="one" src="${list[0].tableSrc}" alt=""></td>
            <td><img class="two" src="${list[1].tableSrc}" alt=""></td>
        </tr>
        <tr>
            <td>Unique</td>
            <td><img class="thr" src="${list[0].UniqueSrc}" alt=""></td>
            <td><img class="five" src="${list[1].UniqueSrc}" alt=""></td>
        </tr>
    </table>`
        $(".defect_left").append(tableHtml)
        $(".more-right li").removeClass()
        $(".more-right li").each((index, element) => {
            list.map(item => {
                if (item.text === element.children[1].innerHTML) {
                    if (element.children[1].innerHTML === 'Step1') {
                        item.tableSrc = './images/StepConmmon.png'
                        item.UniqueSrc = './images/StepUnique.png'
                        stepOption.series = [
                            {
                                name: 'Current Step',
                                barWidth: 20,
                                stack: '总量',
                                type: 'bar',
                                data: [31, 26]
                            }, {
                                name: 'Common',
                                barWidth: 20,
                                stack: '总量',
                                type: 'bar',
                                data: [0, 26]
                            },
                            {
                                name: 'Current Step Unique',
                                stack: '总量',
                                width: '10%',
                                type: 'bar',
                                data: [0, -5]
                            },
                            ,
                            {
                                name: 'Step2 Unique',
                                stack: '总量',
                                width: '10%',
                                type: 'bar',
                                data: [0, 10]
                            }
                        ]
                        stepOption.legend = {
                            type: 'scroll',
                            show: true,
                            data: ['Current Step', 'Common', 'Current Step Unique', 'Step2 Unique']
                        }
                    } else {
                        item.tableSrc = './images/StepConmmon.png'
                        item.UniqueSrc = './images/StepUnique.png'
                        stepOption.series = [

                            {
                                name: 'Current Step',
                                barWidth: 20,
                                stack: '总量',
                                type: 'bar',
                                data: [41, 0]
                            },
                            {
                                name: 'Common',
                                barWidth: 20,
                                stack: '总量',
                                type: 'bar',
                                data: [0, 21]
                            },
                            {
                                name: 'Current Step Unique',
                                stack: '总量',
                                width: '10%',
                                type: 'bar',
                                data: [0, -10]
                            },
                            ,
                            {
                                name: 'Step Unique',
                                stack: '总量',
                                width: '10%',
                                type: 'bar',
                                data: [0, 10]
                            }
                        ]
                        stepOption.legend = {
                            type: 'scroll',
                            show: true,
                            data: ['Current Step', 'Common', 'Current Step Unique', 'Step Unique']
                        }
                    }
                    element.classList.add("active");
                } else {
                    // console.log(element)
                    // element.classList.remove("active");
                }
            })
        })
        if (list[0].src === '' && list[1].src === '') {
            $(".enting").hide();
            $(".defect").hide()
        } else {
            $(".enting").show();
            $(".defect").show()
        }
    }
    render()
    $(".more-right li").on("click", function () {
        if ($(this).attr('class') === 'active') {
            // $(this).removeClass("active")
            list.map(item => {
                if (item.text === $(this).find('.text').text()) {
                    item.src = '';
                    item.text = "";
                }
            })
            render()
            defectRender()
        } else {
            // $(this).siblings().removeClass()
            // $(this).addClass("active")
            if (list[0].text !== "") {
                list[1].src = $(this).find('img')[0].src;
                list[1].text = $(this).find('.text').text();
            } else {
                list[0].src = $(this).find('img')[0].src;
                list[0].text = $(this).find('.text').text();
            }

            render()
            defectRender()

            // var src = $(this).find('img')[0].src
            // var text = $(this).find('.text').text()
            // $(".change_img").find("img").attr("src", src)
            // $(".change_img").find(".text").text(text)
        }

    })
    var imgList = [
        {
            src: './images/WechatIMG125.jpeg'
        },
        {
            src: './images/WechatIMG126.jpeg'
        },
        {
            src: './images/WechatIMG127.jpeg'
        }
    ]
    var translationRender = function () {
        $(".translation_left table").empty()
        var html = `
        <tr  id="tran_img">
        <td ><img src="${imgList[0].src}" data-original="${imgList[0].src}" alt=""></td>
        <td ><img src="${imgList[1].src}" data-original="${imgList[1].src}" alt=""></td>
        <td ><img src="${imgList[2].src}" data-original="${imgList[2].src}" alt=""></td>
    </tr>`
        $(".translation_left table").append(html)
        var viewer4_d = new Viewer(document.getElementById('tran_img'), {
            url: 'data-original'
        });
    }
    translationRender()

    $("body").on("click", ".contrast img", function () {
        $(this).parent().siblings().removeClass("active")
        $(this).parents("tr").siblings().find('td').removeClass("active")
        $(this).parent().addClass("active")
        if ($(this).attr("class") === 'one') {
            imgList = [
                {
                    src: './images/WechatIMG123.jpeg'
                },
                {
                    src: './images/WechatIMG124.jpeg'
                },
                {
                    src: './images/WechatIMG125.jpeg'
                }
            ]
        } else if ($(this).attr("class") === 'two') {
            imgList = [
                {
                    src: './images/WechatIMG121.jpeg'
                },
                {
                    src: './images/WechatIMG122.jpeg'
                },
                {
                    src: './images/WechatIMG123.jpeg'
                }
            ]
        } else if ($(this).attr("class") === 'thr') {
            imgList = [
                {
                    src: './images/WechatIMG119.jpeg'
                },
                {
                    src: './images/WechatIMG120.jpeg'
                },
                {
                    src: './images/WechatIMG121.jpeg'
                }
            ]
        } else if ($(this).attr("class") === 'five') {
            imgList = [
                {
                    src: './images/WechatIMG127.jpeg'
                },
                {
                    src: './images/WechatIMG120.jpeg'
                },
                {
                    src: './images/WechatIMG125.jpeg'
                }
            ]
        }
        translationRender()
    })
    $(".hold-btn").on("click", function () {
        $(".hold_down").text("Done").removeClass("on-going")
    })
    $(".add-btn").on("click", function () {
        $(".down_text").text("Done").removeClass("on-going")
    })
    $(".donw_btn").on("click", function () {
        $(".relest_text").text("Done").removeClass("on-going")
    })
    $(".release_btn").on("click", function () {
        $(".add_text").text("Done").removeClass("on-going")
    })
    $(".show-left").on("click", function () {
        console.log($(this).attr('class').indexOf('showa'))
        if ($(this).attr('class').indexOf('showa') > -1) {
            $(this).removeClass('showa')
            $(".left-list").animate({ width: '400px' }, 300);
            $(".right-container").animate({ paddingLeft: '400px' }, 300);
            $(this).animate({ left: '470px' }, 300);
            $(this).text("收起")
        } else {
            $(this).addClass('showa')
            $(".left-list").animate({ width: 0 }, 300);
            $(".right-container").animate({ paddingLeft: '10px' }, 300);
            $(this).animate({ left: '100px' }, 300);
            $(this).text("展开")
        }


    })

    var issueList = 'step1'
    $(".issue_check").on("click", function () {
        issueList = $(this).val()
    })
    var issueRender = function () {
        $("#SEBox .summary_content").empty()
        if (issueList === 'step1') {
            var html = `  <ul>
            <li>
                <span class="summary_title">Defect1:</span>
                <span> #1-15(6) -D.D% 58%</span>
                <br>
                <span> #2-15(6) -D.D% 58%</span>
                <span>Defect1 suspect tool: Tool A</span>
            </li>
           
        </ul>`
        } else {
            var html = `  <ul>
          
            <li>
                <span class="summary_title">Defect2:</span>
                <span> #1-17(8) -D.D% 60%</span>
                <br>
                <span> #2-17(8) -D.D% 60%</span>
                <span>Defect2 suspect tool: Tool B</span>
            </li>
        </ul>`
        }
        $("#SEBox .summary_content").append(html)
    }
    $("#SEBtn").click(function () {
        $(".SEBox").show();
        issueRender()
    });
    var steps = 0
    var stepsList = [
        [
            'Defect Pareto runing ',
            '<br> Defect trend chart running'
        ],
        ['Lot History running'],
        [
            'Cross module running ',
            '<br> Commonality analysis running ',
            '<br> Correlation analysis running'
        ],
        [
            'Connect to MES hold lot running<br>',
            'Pull impact lots & Add scan running <br> ',
            'Tool xx down request running<br>',
            'Defect Notice Report running <br>',
            'DN issue running'
        ]
    ]
    var stepsList1 = [
        'AI 图像处理 done',
        'Defect Pareto done <br> Defect trend chart done',
        'Lot History done',
        'Cross module done <br> Commonality analysis done <br> Correlation analysis done',
        'Connect to MES hold lot done<br>Pull impact lots & Add scan done <br> Tool xx down request done<br>Defect Notice Report done <br> DN issue done',
    ]
    var renderSteps = function () {
        setTimeout(function () {
            if (steps > 3) {
                $(".steps li").css({ height: "120px" })
                $(".steps").find('li').eq(steps).find('.ball').css({
                    background: '#1c92ed'
                })
                $(".steps").find('li').eq(steps).find('.steps_exp').css({
                    transform: 'translateX(-20 %)'
                })
                $(".steps").find('li').eq(steps).find('.steps_exp').empty()
                $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList1[steps])



            } else {

                $(".steps").find('li').eq(steps).find('.ball').css({
                    background: '#1c92ed'
                })
                $(".steps").find('li').eq(steps).find('.line').css({
                    background: '#1c92ed'
                })
                $(".steps").find('li').eq(steps).find('.steps_exp').empty()
                $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList1[steps])
                steps += 1;
                if (steps == 1) {
                    $(".steps li").css({ height: "60px" })
                    $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList[steps - 1][0])
                    setTimeout(() => {
                        $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList[steps - 1][1])
                    }, 500)
                } else if (steps == 2) {
                    $(".al").show()
                    $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList[steps - 1][0])
                    setTimeout(() => {
                        $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList[steps - 1][1])
                    }, 500)
                }
                else if (steps == 3) {
                    $(".steps li").css({ height: "80px" })
                    $(".lot_hostory").show()
                    $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList[steps - 1][0])
                    setTimeout(() => {
                        $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList[steps - 1][1])
                        setTimeout(() => {
                            $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList[steps - 1][2])
                        }, 500)
                    }, 500)
                } else if (steps == 4) {
                    $(".steps li").css({ height: "120px" })
                    $(".steps").find('li').eq(steps).find('.steps_exp').css({
                        transform: 'translateX(-20%)'
                    })
                    $(".steps-charts").show()
                    $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList[steps - 1][0])
                    setTimeout(() => {
                        $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList[steps - 1][1])
                        setTimeout(() => {
                            $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList[steps - 1][2])
                            setTimeout(() => {
                                $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList[steps - 1][3])
                                setTimeout(() => {
                                    $(".steps").find('li').eq(steps).find('.steps_exp').append(stepsList[steps - 1][4])
                                }, 500)
                            }, 500)
                        }, 500)
                    }, 500)
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


                    $(".cd_tb_red").css({
                        color: 'red'
                    })

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

                    var option = {
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

                }


                renderSteps()
            }

        }, 3000)
    }
    renderSteps()
    // console.log($(".steps").find('li').eq(1))
    // setTimeout(function () {
    //     $(".steps").children(":first").find('.line').css({
    //         background: '#1c92ed'
    //     })
    //     $(".steps").children(":first").find('.steps_exp').text('down')
    // }, 3000)


    {
        [
            {
                code: 'A',
                name: '',
                data: [
                    { x: 'a', y: 'd' },
                    { x: 'a', y: 'd' }
                ]
            },
            {
                code: 'A',
                name: '',
                data: [
                    { x: 'a', y: 'd' },
                    { x: 'a', y: 'd' }
                ]
            }
        ]
    }
})