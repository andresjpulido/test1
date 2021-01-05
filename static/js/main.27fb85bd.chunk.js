(this.webpackJsonpwebsite2=this.webpackJsonpwebsite2||[]).push([[0],{16:function(e,t,a){e.exports=a(32)},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){var n={"./puzzle.png":29,"./recipes.png":30,"./timeline1.png":31};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=28},29:function(e,t,a){e.exports=a.p+"static/media/puzzle.12c159ed.png"},30:function(e,t,a){e.exports=a.p+"static/media/recipes.949c8ac4.png"},31:function(e,t,a){e.exports=a.p+"static/media/timeline1.1d9a88c6.png"},32:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),l=a.n(r),c=(a(21),a(8)),o=a(2),s=a(3),m=a(9),u=a(5),d=a(4),p=(a(22),a(7)),h=a(11),b=a(12),f=a(13),v=a(6),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){var e=this.props.contactItems.map((function(e){return i.a.createElement("li",{className:"contact-networks",key:e.id.toString()},i.a.createElement("a",{href:e.url,target:"_blank",title:e.label},i.a.createElement(v.a,{className:"icon-active",icon:[e.iconFamily,e.icon],key:e.id,size:"lg"}),i.a.createElement("span",{className:"dark"},e.text))," ")}));return i.a.createElement(n.Fragment,null,i.a.createElement("section",{id:"contact",class:"anchor"},i.a.createElement("div",{className:"f"},i.a.createElement("h2",{className:"dark"},"Contact"),i.a.createElement("p",{className:"dark"},"To contact me, please fill in the following form and write me a comment and I will be glad to answer you soon."),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-50"},i.a.createElement("form",{method:"post",onSubmit:this.handleSubmit},i.a.createElement("div",{className:"rddow"},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"}),i.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"})),i.a.createElement("div",null,i.a.createElement("textarea",{name:"message",id:"message",placeholder:"Message",rows:"4"}))),i.a.createElement("a",{href:"#",className:"button",id:"contactForm"},"Send Message!")))),i.a.createElement("div",{className:"col-50"},i.a.createElement("ul",{className:"networks"},e))))))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement("section",{id:"about",class:"anchor"},i.a.createElement("div",null,i.a.createElement("h2",{className:"dark"},"About"),i.a.createElement("p",{className:"dark"},"Software developer, walker, passionate about technology, interested in learning and creating fantastic things. Systems Engineer expert in business applications J2ee, SOA, web applications and single-page applications."),i.a.createElement("p",{className:"dark"},"I started developing geographic information systems, working with mapserver, Oracle Spatial, PostGis, ArcIms, geographic metadata, etc, this world is cool !!! It was a great learning experience; this kind of projects allow you to experiment and learn new things, also graphically they are striking and are very useful."),i.a.createElement("p",{className:"dark"},"Then I worked for several years in the development of J2EE enterprise applications for intranet over Websphere Application Server and SQL Server in public and private entities. In my last project, our team built an internet application that encourages digital sales in a bank, in this project I learned a lot about user interface and architecture oriented to microservices."))))}}]),a}(n.Component),y=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){var e=this.props.projects.map((function(e){return i.a.createElement("div",{className:"project-card",style:{backgroundImage:"url("+a(28)("./".concat(e.image))+")"},key:e.id.toString()},i.a.createElement("h1",null,e.title),i.a.createElement("p",null,e.description),i.a.createElement("p",null,i.a.createElement("a",{href:e.url,target:"_blank",title:"go Github"},"go Github")))}));return i.a.createElement(n.Fragment,null,i.a.createElement("section",{id:"mywork",class:"anchor"},i.a.createElement("div",null,i.a.createElement("h2",{className:"light"},"My work"),i.a.createElement("div",{className:"project-card-container"},e))))}}]),r}(n.Component),k=(n.Component,function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.menu.map((function(t){return i.a.createElement("div",{className:"item",title:t.label,key:"div_"+t.id.toString()},i.a.createElement("div",{className:"item-text"},i.a.createElement("a",{href:t.ref,id:t.id.toString(),className:t.isActive?"active":"",onClick:function(a){e.props.handler(a,t.id)}},i.a.createElement(v.a,{className:"icon",icon:[t.iconFamily,t.icon],key:t.id}))))})),a=this.props.menu.map((function(t){return i.a.createElement("div",{className:t.isActive?"item-menu-active":"item-menu",title:t.label,key:"div2_"+t.id.toString()},i.a.createElement("div",{className:"item-menu-text"},i.a.createElement("a",{href:t.ref,id:t.id.toString(),title:t.ref,className:t.isActive?"active":"",onClick:function(a){e.props.handler(a,t.id)}},t.label)))}));return i.a.createElement(n.Fragment,null,i.a.createElement("nav",null,i.a.createElement("div",{id:"navItems"},i.a.createElement("div",{className:"item icons"},i.a.createElement("img",{id:"icon",src:"favicon.ico"})),t),i.a.createElement("div",{id:"menuItems"},i.a.createElement("div",{className:"menu"},a))))}}]),a}(n.Component)),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement("footer",null,"\xa9 2020 Andres Pulido"))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.contactItems.filter((function(e){return e.isBrand})).map((function(e){return i.a.createElement("li",{key:e.id.toString(),className:"main-networks"},i.a.createElement("a",{href:e.url,target:"_blank",title:e.label},i.a.createElement(v.a,{className:"icon-active",icon:[e.iconFamily,e.icon],key:e.id,size:"lg"})))}));return i.a.createElement(n.Fragment,null,i.a.createElement("section",{id:"home",class:"anchor"},i.a.createElement("div",null,i.a.createElement("p",{className:"title"},"Hi, ",i.a.createElement("br",null),"I'm Andres Pulido,",i.a.createElement("br",null),"Software developer",i.a.createElement("br",null),i.a.createElement("span",{className:"home-h2"},"Web developement / J2EE / SPA Applications"))),i.a.createElement("div",{id:"social-networks"},i.a.createElement("ul",null,e))))}}]),a}(n.Component);p.b.add(h.a,b.a,f.a);var O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){window.addEventListener("scroll",n.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",n.handleScroll)},n.handleScroll=function(e){var t=e.srcElement.body.scrollTop;Math.min(0,t/3-60);n.setState({transform:window.scrollY});var a=document.getElementById("about").offsetTop,i=document.getElementById("contact").offsetTop,r=document.getElementById("mywork").offsetTop,l=0,c=parseInt(window.scrollY);c<a&&(l=1),c>=a-5&&c<r&&(l=2),c>=r-5&&c<i&&(l=3),c>=i&&(l=4),n.handlerItemMenu(null,l)},n.handlerItemMenu=function(e,t){var a=n.state.menu.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{isActive:!0}):Object(c.a)(Object(c.a)({},e),{},{isActive:!1})}));n.setState({menu:a})},n.state={transform:0,menu:[{id:1,label:"Home",isActive:!0,icon:"home",ref:"#home"},{id:2,label:"About",isActive:!1,icon:"user-circle",ref:"#about"},{id:3,label:"My Work",isActive:!1,icon:"sd-card",ref:"#mywork"},{id:4,label:"Contact",isActive:!1,icon:"address-book",ref:"#contact"}],brands:[{id:0,isBrand:!1,label:"Location",text:"Auckland, New Zealand",iconFamily:"fas",icon:"home",url:"#"},{id:1,isBrand:!0,label:"Github",text:"Github",iconFamily:"fab",icon:"github",url:"https://github.com/andresjpulido"},{id:2,isBrand:!0,label:"medium",text:"Medium",iconFamily:"fab",icon:"medium",url:"https://medium.com/@andresjpulido"},{id:3,isBrand:!0,label:"Mail",text:"Mail me",iconFamily:"far",icon:"envelope",url:"mailto:andresjpulido@gmail.com"},{id:4,isBrand:!0,label:"linkedin",text:"CV",iconFamily:"fab",icon:"linkedin",url:"https://www.linkedin.com/in/andresjpulido/"}],projects:[{id:1,title:"Shop",description:"Web application that manages the inventory, the creation of purchase orders, the registration of hours you work and the creation of the weekly payslip ",tags:["Javascript","PostgreSQl","Nodejs"],url:"https://github.com/andresjpulido/shop",image:"timeline1.png"},{id:2,title:"Recipes",description:"Description of the Application",tags:["Javascript","Firebase"],url:"https://github.com/andresjpulido/recipe",image:"recipes.png"},{id:3,title:"Puzzle",description:"Description of the Application",tags:["typescript"],url:"https://github.com/andresjpulido/puzzle",image:"puzzle.png"}],contactItems:[{id:0,isBrand:!1,label:"Location",text:"Auckland, New Zealand",iconFamily:"fas",icon:"home",url:"#"},{id:1,isBrand:!0,label:"Github",text:"Github",iconFamily:"fab",icon:"github",url:"https://github.com/andresjpulido"},{id:2,isBrand:!0,label:"medium",text:"Medium",iconFamily:"fab",icon:"medium",url:"https://medium.com/@andresjpulido"},{id:3,isBrand:!0,label:"Mail",text:"Mail me",iconFamily:"far",icon:"envelope",url:"mailto:andresjpulido@gmail.com"},{id:4,isBrand:!0,label:"linkedin",text:"CV",iconFamily:"fab",icon:"linkedin",url:"https://www.linkedin.com/in/andresjpulido/"}]},n.handler=n.handlerItemMenu.bind(Object(m.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(k,{menu:this.state.menu,t:this.state.transform,handler:this.handlerItemMenu}),i.a.createElement("article",null,i.a.createElement(j,{contactItems:this.state.contactItems}),i.a.createElement(g,null),i.a.createElement(y,{projects:this.state.projects}),i.a.createElement(E,{contactItems:this.state.contactItems})),i.a.createElement(w,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.27fb85bd.chunk.js.map