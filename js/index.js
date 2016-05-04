window.onload=function(){//等待页面加载完成

  (function(){
	var imgs=document.getElementsByClassName('tubox');//通过类名获取元素写入文档
	// console.log(imgs)
    var anniu=document.getElementsByClassName('cirle');//通过类名获取元素写入文档
    var boxs=document.getElementsByClassName('pian')[0];//通过类名获取元素写入文档
    var btn=document.getElementsByClassName('Rbtn')[0];//通过类名获取元素写入文档
    var Ibtn=document.getElementsByClassName('Ibtn')[0];//通过类名获取元素写入文档
    // console.log(boxs)
    // console.log(anniu)
    var index=0;//定义一个下标从0开始
    var t=setInterval(move,3000)//时间函数赋值给一个变量  //图片切换的时间
    function move(){
      index++;//让下标一直增加  0 1 2 3 4
      if (index>imgs.length-1) {//判断当前的下标与图片的长度是否相同
      	index=0;//如果超出图片的数量，那么让他从0开始
      } 
      for (var t = 0; t < imgs.length; t++) {//进行for循环
      	imgs[t].style.display="none";//进行for循环，让所有图片隐藏
      	anniu[t].style.background="";//进行for循环让其他的按钮颜色不变
      };
      imgs[index].style.display="block";//for循环进行完之后，让当前的图片显示出来
      anniu[index].style.background="#c81623"//for循环进行完之后，让当前按钮要显示的颜色变为#c81623
    }
    for (var i = 0; i < anniu.length; i++) {//进行for循环
    	anniu[i].index=i;//自定义一个属性用来保存下标
    	anniu[i].onclick=function(){//按钮点击事件
    		for (var j = 0; j < imgs.length; j++) {//遍历 获取所有图片
    			imgs[j].style.display="none";//点击之 后让其他图片隐藏
    			anniu[j].style.background="";//点击之后让其他按钮的颜色不变
    		};
    		imgs[this.index].style.display="block";//让当前图片显示出来
    		anniu[this.index].style.background="#c81623";//让当前的图片按钮变为#c81623
    	};
    };
  //鼠标移到大box后，让图片停止，所以要清除时间函数
   
  //鼠标离开后要继续让图片行走，所以要继续执行时间函数
 
   btn.onclick=function(){//右鼠标点击与按钮点击的方向相同，所以调用函数
   	move();
   }
   Ibtn.onclick=function(){//左鼠标点击后要倒退图片，从最后一张到第一张，继续执行
   	index--;
   	if (index<0) {         //有点小问题
   		index=imgs.length-1;
   	} for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.display="none";
      anniu[i].style.background="";
    };
   	imgs[index].style.display="block";
    anniu[index].style.background="#c81623";
   }
   boxs.onmouseover=function(){
   btn.style.display="block";
   Ibtn.style.display="block";
   clearInterval(t);
 }
   boxs.onmouseout=function(){
   btn.style.display="none";
   Ibtn.style.display="none";
    t=setInterval(move,2000);
 }
 })();

(function(){

 var as=getClass('tpright');//放四张图的一千的盒子
 // alert(as.length)
 var btnl=getClass('lrbtn')[0].getElementsByClassName('leftbtn')[0];
 // console.log(btnl)
 var btns=getClass('lrbtn')[0].getElementsByClassName('rightbtn')[0];
 // console.log(btns)
 var width=parseInt(getStyle(as[0],"width"));
 // alert(width)
 var boxz=getClass('tp')[0].getElementsByClassName('tpc')[0];
 // console.log(boxz)
 var dahezi=getClass('tp')[0];
 var num=0
  // setInterval(function(){
  //   num++;
  // if (num>as.length-1) {
  //   num=0;
  // } 
  //  animate(boxz,{marginLeft:-num*width},500)
  // },2000)
 	
 btnl.onclick=function(){
    num--;
   if (num<0) {
    num=as.length-1;
   } 
    animate(boxz,{marginLeft:-num*width},500)   
 }
 btns.onclick=function(){
  num++;
  if(num>as.length-1){
    num=0;
  }
   animate(boxz,{marginLeft:-num*width},500)   
 }
 dahezi.onmouseover=function(){
   btns.style.display="block";
   btnl.style.display="block";
 }
 dahezi.onmouseout=function(){
   btns.style.display="none";
   btnl.style.display="none";
 }

})();



(function(){
var as=getClass('ff')[0].getElementsByTagName('a')[0];
var boxa=getClass('ff')[0];
as.onmouseover=function(){
          animate(as,{marginLeft:-5},300);
    }
    as.onmouseout=function(){
          animate(as,{marginLeft:0},300);
     }

})();



