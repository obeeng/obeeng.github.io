/**
 * Twit
 *  jQuery Plugin to Display Twitter Tweets on a Blog.
 *  http://code.google.com/p/jquery-twit/
 *
 * Copyright (c) 2009 Yusuke Horie
 *
 * Released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Since  : 0.1.0 - 08/26/2009
 * Version: 0.1.0 - 08/26/2009
 */
(function(jQuery){var _i=0;jQuery.fn.twit=function(user,options){if(typeof user!='string')return this;var opts=jQuery.extend({},jQuery.fn.twit.defaults,options),c=jQuery.isFunction(opts.callback)?opts.callback:_callback,url='',params={};opts.user=user;url = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=' + opts.user;params.count=opts.count;return this.each(function(i,e){var $e=$(e);if(!$e.hasClass('twit'))$e.addClass('twit');jQuery.ajax({url:url,data:params,dataType:'jsonp',success:function(o){c.apply(this,[(o.results)?o.results:o,e,opts])}})})};jQuery.fn.twit.defaults={user:null,callback:null,icon:true,username:true,text:true,count:200,limit:7,label:'Twitter',title:''};var _callback=function(o,e,opts){var $this=$(e);if(!o||o.length==0||$this.length==0)return false;$this.data('_inc',1);_i++;var username=o[0].user.screen_name,icon=o[0].user.profile_image_url;var h='<div class="twitHeader">'+' <span class="twitLabel">'+opts.label+'</span>&nbsp;&nbsp;'+' <span class="twitTitle">'+opts.title+'</span>'+'</div>';if(opts.icon||opts.username){h+='<div class="twitUser">';if(opts.icon)h+=' <a href="http://twitter.com/'+username+'/">'+'  <img src="'+icon+'" alt="'+username+'" title="'+username+'" style="vertical-align:middle;" />'+' </a>&nbsp;&nbsp;';if(opts.username)h+='<a href="http://twitter.com/'+username+'/">'+username+'</a>';h+='</div>'}h+='<ul class="twitBody" id="twitList'+_i+'">'+_build(o,$this,opts)+'</ul>';$this.html(h);$('#twitList'+_i+' a.twitEntryShow').live('click.twitEntryShow'+_i,function(event){event.preventDefault();var $t=$(this);$t.parent().fadeOut(400,function(){var i=$this.data('_inc');i++;$this.data('_inc',i);if($t.hasClass('twitEntryAll')){$t.die('click.twitEntryShow'+_i);var start=(i*opts.limit)-opts.limit;$(this).after(_build(o,$this,opts,start,o.length)).remove()}else{$(this).after(_build(o,$this,opts)).remove()}})})};var _build=function(o,$t,opts,s,e){var h='',inc=$t.data('_inc'),start=s||(inc*opts.limit)-opts.limit,end=e||((o.length>start+opts.limit)?start+opts.limit:o.length);for(var i=start;i<end;i++){var t=o[i],username=t.user.screen_name,icon=t.user.profile_image_url;h+='<li class="twitEntry">';if(opts.text){var text=t.text.replace(/(https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)/,function(u){var shortUrl=(u.length>30)?u.substr(0,30)+'...':u;return'<a href="'+u+'">'+shortUrl+'</a>'}).replace(/@([a-zA-Z_]+)/g,'@<a href="http://twitter.com/$1">$1</a>').replace(/(?:^|\s)#([^\s\.\+:!]+)/g,function(a,u){return' <a href="http://twitter.com/search?q='+encodeURIComponent(u)+'">#'+u+'</a>'});h+=' <span>'+text+'</span>'}h+='</li>'}if(o.length>end){h+='<li class="twitNavi">'+'<a href="#" class="twitEntryShow">more</a> &nbsp;/&nbsp;';if(o.length>opts.limit)h+='<a href="#" class="twitEntryShow twitEntryAll">all</a>';h+='</li>'}return h}})(jQuery);



/*!
 * CSS Browser Selector v0.4.0 (Nov 02, 2010)
 * http://rafael.adm.br/css_browser_selector
 */
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);

/*!
 * (v) Compact labels plugin (v20110124)
 * Takes one option: labelOpacity [default: true] set to false to disable label opacity change on empty input focus
 */
(function($){$.fn.compactize=function(options){var defaults={labelOpacity:true};options=$.extend(defaults,options);return this.each(function(){var label=$(this),input=$('#'+label.attr('for'));input.focus(function(){if(options.labelOpacity){if(input.val()===''){label.css('opacity','0.5');}}else{label.hide();}});input.keydown(function(){label.hide();});input.blur(function(){if(input.val()===''){label.show();if(options.labelOpacity){label.css('opacity',1);}}});window.setInterval(function(){if(input.val()!==''){label.hide();}},50);});};})(jQuery);

/*!
 * fancyBox - jQuery Plugin
 * version: 2.0.5 (21/02/2012)
 * @requires jQuery v1.6 or later
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */
(function(window,document,$){var W=$(window),D=$(document),F=$.fancybox=function(){F.open.apply(this,arguments);},didResize=false,resizeTimer=null,isMobile=typeof document.createTouch!=="undefined";$.extend(F,{version:'2.0.5',defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:true,autoResize:!isMobile,autoCenter:!isMobile,fitToView:true,aspectRatio:false,topRatio:0.5,fixed:!($.browser.msie&&$.browser.version<=6)&&!isMobile,scrolling:'auto',wrapCSS:'fancybox-default',arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3000,preload:3,modal:false,loop:true,ajax:{dataType:'html',headers:{'X-fancyBox':true}},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"'+($.browser.msie?' allowtransparency="true"':'')+'></iframe>',swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'},openEffect:'fade',openSpeed:250,openEasing:'swing',openOpacity:true,openMethod:'zoomIn',closeEffect:'fade',closeSpeed:250,closeEasing:'swing',closeOpacity:true,closeMethod:'zoomOut',nextEffect:'elastic',nextSpeed:300,nextEasing:'swing',nextMethod:'changeIn',prevEffect:'elastic',prevSpeed:300,prevEasing:'swing',prevMethod:'changeOut',helpers:{overlay:{speedIn:0,speedOut:300,opacity:0.8,css:{cursor:'pointer'},closeClick:true},title:{type:'float'}},onCancel:$.noop,beforeLoad:$.noop,afterLoad:$.noop,beforeShow:$.noop,afterShow:$.noop,beforeClose:$.noop,afterClose:$.noop},group:{},opts:{},coming:null,current:null,isOpen:false,isOpened:false,wrap:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(group,opts){F.close(true);if(group&&!$.isArray(group)){group=group instanceof $?$(group).get():[group];}
F.isActive=true;F.opts=$.extend(true,{},F.defaults,opts);if($.isPlainObject(opts)&&typeof opts.keys!=='undefined'){F.opts.keys=opts.keys?$.extend({},F.defaults.keys,opts.keys):false;}
F.group=group;F._start(F.opts.index||0);},cancel:function(){if(F.coming&&false===F.trigger('onCancel')){return;}
F.coming=null;F.hideLoading();if(F.ajaxLoad){F.ajaxLoad.abort();}
F.ajaxLoad=null;if(F.imgPreload){F.imgPreload.onload=F.imgPreload.onabort=F.imgPreload.onerror=null;}},close:function(a){F.cancel();if(!F.current||false===F.trigger('beforeClose')){return;}
F.unbindEvents();if(!F.isOpen||(a&&a[0]===true)){$(".fancybox-wrap").stop().trigger('onReset').remove();F._afterZoomOut();}else{F.isOpen=F.isOpened=false;$(".fancybox-item, .fancybox-nav").remove();F.wrap.stop(true).removeClass('fancybox-opened');F.inner.css('overflow','hidden');F.transitions[F.current.closeMethod]();}},play:function(a){var clear=function(){clearTimeout(F.player.timer);},set=function(){clear();if(F.current&&F.player.isActive){F.player.timer=setTimeout(F.next,F.current.playSpeed);}},stop=function(){clear();$('body').unbind('.player');F.player.isActive=false;F.trigger('onPlayEnd');},start=function(){if(F.current&&(F.current.loop||F.current.index<F.group.length-1)){F.player.isActive=true;$('body').bind({'afterShow.player onUpdate.player':set,'onCancel.player beforeClose.player':stop,'beforeLoad.player':clear});set();F.trigger('onPlayStart');}};if(F.player.isActive||(a&&a[0]===false)){stop();}else{start();}},next:function(){if(F.current){F.jumpto(F.current.index+1);}},prev:function(){if(F.current){F.jumpto(F.current.index-1);}},jumpto:function(index){if(!F.current){return;}
index=parseInt(index,10);if(F.group.length>1&&F.current.loop){if(index>=F.group.length){index=0;}else if(index<0){index=F.group.length-1;}}
if(typeof F.group[index]!=='undefined'){F.cancel();F._start(index);}},reposition:function(a){if(F.isOpen){F.wrap.css(F._getPosition(a));}},update:function(e){if(F.isOpen){if(!didResize){resizeTimer=setTimeout(function(){var current=F.current;if(didResize){didResize=false;if(current){if(current.autoResize||(e&&e.type==='orientationchange')){if(current.autoSize){F.inner.height('auto');current.height=F.inner.height();}
F._setDimension();if(current.canGrow){F.inner.height('auto');}}
if(current.autoCenter){F.reposition();}
F.trigger('onUpdate');}}},100);}
didResize=true;}},toggle:function(){if(F.isOpen){F.current.fitToView=!F.current.fitToView;F.update();}},hideLoading:function(){$("#fancybox-loading").remove();},showLoading:function(){F.hideLoading();$('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');},getViewport:function(){return{x:W.scrollLeft(),y:W.scrollTop(),w:W.width(),h:W.height()};},unbindEvents:function(){if(F.wrap){F.wrap.unbind('.fb');}
D.unbind('.fb');W.unbind('.fb');},bindEvents:function(){var current=F.current,keys=current.keys;if(!current){return;}
W.bind('resize.fb, orientationchange.fb',F.update);if(keys){D.bind('keydown.fb',function(e){var code;if(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey&&$.inArray(e.target.tagName.toLowerCase(),['input','textarea','select','button'])<0){code=e.keyCode;if($.inArray(code,keys.close)>-1){F.close();e.preventDefault();}else if($.inArray(code,keys.next)>-1){F.next();e.preventDefault();}else if($.inArray(code,keys.prev)>-1){F.prev();e.preventDefault();}}});}
if($.fn.mousewheel&&current.mouseWheel&&F.group.length>1){F.wrap.bind('mousewheel.fb',function(e,delta){var target=$(e.target).get(0);if(target.clientHeight===0||(target.scrollHeight===target.clientHeight&&target.scrollWidth===target.clientWidth)){e.preventDefault();F[delta>0?'prev':'next']();}});}},trigger:function(event){var ret,obj=F[$.inArray(event,['onCancel','beforeLoad','afterLoad'])>-1?'coming':'current'];if(!obj){return;}
if($.isFunction(obj[event])){ret=obj[event].apply(obj,Array.prototype.slice.call(arguments,1));}
if(ret===false){return false;}
if(obj.helpers){$.each(obj.helpers,function(helper,opts){if(opts&&typeof F.helpers[helper]!=='undefined'&&$.isFunction(F.helpers[helper][event])){F.helpers[helper][event](opts,obj);}});}
$.event.trigger(event+'.fb');},isImage:function(str){return str&&str.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i);},isSWF:function(str){return str&&str.match(/\.(swf)(.*)?$/i);},_start:function(index){var coming={},element=F.group[index]||null,isDom,href,type,rez;if(element&&(element.nodeType||element instanceof $)){isDom=true;if($.metadata){coming=$(element).metadata();}}
coming=$.extend(true,{},F.opts,{index:index,element:element},($.isPlainObject(element)?element:coming));$.each(['href','title','content','type'],function(i,v){coming[v]=F.opts[v]||(isDom&&$(element).attr(v))||coming[v]||null;});if(typeof coming.margin==='number'){coming.margin=[coming.margin,coming.margin,coming.margin,coming.margin];}
if(coming.modal){$.extend(true,coming,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{css:{cursor:'auto'},closeClick:false}}});}
F.coming=coming;if(false===F.trigger('beforeLoad')){F.coming=null;return;}
type=coming.type;href=coming.href||element;if(!type){if(isDom){rez=$(element).data('fancybox-type');if(!rez&&element.className){rez=element.className.match(/fancybox\.(\w+)/);type=rez?rez[1]:null;}}
if(!type&&$.type(href)==="string"){if(F.isImage(href)){type='image';}else if(F.isSWF(href)){type='swf';}else if(href.match(/^#/)){type='inline';}}
if(!type){type=isDom?'inline':'html';}
coming.type=type;}
if(type==='inline'||type==='html'){if(!coming.content){if(type==='inline'){coming.content=$($.type(href)==="string"?href.replace(/.*(?=#[^\s]+$)/,''):href);}else{coming.content=element;}}
if(!coming.content||!coming.content.length){type=null;}}else if(!href){type=null;}
coming.group=F.group;coming.isDom=isDom;coming.href=href;if(type==='image'){F._loadImage();}else if(type==='ajax'){F._loadAjax();}else if(type){F._afterLoad();}else{F._error('type');}},_error:function(type){F.hideLoading();$.extend(F.coming,{type:'html',autoSize:true,minHeight:0,hasError:type,content:F.coming.tpl.error});F._afterLoad();},_loadImage:function(){F.imgPreload=new Image();F.imgPreload.onload=function(){this.onload=this.onerror=null;F.coming.width=this.width;F.coming.height=this.height;F._afterLoad();};F.imgPreload.onerror=function(){this.onload=this.onerror=null;F._error('image');};F.imgPreload.src=F.coming.href;if(!F.imgPreload.width){F.showLoading();}},_loadAjax:function(){F.showLoading();F.ajaxLoad=$.ajax($.extend({},F.coming.ajax,{url:F.coming.href,error:function(jqXHR,textStatus){if(textStatus!=='abort'){F._error('ajax',jqXHR);}else{F.hideLoading();}},success:function(data,textStatus){if(textStatus==='success'){F.coming.content=data;F._afterLoad();}}}));},_preloadImages:function(){var group=F.group,current=F.current,len=group.length,item,href;if(!current.preload||group.length<2){return;}
for(var i=1;i<=Math.min(current.preload,len-1);i++){item=group[(current.index+i)%len];href=$(item).attr('href')||item;if(href){new Image().src=href;}}},_afterLoad:function(){F.hideLoading();if(!F.coming||false===F.trigger('afterLoad',F.current)){F.coming=false;return;}
if(F.isOpened){$(".fancybox-item").remove();F.wrap.stop(true).removeClass('fancybox-opened');F.inner.css('overflow','hidden');F.transitions[F.current.prevMethod]();}else{$(".fancybox-wrap").stop().trigger('onReset').remove();F.trigger('afterClose');}
F.unbindEvents();F.isOpen=false;F.current=F.coming;F.wrap=$(F.current.tpl.wrap).addClass('fancybox-'+(isMobile?'mobile':'desktop')+' fancybox-tmp '+F.current.wrapCSS).appendTo('body');F.outer=$('.fancybox-outer',F.wrap).css('padding',F.current.padding+'px');F.inner=$('.fancybox-inner',F.wrap);F._setContent();},_setContent:function(){var content,loadingBay,iframe,current=F.current,type=current.type;switch(type){case'inline':case'ajax':case'html':content=current.content;if(content instanceof $){content=content.show().detach();if(content.parent().hasClass('fancybox-inner')){content.parents('.fancybox-wrap').trigger('onReset').remove();}
$(F.wrap).bind('onReset',function(){content.appendTo('body').hide();});}
if(current.autoSize){loadingBay=$('<div class="fancybox-tmp '+F.current.wrapCSS+'"></div>').appendTo('body').append(content);current.width=loadingBay.width();current.height=loadingBay.height();loadingBay.width(F.current.width);if(loadingBay.height()>current.height){loadingBay.width(current.width+1);current.width=loadingBay.width();current.height=loadingBay.height();}
content=loadingBay.contents().detach();loadingBay.remove();}
break;case'image':content=current.tpl.image.replace('{href}',current.href);current.aspectRatio=true;break;case'swf':content=current.tpl.swf.replace(/\{width\}/g,current.width).replace(/\{height\}/g,current.height).replace(/\{href\}/g,current.href);break;}
if(type==='iframe'){content=$(current.tpl.iframe.replace('{rnd}',new Date().getTime())).attr('scrolling',current.scrolling);current.scrolling='auto';if(current.autoSize){content.width(current.width);F.showLoading();content.data('ready',false).appendTo(F.inner).bind({onCancel:function(){$(this).unbind();F._afterZoomOut();},load:function(){var iframe=$(this),height;try{if(this.contentWindow.document.location){height=iframe.contents().find('body').height()+12;iframe.height(height);}}catch(e){current.autoSize=false;}
if(iframe.data('ready')===false){F.hideLoading();if(height){F.current.height=height;}
F._beforeShow();iframe.data('ready',true);}else if(height){F.update();}}}).attr('src',current.href);return;}else{content.attr('src',current.href);}}else if(type==='image'||type==='swf'){current.autoSize=false;current.scrolling='visible';}
F.inner.append(content);F._beforeShow();},_beforeShow:function(){F.coming=null;F.trigger('beforeShow');F._setDimension();F.wrap.hide().removeClass('fancybox-tmp');F.bindEvents();F._preloadImages();F.transitions[F.isOpened?F.current.nextMethod:F.current.openMethod]();},_setDimension:function(){var wrap=F.wrap,outer=F.outer,inner=F.inner,current=F.current,viewport=F.getViewport(),margin=current.margin,padding2=current.padding*2,width=current.width,height=current.height,maxWidth=current.maxWidth,maxHeight=current.maxHeight,minWidth=current.minWidth,minHeight=current.minHeight,ratio,height_,space;viewport.w-=(margin[1]+margin[3]);viewport.h-=(margin[0]+margin[2]);if(width.toString().indexOf('%')>-1){width=(((viewport.w-padding2)*parseFloat(width))/100);}
if(height.toString().indexOf('%')>-1){height=(((viewport.h-padding2)*parseFloat(height))/100);}
ratio=width/height;width+=padding2;height+=padding2;if(current.fitToView){maxWidth=Math.min(viewport.w,maxWidth);maxHeight=Math.min(viewport.h,maxHeight);}
if(current.aspectRatio){if(width>maxWidth){width=maxWidth;height=((width-padding2)/ratio)+padding2;}
if(height>maxHeight){height=maxHeight;width=((height-padding2)*ratio)+padding2;}
if(width<minWidth){width=minWidth;height=((width-padding2)/ratio)+padding2;}
if(height<minHeight){height=minHeight;width=((height-padding2)*ratio)+padding2;}}else{width=Math.max(minWidth,Math.min(width,maxWidth));height=Math.max(minHeight,Math.min(height,maxHeight));}
width=Math.round(width);height=Math.round(height);$(wrap.add(outer).add(inner)).width('auto').height('auto');inner.width(width-padding2).height(height-padding2);wrap.width(width);height_=wrap.height();if(width>maxWidth||height_>maxHeight){while((width>maxWidth||height_>maxHeight)&&width>minWidth&&height_>minHeight){height=height-10;if(current.aspectRatio){width=Math.round(((height-padding2)*ratio)+padding2);if(width<minWidth){width=minWidth;height=((width-padding2)/ratio)+padding2;}}else{width=width-10;}
inner.width(width-padding2).height(height-padding2);wrap.width(width);height_=wrap.height();}}
current.dim={width:width,height:height_};current.canGrow=current.autoSize&&height>minHeight&&height<maxHeight;current.canShrink=false;current.canExpand=false;if((width-padding2)<current.width||(height-padding2)<current.height){current.canExpand=true;}else if((width>viewport.w||height_>viewport.h)&&width>minWidth&&height>minHeight){current.canShrink=true;}
space=height_-padding2;F.innerSpace=space-inner.height();F.outerSpace=space-outer.height();},_getPosition:function(a){var current=F.current,viewport=F.getViewport(),margin=current.margin,width=F.wrap.width()+margin[1]+margin[3],height=F.wrap.height()+margin[0]+margin[2],rez={position:'absolute',top:margin[0]+viewport.y,left:margin[3]+viewport.x};if(current.fixed&&(!a||a[0]===false)&&height<=viewport.h&&width<=viewport.w){rez={position:'fixed',top:margin[0],left:margin[3]};}
rez.top=Math.ceil(Math.max(rez.top,rez.top+((viewport.h-height)*current.topRatio)))+'px';rez.left=Math.ceil(Math.max(rez.left,rez.left+((viewport.w-width)*0.5)))+'px';return rez;},_afterZoomIn:function(){var current=F.current,scrolling=current.scrolling;F.isOpen=F.isOpened=true;F.wrap.addClass('fancybox-opened').css('overflow','visible');F.update();F.inner.css('overflow',scrolling==='yes'?'scroll':(scrolling==='no'?'hidden':scrolling));if(current.closeClick||current.nextClick){F.inner.css('cursor','pointer').bind('click.fb',current.nextClick?F.next:F.close);}
if(current.closeBtn){$(current.tpl.closeBtn).appendTo(F.outer).bind('click.fb',F.close);}
if(current.arrows&&F.group.length>1){if(current.loop||current.index>0){$(current.tpl.prev).appendTo(F.inner).bind('click.fb',F.prev);}
if(current.loop||current.index<F.group.length-1){$(current.tpl.next).appendTo(F.inner).bind('click.fb',F.next);}}
F.trigger('afterShow');if(F.opts.autoPlay&&!F.player.isActive){F.opts.autoPlay=false;F.play();}},_afterZoomOut:function(){F.trigger('afterClose');F.wrap.trigger('onReset').remove();$.extend(F,{group:{},opts:{},current:null,isActive:false,isOpened:false,isOpen:false,wrap:null,outer:null,inner:null});}});F.transitions={getOrigPosition:function(){var current=F.current,element=current.element,padding=current.padding,orig=$(current.orig),pos={},width=50,height=50,viewport;if(!orig.length&&current.isDom&&$(element).is(':visible')){orig=$(element).find('img:first');if(!orig.length){orig=$(element);}}
if(orig.length){pos=orig.offset();if(orig.is('img')){width=orig.outerWidth();height=orig.outerHeight();}}else{viewport=F.getViewport();pos.top=viewport.y+(viewport.h-height)*0.5;pos.left=viewport.x+(viewport.w-width)*0.5;}
pos={top:Math.ceil(pos.top-padding)+'px',left:Math.ceil(pos.left-padding)+'px',width:Math.ceil(width+padding*2)+'px',height:Math.ceil(height+padding*2)+'px'};return pos;},step:function(now,fx){var ratio,innerValue,outerValue;if(fx.prop==='width'||fx.prop==='height'){innerValue=outerValue=Math.ceil(now-(F.current.padding*2));if(fx.prop==='height'){ratio=(now-fx.start)/(fx.end-fx.start);if(fx.start>fx.end){ratio=1-ratio;}
innerValue-=F.innerSpace*ratio;outerValue-=F.outerSpace*ratio;}
F.inner[fx.prop](innerValue);F.outer[fx.prop](outerValue);}},zoomIn:function(){var wrap=F.wrap,current=F.current,startPos,endPos,dim=current.dim;if(current.openEffect==='elastic'){endPos=$.extend({},dim,F._getPosition(true));delete endPos.position;startPos=this.getOrigPosition();if(current.openOpacity){startPos.opacity=0;endPos.opacity=1;}
F.outer.add(F.inner).width('auto').height('auto');wrap.css(startPos).show();wrap.animate(endPos,{duration:current.openSpeed,easing:current.openEasing,step:this.step,complete:F._afterZoomIn});}else{wrap.css($.extend({},dim,F._getPosition()));if(current.openEffect==='fade'){wrap.fadeIn(current.openSpeed,F._afterZoomIn);}else{wrap.show();F._afterZoomIn();}}},zoomOut:function(){var wrap=F.wrap,current=F.current,endPos;if(current.closeEffect==='elastic'){if(wrap.css('position')==='fixed'){wrap.css(F._getPosition(true));}
endPos=this.getOrigPosition();if(current.closeOpacity){endPos.opacity=0;}
wrap.animate(endPos,{duration:current.closeSpeed,easing:current.closeEasing,step:this.step,complete:F._afterZoomOut});}else{wrap.fadeOut(current.closeEffect==='fade'?current.closeSpeed:0,F._afterZoomOut);}},changeIn:function(){var wrap=F.wrap,current=F.current,startPos;if(current.nextEffect==='elastic'){startPos=F._getPosition(true);startPos.opacity=0;startPos.top=(parseInt(startPos.top,10)-200)+'px';wrap.css(startPos).show().animate({opacity:1,top:'+=200px'},{duration:current.nextSpeed,easing:current.nextEasing,complete:F._afterZoomIn});}else{wrap.css(F._getPosition());if(current.nextEffect==='fade'){wrap.hide().fadeIn(current.nextSpeed,F._afterZoomIn);}else{wrap.show();F._afterZoomIn();}}},changeOut:function(){var wrap=F.wrap,current=F.current,cleanUp=function(){$(this).trigger('onReset').remove();};wrap.removeClass('fancybox-opened');if(current.prevEffect==='elastic'){wrap.animate({'opacity':0,top:'+=200px'},{duration:current.prevSpeed,easing:current.prevEasing,complete:cleanUp});}else{wrap.fadeOut(current.prevEffect==='fade'?current.prevSpeed:0,cleanUp);}}};F.helpers.overlay={overlay:null,update:function(){var width,scrollWidth,offsetWidth;this.overlay.width(0).height(0);if($.browser.msie){scrollWidth=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);offsetWidth=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);width=scrollWidth<offsetWidth?W.width():scrollWidth;}else{width=D.width();}
this.overlay.width(width).height(D.height());},beforeShow:function(opts){if(this.overlay){return;}
opts=$.extend(true,{speedIn:'fast',closeClick:true,opacity:1,css:{background:'black'}},opts);this.overlay=$('<div id="fancybox-overlay"></div>').css(opts.css).appendTo('body');this.update();if(opts.closeClick){this.overlay.bind('click.fb',F.close);}
W.bind("resize.fb",$.proxy(this.update,this));this.overlay.fadeTo(opts.speedIn,opts.opacity);},onUpdate:function(){this.update();},afterClose:function(opts){if(this.overlay){this.overlay.fadeOut(opts.speedOut||0,function(){$(this).remove();});}
this.overlay=null;}};F.helpers.title={beforeShow:function(opts){var title,text=F.current.title;if(text){title=$('<div class="fancybox-title fancybox-title-'+opts.type+'-wrap">'+text+'</div>').appendTo('body');if(opts.type==='float'){title.width(title.width());title.wrapInner('<span class="child"></span>');F.current.margin[2]+=Math.abs(parseInt(title.css('margin-bottom'),10));}
title.appendTo(opts.type==='over'?F.inner:(opts.type==='outside'?F.wrap:F.outer));}}};$.fn.fancybox=function(options){var that=$(this),selector=this.selector||'',index,run=function(e){var what=this,relType='rel',relVal=what[relType],idx=index;if(!(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)){e.preventDefault();if(!relVal){relType='data-fancybox-group';relVal=$(what).attr('data-fancybox-group');}
if(relVal&&relVal!==''&&relVal!=='nofollow'){what=selector.length?$(selector):that;what=what.filter('['+relType+'="'+relVal+'"]');idx=what.index(this);}
options.index=idx;F.open(what,options);}};options=options||{};index=options.index||0;if(selector){D.undelegate(selector,'click.fb-start').delegate(selector,'click.fb-start',run);}else{that.unbind('click.fb-start').bind('click.fb-start',run);}
return this;};}(window,document,jQuery));
/*!
 * Buttons helper for fancyBox
 * version: 1.0.2
 * @requires fancyBox v2.0 or later
 *
 * Usage: 
 *     $(".fancybox").fancybox({
 *         buttons: {
 *             position : 'top'
 *         }
 *     });
 * 
 * Options:
 *     tpl - HTML template
 *     position - 'top' or 'bottom'
 * 
 */
(function($){var F=$.fancybox;F.helpers.buttons={tpl:'<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>',list:null,buttons:{},update:function(){var toggle=this.buttons.toggle.removeClass('btnDisabled btnToggleOn');if(F.current.canShrink){toggle.addClass('btnToggleOn');}else if(!F.current.canExpand){toggle.addClass('btnDisabled');}},beforeLoad:function(opts){if(F.group.length<2){F.coming.helpers.buttons=false;F.coming.closeBtn=true;return;}
F.coming.margin[opts.position==='bottom'?2:0]+=30;},onPlayStart:function(){if(this.list){this.buttons.play.attr('title','Pause slideshow').addClass('btnPlayOn');}},onPlayEnd:function(){if(this.list){this.buttons.play.attr('title','Start slideshow').removeClass('btnPlayOn');}},afterShow:function(opts){var buttons;if(!this.list){this.list=$(opts.tpl||this.tpl).addClass(opts.position||'top').appendTo('body');this.buttons={prev:this.list.find('.btnPrev').click(F.prev),next:this.list.find('.btnNext').click(F.next),play:this.list.find('.btnPlay').click(F.play),toggle:this.list.find('.btnToggle').click(F.toggle)}}
buttons=this.buttons;if(F.current.index>0||F.current.loop){buttons.prev.removeClass('btnDisabled');}else{buttons.prev.addClass('btnDisabled');}
if(F.current.loop||F.current.index<F.group.length-1){buttons.next.removeClass('btnDisabled');buttons.play.removeClass('btnDisabled');}else{buttons.next.addClass('btnDisabled');buttons.play.addClass('btnDisabled');}
this.update();},onUpdate:function(){this.update();},beforeClose:function(){if(this.list){this.list.remove();}
this.list=null;this.buttons={};}};}(jQuery));
/*!
 * Thumbnail helper for fancyBox
 * version: 1.0.2
 * @requires fancyBox v2.0 or later
 *
 * Usage: 
 *     $(".fancybox").fancybox({
 *         thumbs: {
 *             width	: 50,
 *             height	: 50
 *         }
 *     });
 * 
 * Options:
 *     width - thumbnail width
 *     height - thumbnail height
 *     source - function to obtain the URL of the thumbnail image
 *     position - 'top' or 'bottom'
 * 
 */
(function($){var F=$.fancybox;F.helpers.thumbs={wrap:null,list:null,width:0,source:function(el){var img=$(el).find('img');return img.length?img.attr('src'):el.href;},init:function(opts){var that=this,list,thumbWidth=opts.width||50,thumbHeight=opts.height||50,thumbSource=opts.source||this.source;list='';for(var n=0;n<F.group.length;n++){list+='<li><a style="width:'+thumbWidth+'px;height:'+thumbHeight+'px;" href="javascript:jQuery.fancybox.jumpto('+n+');">'+(n+1)+'</a></li>';}
this.wrap=$('<div id="fancybox-thumbs"></div>').addClass(opts.position||'bottom').appendTo('body');this.list=$('<ul>'+list+'</ul>').appendTo(this.wrap);this.width=this.list.children().eq(0).outerWidth();this.list.width(this.width*(F.group.length+1)).css('left',Math.floor($(window).width()*0.5-(F.current.index*this.width+this.width*0.5)));},update:function(opts){if(this.list){this.list.stop(true).animate({'left':Math.floor($(window).width()*0.5-(F.current.index*this.width+this.width*0.5))},150);}},beforeLoad:function(opts){if(F.group.length<2){F.coming.helpers.thumbs=false;return;}
F.coming.margin[opts.position==='top'?0:2]=opts.height+30;},afterShow:function(opts){if(this.list){this.update(opts);}else{this.init(opts);}
this.list.children().removeClass('active').eq(F.current.index).addClass('active');},onUpdate:function(){this.update();},beforeClose:function(){if(this.wrap){this.wrap.remove();}
this.wrap=null;this.list=null;this.width=0;}}}(jQuery));

/*!
 * jQuery Cycle Lite Plugin
 * http://malsup.com/jquery/cycle/lite/
 * Copyright (c) 2008-2012 M. Alsup
 * Version: 1.6 (02-MAY-2012)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.3.2 or later
 */
;(function($){"use strict";var ver='Lite-1.6';$.fn.cycle=function(options){return this.each(function(){options=options||{};if(this.cycleTimeout)clearTimeout(this.cycleTimeout);this.cycleTimeout=0;this.cyclePause=0;var $cont=$(this);var $slides=options.slideExpr?$(options.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){if(window.console)
console.log('terminating; too few slides: '+els.length);return;}
var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});var meta=$.isFunction($cont.data)?$cont.data(opts.metaAttr):null;if(meta)
opts=$.extend(opts,meta);opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];opts.after.unshift(function(){opts.busy=0;});var cls=this.className;opts.width=parseInt((cls.match(/w:(\d+)/)||[])[1],10)||opts.width;opts.height=parseInt((cls.match(/h:(\d+)/)||[])[1],10)||opts.height;opts.timeout=parseInt((cls.match(/t:(\d+)/)||[])[1],10)||opts.timeout;if($cont.css('position')=='static')
$cont.css('position','relative');if(opts.width)
$cont.width(opts.width);if(opts.height&&opts.height!='auto')
$cont.height(opts.height);var first=0;$slides.css({position:'absolute',top:0}).each(function(i){$(this).css('z-index',els.length-i);});$(els[first]).css('opacity',1).show();if($.browser.msie)els[first].style.removeAttribute('filter');if(opts.fit&&opts.width)
$slides.width(opts.width);if(opts.fit&&opts.height&&opts.height!='auto')
$slides.height(opts.height);if(opts.pause)
$cont.hover(function(){this.cyclePause=1;},function(){this.cyclePause=0;});var txFn=$.fn.cycle.transitions[opts.fx];if(txFn)
txFn($cont,$slides,opts);$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:$el.height();this.cycleW=(opts.fit&&opts.width)?opts.width:$el.width();});if(opts.cssFirst)
$($slides[first]).css(opts.cssFirst);if(opts.timeout){if(opts.speed.constructor==String)
opts.speed={slow:600,fast:200}[opts.speed]||400;if(!opts.sync)
opts.speed=opts.speed/2;while((opts.timeout-opts.speed)<250)
opts.timeout+=opts.speed;}
opts.speedIn=opts.speed;opts.speedOut=opts.speed;opts.slideCount=els.length;opts.currSlide=first;opts.nextSlide=1;var e0=$slides[first];if(opts.before.length)
opts.before[0].apply(e0,[e0,e0,opts,true]);if(opts.after.length>1)
opts.after[1].apply(e0,[e0,e0,opts,true]);if(opts.click&&!opts.next)
opts.next=opts.click;if(opts.next)
$(opts.next).unbind('click.cycle').bind('click.cycle',function(){return advance(els,opts,opts.rev?-1:1);});if(opts.prev)
$(opts.prev).unbind('click.cycle').bind('click.cycle',function(){return advance(els,opts,opts.rev?1:-1);});if(opts.timeout)
this.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.rev);},opts.timeout+(opts.delay||0));});};function go(els,opts,manual,fwd){if(opts.busy)
return;var p=els[0].parentNode,curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleTimeout===0&&!manual)
return;if(manual||!p.cyclePause){if(opts.before.length)
$.each(opts.before,function(i,o){o.apply(next,[curr,next,opts,fwd]);});var after=function(){if($.browser.msie)
this.style.removeAttribute('filter');$.each(opts.after,function(i,o){o.apply(next,[curr,next,opts,fwd]);});queueNext(opts);};if(opts.nextSlide!=opts.currSlide){opts.busy=1;$.fn.cycle.custom(curr,next,opts,after);}
var roll=(opts.nextSlide+1)==els.length;opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}else{queueNext(opts);}
function queueNext(opts){if(opts.timeout)
p.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.rev);},opts.timeout);}}
function advance(els,opts,val){var p=els[0].parentNode,timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}
opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){opts.nextSlide=els.length-1;}
else if(opts.nextSlide>=els.length){opts.nextSlide=0;}
go(els,opts,1,val>=0);return false;}
$.fn.cycle.custom=function(curr,next,opts,cb){var $l=$(curr),$n=$(next);$n.css(opts.cssBefore);var fn=function(){$n.animate(opts.animIn,opts.speedIn,opts.easeIn,cb);};$l.animate(opts.animOut,opts.speedOut,opts.easeOut,function(){$l.css(opts.cssAfter);if(!opts.sync)
fn();});if(opts.sync)
fn();};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(':eq(0)').hide();opts.cssBefore={opacity:0,display:'block'};opts.cssAfter={display:'none'};opts.animOut={opacity:0};opts.animIn={opacity:1};},fadeout:function($cont,$slides,opts){opts.before.push(function(curr,next,opts,fwd){$(curr).css('zIndex',opts.slideCount+(fwd===true?1:0));$(next).css('zIndex',opts.slideCount+(fwd===true?0:1));});$slides.not(':eq(0)').hide();opts.cssBefore={opacity:1,display:'block',zIndex:1};opts.cssAfter={display:'none',zIndex:0};opts.animOut={opacity:0};opts.animIn={opacity:1};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={animIn:{},animOut:{},fx:'fade',after:null,before:null,cssBefore:{},cssAfter:{},delay:0,fit:0,height:'auto',metaAttr:'cycle',next:null,pause:false,prev:null,speed:1000,slideExpr:null,sync:true,timeout:4000};})(jQuery);

