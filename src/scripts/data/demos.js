/***********************************************************************************
 *                                                                                  *
 * demos
 *                                                                                  *
 ***********************************************************************************/
const demos = {
  title: '作品案例',
  description: '',
  note: '',
  items: [
    {
      title: 'CloudFB云飨',
      keyword: '供应链金融、微信商城',
      description: [
        '这是一个私活项目，写于2017年年中。项目团队：2*Java + 1*设计 + 1*前端 + 2*测试。开发测试耗时约1.5月，维护3个月。',
        '该项目属于供应链金融方向的一个中英文双语项目。包含一个后台管理系统和一个微信端微商城项目，我负责微信微商城项目的前端开发，涉及购物车、预付单/订单/送货单状态管理、微信在线支付等常规功能。',
        '说明：因为自家项目部的几个项目长期处于未上线/不可用/内部使用的状态，不适合放出来，就拿这个当生产项目案例了-_-',
        '技术栈：Vue2全家桶+Webpack'
      ],
      gitUrl: '',
      demoUrl: '',
      imgUrl: 'img/qrcode_CloudFB_1.jpg'
    },
    {
      title: '石竹科技微信端',
      keyword: '微信端、数据持久化、vue项目优化',
      description: [
        '私活项目+1。有产品展示、需求招投标、微信消息推送、微信多客服、公告管理、服务/产品预购等功能。该项目进行了本地数据持久化，并根据已有的VueJS开发经验对项目进行了优化，封装了滚动加载更多等常用组件。',
        '以前曾在知乎上写过一个自己积累的优化经验。具体可点击链接查看：<a href="https://www.zhihu.com/question/38213423/answer/190371519">国内有哪些公司在用Vue.js，有什么开发心得？</a>'
      ],
      gitUrl: '',
      demoUrl: '',
      imgUrl: ''
    },
    {
      title: '咕咕机学习',
      keyword: '网页转图片',
      description: [
        '私活项目+1。这个公众号找不到二维码，需要在微信里手动输入“咕咕机学习”搜索添加。重点说“答案”这个微信菜单。项目团队：3后端+1前端。耗时约1个月（私活项目）。',
        '点击打开页面后输入题号可以搜索显示对应题目的问题、答案和解析，然后在页面底部会出现一个打印按钮，点击后会请求服务端去跟用户绑定的咕咕机设备（一种打印机）通讯（发送图片给咕咕机），后者会直接将图片进行打印。',
        '项目难点在于数学题目涉及到数学公式和图片较多，最终的解决方案是后端同事用java类库对语文和英语题目生成图片（html简单文本转图片，速度快），我用node将数学题目对应的网页转成图片（将PhantomJS无界面webkit内核浏览器打开的网页转图片，不稳定，需要写守护进程，而且因为需等待js渲染数学公式，速度极慢，平均6s一张图，用两个服务器跑了两三天的程序才跑完数学题目，但是效果较好）。'
      ],
      gitUrl: '',
      demoUrl: '',
      imgUrl: 'img/guguji.png'
    },
    {
      title: '博客',
      keyword: 'Express + MySQL + EJS, Angular1',
      description: [
        '个人项目，非私活。最早上线的是一个前端Angular SPA + 后端Node(Express框架)提供API接口的版本（数据库使用的是MySQL），代码和在线地址见上面链接。后期考虑到SEO的问题，在后端用EJS作为模版重写了一版本，在线地址：<a href="http://www.yxeye.com/blog">http://www.yxeye.com/blog</a>。',
        'Angular版本开发环境使用gulp，支持模版文件，请求转发等常见功能，发表评论的功能（支持嵌套评论）被我禁掉了，因为自己后端安全方面知识欠缺，数据库里的东西对我又很重要，开放这种往数据库里写数据的接口怕出问题。',
        '注册功能目前存在未解决的技术问题，网上大部分demo都是新建数据库，我要跟现有的数据库打通，所以没啥帮助。有一种方法是访问Wordpress提供的用户相关API，但是我想直接跟数据库里的账号信息进行比对，在把Wordpress保存的密码在Node端进行加解密这块算是卡住了。'
      ],
      gitUrl: 'https://git.oschina.net/yakima/blog',
      demoUrl: '',
      imgUrl: 'img/post_English.png'
    },
    {
      title: '公司项目',
      keyword: '移动端开发，微信JS SDK，车险报价投保业务，PC端管理系统，Websocket',
      description: [
        '开发过的项目大多是小范围内部使用的，而且由于公司人事方面的原因，有些项目中途转给北京总部的一个项目组做了，还有些项目夭折了，不过下面提到的都不是凭空捏造的，代码面试的时候可以现场看并针对性地提问，我面试时会带上电脑^_^。',
        '开发过一个车险投保PC端管理系统，起初使用Vue1全家桶开发，后期应领导要求（为了便于让后端同事也能参与开发）进行了重构，采用了传统的iframe + jQuery + html模版（handlebars）开发模式，自行封装了弹框、分页、日期等组件，和路由、页面打印、无限嵌套的勾选树等功能。该项目后来转交给北京项目组了。',
        '开发过一个车辆估损PC端管理系统，使用Vue1全家桶开发，有个通过Websocket实时通讯的功能，管理平台内勤最多同时被分配4个微信端用户，聊天支持文本和图片，支持120个微信基础表情。',
        '参与过公司其他项目部一个太平洋保险长期外包的寿险APP项目的开发（react native + redux + flow类型检查），独立开发过绑定用户订阅邮箱的功能，和iOS、android开发协同开发过更新用户头像的功能。',
        '最主要的工作成果是一个车险比价投保功能的微信端、安卓APP端SPA项目，借助rem单位实现自适应，这个项目基本上半年大改一次从头开始，框架也历经了最初的客户端vue1到vue1+webpack到现在的vue2+webpack，现在这个项目的产品、测试和管我们的技术领导都要么走了要么不负责这块了，北京上海的几个利益团体在这个项目上纠葛得比较厉害，而且直接管我们的业务部门对技术的态度不甚友好，这也是加速离职的主要理由。'
      ],
      gitUrl: '',
      demoUrl: '',
      imgUrl: ''
    },
    {
      title: 'mock server',
      keyword: '服务端数据模拟、请求转发',
      description: [
        '业余时间写的一个工具。用于服务器端数据模拟，方便前端工程师独立于后端进行开发。支持请求转发、响应静态JSON文件数据、响应自定义动态数据（内置mockjs），详细说明请点击上面链接地址（<a href="https://git.oschina.net/yakima/mock-server">项目源码</a>）查看README.md文档'
      ],
      gitUrl: 'https://git.oschina.net/yakima/mock-server',
      demoUrl: '',
      imgUrl: ''
    },
    {
      title: '项目脚手架',
      keyword: 'react, vue, iframe+jQuery+handlebars, webpack，gulp',
      description: [
        '这几个脚手架是以前写的，其实我自己也不用，只是借此熟悉下架构^_^。',
        'Vue项目脚手架：根据Vue官方webpack模版改造出了一个vue2项目开发环境，vue2 + vue-router + vuex + webpack + ES6 support + babel + eslint，详细介绍请点击相关链接查看：<a href="https://git.oschina.net/yakima/blog-admin">源代码</a>。',
        'React项目脚手架：为了在开发react项目时能有和开发vue项，根据vue-cli webpack模版改编出了一个react项目开发环境，react + react-router + webpack + ES6 support + babel + eslint，预置了几个动画效果，详细介绍请点击相关链接查看：<a href="https://git.oschina.net/yakima/demos">源代码</a>。',
        'iframe项目脚手架：基于iframe + jQuery + handlebars + gulp实现的类SPA应用开发环境，适用于有对前端了解较少的后端同学需要一起参与前端开发工作的的项目，详细介绍请点击相关链接查看：<a href="https://git.oschina.net/yakima/iframe-application">源代码</a>。'
      ],
      gitUrl: '',
      demoUrl: '',
      imgUrl: ''
    }
  ]
}