(function(){
  var imgs=getClass('fzxbgai')[0];
   // console.log(imgs)
   var as=getClass('fzxbzhongz')[0].getElementsByTagName('a');
  var width=parseInt(getStyle(as[0],"width"));

// alert(as.length)
var btn=getClass('fzbtn')[0].getElementsByClassName('fzbtns');
console.log(btn.length)
var btns=getClass('lran')[0].getElementsByClassName('lan')[0];
// console.log(btns)
var rbtn=getClass('lran')[0].getElementsByClassName('ran')[0];
var box=getClass('fzxbzhongz')[0];
var index=0;
var t=setInterval(move,5000)
function move(){
index++;
if (index>as.length-1) {
  index=0;
};
for (var t = 0; t < as.length; t++) {
  animate(imgs,{marginLeft:-index*width},500)   
  btn[t].style.background="";
};
 animate(imgs,{marginLeft:-index*width})   
 btn[index].style.background="#b61b1f";
}
for (var i = 0; i < btn.length; i++) {
  btn[i].index=i;
  btn[i].onclick=function(){
    for (var j = 0; j < as.length; j++) {
    animate(imgs,{marginLeft:-this.index*width},500)
      btn[j].style.background="";
    };
   animate(imgs,{marginLeft:-this.index*width},500)
    btn[this.index].style.background="#b61b1f";
  }
};
rbtn.onclick=function(){
  move();
 }
btns.onclick=function(){
  index--;
  if (index<0) {
    index=as.length-1;
  };
  for (var i = 0; i < as.length; i++) {
   animate(imgs,{marginLeft:-index*width},500)
     btn[i].style.background="";
  };
 animate(imgs,{marginLeft:-index*width},500)
  btn[index].style.background="#b61b1f";

 }
 box.onmouseover=function(){
  clearInterval(t);
  btns.style.display="block";
  rbtn.style.display="block";
 }
 box.onmouseout=function(){
  t=setInterval(move,5000);
  btns.style.display="none";
  rbtn.style.display="none";
 }

})();


(function(){
  var anniu=getClass('fzxbfl')[0].getElementsByTagName('a');
  // alert(anniu.length)
  var img=getClass('fzxbda')[0].getElementsByClassName('fzxbdar');
  // alert(img.length)
  // console.log(img)
  for (var i = 0; i < anniu.length; i++) {
    anniu[i].index=i;
    anniu[i].onmouseover=function(){
      for (var j = 0; j < img.length; j++) {
        img[j].style.display="none";
        anniu[j].style.borderTop="none"
        anniu[j].style.borderLeft="none"
        anniu[j].style.borderRight="none"
      };
      img[this.index].style.display="block";
      anniu[this.index].style.borderTop="3px solid #c81623"
      anniu[this.index].style.borderLeft="1px solid #c81623"
      anniu[this.index].style.borderRight="1px solid #c81623"
    }
  };
})();




(function(){
  var anniu=getClass('mk')[0].getElementsByTagName('a');
  // alert(anniu.length)
  var img=getClass('mp')[0].getElementsByClassName('grda');
  // alert(img.length)
  // console.log(img)
  for (var i = 0; i < anniu.length; i++) {
    anniu[i].index=i;
    anniu[i].onmouseover=function(){
      for (var j = 0; j < img.length; j++) {
        img[j].style.display="none";
        anniu[j].style.borderTop="none"
        anniu[j].style.borderLeft="none"
        anniu[j].style.borderRight="none"
      };
      img[this.index].style.display="block";
       anniu[this.index].style.borderTop="3px solid #c81623"
      anniu[this.index].style.borderLeft="1px solid #c81623"
      anniu[this.index].style.borderRight="1px solid #c81623"
    }
  };
})();




(function(){
  var anniu=getClass('jk')[0].getElementsByTagName('a');
  // alert(anniu.length)
  var img=getClass('sjtxda')[0].getElementsByClassName('sjdar');
  // alert(img.length)
  // console.log(img)
  for (var i = 0; i < anniu.length; i++) {
    anniu[i].index=i;
    anniu[i].onmouseover=function(){
      for (var j = 0; j < img.length; j++) {
        img[j].style.display="none";
         anniu[j].style.borderTop="none"
        anniu[j].style.borderLeft="none"
        anniu[j].style.borderRight="none"
      };
      img[this.index].style.display="block";
        anniu[this.index].style.borderTop="3px solid #c81623"
      anniu[this.index].style.borderLeft="1px solid #c81623"
      anniu[this.index].style.borderRight="1px solid #c81623"
    }
  };
})();




(function(){
  var anniu=getClass('yk')[0].getElementsByTagName('a');
  // alert(anniu.length)
  var img=getClass('jydqda')[0].getElementsByClassName('jydqdar');
  // alert(img.length)
  // console.log(img)
  for (var i = 0; i < anniu.length; i++) {
    anniu[i].index=i;
    anniu[i].onmouseover=function(){
      for (var j = 0; j < img.length; j++) {
        img[j].style.display="none";
         anniu[j].style.borderTop="none"
        anniu[j].style.borderLeft="none"
        anniu[j].style.borderRight="none"
      };
      img[this.index].style.display="block";
        anniu[this.index].style.borderTop="3px solid #c81623"
      anniu[this.index].style.borderLeft="1px solid #c81623"
      anniu[this.index].style.borderRight="1px solid #c81623"
    }
  };
})();




