(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{158:function(t,e,n){"use strict";n.r(e);var i=n(1),r=(n(0),n(7)),s=n(18),a=n(56),o=n.n(a),c=function(t){var e=t.data;return Object(i.jsx)("div",{className:"cell-container",children:Object(i.jsxs)("article",{className:"mini-post",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("a",{href:e.link,children:e.title})}),Object(i.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(i.jsx)("a",{href:e.link,className:"image",children:Object(i.jsx)("img",{src:"".concat("/white_niche").concat(e.image),alt:e.title})}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:e.desc})})]})})},u=[{title:"Stxtch",subtitle:"Senior Full Stack Developer",link:"https://verizonpurposewall.com/",image:"/images/projects/stxtch.png",date:"2022-02-2",desc:"Stxtch is an interactive story sharing application where users build meaningful connections through science-based interactive virtual methods and experiences. Through these experiences users develop a deeper sense of self-worth, belongingness of their existing communities, and perspective into new ones."},{title:"Dataseed",subtitle:"Backend development, Built Microservices",link:"http://live.site.dataseed.de/",image:"/images/projects/dataseed-home.jpg",date:"2021-07-20",desc:"Dataseed is a German company, located in Hamburg, specialized in Big Data and Data Science, technologies that are revolutionizing the routine of industry and service organizations, generating high-level insights for decision making, increased profitability and process optimization."},{title:"Toolwire",subtitle:"Frontend development",link:"https://toolwire.com/",image:"/images/projects/toolwire.jpg",date:"2019-10-28",desc:"Toolwire Spaces Learning is an AI-powered learning experience platform that unifies content + collaboration + experiential learning."},{title:"Space Potato",subtitle:"A kickstarter funded potato powered weather balloon.",link:"http://www.spacepotato.org",image:"/images/projects/spacepotato.jpg",date:"2017-06-28",desc:"Launched a potato battery powered weather balloon with two cameras and gps transponder. Resulting photos were published in a coffee table book. You can email me for a copy."},{title:"Cat Detector",subtitle:"A convolutional neural network to classify cats! (and dogs)",image:"/images/projects/catdetector.jpg",date:"2016-03-15",desc:"Trained a convolutional neural network to classify between ~ 80 cats breeds. Over 60,000 cats were classified before server bills made the project too expensive to continue hosting."}];e.default=function(){return Object(i.jsx)(s.a,{title:"Projects",description:"Learn about Chunji Piao's projects.",children:Object(i.jsxs)("article",{className:"post",id:"projects",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(i.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(t){return Object(i.jsx)(c,{data:t},t.title)}))]})})}},56:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",s="week",a="month",o="quarter",c="year",u="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},p={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,a),s=n-r<0,o=e.clone().add(i+(s?-1:1),a);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:c,w:s,d:r,D:u,h:i,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",$={};$[m]=d;var g=function(t){return t instanceof w},v=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)$[t]&&(i=t),e&&($[t]=e,i=t);else{var r=t.name;$[r]=t,i=r}return!n&&i&&(m=i),i||!n&&m},j=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},b=p;b.l=v,b.i=g,b.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function d(t){this.$L=v(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return b},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return j(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<j(t)},f.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var h=this,l=!!b.u(o)||o,d=b.p(t),f=function(t,e){var n=b.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return l?n:n.endOf(r)},p=function(t,e){return b.w(h.toDate()[t].apply(h.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},m=this.$W,$=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case c:return l?f(1,0):f(31,11);case a:return l?f(1,$):f(0,$+1);case s:var j=this.$locale().weekStart||0,w=(m<j?m+7:m)-j;return f(l?g-w:g+(6-w),$);case r:case u:return p(v+"Hours",0);case i:return p(v+"Minutes",1);case n:return p(v+"Seconds",2);case e:return p(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var h,l=b.p(s),d="set"+(this.$u?"UTC":""),f=(h={},h[r]=d+"Date",h[u]=d+"Date",h[a]=d+"Month",h[c]=d+"FullYear",h[i]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[l],p=l===r?this.$D+(o-this.$W):o;if(l===a||l===c){var m=this.clone().set(u,1);m.$d[f](p),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[b.p(t)]()},f.add=function(t,o){var u,h=this;t=Number(t);var l=b.p(o),d=function(e){var n=j(h);return b.w(n.date(n.date()+Math.round(e*t)),h)};if(l===a)return this.set(a,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===r)return d(1);if(l===s)return d(7);var f=(u={},u[n]=6e4,u[i]=36e5,u[e]=1e3,u)[l]||1,p=this.$d.getTime()+t*f;return b.w(p,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),r=this.$locale(),s=this.$H,a=this.$m,o=this.$M,c=r.weekdays,u=r.months,h=function(t,i,r,s){return t&&(t[i]||t(e,n))||r[i].substr(0,s)},d=function(t){return b.s(s%12||12,t,"0")},f=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:b.s(o+1,2,"0"),MMM:h(r.monthsShort,o,u,3),MMMM:h(u,o),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:h(r.weekdaysMin,this.$W,c,2),ddd:h(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:b.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:i};return n.replace(l,(function(t,e){return e||p[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,h){var l,d=b.p(u),f=j(t),p=6e4*(f.utcOffset()-this.utcOffset()),m=this-f,$=b.m(this,f);return $=(l={},l[c]=$/12,l[a]=$,l[o]=$/3,l[s]=(m-p)/6048e5,l[r]=(m-p)/864e5,l[i]=m/36e5,l[n]=m/6e4,l[e]=m/1e3,l)[d]||m,h?$:b.a($)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return $[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=v(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return b.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),M=w.prototype;return j.prototype=M,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",a],["$y",c],["$D",u]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,w,j),t.$i=!0),j},j.locale=v,j.isDayjs=g,j.unix=function(t){return j(1e3*t)},j.en=$[m],j.Ls=$,j.p={},j}()}}]);
//# sourceMappingURL=6.a69699d6.chunk.js.map