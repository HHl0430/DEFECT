$(function () {
    var dataInfo = []
    var oldArr, oldArr1
    //获取晶圆图数据
    $.ajax({
        type: "GET",
        url: 'http://52.81.23.55:8088/information/A0008',
        dataType: "json",
        success: function (data) {
            if (data.success) {
                dataInfo = data.data.infos

                //调用绘制canvas方法
                //第一个参数：晶圆图的数据 第二个参数：晶圆图的id 第三个参数：晶圆图的外层盒子 第四个参数：可以没有
                canvas(data.data.infos[0], 'canvas', '.chart-container1')
                canvas(data.data.infos[1], 'canvas1', '.chart-container2')
                //点击右边柱状图显示隐藏圆点
                $("body").on("click", '.bar-a', function () {
                    $(this).toggleClass("cur");
                    if ($(this).parents('.chart-container').find(".canvas").attr("id") == 'canvas') {
                        if ($(this).hasClass('cur')) {
                            //第一个参数：晶圆图的数据 第二个参数：晶圆图的id 第三个参数：晶圆图的外层盒子 第四个参数：用来存储改变过后的圆点
                            canvas(data.data.infos[0], 'canvas', '.chart-container1', { index: 0, operation: 'delete', oldArr })

                        } else {
                            canvas(data.data.infos[0], 'canvas', '.chart-container1', { index: 0, operation: 'add', oldArr })
                        }
                    } else if ($(this).parents('.chart-container').find(".canvas").attr("id") == 'canvas1') {
                        if ($(this).hasClass('cur')) {
                            canvas(data.data.infos[1], 'canvas1', '.chart-container1', { index: 0, operation: 'delete', oldArr1 })

                        } else {
                            canvas(data.data.infos[1], 'canvas1', '.chart-container1', { index: 0, operation: 'add', oldArr1 })
                        }
                    }

                })
                $("body").on("click", '.bar-b', function () {
                    $(this).toggleClass("cur");
                    if ($(this).parents('.chart-container').find(".canvas").attr("id") == 'canvas') {
                        if ($(this).hasClass('cur')) {
                            canvas(data.data.infos[0], 'canvas', '.chart-container1', { index: 1, operation: 'delete', oldArr })

                        } else {
                            canvas(data.data.infos[0], 'canvas', '.chart-container1', { index: 1, operation: 'add', oldArr })
                        }
                    } else if ($(this).parents('.chart-container').find(".canvas").attr("id") == 'canvas1') {
                        if ($(this).hasClass('cur')) {
                            canvas(data.data.infos[1], 'canvas1', '.chart-container1', { index: 1, operation: 'delete', oldArr1 })

                        } else {
                            canvas(data.data.infos[1], 'canvas1', '.chart-container1', { index: 1, operation: 'add', oldArr1 })
                        }
                    }

                })
                $("body").on("click", '.bar-c', function () {
                    $(this).toggleClass("cur");
                    if ($(this).parents('.chart-container').find(".canvas").attr("id") == 'canvas') {
                        if ($(this).hasClass('cur')) {
                            canvas(data.data.infos[0], 'canvas', '.chart-container1', { index: 2, operation: 'delete', oldArr })

                        } else {
                            canvas(data.data.infos[0], 'canvas', '.chart-container1', { index: 2, operation: 'add', oldArr })
                        }
                    } else if ($(this).parents('.chart-container').find(".canvas").attr("id") == 'canvas1') {
                        if ($(this).hasClass('cur')) {
                            canvas(data.data.infos[1], 'canvas1', '.chart-container1', { index: 2, operation: 'delete', oldArr1 })

                        } else {
                            canvas(data.data.infos[1], 'canvas1', '.chart-container1', { index: 2, operation: 'add', oldArr1 })
                        }
                    }
                })
                $("body").on("click", '.bar-d', function () {
                    $(this).toggleClass("cur");
                    if ($(this).parents('.chart-container').find(".canvas").attr("id") == 'canvas') {
                        if ($(this).hasClass('cur')) {
                            canvas(data.data.infos[0], 'canvas', '.chart-container1', { index: 3, operation: 'delete', oldArr })

                        } else {
                            canvas(data.data.infos[0], 'canvas', '.chart-container1', { index: 3, operation: 'add', oldArr })
                        }
                    } else if ($(this).parents('.chart-container').find(".canvas").attr("id") == 'canvas1') {
                        if ($(this).hasClass('cur')) {
                            canvas(data.data.infos[1], 'canvas1', '.chart-container1', { index: 3, operation: 'delete', oldArr1 })

                        } else {
                            canvas(data.data.infos[1], 'canvas1', '.chart-container1', { index: 3, operation: 'add', oldArr1 })
                        }
                    }
                })
                $("body").on("click", '.bar-e', function () {
                    $(this).toggleClass("cur");
                    if ($(this).parents('.chart-container').find(".canvas").attr("id") == 'canvas') {
                        if ($(this).hasClass('cur')) {
                            canvas(data.data.infos[0], 'canvas', '.chart-container1', { index: 4, operation: 'delete', oldArr })

                        } else {
                            canvas(data.data.infos[0], 'canvas', '.chart-container1', { index: 4, operation: 'add', oldArr })
                        }
                    } else if ($(this).parents('.chart-container').find(".canvas").attr("id") == 'canvas1') {
                        if ($(this).hasClass('cur')) {
                            canvas(data.data.infos[1], 'canvas1', '.chart-container1', { index: 4, operation: 'delete', oldArr1 })

                        } else {
                            canvas(data.data.infos[1], 'canvas1', '.chart-container1', { index: 4, operation: 'add', oldArr1 })
                        }
                    }
                })
            }
        },
        error: function (jqXHR) {
        }
    })

    function canvas(data, dom, defineBox, index) {
        var dieW //格子width
        var dieH//格子height
        var layout
        var drawData //存储计算后的圆点坐标
        var CUBE_WIDTH, CUBE_HEIGHT, CANVAS_WIDTH
        var drawList = []
        var infos = data
        drawList = infos.defectInfo.columns
        var canvas = document.getElementById(dom)
        var centerDieLocation = infos.waferInfo.centerDieLocation
        var POINT_ARRAY = []
        var centerDieLocationX = +centerDieLocation.x / 1000 * 2
        var centerDieLocationY = Math.floor(+centerDieLocation.y / 1000) * 2
        dieW = infos.waferInfo.dieLength
        dieH = infos.waferInfo.dieWidth
        layout = infos.waferInfo.dieLayout
        CUBE_WIDTH = Math.floor(dieW / 1000 * 2)
        CUBE_HEIGHT = Math.floor(dieH / 1000 * 2)
        //计算点的位置
        for (let i = 0; i < drawList.length; i++) {
            for (let j = 0; j < drawList[i].defectiveDies.length; j++) {
                POINT_ARRAY.push({
                    x: +drawList[i].defectiveDies[j].coord.x * +CUBE_WIDTH + Math.floor(+drawList[i].defectiveDies[j].location.x / 1000) * 2 + +centerDieLocationX,
                    y: +drawList[i].defectiveDies[j].coord.y * +CUBE_HEIGHT + Math.floor(+drawList[i].defectiveDies[j].location.y / 1000) * 2 + +centerDieLocationY,
                    status: i
                });
            }
        }
        drawData = POINT_ARRAY


        // 画布尺寸
        CANVAS_WIDTH = 600
        // 方块宽度（正方形）

        var POINT_RADIUS = 3 //坐标1为3像素
        var POINT_COLORS = ['#1eb97d', '#30a5ff', '#f87c0e', '#f83a0e']


        canvas.width = CANVAS_WIDTH
        canvas.height = CANVAS_WIDTH
        var ctx = canvas.getContext('2d')
        // 初始化坐标轴
        ctx.translate(CANVAS_WIDTH / 2, CANVAS_WIDTH / 2)
        // 圆弧
        function drawCircle(r) {
            // 第一个圆
            ctx.beginPath()
            ctx.strokeStyle = '#000'
            ctx.fillStyle = '#ccc'
            ctx.lineWidth = 1
            ctx.arc(0, 0, r / 2, 0, (Math.PI / 180) * 360, false) //x,y,radius,begin,end,是否逆时针
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
            // 第二个圆
            ctx.beginPath()
            ctx.strokeStyle = 'blue'
            ctx.arc(0, 0, r / 2 - 5, 0, (Math.PI / 180) * 360, false) //x,y,radius,begin,end,是否逆时针
            ctx.stroke()
            ctx.closePath()
        }
        // 绘制方块
        function drawCube(r, w, h, lay) {
            // 计算横向/纵向最多容纳多少个方块, 奇数或偶数
            ctx.strokeStyle = '#333'
            ctx.lineWidth = 1
            var centerDieLocationX = centerDieLocation.x / 1000 * 2
            var centerDieLocationY = centerDieLocation.y / 1000 * 2
            for (var i = 0; i < lay.length; i++) {
                if (outsideOfCircle(lay[i].x * w + centerDieLocationX, -lay[i].y * h - h - centerDieLocationY, w, h, r / 2)) {
                    ctx.strokeRect(lay[i].x * w + centerDieLocationX, -lay[i].y * h - h - centerDieLocationY, w, h)
                }
            }
        }
        //绘制圆点
        function drawPoint(arr, r, color) {
            for (var i = 0; i < arr.length; i++) {
                if (outsideOfCircle(arr[i].x, arr[i].y, CUBE_WIDTH, CUBE_HEIGHT, CANVAS_WIDTH / 2)) {
                    ctx.moveTo(-arr[i].x, -arr[i].y)
                    ctx.beginPath()
                    ctx.fillStyle = color[arr[i].status]
                    ctx.arc(arr[i].x, -arr[i].y, r, 0, (Math.PI / 180) * 360, true) //x,y,radius,begin,end,是否逆时针
                    ctx.fill()
                    ctx.closePath()
                }

            }
        }
        function outsideOfCircle(x, y, w, h, r) {
            r -= 5
            var point1 = { x: x, y: y }
            var point2 = { x: x + w, y: y }
            var point3 = { x: x, y: y + h }
            var point4 = { x: x + w, y: y + h }
            function calcDistance(point) {
                return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2)) < r
            }
            return calcDistance(point1) && calcDistance(point2) && calcDistance(point3) && calcDistance(point4)
        }
        //判断他是否点击了柱状图
        if (index) {
            //此处可以优化
            if (dom == 'canvas') {
                if (index.oldArr) {
                    arr1 = index.oldArr
                } else {
                    var arr1 = drawData
                }
                if (index.operation == 'delete') {
                    arr2 = drawData.filter(item => item.status == index.index);
                    arr1 = arr1.concat(arr2)
                    oldArr = arr1
                    drawCircle(CANVAS_WIDTH)
                    drawCube(CANVAS_WIDTH, CUBE_WIDTH, CUBE_HEIGHT, layout)
                    drawPoint(arr1, POINT_RADIUS, POINT_COLORS)
                } else {
                    var arr = arr1
                    arr = arr.filter(item => item.status !== index.index);
                    arr1 = arr
                    oldArr = arr1
                    drawCircle(CANVAS_WIDTH)
                    drawCube(CANVAS_WIDTH, CUBE_WIDTH, CUBE_HEIGHT, layout)
                    drawPoint(arr1, POINT_RADIUS, POINT_COLORS)
                }
            } else {
                if (index.oldArr1) {
                    newarr1 = index.oldArr1
                } else {
                    var newarr1 = drawData
                }
                if (index.operation == 'delete') {
                    oldarr2 = drawData.filter(item => item.status == index.index);
                    newarr1 = newarr1.concat(oldarr2)
                    oldArr1 = newarr1
                    drawCircle(CANVAS_WIDTH)
                    drawCube(CANVAS_WIDTH, CUBE_WIDTH, CUBE_HEIGHT, layout)
                    drawPoint(newarr1, POINT_RADIUS, POINT_COLORS)
                } else {
                    var arr = newarr1
                    arr = arr.filter(item => item.status !== index.index);
                    newarr1 = arr
                    oldArr1 = newarr1
                    drawCircle(CANVAS_WIDTH)
                    drawCube(CANVAS_WIDTH, CUBE_WIDTH, CUBE_HEIGHT, layout)
                    drawPoint(newarr1, POINT_RADIUS, POINT_COLORS)
                }
            }

        } else {
            //没有点击则第一次加载
            drawCircle(CANVAS_WIDTH)
            drawCube(CANVAS_WIDTH, CUBE_WIDTH, CUBE_HEIGHT, layout)
            drawPoint(POINT_ARRAY, POINT_RADIUS, POINT_COLORS)
            var array = []
            for (var i = 0; i < drawList.length; i++) {
                array.push(drawList[i].defectiveDies.length)
            }
            //获取最大值
            var max = Math.max.apply(null, array);
            //得到y轴每一格的数据
            var a = (max + 5 - max % 5) / 5
            //计算1是多少像素
            var ma = 40 / a
            ma = ma.toFixed(2)//2位小数
            var html1 = ''
            var html3 = ''
            var html4 = ''
            var classN = ['bar-a', 'bar-b', 'bar-c', 'bar-d', 'bar-e']//颜色
            for (var i = 0; i < drawList.length; i++) {
                html1 += ` <li class="${classN[i]} cur"><span style="height: ${ma * drawList[i].defectiveDies.length}px;"></span></li>`
                html3 += ` <li><span style="top: ${drawList[i].holdValue !== null ? -ma * drawList[i].holdValue - 8 : 0}px;">${(drawList[i].holdValue !== null ? drawList[i].holdValue : "")}</span></li>`
                html4 += `<li><span>${drawList[i].name}</span></li>`
            }
            var html2 = `
                            <li><span>${5 * a}</span></li>
                            <li><span>${4 * a}</span></li>
                            <li><span>${3 * a}</span></li>
                            <li><span>${2 * a}</span></li>
                            <li><span>${a}</span></li>
                            <li><span>0</span></li>`
            //将htmlappend到对应元素上
            $(defineBox).find('#ajax_chart').empty().append(html1)
            $(defineBox).find('#ajax_chart_y').empty().append(html2)
            $(defineBox).find('#hold_value').empty().append(html3)
            $(defineBox).find('#cylindrical').empty().append(html4)
        }


    }




})