(function(){
  var anniu=getClass('nk')[0].getElementsByTagName('a');
  // alert(anniu.length)
  var img=getClass('dnsmda')[0].getElementsByClassName('dnsmdar');
  // alert(img.length)
  // console.log(img)
  for (var i = 0; i < anniu.length; i++) {
    anniu[i].index=i;
    anniu[i].onmouseover=function(){
      for (var j = 0; j < img.length; j++) {
        img[j].style.display="none";
         anniu[j].style.borderTop="none"
        anniu[j].style.borderLeft="none"
        anniu[j].style.borderRight="none"
      };
      img[this.index].style.display="block";
        anniu[this.index].style.borderTop="3px solid #c81623"
      anniu[this.index].style.borderLeft="1px solid #c81623"
      anniu[this.index].style.borderRight="1px solid #c81623"
    }
  };
})();



(function(){
  var anniu=getClass('nnk')[0].getElementsByTagName('a');
  // alert(anniu.length)
  var img=getClass('ydjsda')[0].getElementsByClassName('ydjsdar');
  // alert(img.length)
  // console.log(img)
  for (var i = 0; i < anniu.length; i++) {
    anniu[i].index=i;
    anniu[i].onmouseover=function(){
      for (var j = 0; j < img.length; j++) {
        img[j].style.display="none";
         anniu[j].style.borderTop="none"
        anniu[j].style.borderLeft="none"
        anniu[j].style.borderRight="none"
      };
      img[this.index].style.display="block";
        anniu[this.index].style.borderTop="3px solid #c81623"
      anniu[this.index].style.borderLeft="1px solid #c81623"
      anniu[this.index].style.borderRight="1px solid #c81623"
    }
  };
})();



(function(){
  var anniu=getClass('xk')[0].getElementsByTagName('a');
  // alert(anniu.length)
  var img=getClass('jjshda')[0].getElementsByClassName('jjshdar');
  // alert(img.length)
  // console.log(img)
  for (var i = 0; i < anniu.length; i++) {
    anniu[i].index=i;
    anniu[i].onmouseover=function(){
      for (var j = 0; j < img.length; j++) {
        img[j].style.display="none";
         anniu[j].style.borderTop="none"
        anniu[j].style.borderLeft="none"
        anniu[j].style.borderRight="none"
      };
      img[this.index].style.display="block";
        anniu[this.index].style.borderTop="3px solid #c81623"
      anniu[this.index].style.borderLeft="1px solid #c81623"
      anniu[this.index].style.borderRight="1px solid #c81623"
    }
  };
})();



(function(){
  var anniu=getClass('nnnk')[0].getElementsByTagName('a');
  // alert(anniu.length)
  var img=getClass('mywjda')[0].getElementsByClassName('mywjdar');
  // alert(img.length)
  // console.log(img)
  for (var i = 0; i < anniu.length; i++) {
    anniu[i].index=i;
    anniu[i].onmouseover=function(){
      for (var j = 0; j < img.length; j++) {
        img[j].style.display="none";
         anniu[j].style.borderTop="none"
        anniu[j].style.borderLeft="none"
        anniu[j].style.borderRight="none"
      };
      img[this.index].style.display="block";
        anniu[this.index].style.borderTop="3px solid #c81623"
      anniu[this.index].style.borderLeft="1px solid #c81623"
      anniu[this.index].style.borderRight="1px solid #c81623"
    }
  };
})();



(function(){
  var anniu=getClass('nnnsk')[0].getElementsByTagName('a');
  // alert(anniu.length)
  var img=getClass('spbjda')[0].getElementsByClassName('spbjdar');
  // alert(img.length)
  // console.log(img)
  for (var i = 0; i < anniu.length; i++) {
    anniu[i].index=i;
    anniu[i].onmouseover=function(){
      for (var j = 0; j < img.length; j++) {
        img[j].style.display="none";
         anniu[j].style.borderTop="none"
        anniu[j].style.borderLeft="none"
        anniu[j].style.borderRight="none"
      };
      img[this.index].style.display="block";
        anniu[this.index].style.borderTop="3px solid #c81623"
      anniu[this.index].style.borderLeft="1px solid #c81623"
      anniu[this.index].style.borderRight="1px solid #c81623"
    }
  };
})();

