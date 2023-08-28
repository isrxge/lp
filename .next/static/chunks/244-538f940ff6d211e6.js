(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[244],{5160:function(e,t,n){"use strict";n.d(t,{D0:function(){return r},dK:function(){return o}});var a=n(64);let i=(0,a.oM)({name:"language",initialState:{value:"vn"},reducers:{changeLanguage:e=>{"vn"==e.value?e.value="en":e.value="vn"}}}),{changeLanguage:r}=i.actions,o=e=>e;t.ZP=i.reducer},6423:function(e,t,n){"use strict";n.d(t,{GB:function(){return r},O7:function(){return o}});var a=n(64);let i=(0,a.oM)({name:"search",initialState:{value:{product:[]}},reducers:{companyProduct:(e,t)=>{e.value.product=t.payload.products,window.localStorage.setItem("productList",JSON.stringify([]))}}}),{companyProduct:r}=i.actions,o=e=>e;t.ZP=i.reducer},9053:function(e,t,n){"use strict";n.r(t);var a=n(7437),i=n(3608),r=n(1396),o=n.n(r),c=n(4033);t.default=e=>{let{className:t}=e,n=(0,c.usePathname)(),r=n.split("/").filter(e=>e),u=[{label:"Home",href:"/","aria-label":"/"===n?"page":void 0}];return r.forEach((e,t)=>{let a="/".concat(r.slice(0,t+1).join("/"));"page"!==e&&u.push({label:(0,i.OI)(e.replace(/[-_]/g," "))||"",href:a,"aria-label":n===a?"page":void 0})}),(0,a.jsx)("nav",{"aria-label":"Breadcrumb",className:t,children:(0,a.jsx)("ol",{className:"inline-flex",role:"list",children:u.map((e,t)=>{let{label:n,...i}=e;return(0,a.jsxs)("li",{className:"mx-1 capitalize",role:"listitem",children:[t>0&&(0,a.jsx)("span",{className:"inlin-block mr-1",children:"/"}),t!==u.length-1?(0,a.jsx)(o(),{className:"text-primary dark:text-darkmode-primary",...i,children:n}):(0,a.jsx)("span",{className:"text-light dark:text-darkmode-light",children:n})]},t)})})})}},6405:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var a=n(7437),i=n(5160),r=n(1396),o=n.n(r),c=n(3198),u=n(7897),s=n(3235),l=n(6691),h=n.n(l);function x(e){let{title:t,content:n,id:r,link:l,srcImg:x}=e,g=(0,c.v9)(e=>(0,i.dK)(e));return(0,a.jsxs)("div",{className:"max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",children:[(0,a.jsx)(h(),{fill:!0,className:"rounded-t-lg",src:x,alt:""}),(0,a.jsx)("span",{children:(0,a.jsx)("h5",{className:"mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white",children:t})}),(0,a.jsx)("p",{className:"mb-3 font-normal text-gray-500 dark:text-gray-400",dangerouslySetInnerHTML:{__html:n}}),(0,a.jsxs)(o(),{href:{pathname:"".concat(l)},className:"inline-flex items-center text-blue-600 hover:underline",children:["en"==g.changeLanguage.value?s.In.u:u.In.u,(0,a.jsx)("svg",{className:"w-3 h-3 ml-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18",children:(0,a.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"})})]})]},r)}},227:function(e,t,n){"use strict";n.r(t);var a=n(7437),i=n(145),r=n(3608),o=n(4033);t.default=e=>{let{title:t,meta_title:n,image:c,description:u,canonical:s,noindex:l}=e,{meta_image:h,meta_author:x,meta_description:g}=i.metadata,{base_url:p}=i.site,m=(0,o.usePathname)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:(0,r.ab)(n||t||i.site.title)}),s&&(0,a.jsx)("link",{rel:"canonical",href:s,itemProp:"url"}),l&&(0,a.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,a.jsx)("meta",{name:"description",content:(0,r.ab)(u||g)}),(0,a.jsx)("meta",{name:"author",content:x}),(0,a.jsx)("meta",{property:"og:title",content:(0,r.ab)(n||t||i.site.title)}),(0,a.jsx)("meta",{property:"og:description",content:(0,r.ab)(u||g)}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:url",content:"".concat(p,"/").concat(m.replace("/",""))}),(0,a.jsx)("meta",{name:"twitter:title",content:(0,r.ab)(n||t||i.site.title)}),(0,a.jsx)("meta",{name:"twitter:description",content:(0,r.ab)(u||g)}),(0,a.jsx)("meta",{property:"og:image",content:"".concat(p).concat(c||h)}),(0,a.jsx)("meta",{name:"twitter:image",content:"".concat(p).concat(c||h)}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},5960:function(e,t,n){"use strict";async function a(e){let t="api/new";"admin"==e&&(t="api/getall/new");let n=await fetch(t),a=await n.json();return a}async function i(e,t){let n=await fetch("api/findById",{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({_id:e,schema:t})}),a=await n.json();return a}async function r(){let e=await fetch("api/company"),t=await e.json();return t}async function o(){let e=await fetch("api/customer"),t=await e.json();return t}async function c(){let e=await fetch("api/partner"),t=await e.json();return t}async function u(){let e=await fetch("api/sendMessage"),t=await e.json();return t}async function s(){let e=await fetch("api/product"),t=await e.json();return t}async function l(){let e=await fetch("api/banner"),t=await e.json();return t}async function h(){let e=await fetch("api/contact"),t=await e.json();return t}n.d(t,{Hs:function(){return a},LX:function(){return s},TJ:function(){return i},hD:function(){return c},hT:function(){return l},i$:function(){return u},pm:function(){return r},s:function(){return h},v9:function(){return o}})},3608:function(e,t,n){"use strict";n.d(t,{OI:function(){return c},ab:function(){return u},gI:function(){return o},lV:function(){return r}});var a=n(7206),i=n(8608);i.TU.use({mangle:!1,headerIds:!1});let r=e=>(0,a.o)(e),o=(e,t)=>({__html:t?i.TU.parse(e):i.TU.parseInline(e)}),c=e=>e.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,function(e){return e.toUpperCase()}),u=e=>{let t=e.replace(/<\/?[^>]+(>|$)/gm,""),n=t.replace(/[\r\n]\s*[\r\n]/gm,""),a=s(n);return a},s=e=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>t[e])}},1396:function(e,t,n){e.exports=n(6685)},145:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"LPC","base_url":"https://nextplate.netlify.app","yb":"/images/favicon.png","logo":"/images/logo.png","logo_darkmode":"/images/logo.png","logo_width":"143","logo_height":"70","logo_text":"LPC"},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog"},"params":{"copyright":"Copyright \xa9 2023 Lien Phat Technology Corporation. All Rights Reserved."},"navigation_button":{"enable":true,"label":"Đăng nhập","labelEn":"Login","link":"/login"},"metadata":{"meta_author":"LPC","meta_image":"/images/og-image.png","meta_description":"Welcome to LPC"}}')},7897:function(e){"use strict";e.exports=JSON.parse('{"Lf":{"u":"T\xecm hiểu th\xeam"},"fC":{"u":"Li\xean hệ"},"pL":{"u":"Sẵn s\xe0ng, chuy\xean nghiệp v\xe0 chu đ\xe1o"},"O7":{"name":" C\xe1c sản phẩm của ch\xfang t\xf4i","description":""},"b6":{"u":"LPC l\xe0 một c\xf4ng ty h\xe0ng đầu trong lĩnh vực cung cấp giải ph\xe1p, sản phẩm v\xe0 dịch vụ CNTT"},"A_":{"u":"Hơn 10 Năm Kinh Nghiệm"},"Ks":{"u":"Ch\xfang t\xf4i đ\xe3 cung cấp v\xe0 triển khai th\xe0nh c\xf4ng c\xe1c g\xf3i sản phẩm dịch vụ, giải ph\xe1p v\xe0 t\xedch hợp hệ thống cho Qu\xfd kh\xe1ch h\xe0ng lớn trong nhiều lĩnh vực như: Ng\xe2n h\xe0ng, chuỗi b\xe1n lẻ, sản xuất, kho vận, c\xe1c doanh nghiệp trong v\xe0 ngo\xe0i nước…"},"Pw":{"name":"Chi tiết","description":""},"Lx":{"u":"Kh\xe1ch h\xe0ng ti\xeau biểu của Li\xean Ph\xe1t","W":"Ch\xfang t\xf4i đ\xe3 cung cấp v\xe0 triển khai th\xe0nh c\xf4ng c\xe1c g\xf3i sản phẩm dịch vụ, giải ph\xe1p v\xe0 t\xedch hợp hệ thống cho Qu\xfd kh\xe1ch h\xe0ng lớn trong nhiều lĩnh vực."},"k":{"u":"Đối t\xe1c","W":"Ch\xfang t\xf4i h\xe2n hạnh l\xe0 đối t\xe1c với những c\xf4ng ty c\xf4ng nghệ h\xe0ng đầu."},"r":{"u":"Tin tức"},"In":{"u":"Xem th\xeam"},"EI":{"u":"Xem tin"},"zn":{"u":"TƯ TƯỞNG CỐT L\xd5I"},"hW":{"u":"NHỮNG CỘT MỐC QUAN TRỌNG","W":"Li\xean Ph\xe1t đ\xe3 ho\xe0n th\xe0nh hơn 700 dự \xe1n"},"q":{"u":"Dự \xe1n"},"PX":{"u":"H\xe3y để lại chi tiết li\xean hệ"},"jZ":{"u":"Về ch\xfang t\xf4i"},"u2":{"u":"Họ T\xean"},"JP":{"u":"Lời nhắn"},"lW":{"u":"Gửi"},"V4":{"u":"Kh\xe1ch h\xe0ng","W":"ĐỒNG THỜI CH\xdaNG T\xd4I TỰ H\xc0O L\xc0 KH\xc1CH H\xc0NG TI\xcaU BIỂU VỚI C\xc1C DOANH NGHIỆP TR\xcaN."},"gX":{"u":"Bắt đầu ngay"},"B$":{"u":"Danh mục"},"M$":{"u":"Thẻ"},"Lw":{"u":"Chia sẻ"},"Mn":{"u":"C\xe1c b\xe0i li\xean quan"},"Ep":{"u":"Đăng nhập"},"Do":{"u":"Email"},"Bj":{"u":"Mật khẩu"},"DV":{"u":"C\xe1c giải ph\xe1p"}}')},3235:function(e){"use strict";e.exports=JSON.parse('{"Lf":{"u":"Learn more"},"fC":{"u":"Contact us"},"pL":{"u":"Ready, professionel and polite"},"O7":{"name":" Our product","description":""},"b6":{"u":"We provive the following services and solutions"},"A_":{"u":"Over 10 years of Experience"},"Ks":{"u":"We have successfully provided and deployed numorous services, solutions and intergration for our customers in multiple business: Banking, marketing, production, logistic, organization from within the country and abroad."},"Pw":{"name":"detail","description":""},"Lx":{"u":"Some of Li\xean Ph\xe1t customers","W":"Ch\xfang t\xf4i đ\xe3 cung cấp v\xe0 triển khai th\xe0nh c\xf4ng c\xe1c g\xf3i sản phẩm dịch vụ, giải ph\xe1p v\xe0 t\xedch hợp hệ thống cho Qu\xfd kh\xe1ch h\xe0ng lớn trong nhiều lĩnh vực."},"k":{"u":"Our partner","W":"We are honored to partner with leading technology companies."},"r":{"u":"News"},"In":{"u":"See more"},"EI":{"u":"View"},"zn":{"u":"OUR CORE THOUGHT"},"hW":{"u":"OUR IMPORTANT MILESTONES","W":"Li\xean Ph\xe1t has completed over 700 projects"},"q":{"u":"Projects"},"PX":{"u":"Please leave your information"},"jZ":{"u":"About us"},"u2":{"u":"Fullname"},"JP":{"u":"Note"},"lW":{"u":"Send"},"V4":{"u":"Customer","W":"ALWAYS PROUD TO BE A TYPICAL CUSTOMER FOR ENTERPRISES."},"gX":{"u":"Start now"},"B$":{"u":"Catagories"},"M$":{"u":"Tags"},"Lw":{"u":"Share"},"Mn":{"u":"Related post"},"Ep":{"u":"Login page"},"Do":{"u":"Email"},"Bj":{"u":"Password"},"DV":{"u":"Solutions"}}')}}]);