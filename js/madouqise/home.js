/* head - search*////----------------------------------------------------
    $(function(){
        $(".select_box").click(function(event){   
            event.stopPropagation();
            $(this).find(".option").toggle();
            $(this).parent().siblings().find(".option").hide();
        });
        $(document).click(function(event){
            var eo=$(event.target);
            if($(".select_box").is(":visible") && eo.attr("class")!="option" && !eo.parent(".option").length)
            $('.option').hide();                                    
        });
        $(".option li").click(function(){
            var check_value=$(this).text();
            var zlValue = $('.option li:eq(1)').html();
            var bqValue = $('.option li:eq(2)').html();
            $(this).parent().siblings(".select_txt").text(check_value);
            $("#select_value").val(check_value);
            var action =$(this).attr("data-action");
	    		$("#search,#pcsearch").attr("action",action);
	    		$("#pcinput,wapinput").text($(this).html());
        });
    })

/*!* index-ajax *///----------------------------------------------------
$(function(){
	$('#morevod').click(function(){ 
		ajaxRead();
	});
	
	var page=2;
	var mid=1;   
	var limit=30;
	var order="";
	var by= "vod_time_add";
	var wd= "";
	var tag= "";
	function ajaxRead(){
		var html='' ;
        $.ajax({
			url : "/index.php/ajax/data.html",
			type:'POST',
			data: 'mid='+mid+'&page='+page+'&limit='+limit+'&by='+by+'&order='+order+'&wd='+wd+'&tag='+tag+'',
            dataType:"json",
            success : function(data){
				if(data.pagecount >= page && page < 10){
					var vod=data['list'],
					html=''
					for (var i = 0; i < vod.length; i++) {
						html +='<div class="colVideoList"><div class="video-elem"><a target="_blank" class="display d-block" href="/vodplay/'+vod[i].vod_id+'/index_1_1.html"><div class="scale"></div><img class="img lazyload" src="/template/madouqise/images/load_2.gif" data-original="'+vod[i].vod_pic+'" /><small class="layer">'+vod[i].vod_class+'</small></a><a target="_blank" class="title text-sub-title mt-2 mb-3" href="/vodplay/'+vod[i].vod_id+'/index_1_1.html">'+vod[i].vod_name+'</a></div></div>';
					}
					var vod_list=$('#morebox');
					vod_list.append(html);
					page +=1;
					$("img.lazyload").lazyload();
				}else{
					$('#morevod').show().html("已加载完毕！");
				};
				loading123 = false;
			},
			error:function(){
				alert("请求失败");
			}	
        });
	};
})