(function(){
  var anniu=getClass('wk')[0].getElementsByTagName('a');
  // alert(anniu.length)
  var img=getClass('tsyxda')[0].getElementsByClassName('tsyxdar');
  // alert(img.length)
  // console.log(img)
  for (var i = 0; i < anniu.length; i++) {
    anniu[i].index=i;
    anniu[i].onmouseover=function(){
      for (var j = 0; j < img.length; j++) {
        img[j].style.display="none";
         anniu[j].style.borderTop="none"
        anniu[j].style.borderLeft="none"
        anniu[j].style.borderRight="none"
      };
      img[this.index].style.display="block";
        anniu[this.index].style.borderTop="3px solid #c81623"
      anniu[this.index].style.borderLeft="1px solid #c81623"
      anniu[this.index].style.borderRight="1px solid #c81623"
    }
  };
})();


(function(){
 var as=getClass('mzgai')[0];
 // alert(as.length)
 var imgs=getClass('mzmp');
 // alert(imgs.length)
 var width=parseInt(getStyle(imgs[0],"width"));
var btn=getClass('mzbtn')[0].getElementsByClassName('mzbtns');
console.log(btn)
  var btns=getClass('mzbtnlr')[0].getElementsByClassName('mzrbtn')[0];
console.log(btns)
var rbtn=getClass('mzbtnlr')[0].getElementsByClassName('mzlbtn')[0];
var index=0;
var dahezi=getClass('mm')[0];
var t=setInterval(move,5000)
function move(){
index++;
if(index>imgs.length-1){
  index=0;
}
for (var t = 0; t <imgs.length; t++) {
  animate(as,{marginLeft:-index*width},500) 
   btn[t].style.background="";
};
 animate(as,{marginLeft:-index*width},500)
 btn[index].style.background="#b61b1f"; 
}
for (var i = 0; i <btn.length; i++) {
  btn[i].index=i;
  btn[i].onclick=function(){
    for (var j = 0; j < btn.length; j++) {
     animate(as,{marginLeft:-this.index*width},500) 
      btn[j].style.background="";
    };
   animate(as,{marginLeft:-this.index*width},500) 
    btn[this.index].style.background="#b61b1f";
  }
};
btns.onclick=function(){
  move();
}
rbtn.onclick=function(){
  index--;
  if (index<0) {
    index=imgs.length-1
  };
  for (var i = 0; i < imgs.length; i++) {
     animate(as,{marginLeft:-index*width},500)
     btn[i].style.background=""; 
  };
   animate(as,{marginLeft:-index*width},500) 
   btn[index].style.background="#b61b1f";
}
dahezi.onmouseover=function(){
  clearInterval(t);
  btns.style.display="block";
  rbtn.style.display="block";
}
dahezi.onmouseout=function(){
  t=setInterval(move,5000)
  btns.style.display="none";
  rbtn.style.display="none";
}

})();





(function(){
  var imgs=getClass('sjtxgai')[0];
   // console.log(imgs)
   var as=getClass('sjtxc')[0].getElementsByTagName('a');
  var width=parseInt(getStyle(as[0],"width"));

// alert(as.length)
var btn=getClass('txbtn')[0].getElementsByClassName('txbtns');
console.log(btn.length)
var btns=getClass('txlr')[0].getElementsByClassName('txl')[0];
// console.log(btns)
var rbtn=getClass('txlr')[0].getElementsByClassName('txr')[0];
var box=getClass('sjtxc')[0];
var index=0;
var t=setInterval(move,5000)
function move(){
index++;
if (index>as.length-1) {
  index=0;
};
for (var t = 0; t < as.length; t++) {
  animate(imgs,{marginLeft:-index*width},500)   
  btn[t].style.background="";
};
 animate(imgs,{marginLeft:-index*width})   
 btn[index].style.background="#b61b1f";
}
for (var i = 0; i < btn.length; i++) {
  btn[i].index=i;
  btn[i].onclick=function(){
    for (var j = 0; j < as.length; j++) {
    animate(imgs,{marginLeft:-this.index*width},500)
      btn[j].style.background="";
    };
   animate(imgs,{marginLeft:-this.index*width},500)
    btn[this.index].style.background="#b61b1f";
  }
};
rbtn.onclick=function(){
  move();
 }
btns.onclick=function(){
  index--;
  if (index<0) {
    index=as.length-1;
  };
  for (var i = 0; i < as.length; i++) {
   animate(imgs,{marginLeft:-index*width},500)
     btn[i].style.background="";
  };
 animate(imgs,{marginLeft:-index*width},500)
  btn[index].style.background="#b61b1f";

 }
 box.onmouseover=function(){
  clearInterval(t);
  btns.style.display="block";
  rbtn.style.display="block";
 }
 box.onmouseout=function(){
  t=setInterval(move,5000);
  btns.style.display="none";
  rbtn.style.display="none";
 }

})();




