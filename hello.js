var appId = 'wM2FS1i1pvon1mUxHkz8x79q-gzGzoHsz';
var appKey = 'xoR8Srk0H4CbxHk2geco2t3K';

var printWall = document.getElementById('print-wall');

// 初始化存储 SDK
AV.init(appId, appKey);

// 初始化实时通讯 SDK
var Realtime = AV.Realtime;

//创建通讯实例
var realtime = new Realtime({
  appId: appId,
  region: 'cn', //美国节点为 "us"
  plugins: AV.TypedMessagesPlugin // 注册富媒体消息插件

});

// 请换成你自己的一个房间的 conversation id（这是服务器端生成的）
var roomId = '58d245f38d6d8100615eb851';
// 用来存储创建好的 roomObject
var room;

// 每个客户端自定义的 id
var clientId = 'LeanCloud';
var client;
var messageIterator;

// 监听是否服务器连接成功
var firstFlag = true;

// 用来标记历史消息获取状态
var logFlag = false;

// 拉取历史相关
// 最早一条消息的时间戳
var msgTime;

$(function() {
  $("#openbtn").click(main);
  $("#sendbtn").click(sendMsg);
});

var sendMsg = function(evnet, msgType) {
  var content;
  // 向这个房间发送消息，这段代码是兼容多终端格式的，包括 iOS、Android、Window Phone
  var messageSender;
  if(!msgType) {
    content = $("#input-send").val();
    // 不让发送空字符
    if (!String(content).replace(/^\s+/, '').replace(/\s+$/, '')) {
      alert('请输入内容！');
    }
    // 发送文字的场合
    messageSender = new AV.TextMessage(content);
    messageSender.setAttributes({
      msgType: "txtMsg",
    });
  } else {
    // 发送微信语音的场合
    messageSender = new AV.TextMessage(voice.serverId);
    messageSender.setAttributes({
      msgType: "wxVoice",
      serverId: voice.serverId
    });
  }
  $("#input-send").val("");
  room.send(messageSender).then(function(message) {
    // 发送成功之后的回调
    var remoteType = message.getAttributes().msgType;
    var remoteServerId = message.getAttributes().serverId;
    if(remoteType == "txtMsg") {
      showLog('（' + formatTime(message.timestamp) + '）  自己： ', encodeHTML(message.text));
    } else {
      showLog('（' + formatTime(message.timestamp) + '）  自己： ', '<button id=\'' + remoteServerId + '\' class=\'btn playbtn\'>播放<button>');
    }
    printWall.scrollTop = printWall.scrollHeight;
  });
}
var main = function() {
  showLog("正在连接服务器，请等待。。。");
  var userName = $("#input-name").val();
  if(userName) {
    clientId = userName;
  } else {
    return false;
  }
  if(!firstFlag) {
    client.close();
  }
  // 创建聊天客户端
  realtime.createIMClient(clientId)
  .then(function(c) {
    showLog("服务器连接成功！");
    firstFlag = false;
    client = c;
    client.on('disconnect', function() {
      showLog('服务器正在重连，请耐心等待。。。');
    });
    return c.getConversation(roomId);
  })
  .then(function(conversation) {
    if(conversation) {
      showLog("进入房间");
      return conversation;
    } else {
      // 如果服务端不存在对话conversation，则创建一个。
      showLog('服务器不存在这个 conversation，创建一个。');
      return client.createConversation({
        name: "liqiang first chat room",
        members: [clientId],
      }).then(function(conversation) {
        roomId = conversation.id;
        showLog('创建新 Room 成功，id 是：', roomId);
        return conversation;
      });
    }
  })
  .then(function(conversation) {
    // 获取当前会话成员列表
    showLog('当前 Conversation 的成员列表：', conversation.members);
    if(conversation.members.length > 10) {
      return conversation.remove(conversation.members[5]).then(function(conversation) {
        showLog('人数过多，踢掉： ', conversation.members[5]);
        return conversation;
      });
    }
    return conversation;
  })
  .then(function(conversation) {
    // 加入会话
    return conversation.join();
  })
  .then(function(conversation) {
    //获取聊天记录
    room = conversation;
    messageIterator = conversation.createMessagesIterator();//获取消息翻页迭代器
    getLog(function() {
      printWall.scrollTop = printWall.scrollHeight;
      showLog('已经加入，可以开始聊天。');
    });
    // 房间接受消息
    conversation.on('message', function(message) {
      if(!msgTime) {
        // 存储下最早的一个消息时间戳
        msgTime = message.timestamp;
      }
      showMsg(message);
    });
  })
  .catch(function(err) {
    console.error(err);
  })
}



