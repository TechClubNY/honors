!function(){"use strict";var t=function(t,e){for(var n=arguments.length,a=Array(n>2?n-2:0),c=2;c<n;c++)a[c-2]=arguments[c];var i=document.createElement(t),o={className:""};return i._$props=Object.assign({},o,e),i.className=i._$props.className,a.length&&a.forEach(function(t){if(t instanceof Element)i.appendChild(t);else{var e=document.createTextNode(t);i.appendChild(e)}}),i},e=function(){var t=document.getElementsByTagName("script"),e=t[t.length-1];return{tcpjid:e.getAttribute("data-pjid"),mountid:e.getAttribute("data-mountid")}}(),n=e.tcpjid,a=e.mountid,c=t("link");c.type="text/css",c.rel="stylesheet",c.href="https://techclubny.github.io/honors/css/honor.min.css",document.head.appendChild(c);var i=t("i",{},"♥"),o=t("span",{},"Made with ",i," by TechClub"),s=t("div",{className:"tch_credit"},o),r=t("div",{className:"tch_overlay"}),d=t("div",{className:"tch_watermak"}),l=t("ul",{className:"tch_contributors"});a&&function(t,e){document.getElementById(e).appendChild(t)}(s,a),n&&fetch("https://techclubny.github.io/honors/data/projects/"+n+".json").then(function(t){return t.json()}).then(function(e){var n=t("span",{className:"tch_button"},"Thanks"),a=t("div",{className:"tch_content"},t("h4",{},"Information"),t("p",{},"Site: ",t("span",{},e.site)),t("p",{},"Description: ",t("span",{},e.description)),t("h4",{},"Contributors"),l,t("div",{className:"tch_footer"},n)),c=t("div",{className:"tch_popup"},r,d,a);document.body.appendChild(c),o.addEventListener("click",function(){c.style.display="flex",c.style.opacity=1}),n.addEventListener("click",function(){c.style.display="none",c.style.opacity=0}),e.github&&fetch("https://api.github.com/repos/"+e.github.org+"/"+e.github.repo+"/stats/contributors").then(function(t){return t.json()}).then(function(t){t&&t.length&&t.reverse().forEach(function(t){var e=t.author,n=document.createElement("li"),a=document.createElement("img");a.src=e.avatar_url,n.appendChild(a),l.appendChild(n)})}),e.contributors&&e.contributors.length&&e.contributors.forEach(function(t){var e=t,n=document.createElement("li"),a=document.createElement("img");a.src=e.avatar_url,n.appendChild(a),l.appendChild(n)})})}();