(function(){
  var imgs=getClass('jydqgai')[0];
   var as=getClass('jydqc')[0].getElementsByTagName('a');
  var width=parseInt(getStyle(as[0],"width"));

// alert(as.length)
var btn=getClass('jybtn')[0].getElementsByClassName('jybtns');
// console.log(btn.length)
var btns=getClass('jylr')[0].getElementsByClassName('jyl')[0];
// console.log(btns)
var rbtn=getClass('jylr')[0].getElementsByClassName('jyr')[0];
var box=getClass('jydqc')[0];
var index=0;
var t=setInterval(move,5000)
function move(){
index++;
if (index>as.length-1) {
  index=0;
};
for (var t = 0; t < as.length; t++) {
  animate(imgs,{marginLeft:-index*width},500)   
  btn[t].style.background="";
};
 animate(imgs,{marginLeft:-index*width})   
 btn[index].style.background="#b61b1f";
}
for (var i = 0; i < btn.length; i++) {
  btn[i].index=i;
  btn[i].onclick=function(){
    for (var j = 0; j < as.length; j++) {
    animate(imgs,{marginLeft:-this.index*width},500)
      btn[j].style.background="";
    };
   animate(imgs,{marginLeft:-this.index*width},500)
    btn[this.index].style.background="#b61b1f";
  }
};
rbtn.onclick=function(){
  move();
 }
btns.onclick=function(){
  index--;
  if (index<0) {
    index=as.length-1;
  };
  for (var i = 0; i < as.length; i++) {
   animate(imgs,{marginLeft:-index*width},500)
     btn[i].style.background="";
  };
 animate(imgs,{marginLeft:-index*width},500)
  btn[index].style.background="#b61b1f";

 }
 box.onmouseover=function(){
  clearInterval(t);
  btns.style.display="block";
  rbtn.style.display="block";
 }
 box.onmouseout=function(){
  t=setInterval(move,5000);
  btns.style.display="none";
  rbtn.style.display="none";
 }

})();









(function(){
  var imgs=getClass('dnsmgai')[0];
   var as=getClass('dnsmc')[0].getElementsByTagName('a');
  var width=parseInt(getStyle(as[0],"width"));
// alert(as.length)
var btn=getClass('dnbtn')[0].getElementsByClassName('dnbtns');
var btns=getClass('dnlr')[0].getElementsByClassName('dnl')[0];
// console.log(btns)
var rbtn=getClass('dnlr')[0].getElementsByClassName('dnr')[0];
var box=getClass('dnsmc')[0];
var index=0;
var t=setInterval(move,5000)
function move(){
index++;
if (index>as.length-1) {
  index=0;
};
for (var t = 0; t < as.length; t++) {
 animate(imgs,{marginLeft:-index*width},500)
  btn[t].style.background="";
};
animate(imgs,{marginLeft:-index*width},500)
 btn[index].style.background="#b61b1f";
}
for (var i = 0; i < btn.length; i++) {
  btn[i].index=i;
  btn[i].onclick=function(){
    for (var j = 0; j < as.length; j++) {
   animate(imgs,{marginLeft:-this.index*width},500)
      btn[j].style.background="";
    };
    animate(imgs,{marginLeft:-this.index*width},500)
    btn[this.index].style.background="#b61b1f";
  }
};
rbtn.onclick=function(){
  move();
 }
btns.onclick=function(){
  index--;
  if (index<0) {
    index=as.length-1;
  };
  for (var i = 0; i < as.length; i++) {
   animate(imgs,{marginLeft:-index*width},500)
     btn[i].style.background="";
  };
 animate(imgs,{marginLeft:-index*width},500)
  btn[index].style.background="#b61b1f";

 }
 box.onmouseover=function(){
  clearInterval(t);
  btns.style.display="block";
  rbtn.style.display="block";
 }
 box.onmouseout=function(){
  t=setInterval(move,5000);
  btns.style.display="none";
  rbtn.style.display="none";
 }

})();



(function(){
 var as=getClass('ydjsgai')[0];
 // alert(as.length)
 var imgs=getClass('ydjsmp');
 // alert(imgs.length)
 var width=parseInt(getStyle(imgs[0],"width"));
var btn=getClass('xbtn')[0].getElementsByClassName('xbtns');
console.log(btn)
  var btns=getClass('ydjsbtn')[0].getElementsByClassName('ydrbtn')[0];
console.log(btns)
var rbtn=getClass('ydjsbtn')[0].getElementsByClassName('ydlbtn')[0];
var index=0;
var dahezi=getClass('ydjscenterc')[0];
var t=setInterval(move,5000)
function move(){
index++;
if(index>imgs.length-1){
  index=0;
}
for (var t = 0; t <imgs.length; t++) {
  animate(as,{marginLeft:-index*width},500) 
   btn[t].style.background="";
};
 animate(as,{marginLeft:-index*width},500)
 btn[index].style.background="#b61b1f"; 
}
for (var i = 0; i <btn.length; i++) {
  btn[i].index=i;
  btn[i].onclick=function(){
    for (var j = 0; j < btn.length; j++) {
     animate(as,{marginLeft:-this.index*width},500) 
      btn[j].style.background="";
    };
   animate(as,{marginLeft:-this.index*width},500) 
    btn[this.index].style.background="#b61b1f";
  }
};
btns.onclick=function(){
  move();
}
rbtn.onclick=function(){
  index--;
  if (index<0) {
    index=imgs.length-1
  };
  for (var i = 0; i < imgs.length; i++) {
     animate(as,{marginLeft:-index*width},500)
     btn[i].style.background=""; 
  };
   animate(as,{marginLeft:-index*width},500) 
   btn[index].style.background="#b61b1f";
}
dahezi.onmouseover=function(){
  clearInterval(t);
  btns.style.display="block";
  rbtn.style.display="block";
}
dahezi.onmouseout=function(){
  t=setInterval(move,5000)
  btns.style.display="none";
  rbtn.style.display="none";
}

})();




