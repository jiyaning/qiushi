
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/home/home","pages/paper/paper"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿糗事百科","navigationBarBackgroundColor":"#f7f7f7","backgroundColor":"#f7f7f7"},"tabBar":{"color":"#ADADAD","selectedColor":"#FEE42A","backgroundColor":"#F7F7F7","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"糗事","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/indexed.png"},{"pagePath":"pages/news/news","text":"动态","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/newsed.png"},{"pagePath":"pages/paper/paper","text":"纸条","iconPath":"static/tabbar/paper.png","selectedIconPath":"static/tabbar/papered.png"},{"pagePath":"pages/home/home","text":"我的","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homeed.png"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"仿糗事百科","compilerVersion":"2.6.1","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/paper/paper","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});