// 显示接收到的信息
function showMsg(message, isBefore) {
  var text = message.text;
  var from = message.from;
  if (message.from === clientId) {
    from = '自己';
  }

  var remoteType = !message.getAttributes() ? "" : message.getAttributes().msgType;
  var remoteServerId = !message.getAttributes() ? "" : message.getAttributes().serverId;

  if (message instanceof AV.TextMessage) {
    if(!remoteType || remoteType == "txtMsg") {
      if (String(text).replace(/^\s+/, '').replace(/\s+$/, '')) {
        showLog('（' + formatTime(message.timestamp) + '）  ' + encodeHTML(from) + '： ', encodeHTML(message.text), isBefore);
      }
    } else {
      showLog('（' + formatTime(message.timestamp) + '）  ' + encodeHTML(from) + '： ', '<button id=\'' + remoteServerId + '\' class=\'btn playbtn\'>播放<button>');
    }
  } else if (message instanceof AV.FileMessage) {
    showLog('（' + formatTime(message.timestamp) + '）  ' + encodeHTML(from) + '： ', createLink(message.getFile().url()), isBefore);
  }
}

// demo 中输出代码
function showLog(msg, data, isBefore) {
  if (data) {
    // console.log(msg, data);
    msg = msg + '<span class="strong">' + data + '</span>';
  }
  var p = document.createElement('p');
  p.innerHTML = msg;
  if (isBefore) {
    printWall.insertBefore(p, printWall.childNodes[0]);
  } else {
    printWall.appendChild(p);
  }
}

function encodeHTML(source) {
  return String(source)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\\/g,'&#92;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

function formatTime(time) {
  var date = new Date(time);
  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  var currentDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return date.getFullYear() + '-' + month + '-' + currentDate + ' ' + hh + ':' + mm + ':' + ss;
}

// 获取消息历史
function getLog(callback) {
  var height = printWall.scrollHeight;
  if (logFlag) {
    return;
  } else {
    // 标记正在拉取
    logFlag = true;
  }
  messageIterator.next().then(function(result) {
    var data = result.value;
    logFlag = false;
    // 存储下最早一条的消息时间戳
    var l = data.length;
    if (l) {
      msgTime = data[0].timestamp;
    }
    for (var i = l - 1; i >= 0; i--) {
      showMsg(data[i], true);
    }
    if (l) {
      printWall.scrollTop = printWall.scrollHeight - height;
    }
    if (callback) {
      callback();
    }
  }).catch(function(err) {
    console.error(err);
  });
}

var voice = {
  localId: '',
  serverId: ''
};
wx.ready(function() {
  $('#start-talk').click(function() {
    wx.startRecord({
      cancel: function() {
        alert("拒绝授权录音")
      }
    });
  });
  $('#stop-talk').click(function(event) {
    wx.stopRecord({
      success: function(res) {
        voice.localId = res.localId;
        //录音后上传至微信服务器获得语音的serverId
        wx.uploadVoice({
          localId: voice.localId,
          success: function(res) {
            alert('上传语音成功，serverId 为' + res.serverId);
            voice.serverId = res.serverId;

            //调用leancloud的API上传微信的serverId。
            sendMsg(event, 1);
          }
        });
      },
      fail: function(res) {
        alert(JSON.stringify(res));
      }
    });
  });
  $('#play-talk').click(function() {
    if (voice.localId == '') {
      alert('请先使用 startRecord 接口录制一段声音');
      return;
    }
    wx.playVoice({
      localId: voice.localId
    });
  });
  $("#print-wall").on("click", "button", function(event) {
    alert(this.id);
    var localServerId = this.id;
    wx.downloadVoice({
      serverId: localServerId,
      success: function (res) {
        alert('下载语音成功，localId 为' + res.localId);
        wx.playVoice({
          localId: res.localId
        });
      }
    });
  });
});