(function(){
 var as=getClass('jjshgai')[0];
 // alert(as.length)
 var imgs=getClass('jjshmp');
 // alert(imgs.length)
 var width=parseInt(getStyle(imgs[0],"width"));
var btn=getClass('jjbtn')[0].getElementsByClassName('jjbtns');
console.log(btn)
  var btns=getClass('jlrbtn')[0].getElementsByClassName('jrbtn')[0];
console.log(btns)
var rbtn=getClass('jlrbtn')[0].getElementsByClassName('jlbtn')[0];
var index=0;
var dahezi=getClass('jjshcenterc')[0];
var t=setInterval(move,5000)
function move(){
index++;
if(index>imgs.length-1){
  index=0;
}
for (var t = 0; t <imgs.length; t++) {
  animate(as,{marginLeft:-index*width},500) 
   btn[t].style.background="";
};
 animate(as,{marginLeft:-index*width},500)
 btn[index].style.background="#b61b1f"; 
}
for (var i = 0; i <btn.length; i++) {
  btn[i].index=i;
  btn[i].onclick=function(){
    for (var j = 0; j < btn.length; j++) {
     animate(as,{marginLeft:-this.index*width},500) 
      btn[j].style.background="";
    };
   animate(as,{marginLeft:-this.index*width},500) 
    btn[this.index].style.background="#b61b1f";
  }
};
btns.onclick=function(){
  move();
}
rbtn.onclick=function(){
  index--;
  if (index<0) {
    index=imgs.length-1
  };
  for (var i = 0; i < imgs.length; i++) {
     animate(as,{marginLeft:-index*width},500)
     btn[i].style.background=""; 
  };
   animate(as,{marginLeft:-index*width},500) 
   btn[index].style.background="#b61b1f";
}
dahezi.onmouseover=function(){
  clearInterval(t);
  btns.style.display="block";
  rbtn.style.display="block";
}
dahezi.onmouseout=function(){
  t=setInterval(move,5000)
  btns.style.display="none";
  rbtn.style.display="none";
}

})();



(function(){
 var as=getClass('mywjgai')[0];
 // alert(as.length)
 var imgs=getClass('mywjmp');
 // alert(imgs.length)
 var width=parseInt(getStyle(imgs[0],"width"));
var btn=getClass('mybtn')[0].getElementsByClassName('mybtns');
console.log(btn)
  var btns=getClass('mylr')[0].getElementsByClassName('myr')[0];
console.log(btns)
var rbtn=getClass('mylr')[0].getElementsByClassName('myl')[0];
var index=0;
var dahezi=getClass('mywjcenterc')[0];
var t=setInterval(move,5000)
function move(){
index++;
if(index>imgs.length-1){
  index=0;
}
for (var t = 0; t <imgs.length; t++) {
  animate(as,{marginLeft:-index*width},500) 
   btn[t].style.background="";
};
 animate(as,{marginLeft:-index*width},500)
 btn[index].style.background="#b61b1f"; 
}
for (var i = 0; i <btn.length; i++) {
  btn[i].index=i;
  btn[i].onclick=function(){
    for (var j = 0; j < btn.length; j++) {
     animate(as,{marginLeft:-this.index*width},500) 
      btn[j].style.background="";
    };
   animate(as,{marginLeft:-this.index*width},500) 
    btn[this.index].style.background="#b61b1f";
  }
};
btns.onclick=function(){
  move();
}
rbtn.onclick=function(){
  index--;
  if (index<0) {
    index=imgs.length-1
  };
  for (var i = 0; i < imgs.length; i++) {
     animate(as,{marginLeft:-index*width},500)
     btn[i].style.background=""; 
  };
   animate(as,{marginLeft:-index*width},500) 
   btn[index].style.background="#b61b1f";
}
dahezi.onmouseover=function(){
  clearInterval(t);
  btns.style.display="block";
  rbtn.style.display="block";
}
dahezi.onmouseout=function(){
  t=setInterval(move,5000)
  btns.style.display="none";
  rbtn.style.display="none";
}

})();




