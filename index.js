!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(r.example=r.example||{})}(this,function(r){"use strict";var n=function(){var r=arguments[0],n=r.length,e=function(){var t=Array.prototype.slice.call(arguments);return t.length>=n?r.apply(null,t):e.bind.apply(e,[null].concat(t))};return e.bind.apply(e,[null].concat(Array.prototype.slice.call(arguments,1)))},e=function(r){return r.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n").replace(/^ +$/gm,"")},t=function(){var r=Array.prototype.slice.call(arguments),n=r.length-1;return function(e){for(var t=e,u=n;u>=0;u-=1)t=r[u](t);return t}},u=(n(function(r,n){return r===n}),n(function(r,n){return r.exec(n)})),i=n(function(r,n){for(var e=new Array(n.length),t=0;t<n.length;t+=1)e[t]=r(n[t],t,n);return e}),l=n(function(r,n){return n.match(r)||[]}),o=n(function(r,n){return r.test(n)}),a=n(function(r,n,e){return e.replace(r,n)}),s=n(function(r,n){return n.split(r)}),c=(n(function(r,n){return 0===n.indexOf(r)}),function(r){return r.trim()}),p=u(/^( *>[^\n]+(\n(?! *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$))[^\n]+)*\n*)+/),f=a(/^ *> ?/gm,""),g=function(r,n){if(">"!==r[0])return null;var e=p(r);if(!e)return null;var t=e[0],u=n(f(t));return 1===u.length&&"paragraph"===u[0].type&&(u=u[0].children),{token:{type:"blockquote",children:n(f(t))},newSource:r.substring(t.length)}},h=u(/^( {4}[^\n]+\n*)+/),v=a(/^ {4}/gm,""),y=u(/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/),b=function(r){if("`"!==r[0])return null;var n=h(r);if(!n)return null;var e=n[0];return{token:{type:"codeblock",language:"",value:v(e)},newSource:r.substring(e.length)}},d=function(r){var n=y(r);if(!n)return null;var e=n[0];return{token:{type:"codeblock",language:n[2],value:n[3]},newSource:r.substring(e.length)}},k=function(r){return b(r)||d(r)},S=u(/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/),w=u(/^([^\n]+)\n *([=-]){2,} *(?:\n+|$)/),m=function(r){return"#"===r[0]?r.length:"="===r[0]?1:2},$=function(r,n,e){var t="#"===r[0],u=t&&S(r)||w(r);if(!u)return null;var i=u[0],l=t?u[1]:u[2],o=t?u[2]:u[1];return{token:{type:"heading",level:m(l),children:e(o)},newSource:r.substring(i.length)}},_=u(/^ *(?:\*{3,}|-{3,}|_{3,}) *(?:\n+|$)/),x=function(r){var n=_(r);if(!n)return null;var e=n[0];return{token:{type:"hr"},newSource:r.substring(e.length)}},A=u(/^(?:<!--[\s\S]*?--> *(?:\n|\s*$)|<((?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\b)\w+(?!:\/|[^\w\s@]*@)\b)[\s\S]+?<\/\1> *(?:\n{2,}|\s*$)|<(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\b)\w+(?!:\/|[^\w\s@]*@)\b(?:"[^"]*"|'[^']*'|[^'">])*?> *(?:\n{2,}|\s*$))/),q=function(r){if("<"!==r[0])return null;var n=A(r);if(!n)return null;var e=n[0];return{token:{type:"html",value:e},newSource:r.substring(e.length)}},P=u(/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n+(?=\1?(?:[-*_] *){3,}(?:\n+|$))|\n+(?= *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$))|\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) )\n*|\s*$)/),j=l(/^( *)((?:[*+-]|\d+\.)) [^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*/gm),I=a(/^ *([*+-]|\d+\.) +/,""),O=a(/^ */gm,""),B=l(/^(\d)/),C=a(/\n(?=\d*\. )/,"\n\n"),E=function(r,n){var e=P(r);if(!e)return null;var u=e[0],i=e[2],l=t(n,C,O,I),o=j(u).map(function(r){var n=l(r);return 1===n.length&&"paragraph"===n[0].type&&(n=n[0].children),{type:"listitem",children:n}}),a=B(i);return{token:{type:"list",ordered:!!a,start:a&&+a[1],children:o},newSource:r.substring(u.length)}},M=u(/^\n+/),z=function(r){var n=M(r);if(!n)return null;var e=n[0];return{token:{type:"space"},newSource:r.substring(e.length)}},D=u(/^((?:[^\n]+\n?)+)\n*/),F=a(/\n$/," "),G=function(r,n,e){var t=D(r);if(!t)return null;var u=t[0],i=t[1];return{token:{type:"paragraph",children:e(F(i))},newSource:r.substring(u.length)}},H=a(/^ *| *\| *$/g,""),J=a(/^ *\| *| *\| *$/g,""),K=a(/^ *|\| *$/g,""),L=a(/\n$/," "),N=a(/(?: *\| *)?\n$/,""),Q=s("\n"),R=o(/^ *-+: *$/),T=o(/^ *:-+: *$/),U=function(r){for(var n=[],e=0,t=0;t<r.length;t+=1)"|"!==r[t]||"`"===r[t-1]||"\\"===r[t-1]?n[e]=(n[e]||"")+r[t]:e++;return i(c,n)},V=function(r,n){return t(i(r),U,H)(n)},W=t(U,J),X=function(r){return R(r)?"right":T(r)?"center":"left"},Y=t(i(X),s(/ *\| */),K),Z=function(r,n){return t(i(t(i(r),W)),Q,N)(n)},rr=function(r,n){return t(i(t(i(r),s(/ *\| */))),Q,L)(n)},nr=u(/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/),er=u(/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/),tr=function(r,n,e){var t=nr(r),u=!0;if(t||(t=er(r),u=!1),!t)return null;var i=t[0],l=t[1],o=t[2],a=t[3];return i?{token:{type:"table",header:V(e,l),align:Y(o),cells:u?rr(e,a):Z(e,a)},newSource:r.substring(i.length)}:null},ur=u(/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/),ir=function(r){if("`"!==r[0])return null;var n=ur(r);if(!n)return null;var e=n[0];return{token:{type:"code",value:n[2]},newSource:r.substring(e.length)}},lr=u(/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/),or=function(r,n){if("_"!==r[0]&&"*"!==r[0])return null;var e=lr(r);if(!e)return null;var t=e[0],u=e[1];return{token:{type:"em",children:n(e[2]||u)},newSource:r.substring(t.length)}},ar=u(/^\\([\\`*{}[\]()#+\-.!_>~|])/),sr=function(r){if("\\"!==r[0])return null;var n=ar(r);if(!n)return null;var e=n[0];return{token:{type:"text",value:e},newSource:r.substring(e.length)}},cr=u(/^ *\n(?!\s*$)/),pr=function(r){var n=cr(r);if(!n)return null;var e=n[0];return{token:{type:"br"},newSource:r.substring(e.length)}},fr=u(/^<([^ >]+(@|:\/)[^ >]+)>/),gr=function(r){if("<"!==r[0])return null;var n=fr(r);if(!n)return null;var e=n[0],t=n[2],u=n[1],i="";return"@"===t?(u=":"===u.charAt(6)?u.substring(7):u,i="mailto:"+u):i=u,{token:{type:"link",href:i,children:[{type:"text",value:u}]},newSource:r.substring(e.length)}},hr=o(/^http/),vr=u(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),yr=function(r){if(!hr(r))return null;var n=vr(r);if(!n)return null;var e=n[0],t=n[1];return{token:{type:"link",href:t,children:[{type:"text",value:t}]},newSource:r.substring(e.length)}},br=u(/^!?\[((?:\[[^\]]*\]|[^[\]]|\](?=[^[]*\]))*)\]\(\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/),dr=function(r,n){if("["!==r[0]&&"!"!==r[0])return null;var e,t=br(r);if(!t)return null;var u=t[0],i=t[1],l=t[2],o=t[3];return e="!"===i[0]?{type:"image",src:l,alt:i}:{type:"link",href:l,children:n(i)},o&&(e.title=o),{token:e,newSource:r.substring(u.length)}},kr=function(r,n){return gr(r)||yr(r)||dr(r,n)},Sr=u(/^~~(?=\S)([\s\S]*?\S)~~/),wr=function(r,n){if("~"!==r[0])return null;var e=Sr(r);if(!e)return null;var t=e[0];return{token:{type:"strikethrough",children:n(e[1])},newSource:r.substring(t.length)}},mr=u(/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/),$r=function(r,n){if("_"!==r[0]&&"*"!==r[0])return null;var e=mr(r);if(!e)return null;var t=e[0],u=e[1];return{token:{type:"strong",children:n(e[2]||u)},newSource:r.substring(t.length)}},_r=u(/^[\s\S]+?(?=[\\<![_*`~]|https?:\/\/| *\n|$)/),xr=function(r){var n=_r(r);if(!n)return null;var e=n[0];return{token:{type:"text",value:e},newSource:r.substring(e.length)}},Ar=function(){function r(r,n,e){i[r].push({parser:n,priority:e}),i[r]=i[r].sort(function(r,n){return n.priority-r.priority})}function n(r,n){for(var e,t=i[r].length,u="",a=0;a<t;a+=1){var s=i[r][a].parser,c="block"===r?s(n,l,o):s(n,o);if(c){u=c.newSource,e=c.token;break}}return e?{token:e,newSource:u}:null}function t(r){return function(e){for(var t=[];e.length>0;){var u=n(r,e)||{},i=u.token,l=void 0===i?null:i,o=u.newSource,a=void 0===o?"":o;if(e===a||!l)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));t.push(l),e=a}return t}}function u(r){return e(r)}var i={block:[{parser:z,priority:1e3},{parser:$,priority:900},{parser:x,priority:800},{parser:g,priority:700},{parser:k,priority:600},{parser:tr,priority:500},{parser:E,priority:400},{parser:q,priority:300},{parser:G,priority:0}],inline:[{parser:sr,priority:1e3},{parser:ir,priority:900},{parser:$r,priority:800},{parser:or,priority:700},{parser:wr,priority:600},{parser:kr,priority:500},{parser:pr,priority:400},{parser:xr,priority:0}]},l=t("block"),o=t("inline");return{parse:function(r){return l(u(r))},useInlineParser:function(n,e){return r("inline",n,e),this},useBlockParser:function(n,e){return r("block",n,e),this}}},qr=function(r){return Ar().parse(r)};r.default=Ar,r.parse=qr,Object.defineProperty(r,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
