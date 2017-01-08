function FeaturedPost(a){
2
commentsHtml += "</ul>";
        var hideCSS = "";
        if (hideCredits == true) {
            hideCSS = "display:none;";
        }
        commentsHtml += "<span style=\"font-size:8px;display:block;text-align:right;" + hideCSS + "\">widget by <a href=\"http://arab-web-tech.blogspot.com\" target=\"_blank\">Arab-Web</a></span>";
        document.write(commentsHtml);
(function(e){
3
var 
4
h={blogURL:"",
5
MaxPost:5,
6
idcontaint:"#featuredpost",
7
ImageSize:500,
8
interval:10000,
9
autoplay:false,
10
loadingClass:"loadingxx",
11
pBlank:"http://3.bp.blogspot.com/-v45kaX-IHKo/VDgZxWv0xUI/AAAAAAAAHAo/QJQf8Dlh3xc/s1600/grey.gif",
12
MonthNames:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
13
tagName:false}
14
;h=e.extend({},h,a);
15
var g=e(h.idcontaint);
16
var c=h.blogURL;
17
var d=h.MaxPost*200;
18
if(h.blogURL==="")
19
{c=window.location.protocol+"//"+window.location.host}g.html('
20
<div id="slides"><ul class="randomnya"></ul></div>
21
<div id="buttons"><a href="#" id="prevx" title="prev"></a><a href="#" id="nextx" title="next"></a></div>')
22
.addClass(h.loadingClass);
23
var f=function(w){var q,k,m,u,x,p,t,v,r,l="",
24
s=w.feed.entry;
25
for(var o=0;o<s.length;o++){for(var n=0;n<s[o].link.length;n++){if(s[o].link[n].rel=="alternate"){q=s[o].link[n].href;break}}
26
if("media$thumbnail"in s[o]){u=s[o].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+h.ImageSize+"-c")}
27
else{u=h.pBlank.replace(/\/s[0-9]+(\-c|\/)/,"/s"+h.ImageSize+"$1")}k=s[o].title.$t;r=s[o].published.$t.substring(0,10);m=s[o].author[0].name.$t;x=r.substring(0,4);p=r.substring(5,7);t=r.substring(8,10);v=h.MonthNames[parseInt(p,10)-1];l+='<li><a target="_blank" href="'+q+'" title="'+k+'"><div class="overlayx"></div><img class="random" src="'+u+'" title="'+k+'"><h4>'+k+'</h4></a><div class="label_text"><span class="date"><span class="dd">'+t+'</span> <span class="dm">'+v+'</span> <span class="dy">'+x+'</span></span> <span class="autname">'+m+"</span></div></li>"}e("ul",g).append(l)};
28
var b=function(){var i="/-/"+h.tagName;if(h.tagName===false){i="";e.ajax({url:c+"/feeds/posts/default"+i+"?max-results="+h.MaxPost+"&orderby=published&alt=json-in-script",success:f,dataType:"jsonp",cache:true})}else{e.ajax({url:c+"/feeds/posts/default"+i+"?max-results="+h.MaxPost+"&orderby=published&alt=json-in-script",success:f,dataType:"jsonp",cache:true})}(function(){setTimeout(function(){e("#prevx")
29
.click(function(){e("#slides li:first")
30
.before(e("#slides li:last"));return false});e("#nextx")
31
.click(function(){e("#slides li:last")
32
.after(e("#slides li:first"));return false});
33
if(h.autoplay){var k=h.interval;var l=setInterval("rotate()",k);e("#slides li:first").before(e("#slides li:last"));e("#slides").hover(function(){clearInterval(l)},function(){l=setInterval("rotate()",k)});function j(){e("#nextx").click()}}g.removeClass(h.loadingClass)},d)})()};e(document).ready(b)})(jQuery)};function rotate(){$('#nextx').click();};document.write('')