(function(){
 var as=getClass('spbjgai')[0];
 // alert(as.length)
 var imgs=getClass('spbjmp');
 // alert(imgs.length)
 var width=parseInt(getStyle(imgs[0],"width"));
var btn=getClass('spbtn')[0].getElementsByClassName('spbtns');
console.log(btn)
  var btns=getClass('splr')[0].getElementsByClassName('spr')[0];
console.log(btns)
var rbtn=getClass('splr')[0].getElementsByClassName('spl')[0];
var index=0;
var dahezi=getClass('spbjcenterc')[0];
var t=setInterval(move,5000)
function move(){
index++;
if(index>imgs.length-1){
  index=0;
}
for (var t = 0; t <imgs.length; t++) {
  animate(as,{marginLeft:-index*width},500) 
   btn[t].style.background="";
};
 animate(as,{marginLeft:-index*width},500)
 btn[index].style.background="#b61b1f"; 
}
for (var i = 0; i <btn.length; i++) {
  btn[i].index=i;
  btn[i].onclick=function(){
    for (var j = 0; j < btn.length; j++) {
     animate(as,{marginLeft:-this.index*width},500) 
      btn[j].style.background="";
    };
   animate(as,{marginLeft:-this.index*width},500) 
    btn[this.index].style.background="#b61b1f";
  }
};
btns.onclick=function(){
  move();
}
rbtn.onclick=function(){
  index--;
  if (index<0) {
    index=imgs.length-1
  };
  for (var i = 0; i < imgs.length; i++) {
     animate(as,{marginLeft:-index*width},500)
     btn[i].style.background=""; 
  };
   animate(as,{marginLeft:-index*width},500) 
   btn[index].style.background="#b61b1f";
}
dahezi.onmouseover=function(){
  clearInterval(t);
  btns.style.display="block";
  rbtn.style.display="block";
}
dahezi.onmouseout=function(){
  t=setInterval(move,5000)
  btns.style.display="none";
  rbtn.style.display="none";
}

})();





(function(){
  var imgs=getClass('tsyxgai')[0];
   // console.log(imgs)
   var as=getClass('tsyxrr')[0].getElementsByTagName('a');
  var width=parseInt(getStyle(as[0],"width"));

// alert(as.length)
var btn=getClass('tsbtn')[0].getElementsByClassName('tsbtns');
console.log(btn.length)
var btns=getClass('tslr')[0].getElementsByClassName('tsl')[0];
// console.log(btns)
var rbtn=getClass('tslr')[0].getElementsByClassName('tsr')[0];
var box=getClass('tsyxrr')[0];
var index=0;
var t=setInterval(move,5000)
function move(){
index++;
if (index>as.length-1) {
  index=0;
};
for (var t = 0; t < as.length; t++) {
  animate(imgs,{marginLeft:-index*width},500)   
  btn[t].style.background="";
};
 animate(imgs,{marginLeft:-index*width})   
 btn[index].style.background="#b61b1f";
}
for (var i = 0; i < btn.length; i++) {
  btn[i].index=i;
  btn[i].onclick=function(){
    for (var j = 0; j < as.length; j++) {
    animate(imgs,{marginLeft:-this.index*width},500)
      btn[j].style.background="";
    };
   animate(imgs,{marginLeft:-this.index*width},500)
    btn[this.index].style.background="#b61b1f";
  }
};
rbtn.onclick=function(){
  move();
 }
btns.onclick=function(){
  index--;
  if (index<0) {
    index=as.length-1;
  };
  for (var i = 0; i < as.length; i++) {
   animate(imgs,{marginLeft:-index*width},500)
     btn[i].style.background="";
  };
 animate(imgs,{marginLeft:-index*width},500)
  btn[index].style.background="#b61b1f";

 }
 box.onmouseover=function(){
  clearInterval(t);
  btns.style.display="block";
  rbtn.style.display="block";
 }
 box.onmouseout=function(){
  t=setInterval(move,5000);
  btns.style.display="none";
  rbtn.style.display="none";
 }

})();




