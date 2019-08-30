mui.plusReady(function(){
	            //出发时间beginTime
				    var beginTime = document.getElementById('begintime');	
				//到达时间toTime
					var toTime =   document.getElementById('totime');
					//如果分小时10自动添加0
					function checkTime(i)
						{
						if (i<10) 
						  {i="0" + i}
						  return i
						}
				//默认出发时间和到达时间显示的是当天时间
					 var dDate = new Date();
					 var y = dDate.getFullYear();
					 var m = checkTime(dDate.getMonth()+1);
					 var d = checkTime(dDate.getDate());
					 var h = checkTime(dDate.getHours());
					 var mi = checkTime(dDate.getMinutes());
					beginTime.getElementsByTagName('span')[1].innerText = y + '-' + m + '-' + d + ' ' + h + ':' + mi;
					toTime.getElementsByTagName('span')[1].innerText = y + '-' + m + '-' + d + ' ' + h + ':' + mi;	
				    
					//点击出发时间弹出的
					   beginTime.addEventListener('tap',function(){
							var dtPicker01 = new mui.DtPicker(); 
							/*
							 type: "datetime",//设置日历初始视图模式 
						     beginDate: new Date(2015, 00, 01),//设置开始日期  --月份：索引是0；
						     endDate: new Date(2016, 04, 25),//设置结束日期 
						     labels: ['Year', 'Mon', 'Day', 'Hour', 'min'],//设置默认标签区域提示语 
						     customData: { 
						        h: [
						            { value: 'AM', text: 'AM' },
						            { value: 'PM', text: 'PM' }
						        ] 
						    }//时间/日期别名 */
							
							 dtPicker01.show(function (selectItems) { 
							 	    console.log(selectItems);
							        console.log(selectItems.y);//结果为：{text: "2016",value: 2016} 
							        console.log(selectItems.m);//结果为：{text: "05",value: "05"}
							        console.log(selectItems.d.text);//11
							        console.log(selectItems.h.text);//09
							        console.log(selectItems.i.text);//09
							        console.log(selectItems.text);//结果为：2016-10-11 09:09
							        document.getElementById('begintime').getElementsByTagName('span')[1].innerText = selectItems.text
						 	});
				
			  			 });
			  			 
			  	    //点击到达时间弹出的
					   toTime.addEventListener('tap',function(){
							var dtPicker01 = new mui.DtPicker(); 
							/*
							 type: "datetime",//设置日历初始视图模式 
						     beginDate: new Date(2015, 00, 01),//设置开始日期  --月份：索引是0；
						     endDate: new Date(2016, 04, 25),//设置结束日期 
						     labels: ['Year', 'Mon', 'Day', 'Hour', 'min'],//设置默认标签区域提示语 
						     customData: { 
						        h: [
						            { value: 'AM', text: 'AM' },
						            { value: 'PM', text: 'PM' }
						        ] 
						    }//时间/日期别名 */
							
							 dtPicker01.show(function (selectItems) { 
							        console.log(selectItems.y);//结果为：{text: "2016",value: 2016} 
							        console.log(selectItems.m);//结果为：{text: "05",value: "05"}
							        console.log(selectItems.d.text);//11
							        console.log(selectItems.h.text);//09
							        console.log(selectItems.i.text);//09
							        console.log(selectItems.text);//结果为：2016-10-11 09:09
							        document.getElementById('totime').getElementsByTagName('span')[1].innerText = selectItems.text
						 	});
				
			  			 });
})