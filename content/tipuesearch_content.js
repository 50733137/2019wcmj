var tipuesearch = {"pages": [{'title': '期末報告', 'text': '', 'tags': '', 'url': '期末報告.html'}, {'title': '期中報告', 'text': '\n \n', 'tags': '', 'url': '期中報告.html'}, {'title': '虛擬主機', 'text': '\n \n \n', 'tags': '', 'url': '虛擬主機.html'}, {'title': '圖片', 'text': '\n \n', 'tags': '', 'url': '圖片.html'}, {'title': 'Button', 'text': '<p><button onclick="myFunction()">Try it</button></p>\n<p id="demo"></p>\n<script>// <![CDATA[\nfunction myFunction() {\n  document.getElementById("demo").innerHTML = Math.floor(Math.random()*51);\n}\n// ]]></script>\n \n Try it \n \n \n', 'tags': '', 'url': 'Button.html'}, {'title': 'ROC\xa0 flag', 'text': '<!-- 導入 Brython 標準程式庫 -->\n<p>\n<script src="/static/brython.js"></script>\n<script src="/static/brython_stdlib.js"></script>\n</p>\n<p></p>\n<!-- 啟動 Brython -->\n<p>\n<script>// <![CDATA[\nwindow.onload=function(){\n// 設定 data/py 為共用程式路徑\nbrython({debug:1, pythonpath:[\'./../data/py\']});\n}\n// ]]></script>\n</p>\n<p><canvas height="400" id="plotarea" width="600"></canvas></p>\n<p>\n<script type="text/python">// <![CDATA[\n# 導入 doc\nfrom browser import document as doc\nimport math\n  \n# 準備繪圖畫布\ncanvas = doc["plotarea"]\nctx = canvas.getContext("2d")\n# 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點\n# ctx.setTransform(1, 0, 0, -1, 0, canvas.height)\n# 以下採用 canvas 原始座標繪圖\nflag_w = canvas.width\nflag_h = canvas.height\ncircle_x = flag_w/4\ncircle_y = flag_h/4\n# 先畫滿地紅\nctx.fillStyle=\'rgb(255, 0, 0)\'\nctx.fillRect(0,0,flag_w,flag_h)\n# 再畫青天\nctx.fillStyle=\'rgb(0, 0, 150)\'\nctx.fillRect(0,0,flag_w/2,flag_h/2)\n# 畫十二道光芒白日\nctx.beginPath()\nstar_radius = flag_w/8\nangle = 0\nfor i in range(24):\n    angle += 5*math.pi*2/12\n    toX = circle_x + math.cos(angle)*star_radius\n    toY = circle_y + math.sin(angle)*star_radius\n    # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i):\n        ctx.lineTo(toX, toY)\n    else:\n        ctx.moveTo(toX, toY)\nctx.closePath()\n# 將填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n# 白日:藍圈\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為藍色\nctx.fillStyle = \'rgb(0, 0, 149)\'\nctx.fill()\n# 白日:白心\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n// ]]></script>\n</p>\n<p><canvas height="400" id="plotarea2" width="600"></canvas></p>\n<p>\n<script type="text/python">// <![CDATA[\n# 導入 doc\nfrom browser import document as doc\nimport math\n  \n# 準備繪圖畫布\ncanvas = doc["plotarea2"]\nctx = canvas.getContext("2d")\n# 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點\n# ctx.setTransform(1, 0, 0, -1, 0, canvas.height)\n# 以下採用 canvas 原始座標繪圖\nflag_w = canvas.width\nflag_h = canvas.height\ncircle_x = flag_w/4\ncircle_y = flag_h/4\n# 先畫滿地紅\nctx.fillStyle=\'rgb(255, 222, 173)\'\nctx.fillRect(0,0,flag_w,flag_h)\n# 再畫青天\nctx.fillStyle=\'rgb(0, 0, 150)\'\nctx.fillRect(0,0,flag_w/2,flag_h/2)\n# 畫十二道光芒白日\nctx.beginPath()\nstar_radius = flag_w/8\nangle = 0\nfor i in range(24):\n    angle += 5*math.pi*2/12\n    toX = circle_x + math.cos(angle)*star_radius\n    toY = circle_y + math.sin(angle)*star_radius\n    # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i):\n        ctx.lineTo(toX, toY)\n    else:\n        ctx.moveTo(toX, toY)\nctx.closePath()\n# 將填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n# 白日:藍圈\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為藍色\nctx.fillStyle = \'rgb(0, 0, 149)\'\nctx.fill()\n# 白日:白心\nctx.beginPath()\nctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True)\nctx.closePath()\n# 填色設為白色\nctx.fillStyle = \'#fff\'\nctx.fill()\n// ]]></script>\n</p> \n  導入 Brython 標準程式庫  \n \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'ROC\xa0 flag.html'}]};