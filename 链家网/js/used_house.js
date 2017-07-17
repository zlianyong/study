
			var u_id=localStorage.getItem("p2_user_id");
			console.log(u_id);
			var vm=new Vue({
				el:"#cont",
				data:{
					city:[],
					photo:{},
					lists:[],
//					area:{},
					seen:false,
					index:"",
					conindex:"",
					list:[],
					areas:[],
					area: [
{
name: "区域",
id: "14",
child: [
{
id: "16",
name: "东城",
kid: [
{
id: "24",
name: "安定门"
},
{
id: "25",
name: "安贞"
},
{
id: "26",
name: "朝阳门外"
},
{
id: "27",
name: "朝阳门内"
},
{
id: "31",
name: "崇文门"
},
{
id: "31",
name: "东单"
}
]
},
{
id: "17",
name: "西城",
kid: [{
id: "25",
name: "安定门"
},
{
id: "26",
name: "菜户营"
},
{
id: "27",
name: "白纸坊"
},
{
id: "31",
name: "车公庄"
},
{
id: "31",
name: "广安门"
}, 
{
id: "27",
name: "官园"
},
{
id: "31",
name: "马甸"
},
{
id: "31",
name: "木樨地"
},
{
id: "27",
name: "陶然亭"
},
{
id: "31",
name: "天宁寺"
},
{
id: "31",
name: "西直门"
},]
},
{
id: "18",
name: "朝阳",
kid: [{
id: "27",
name: "奥林匹克公园"
},
{
id: "31",
name: "北工大"
},
{
id: "31",
name: "百子湾"
},{
id: "27",
name: "CBD"
},
{
id: "31",
name: "朝阳公园"
},
{
id: "31",
name: "成寿寺"
},{
id: "27",
name: "大望路"
},
{
id: "31",
name: "东直门"
},
{
id: "31",
name: "方庄"
},]
},

{
id: "18",
name: "丰台",
kid: [{
id: "27",
name: "北大地"
},
{
id: "31",
name: "北京南站"
},
{
id: "31",
name: "菜户营"
},{
id: "27",
name: "草桥"
},
{
id: "31",
name: "大红门"
},
{
id: "31",
name: "花乡"
},{
id: "27",
name: "角门"
},
{
id: "31",
name: "旧宫"
},
{
id: "31",
name: "看丹桥"
},{
id: "27",
name: "六里桥"
},
{
id: "31",
name: "丽泽"
},
{
id: "31",
name: "马家堡"
}, 
{
id: "27",
name: "木樨园"
},
{
id: "31",
name: "蒲黄榆"
},
{
id: "31",
name: "十里河"
},{
id: "27",
name: "洋桥"
},
{
id: "31",
name: "玉泉营"
},
{
id: "31",
name: "岳各庄"
},]
},
{
id: "19",
name: "石景山",
kid: [ {
id: "27",
name: "古城"
},
{
id: "31",
name: "八角"
},
{
id: "31",
name: "苹果园"
},{
id: "27",
name: "鲁谷"
},
{
id: "31",
name: "老山"
},
{
id: "31",
name: "杨庄"
},{
id: "27",
name: "玉泉路"
},
{
id: "31",
name: "石景山其他"
},
{
id: "31",
name: "城子"
},]
},
{
id: "18",
name: "海淀",
kid: [{
id: "27",
name: "安宁庄"
},
{
id: "31",
name: "北太平庄"
},
{
id: "31",
name: "白石桥"
},{
id: "27",
name: "公主坟"
},
{
id: "31",
name: "定慧寺"
},
{
id: "31",
name: "军事博物馆"
},{
id: "27",
name: "上地"
},
{
id: "31",
name: "四季青"
},
{
id: "31",
name: "苏州桥"
}, ]
},
{
id: "19",
name: "大兴",
kid: [ {
id: "27",
name: "天宫院"
},
{
id: "31",
name: "西红门"
},
{
id: "31",
name: "枣园"
},]
},{
id: "19",
name: "房山",
kid: [ ]
}
]
},
{
name: "地铁",
id: "15",
child: [
{
id: "20",
name: "一号线",
kid: [
{
id: "28",
name: "苹果园"
},
{
id: "29",
name: "古城"
},
{
id: "30",
name: "八宝山"
},
{
id: "29",
name: "军事博物馆"
},
{
id: "30",
name: "公主坟"
}
]
},
{
id: "21",
name: "二号线",
kid: [
{
id: "28",
name: "复兴门"
},
{
id: "29",
name: "安定门"
},
{
id: "30",
name: "雍和宫"
},
{
id: "30",
name: "鼓楼大街"
},
{
id: "30",
name: "东直门"
},
{
id: "30",
name: "建国门"
},
]
},

{
id: "23",
name: "四号线",
kid: [
{
id: "28",
name: "天宫院"
},
{
id: "29",
name: "高米店南"
},
{
id: "30",
name: "高米店北"
},
{
id: "30",
name: "新宫"
},
{
id: "30",
name: "角门西"
},
{
id: "30",
name: "马家堡"
},
{
id: "30",
name: "北京南站"
},
{
id: "30",
name: "陶然亭"
},
{
id: "30",
name: "菜市口"
},
]
},
{
id: "22",
name: "五号线",
kid: [ {
id: "28",
name: "天通苑北"
},
{
id: "29",
name: "立水桥"
},
{
id: "30",
name: "和平里西"
},
{
id: "30",
name: "磁器口"
},
{
id: "30",
name: "天坛东门"
},
{
id: "30",
name: "刘家窑"
},]
},
{
id: "23",
name: "六号线",
kid: [ {
id: "28",
name: "白石桥"
},
{
id: "29",
name: "车公庄"
},
{
id: "30",
name: "白石桥南"
},
{
id: "30",
name: "慈寿寺"
},
{
id: "30",
name: "花园桥"
},
{
id: "30",
name: "南锣鼓巷"
},]
},
{
id: "22",
name: "七号线",
kid: [{
id: "28",
name: "湾子"
},
{
id: "29",
name: "达官营"
},
{
id: "30",
name: "北京西站"
},
{
id: "30",
name: "广安门内"
},
{
id: "30",
name: "虎坊桥"
},
{
id: "30",
name: "珠市口"
}, ]
},
{
id: "23",
name: "八号线",
kid: [ {
id: "28",
name: "朱辛庄"
},
{
id: "29",
name: "育知路"
},
{
id: "30",
name: "霍营"
},
{
id: "30",
name: "育新"
},
{
id: "30",
name: "什刹海"
},
{
id: "30",
name: "安华桥"
},]
},
{
id: "22",
name: "九号线",
kid: [ {
id: "28",
name: "国家图书馆"
},
{
id: "29",
name: "六里桥"
},
{
id: "30",
name: "七里庄"
},
{
id: "30",
name: "丰台南路"
},
{
id: "30",
name: "白堆子"
},
{
id: "30",
name: "北京西站"
},]
},
{
id: "23",
name: "十号线",
kid: [ {
id: "28",
name: "首经贸"
},
{
id: "29",
name: "丰台站"
},
{
id: "30",
name: "泥洼"
},
{
id: "30",
name: "西局"
},
{
id: "30",
name: "莲花桥"
},
{
id: "30",
name: "草桥"
},
{
id: "29",
name: "角门西"
},
{
id: "30",
name: "宋家庄"
},
{
id: "30",
name: "大红门"
},
{
id: "30",
name: "角门东"
},
{
id: "30",
name: "石榴庄"
},
]
},
]
}
],
				},
				mounted:function(){
//			        this.getList();
			   },	
				methods:{
//					getList:function(index) {
//					 	$.ajax({
//					 		type:"post",
//					 		url:"http://lianjia.cn/home/condition/sec_rent",
//					 		dataType:"json",
//					 		data:{
//					 			user_id:u_id
//					 		},
//					 		success:function(res){
//					 			console.log(res)
//					 			this.city=res.city;
//					 			this.area=res.area
//					 			this.lists=res.area[0].child
//					 			console.log(this.lists)
//					 		}.bind(this)
//					 	});
//					},
					getlist:function(values){
						this.list=values
						console.log(this.list)
						this.seen=false
					},
					getarea:function(value){
						this.seen=true
						this.areas=value;
						console.log(this.areas)
					},
				},
//				updated:function(){
//					
//					
//				},
			});
			
		
		
		$(".flexbox ul li").click(function(){
						$(".selection").slideDown(300)
						$(this).children(".more").addClass("changeimg");		
						$(this).siblings().children(".more").removeClass("changeimg");
						var dex=$(this).index();
						$(".area").eq(dex).removeClass("hide").siblings().addClass("hide");
					});
					
				
					 $(".flexbox").on("click",".changeimg",function(){
					 	$(".selection").slideUp(300);
						$(this).removeClass("changeimg");				
					})
				
					
					
					$(".area-left p").click(function(){
						$(this).addClass("white").siblings().removeClass("white");
						var index=$(this).index();
						$(".right-lists").eq(index).removeClass("hide").siblings().addClass("hide");
					});
					
					 $(".area-right").on("click",".lists_li",function(){
						$(this).addClass("white").siblings().removeClass("white");
						var index=$(this).index();
						$(".right-detail").eq(index).removeClass("hide").siblings().addClass("hide");
					});
					
					$(".mores").click(function(){
						$(".select").slideDown(300)
					})
					$(".select ul li").click(function(){
						var a=$(this).text();
						$(".addresses").html(a);
						$(".select").slideUp(200)
					})
						
					 $(".right_detail").on("click",".detail_li",function(){
						var b=$(this).text();
						$(".addres").html(b);
//						$(".selection").slideUp(300);
					})
