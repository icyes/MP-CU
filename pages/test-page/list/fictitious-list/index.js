let item_height = 80
let visiable = true
let listItem = []
let windowShowMax = 0 //屏幕最多可以方多少个

Page({
  data: {
    list: [],
    afterHeight: 0,
    beforeheight: 0,
    windowsShowList: [], /// 屏幕展示的list
    windowsShowTop: 0,
  },
  onReady() {
    listItem = [
      {
        'path': 'https://www.163.com/dy/article/G1OBC8LO0514BCL4.html',
        'image': 'http://dingyue.ws.126.net/2021/0201/b63f2e50j00qntwfh0020c000hs00npg.jpg?imageView&thumbnail=140y88&quality=85',
        'title': '被指偷拿半卷卫生纸 63岁女洗碗工服药自杀 酒店回应',
        'passtime': '2021-02-02 10:00:51'
      },
      {
        'path': 'https://www.163.com/dy/article/G1O1Q9Q2053469M5.html',
        'image': 'http://cms-bucket.ws.126.net/2021/0201/9860dbd3p00qntxlo00iqc000s600e3c.png?imageView&thumbnail=140y88&quality=85',
        'title': '警方通报＂19岁女大学生学车后失联＂:已遇害 全力侦办',
        'passtime': '2021-02-02 10:00:51'
      },
      {
        'path': 'https://news.163.com/21/0201/10/G1OAFSJR0001899O.html',
        'image': 'http://cms-bucket.ws.126.net/2021/0201/9c211c79p00qnu1ff00h8c000s600e3c.png?imageView&thumbnail=140y88&quality=85',
        'title': '缅军方接管政权 副总统敏瑞任代总统 白宫紧急回应',
        'passtime': '2021-02-02 10:00:51'
      },
      {
        'path': 'https://www.163.com/dy/article/G1QQ2KIT051482MP.html',
        'image': 'http://bjnewsrec-cv.ws.126.net/little61377fe4179p00qnvo3n00ded200u000fwg00it009y.jpg?imageView&thumbnail=140y88&quality=85',
        'title': '孙小果母亲讲述经历：＂我老公从没有没办成的事儿＂',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1QLGSGT0514BE2Q.html',
        'image': 'http://dingyue.ws.126.net/2021/0202/25b0f9dcj00qnvkdk002fc000u000k3m.jpg?imageView&thumbnail=140y88&quality=85',
        'title': '安徽名酒产地地下水告急：打井五六百米才出水',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1QEU32V0530WJTO.html',
        'image': 'http://cms-bucket.ws.126.net/2021/0202/63f82051j00qnvnfx000kc0009c0070c.jpg?imageView&thumbnail=140y88&quality=85',
        'title': '＂21天集中隔离＂＂截车劝返＂ 几个书记市长＂加码＂被问责',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1QNE1PS0534P59R.html',
        'image': 'http://bjnewsrec-cv.ws.126.net/little45066bfe643p00qnvlyp00f5c000fa00afg.jpg?imageView&thumbnail=140y88&quality=85',
        'title': '在缅华人目睹当地人抢购大米 提醒别穿＂红绿色＂衣服',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://money.163.com/21/0202/07/G1QK102T00258105.html',
        'image': 'http://cms-bucket.ws.126.net/2021/0202/b411b8b8p00qnvj7600v7c000rs00h0c.png?imageView&thumbnail=140y88&quality=85',
        'title': '更多“红包”来袭！留下过年的你接住了',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://news.163.com/21/0202/09/G1QP2DDC0001899O.html',
        'image': 'http://cms-bucket.ws.126.net/2021/0202/2a3e2fb7p00qnvn8f0044c0009c0070c.png?imageView&thumbnail=140y88&quality=85',
        'title': '外媒：为抹黑新疆 《纽约时报》找了邪教小报的假专家',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1P1L8O205346RC6.html',
        'image': 'http://cms-bucket.ws.126.net/2021/0202/242394f8p00qnvn290038c0009c0070c.png?imageView&thumbnail=140y88&quality=85',
        'title': '特斯拉向南昌电网道歉 新华社发文称其傲慢',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1QL2P1I0514R9OJ.html',
        'image': 'http://dingyue.ws.126.net/2021/0202/38a7340fj00qnvk29000ic000hs00a0g.jpg?imageView&thumbnail=140y88&quality=85',
        'title': '外媒：昂山素季现被“软禁”在缅甸首都内比都',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1QMDVSM055040N3.html',
        'image': 'http://dingyue.ws.126.net/2021/0202/24d753bfj00qnvkzw002ac000j600atg.jpg?imageView&thumbnail=140y88&quality=85',
        'title': '程用文当选武汉市长 13个月＂四套班子＂一把手都换了',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://tech.163.com/21/0202/07/G1QJ5JLS00097U7T.html',
        'image': 'http://cms-bucket.ws.126.net/2021/0202/9f940f26p00qnviig004ec0009c0070c.png?imageView&thumbnail=140y88&quality=85',
        'title': '至少12亿美元！德国将补贴特斯拉柏林工厂电池生产',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1OT9DSL0530KP1K.html',
        'image': 'http://crawl.ws.126.net/ac1eeb21775d5e3f06709542ab55ae56.jpg?imageView&thumbnail=140y88&quality=85',
        'title': '昂山素季呼吁抗议政变 军方长期请愿未果或是抓捕深因',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1POCQBN0514EGPO.html',
        'image': 'http://dingyue.ws.126.net/2021/0201/6271170cj00qnuwuq001nc000hs00b1c.jpg?imageView&thumbnail=140y88&quality=85',
        'title': '乌克兰纳＂投名状＂制裁中企 背后美国身影＂频现＂',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1QEU2VP055040N3.html',
        'image': 'http://dingyue.ws.126.net/2021/0202/67e88a00j00qnvelo002kc000j600atg.jpg?imageView&thumbnail=140y88&quality=85',
        'title': '2天俩公安局长被查 今年首虎曾在薄熙来任内任公安厅长',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1QJLUOA052182V3.html',
        'image': 'http://dingyue.ws.126.net/2021/0202/928095f1j00qnvip6001hc000u000iqm.jpg?imageView&thumbnail=140y88&quality=85',
        'title': '牛弹琴：缅甸政变 带给世界和中国的十大考验！',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1P0JDB60543B4S9.html',
        'image': 'http://dingyue.ws.126.net/2021/0201/f30c4be3j00qnudl1000zd000gy00cqp.jpg?imageView&thumbnail=140y88&quality=85',
        'title': '英国BNO护照未落地就被中国废了 还记得邓小平的话吗?',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1QI04490514R9OJ.html',
        'image': 'http://cms-bucket.ws.126.net/2021/0202/ccd6feccp00qnvivm00cuc0009c0070c.png?imageView&thumbnail=140y88&quality=85',
        'title': '昂山素季＂在枪口下被带走＂ 国防军总司令本今夏退休',
        'passtime': '2021-02-02 10:00:50'
      },
      {
        'path': 'https://www.163.com/dy/article/G1PIF7VJ0534P59R.html',
        'image': 'http://dingyue.ws.126.net/2021/0201/0beca7b7p00qnus1w0070c0009a00bwg.png?imageView&thumbnail=140y88&quality=85',
        'title': '轿车冲入水塘乡党委书记遇难 同事：可能为工作返乡',
        'passtime': '2021-02-02 10:00:50'
      }
    ]
    let list = [...listItem, ...listItem, ...listItem, ...listItem, ...listItem, ...listItem, ...listItem]
    const query = wx.createSelectorQuery();
    query.select('#scroll').fields({
      size: true
    }).exec((res) => {
      windowShowMax = Math.ceil(res[0].height / item_height),
      this.setData({
        list: list,
        windowsShowList: list.slice(0, Math.ceil(res[0].height / item_height)),
        beforeheight: 0,
        afterHeight: (item_height * (list.length - Math.ceil(res[0].height / item_height))),
      })
    })
  },
  onScorll(e) {
    // 下滑
    if (visiable) {
      visiable = false
      let myTimer = setTimeout(() => {
        visiable = true
        clearTimeout(myTimer)
      }, 50)
      let windowsShowTop = 0 //表示现在屏幕最上面是第多少个
      if (Math.ceil(e.detail.scrollTop / item_height) - 1 > 0) {
        windowsShowTop = Math.ceil(e.detail.scrollTop / item_height) - 1
      }

      let windowsShowBottom = windowsShowTop + windowShowMax * 2// 表示现在屏幕最下面是第多少个
      if (!this.data.list[windowsShowBottom]) {
        windowsShowBottom = this.data.list.length
      }
      //这里表示快到底了，请求新的数据加入list
      if (windowsShowBottom == this.data.list.length) {
        console.log("数据快到了！")
        let list = this.data.list
        list.push(...listItem,...listItem,...listItem,...listItem,...listItem,...listItem,...listItem,...listItem,...listItem,...listItem)
        let windowsShowList = list.slice((windowsShowTop - windowShowMax), windowsShowBottom)
        let top = windowsShowTop -windowShowMax
        this.setData({
          beforeHeight: top * item_height,
          afterHeight: (list.length - windowsShowBottom + 1) * item_height,
          windowsShowList: windowsShowList,
          list: list
        })

      } else {
        let windowsShowList = []
        if (windowsShowTop < windowShowMax) {
          windowsShowList = this.data.list.slice(0, windowsShowBottom)
        } else {
          windowsShowList = this.data.list.slice((windowsShowTop - windowShowMax), windowsShowBottom)
        }
        let top = 0
        if (windowsShowTop > windowShowMax) {
          top = windowsShowTop - windowShowMax
        }

        this.setData({
          beforeHeight: top * item_height,
          afterHeight: (this.data.list.length - windowsShowBottom + 1) * item_height,
          windowsShowList: windowsShowList
        })
      }
    }
  },
})