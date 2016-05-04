/* */
function getClass (classname,obj) {
	 var obj=obj || document
	if (document.getElementsByClassName) {
      return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName('*');
		for(var i = 0;i <alls.length;i++) {
			if (alls[i].ClassName==classname) {
                  arr.push(alls[i]);
			};

		};
		return arr
	}
}




function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr]
		}else{
			return getComputedStyle(obj,null)[attr];
		}
	}




	function move(obj,val){//函数声明
		if (val==undefined) {
          if(obj.textContent==undefined){//分支结构判断条件是否等于undefined
            return obj.innerText//否就执行另一种
		} else{
			return obj.textContent
		};
		} else{
        obj.innerText=val;
		};
		
	}




	// function $(selector,context){
 //       if(typeof selector="string") {
 //       	context=context||document
 //       	if (selector.charAt(0)=="#") {
 //           return document.getElementsById
 //           (selector.substr(1))
 //       	}else if(selector.charAt(0)=="."){
 //       		getClass(selector.substring(1))
 //       	};else if(/^[a-zA-Z][a-zA-Z1-6]*$/test(selector)){
 //       		return context.getElementsByTagName(selector)
 //       	}
 //       }
 //        if(typeof selector="function"){
 //       	 return window.onload=function(){
 //             selector();      	 
 //        }
 // 	}
 // }



 // function getChilds(obj){
 //   childs=obj.nodeType
 // }











 // function trim(str,type){
 // 	type=type||"lr"
 // 	if(type=='a'){
 // 		return str.replace(/^\s*/g,"");
 // 	}
 // 	if (type=='l') {
 // 		return str.replace(/^\s*/g,"");
 // 	} 
 // 	if (type=="r") {
 // 		return str.replace(/\s*$/g,"");
 // 	}
 // 	if (type=="lr") {
 // 		return str.replace(/^\s*/\s*$/g,"");
 // 	};
 // }
