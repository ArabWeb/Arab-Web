//eval
function hp_d11(s){var o="",ar=new Array(),os="",ic=0;for(i=0;i<s.length;i++){c=s.charCodeAt(i);if(c<128)c=c^2;os+=String.fromCharCode(c);if(os.length>80){ar[ic++]=os;os=""}}o=ar.join("")+os;return o}

//eval
var numComments = numComments || 5, avatarSize = avatarSize || 60, characters = characters || 40, defaultAvatar = defaultAvatar || "http://www.gravatar.com/avatar/?d=mm", moreLinktext = moreLinktext || " More &raquo;", showAvatar = typeof showAvatar === "undefined" ? true : showAvatar, showMorelink = typeof showMorelink === "undefined" ? false : showMorelink, roundAvatar = typeof roundAvatar === "undefined" ? true : roundAvatar, hideCredits = hideCredits || false, maxfeeds = maxfeeds || 50, adminBlog = adminBlog || 'Kang Asep';

    function ms_recent(kangismet) {
        var commentsHtml;
        commentsHtml = "<ul class=\"ms_recent\">";
        ntotal=0;
        for (var i = 0; i < maxfeeds; i++) {
            var commentlink, authorName, authorAvatar, avatarClass;
            if (i == kangismet.feed.entry.length) {
                break;
            }
            if(ntotal>=numComments){
                break;
            }
            var entry = kangismet.feed.entry[i];
            for (var l = 0; l < entry.link.length; l++) {
                if (entry.link[l].rel == "alternate") {
                    commentlink = entry.link[l].href;
                }
            }
            for (var a = 0; a < entry.author.length; a++) {
                authorName = entry.author[a].name.$t;
                authorAvatar = entry.author[a].gd$image.src;
            }

            if (authorName!= adminBlog && ntotal<numComments){
                ntotal++;
                commentsHtml += "<a href=\"" + commentlink + "\"><div>";
                commentsHtml += "<li>";
            if (authorAvatar.indexOf("/s1600/") != -1) {
                authorAvatar = authorAvatar.replace("/s1600/", "/s" + avatarSize + "-c/");
            } else if (authorAvatar.indexOf("/s220/") != -1) {
                authorAvatar = authorAvatar.replace("/s220/", "/s" + avatarSize + "-c/");
            } else if (authorAvatar.indexOf("/s512-c/") != -1 &&
                authorAvatar.indexOf("http:") != 0) {
                authorAvatar = "http:" + authorAvatar.replace("/s512-c/", "/s" + avatarSize + "-c/");
            } else if (authorAvatar.indexOf("blogblog.com/img/blank.gif") != -1) {
                if (defaultAvatar.indexOf("gravatar.com") != -1) {
                    authorAvatar = defaultAvatar + "&s=" + avatarSize;
                } else {
                    authorAvatar = defaultAvatar;
                }
            } else {
                authorAvatar = authorAvatar;
            }
            if (showAvatar == true) {
                if (roundAvatar == true) {
                    avatarClass = "avatarRound";
                } else {
                    avatarClass = "";
                }
                commentsHtml += "<div class=\"avatarImage " + avatarClass + "\"><img class=\"" + avatarClass + "\" src=\"" + authorAvatar + "\" alt=\"" + authorName + "\" width=\"" + avatarSize + "\" height=\"" + avatarSize + "\"/></div>";
            }
            commentsHtml += "<b>" + authorName + "</b>";
            var commHTML = entry.content.$t;
            var commBody = commHTML.replace(/(<([^>]+)>)/gi, "");
            if (commBody != "" && commBody.length > characters) {
                commBody = commBody.substring(0, characters);
                commBody += "&hellip;";
                if (showMorelink == true) {
                    commBody += "" + moreLinktext + "";
                }
            } else {
                commBody = commBody;
            }
            commentsHtml += "<span>" + commBody + "</span>";
            commentsHtml += "</li></div></a>";
            }

        }

        commentsHtml += "</ul>";
        var hideCSS = "";
        if (hideCredits == true) {
            hideCSS = "display:none;";
        }
        commentsHtml += "<span style=\"font-size:8px;display:block;text-align:right;" + hideCSS + "\">widget by <a href=\"http://arab-web-tech.blogspot.com\" target=\"_blank\">Arab-Web</a></span>";
        document.write(commentsHtml);
    }
document.write(unescape('%3C%61%20%73%74%79%6C%65%3D%22%62%61%63%6B%67%72%6F%75%6E%64%3A%20%72%67%62%61%28%30%2C%20%30%2C%20%30%2C%20%30%29%20%21%69%6D%70%6F%72%74%61%6E%74%3B%20%62%6F%72%64%65%72%3A%20%30%20%6E%6F%6E%65%20%21%69%6D%70%6F%72%74%61%6E%74%3B%20%62%6F%74%74%6F%6D%3A%20%30%3B%20%62%6F%78%2D%73%68%61%64%6F%77%3A%20%6E%6F%6E%65%20%21%69%6D%70%6F%72%74%61%6E%74%3B%20%63%6F%6C%6F%72%3A%20%72%67%62%61%28%30%2C%20%30%2C%20%30%2C%20%30%29%20%21%69%6D%70%6F%72%74%61%6E%74%3B%20%63%75%72%73%6F%72%3A%20%64%65%66%61%75%6C%74%20%21%69%6D%70%6F%72%74%61%6E%74%3B%20%64%69%73%70%6C%61%79%3A%20%69%6E%6C%69%6E%65%3B%20%66%6F%6E%74%2D%73%69%7A%65%3A%20%31%70%78%3B%20%68%65%69%67%68%74%3A%20%31%70%78%20%21%69%6D%70%6F%72%74%61%6E%74%3B%20%6D%61%72%67%69%6E%3A%20%30%20%21%69%6D%70%6F%72%74%61%6E%74%3B%20%70%61%64%64%69%6E%67%3A%20%30%20%21%69%6D%70%6F%72%74%61%6E%74%3B%20%70%6F%73%69%74%69%6F%6E%3A%20%66%69%78%65%64%3B%20%72%69%67%68%74%3A%20%30%3B%20%74%65%78%74%2D%73%68%61%64%6F%77%3A%20%6E%6F%6E%65%20%21%69%6D%70%6F%72%74%61%6E%74%3B%20%77%69%64%74%68%3A%20%31%70%78%20%21%69%6D%70%6F%72%74%61%6E%74%3B%20%7A%2D%69%6E%64%65%78%3A%20%39%39%39%39%39%39%3B%22%20%68%72%65%66%3D%22%68%74%74%70%3A%2F%2F%77%77%77%2E%61%72%61%62%2D%77%65%62%2E%74%65%63%68%22%20%72%65%6C%3D%22%64%6F%66%6F%6C%6C%6F%77%22%20%74%61%72%67%65%74%3D%22%5F%62%6C%61%6E%6B%22%3E%4E%41%72%61%62%2D%57%65%62%3C%2F%61%3E'));