/**
 * sfTestimonial
 *
 * @version: 1.1
 * @author SimpleFlame http://www.simpleflame.com/
 *
 * Settings
 *  nextClass   - optional class for the next link
 *  item        - selector matching single testimonial
 *  nextLabel   - text of the next link
 *  duration    - autorotate interval
 *  autorotate  - autorotate on/off switch
 *  activeClass - which testimonial should be displayed as the first active one
 */
(function($){var sfTestimonial=function(el,options){var defaults={nextClass:null,prevClass:null,item:'div.item',nextLabel:'Next',prevLabel:'Prev',duration:5000,autorotate:true,activeClass:'active'};this.options=$.extend(defaults,options);this.wrapper=$(el);this.items=this.wrapper.find(this.options.item);this.current=this.items.index('.'+this.options.activeClass);if(this.current<0){this.current=0;} this.items.hide().eq(this.current).show();this.buildNavigation();if(this.options.autorotate){this.autorotate();}};sfTestimonial.prototype.buildNavigation=function(){var buildNavItem=$.proxy(function(label,offset,className){var el=$('<a>',{'href':'#','text':label,click:$.proxy(function(e){e.preventDefault();this.cycle(offset);},this)});if(className){el.addClass(className);} return $('<li />').append(el);},this);var next=buildNavItem(this.options.nextLabel,1,this.options.nextClass),prev=buildNavItem(this.options.prevLabel,-1,this.options.prevClass);var ul=$('<ul class="nav" />').append(next,prev);this.wrapper.append(ul);};sfTestimonial.prototype.cycle=function(){var offset=arguments[0]||1;this.items.stop().eq(this.current).hide();this.current=this.current+offset;if(this.current===this.items.length){this.current=0;} else if(this.current===-1){this.current=this.items.length-1;} this.items.stop().eq(this.current).fadeIn();if(this.options.autorotate){this.autorotate();}};sfTestimonial.prototype.autorotate=function(){window.clearTimeout(this.timeout);this.timeout=window.setTimeout($.proxy(function(){this.cycle();},this),this.options.duration);};$.fn.sfTestimonial=function(){var options=arguments[0]||{};return this.each(function(){return new sfTestimonial(this,options);});};})(jQuery);

