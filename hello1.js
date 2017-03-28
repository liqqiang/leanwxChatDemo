var appId = 'wM2FS1i1pvon1mUxHkz8x79q-gzGzoHsz';
var appKey = 'xoR8Srk0H4CbxHk2geco2t3K';

// 初始化存储 SDK
AV.init(appId, appKey);

// 初始化实时通讯 SDK
var Realtime = AV.Realtime;

var realtime = new Realtime({
  appId: appId,
  region: 'cn', //美国节点为 "us"
  plugins: AV.TypedMessagesPlugin // 注册富媒体消息插件

});

//liqiang 想给 wangyuzhuo 发一条消息，实现代码如下：
realtime.createIMClient('liqiang').then(function(liqiang) {
  // 创建与wangyuzhuo之间的对话
  return liqiang.createConversation({
    members: ['wangyuzhuo'],
    name: 'liqiang & wangyuzhuo',
  });
}).then(function(conversation) {
  // 发送消息
  return conversation.send(new AV.TextMessage('起床！'));
}).then(function(message) {
  console.log('liqiang & wangyuzhuo', '发送成功！');
}).catch(console.error);

//要让 wangyuzhuo 收到 liqiang 的消息，实现代码如下：
realtime.createIMClient('wangyuzhuo').then(function(wangyuzhuo) {
  wangyuzhuo.on('message', function(message, conversation) {
    console.log('Message received: ' + message.text);
  });
}).catch(console.error);