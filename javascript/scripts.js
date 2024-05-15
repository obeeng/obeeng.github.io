/*!
 * Scripts
 *
 */
head.ready(function() {
 "use strict";

	var Engine = {
		utils : {
			links : function(){
				$('a[rel*="external"]').click(function(e){
					e.preventDefault();
					window.open($(this).attr('href'));
				});
			},
			mails : function(){
				$('a[href^="mailto:"]').each(function(){
					var 
						mail = $(this).attr('href').replace('mailto:',''),
						replaced = mail.replace('/at/','@');
					$(this).attr('href','mailto:' + replaced);
					if($(this).text() === mail) {
						$(this).text(replaced);
					}
				});
			},
			navSelectedState : function(nav){
				 // pass in the container tag eg 'nav'
				 jQuery(nav + " ul li").each(function(){
					   if (jQuery(this).find("a").attr('href') === window.location.pathname)
					   {
							 jQuery(this).addClass('selected');
							 jQuery(this).parents("li").addClass('selected');
					   }   
				 });
			},// navSelectedState
			
			dynamicMenuSelectPersist : function(url,navID){
				  if(window.location.href.indexOf(url) != -1){
						jQuery("#"+navID).addClass("selected");
				  }
			},
			
			sefAppLinks : function(wrapper,bullet,target){
				 jQuery(wrapper).each(function(){
					  var link = jQuery(this).find(bullet).attr("href");
					  jQuery(this).find(target).attr("href",link);
				 });
			},
			latestTweets : function(wrap,twitterUsername,howManyTweets){
			   
				if(jQuery(wrap).size() === 0){return;}
			   
			   
					 var twitterUserName = jQuery(wrap+" "+twitterUsername).text();
					 var howManyTweets = jQuery(wrap+" "+howManyTweets).text();
					
					 jQuery(wrap).twit(twitterUserName, {
						limit: howManyTweets,
						icon: false
					  });
			   
			} // latest tweets
		},
		forms : {
			labels : function() {
				try { $('.form-a .field label').compactize(); } catch(e) {}
			}
		},
		ui : {
			fancybox : function() {
				// default fancybox
				$('.fancybox').fancybox();
				
				// tweak BC's gallery output
				if($('.gallery-a a').length > 0){
					jQuery("table.photogalleryTable .photogalleryItem a").each(function(){
						 jQuery(this).attr("rel","galleryItems");
						 jQuery(this).attr("onclick","");
					});
				}
				
				// custom fancybox in gallery (portfolio)
				$('td.photogalleryItem a').fancybox({
					nextEffect : 'fade',
					prevEffect : 'fade',
					padding : 0,
					margin : 50,
					afterLoad : function() {
						this.title = '<span class="pager">' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '</span>');
					},
					helpers: {
						title: {
							type: 'inside'
						}
					}
				});
			},
			faq	: function() {
				$('.faq-a').each(function(){
					var
						$root = $(this),
						$dt = $root.find('dt'),
						$toggler = $root.find('dt a');

					$toggler.click(function(e){
						$(this).parent().next('dd:first').toggleClass('active');
						$(this).parent().toggleClass('active');
						return false;
					});
				});
			},
			newsletter : function() {
				// close & don't show until the browser session ends
				$('#newsletter').meerkat({
					position: 'bottom',
					width: '100%',
					dontShowAgain: '.close a',
					// cookieExpires: 7 // not show again for a set amount of days
					animationIn: 'slide',
					animationSpeed: 500
				});
			},
			
			showcase : function() {
				$('#showcase').each(function(){
					var
						$root = $(this),
						$list = $root.find('ul.items'),
						$item = $list.find('li');

					if($.browser.msie && parseInt($.browser.version,10) < 9){

					} else {
						// hide images & add background-image to each item
						$item.each(function(){
							var imgSrc = $(this).find('img').attr('src');

							$(this).find('img').hide();
							$(this).css('background-image', 'url(' + imgSrc + ')' );
						});
					}
					
					// show the list & rotate
					$list.fadeIn(3000).cycle({
						fx: 'fade',
						timeout: 6000,
						speed: 4000
					});
				});
			},
			testimonials : function() {
				$('.testimonials-a .wrap').sfTestimonial({
					item : 'article.item'
				});
			}
		},
		fixes : {
			enhancements : function() {
				if (!$.browser.msie){
					return;
				}
				if(parseInt($.browser.version,10) < 9){
					$('hr').wrap('<div class="hr"></div>');
					$(':last-child:not(cufon)').addClass('last-child');
				}
				
				if(parseInt($.browser.version,10) < 8){
					$('#nav ul ul').prepend('<span class="before"></span>').append('<span class="after"></span>');
					$('.newslist-a ul li a figure').append('<span class="after"></span>');
					$('#footer .connect-a').append('<span class="after"></span>');
				}
			},
			pie : function() {
				$('body').bind('refresh.pie',function() {
					if($.browser.msie && parseInt($.browser.version,10) < 9){
						if(window.PIE !== undefined){							
							$('.INSERT_PIE_ELEMENTS_HERE').each(function() {
								window.PIE.detach(this);
								window.PIE.attach(this);
							});
						}
					}
				});
			}
		},
		
		tweaks : {
				footerDate : function(){
				if(jQuery("span.auto-copy").size() === 0){return;}
				var currentTime=new Date();
				var year=currentTime.getFullYear();
				jQuery("span.auto-copy").text(year);
			}, // footerDate
			
			fakeBreadCrumbs : function(){
				
				 // services
				 if(jQuery(".services-detail-item").length > 0){
					  var curBreadCrumbs = jQuery("nav.breadcrumbs-a p").html();
					  var breadCrumbs =  "<p><a href='/'>Home</a> <span>/</span> <a href='/services'>Services</a> <span>/</span> <a href='#'>"+curBreadCrumbs+"</a></p>";
					  jQuery("nav.breadcrumbs-a").html(breadCrumbs);
				 }
				 
				
				 
			}, //  fakeBreadCrumbs
			
			servicesListPage : function(){
				// here we control the list items defined in bullets field
				// this is comma separate data that we turn into <li> items
				if($(".services-app-item, .services-detail-item").size() === 0){return;}
				
				$(".services-app-item, .services-detail-item").each(function(){
				
					var $targetUl = $(this).find("ul.list-container")
					var targetData = $(this).find(".list-data").text();
					
					var listItems = targetData.split(",");
					
					var i;
					for(i =0; i < listItems.length; ++i){    
						$targetUl.append("<li>"+listItems[i]+"</li>")
					}
					
				});
				
			} // servicesListPage
			
			
			
		} // tweaks 
	};

	Engine.utils.links();
	Engine.utils.mails();
	
	Engine.utils.navSelectedState('nav');
	Engine.utils.latestTweets(".tweets-a",".twitterUserName",".howManyTweets"); // blog
	Engine.utils.latestTweets(".tweets-b",".twitterUserName",".howManyTweets"); // blog
	Engine.utils.dynamicMenuSelectPersist("/_blog/","main-nav-blog");
	
	Engine.forms.labels();
	Engine.ui.showcase();
	Engine.ui.fancybox();
	Engine.ui.faq();
	Engine.ui.testimonials();
	Engine.ui.newsletter();
	Engine.fixes.enhancements();
	
	Engine.tweaks.footerDate();
	Engine.tweaks.fakeBreadCrumbs();
	Engine.tweaks.servicesListPage();
	
});