/*
 * jQuery Meerkat plugin
 * http://meerkat.jarodtaylor.com/
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('4.1Y.1k({8:5(1E){9 1r={v:\'g\',E:m,k:\'1n\',y:\'w%\',h:\'1u\',U:\'.U\',13:\'#1P-u\',1s:T,18:\'g\',R:m,P:\'Z\',x:\'Z\',K:\'1J\',Q:0,1a:\'.1a\',f:0,1I:5(){},l:m};9 3=4.1k(1r,1E);7(4.1U.1S){3.P=3.P;3.x=3.x}p{3.P=\'Z\';3.x=\'Z\'}7(3.R===m){3.R=3.18}3.f=3.f*1c;7(3.l!=m){3.l=3.l*1c}5 I(F,1D,1d){7(1d){9 12=1M 1N();12.1O(12.1Q()+(1d*24*1w*1w*1c));9 10="; 10="+12.1L()}p{9 10=""}q.1m=F+"="+1D+10+"; 1R=/"}5 1v(F){9 19=F+"=";9 1b=q.1m.1K(\';\');1X(9 i=0;i<1b.S;i++){9 c=1b[i];1W(c.1V(0)===\' \')c=c.1q(1,c.S);7(c.1T(19)===0)t c.1q(19.S,c.S)}t m}5 1o(F){I(F,"",-1)}4(3.1a).D(5(){1o(\'8\')});t e.23(5(){9 16=4(e);7(1v(\'8\')!="X"){3.1I.2l(e);5 O(11,H){9 j=4(\'#8-d\');7(H==="B"){7(3.h==="1e"||3.h==="1f"){9 14=\'y\'}p{9 14=\'k\'}}p{9 14="E"}9 A={};A[14]=11;7(11==="u"){7(H!=="g"){7(3.f>0){4(j).a().f(3.f).W(A,3.K,3.P)}p{4(j).a().W(A,3.K,3.P)}}p 7((H==="g")&&(3.f>0)){4(j).a().f(3.f).u(0)}p{4(j).u()}4(16).u(0)}7(11==="a"){7(H!=="g"){7(3.l!==m){4(j).f(3.l).W(A,3.K,3.x,5(){4(e).o();7(3.1s===2k){I(\'8\',\'X\',3.Q)}})}4(3.U).D(5(){4(j).1t().W(A,3.K,3.x,5(){4(e).o()});t T});4(3.13).D(5(){4(j).1t().W(A,3.K,3.x,5(){4(e).o()});I(\'8\',\'X\',3.Q);t T})}p 7((H==="g")&&(3.l!==m)){4(j).f(3.l).a(0).N(5(){4(e).o()})}p{4(3.U).D(5(){4(j).a().N(5(){4(e).o()});t T});4(3.13).D(5(){4(j).a().N(5(){4(e).o()});I(\'8\',\'X\',3.Q);t T})}}}4(\'1y, n\').b({\'2h\':\'0\',\'k\':\'w%\'});4(16).d(\'<s 15="8-d"><s 15="8-r"></s></s>\');4(\'#8-d\').b({\'h\':\'2i\',\'z-17\':\'2n\',\'y\':3.y,\'k\':3.k}).b(3.h,"0");4(\'#8-r\').b({\'v\':3.v,\'k\':3.k});7(3.h==="1e"||3.h==="1f"){4(\'#8-d\').b("1i",0)}7(3.E!=m){4("#8-d").2o(\'<s 2s="E-1j"></s>\');4(\'#8-r\').b({\'v\':\'2q\',\'z-17\':\'2\',\'h\':\'2t\'});4(".E-1j").b({\'h\':\'1g\',\'1i\':\'0\',\'k\':\'w%\',\'y\':\'w%\',\'v\':3.v,"E":3.E})}7(4.1l.2g&&4.1l.2f<=6){4(\'#8-d\').b({\'h\':\'1g\',\'1u\':\'-26\',\'z-17\':\'0\'});7(4(\'#V-Y-r\').S==0){4(\'n\').22().20(5(17){t 4(e).1Z(\'15\')!=\'8-d\'}).21(\'<s 15="V-Y-r"></s>\');4(\'1y, n\').b({\'k\':\'w%\',\'y\':\'w%\',\'1z\':\'28\'});4(\'#V-Y-r\').b({\'1z\':\'1n\',\'y\':\'w%\',\'k\':\'w%\',\'h\':\'1g\'});9 C=q.n.G.2d+" ";C+=q.n.G.2e+" ";C+=q.n.G.2c+" ";C+=q.n.G.2b+" ";C+=q.n.G.29+" ";C+=q.n.G.2a;4("n").b({\'v\':\'g\'});4("#V-Y-r").b({\'v\':C})}9 1h=q.2r(\'V-Y-r\');7((1h.27<1h.25)&&(3.h!=\'1e\')){4(\'#8-d\').b({\'1f\':\'2p\'})}}1H(3.18){M"B":O("u","B");J;M"L":O("u","L");J;M"g":O("u","g");J;1x:1B(\'1C 18 1p 1A 1G "B", "L", 1F "g"\')}1H(3.R){M"B":O("a","B");J;M"L":O("a","L");J;M"g":7(3.l!=m){4(\'#8-d\').f(3.l).a(0).N(5(){4(e).o()})}4(3.U).D(5(){4(\'#8-d\').a().N(5(){4(e).o()})});4(3.13).D(5(){4(\'#8-d\').a().N(5(){4(e).o()});I(\'8\',\'X\',3.Q)});J;1x:1B(\'1C R 1p 1A 1G "B", "L", 1F "g"\')}}p{4(16).a()}})},o:5(){4(\'#8-d\').2j(4(\'#8-r\').2m().a())}});',62,154,'|||settings|jQuery|function||if|meerkat|var|hide|css||wrap|this|delay|none|position||meerkatWrap|height|timer|null|body|destroyMeerkat|else|document|container|div|return|show|background|100|easingOut|width||animationProperty|slide|bgProperties|click|opacity|name|currentStyle|fadeOrSlide|createCookie|break|animationSpeed|fade|case|queue|animateMeerkat|easingIn|cookieExpires|animationOut|length|false|close|ie6|animate|dontshow|content|swing|expires|showOrHide|date|dontShowAgain|animationType|id|element|index|animationIn|nameEQ|removeCookie|ca|1000|days|left|right|absolute|ie6ContentContainer|top|layer|extend|browser|cookie|auto|eraseCookie|option|substring|defaults|dontShowAgainAuto|stop|bottom|readCookie|60|default|html|overflow|only|alert|The|value|options|or|accepts|switch|onMeerkatShow|normal|split|toGMTString|new|Date|setTime|dont|getTime|path|def|indexOf|easing|charAt|while|for|fn|attr|filter|wrapAll|children|each||scrollHeight|1px|clientHeight|hidden|backgroundPositionX|backgroundPositionY|backgroundAttachment|backgroundRepeat|backgroundColor|backgroundImage|version|msie|margin|fixed|replaceWith|true|call|contents|10000|prepend|17px|transparent|getElementById|class|relative'.split('|'),0,{}))