(function(){
  var imgs=getClass('shfwgai')[0];
   // console.log(imgs)
   var as=getClass('shfwp')[0].getElementsByTagName('a');
  var width=parseInt(getStyle(as[0],"width"));

// alert(as.length)
var btn=getClass('shbtn')[0].getElementsByClassName('shbtns');
console.log(btn.length)
var btns=getClass('shlr')[0].getElementsByClassName('shl')[0];
// console.log(btns)
var rbtn=getClass('shlr')[0].getElementsByClassName('shr')[0];
var box=getClass('shfwp')[0];
var index=0;
var t=setInterval(move,5000)
function move(){
index++;
if (index>as.length-1) {
  index=0;
};
for (var t = 0; t < as.length; t++) {
  animate(imgs,{marginLeft:-index*width},500)   
  btn[t].style.background="";
};
 animate(imgs,{marginLeft:-index*width})   
 btn[index].style.background="#b61b1f";
}
for (var i = 0; i < btn.length; i++) {
  btn[i].index=i;
  btn[i].onclick=function(){
    for (var j = 0; j < as.length; j++) {
    animate(imgs,{marginLeft:-this.index*width},500)
      btn[j].style.background="";
    };
   animate(imgs,{marginLeft:-this.index*width},500)
    btn[this.index].style.background="#b61b1f";
  }
};
rbtn.onclick=function(){
  move();
 }
btns.onclick=function(){
  index--;
  if (index<0) {
    index=as.length-1;
  };
  for (var i = 0; i < as.length; i++) {
   animate(imgs,{marginLeft:-index*width},500)
     btn[i].style.background="";
  };
 animate(imgs,{marginLeft:-index*width},500)
  btn[index].style.background="#b61b1f";

 }
 box.onmouseover=function(){
  clearInterval(t);
  btns.style.display="block";
  rbtn.style.display="block";
 }
 box.onmouseout=function(){
  t=setInterval(move,5000);
  btns.style.display="none";
  rbtn.style.display="none";
 }

})();


 (function(){
  var imgs=getClass('shfwqwc')[0];
   // console.log(imgs)
   var as=getClass('shfwqw')[0].getElementsByTagName('a');
  var width=parseInt(getStyle(as[0],"width"));

// alert(as.length)
var btn=getClass('fwbtn')[0].getElementsByClassName('fwbtns');
console.log(btn.length)
var btns=getClass('fwlr')[0].getElementsByClassName('fwl')[0];
// console.log(btns)
var rbtn=getClass('fwlr')[0].getElementsByClassName('fwr')[0];
var box=getClass('shfwqw')[0];
var index=0;
var t=setInterval(move,5000)
function move(){
index++;
if (index>as.length-1) {
  index=0;
};
for (var t = 0; t < as.length; t++) {
  animate(imgs,{marginLeft:-index*width},500)   
  btn[t].style.background="";
};
 animate(imgs,{marginLeft:-index*width})   
 btn[index].style.background="#b61b1f";
}
for (var i = 0; i < btn.length; i++) {
  btn[i].index=i;
  btn[i].onclick=function(){
    for (var j = 0; j < as.length; j++) {
    animate(imgs,{marginLeft:-this.index*width},500)
      btn[j].style.background="";
    };
   animate(imgs,{marginLeft:-this.index*width},500)
    btn[this.index].style.background="#b61b1f";
  }
};
rbtn.onclick=function(){
  move();
 }
btns.onclick=function(){
  index--;
  if (index<0) {
    index=as.length-1;
  };
  for (var i = 0; i < as.length; i++) {
   animate(imgs,{marginLeft:-index*width},500)
     btn[i].style.background="";
  };
 animate(imgs,{marginLeft:-index*width},500)
  btn[index].style.background="#b61b1f";

 }
 box.onmouseover=function(){
  clearInterval(t);
  btns.style.display="block";
  rbtn.style.display="block";
 }
 box.onmouseout=function(){
  t=setInterval(move,5000);
  btns.style.display="none";
  rbtn.style.display="none";
 }


})();




(function(){
var as=getClass('ttdjaa')[0].getElementsByTagName('a')[0];
var boxa=getClass('ttdjaa')[0];
boxa.onmouseover=function(){
    animate(as,{marginLeft:-10},500);
  }
boxa.onmouseout=function(){
    animate(as,{marginLeft:0},500);
     }
})();







//楼层跳转
var back=document.getElementsByClassName('back');
// alert(back.length)
var backItem=document.getElementsByClassName('backItem');
// alert(backItem.length)
var num=document.getElementsByClassName('num');
// alert(num.length)
var font=document.getElementsByClassName('font');
var floorItem=document.getElementsByClassName('floorItem');
// alert(floorItem.length)
var arr=[];
// alert(arr)
for (var i = 0; i <floorItem.length; i++) {
    arr.push(floorItem[i].offsetTop);
  };
  console.log(arr);
  for (var i = 0; i < backItem.length; i++) {
    if(i==0){
      num[i].style.display="none";
      font[i].style.display="block";

    }else{
      num[i].style.display="block";
      font[i].style.display="none";
    }
  };

window.onscroll=function(){
    var doc=document.body.scrollTop?document.body:document.documentElement;
    for (var i = 0; i < arr.length; i++) {
      if(doc.scrollTop>=arr[i]){
        for (var j = 0; j < backItem.length; j++) {
         num[j].style.display="block";
         font[j].style.display="none";
        };
        num[i].style.display="none";
        font[i].style.display="block";
      }
    };
    
  }
  for (var i = 0; i < backItem.length; i++) {
    backItem[i].index=i;
    backItem[i].onclick=function(){
    animate(document.body,{scrollTop:arr[this.index]});
    animate(document.documentElement,{scrollTop:arr[this.index]});
      //document.body.scrollTop=arr[this.index];
      //document.documentElement.scrollTop=arr[this.index];

    }
  };


















}