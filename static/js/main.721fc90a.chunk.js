(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(36)},28:function(e,a,t){},29:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),i=t.n(l),o=t(7),c=t(10),s=t(12),m=t(11),u=t(13),d=(t(28),t(5)),g=(t(29),function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"d-flex"},r.a.createElement(d.b,{className:"navbar-brand",to:"/Catalog"},"Furniture App"),r.a.createElement("p",{className:"name-title"},"Hello, ",e.userName," ")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.b,{className:"nav-link",to:"/catalog"},"Catalog"))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0",onClick:e.logOut},"Log Out"))))}),f=(t(34),function(){return r.a.createElement("section",{className:"absolute-central"},r.a.createElement("div",{className:"text-center wrapper-central"},r.a.createElement("h2",null," At first you have to enter your name "),r.a.createElement(d.b,{to:"/",className:"submit-button gradient-border wrapper-central m-5"},"Login")))}),h=t(6),p=(t(35),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={userName:""},t.onChange=function(e){var a=e.target.value;t.setState({userName:a})},t.onLogin=function(e){e.preventDefault(),t.state.userName.length>0?(t.props.onLogin(t.state.userName),t.props.history.push("/catalog")):alert("At first you have to input name")},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"absolute-central"},r.a.createElement("section",{className:"wrapper-central"},r.a.createElement("form",{className:"login-form",onSubmit:this.onLogin},r.a.createElement("div",{className:"gradient-border col-md-12",id:"box"},r.a.createElement("label",{className:"login",htmlFor:"login"},"Enter your name:"),r.a.createElement("input",{type:"text",id:"login",className:"login-input m-3",name:"userName",onChange:this.onChange,value:this.state.userName})))))}}]),a}(n.Component)),b=Object(h.e)(p),E=[["\u0421hair","\u041aocking chair","Italia","Wood",200],["\u0421hair","Office chair","Italia","Arma-plastic",700],["\u0421hair","Leather chair","Germany","Arma",1250],["\u0421hair","Leather chair","Italia","Arma",1400],["\u0421hair","PurpleLeather chair","Germany","Arma",1250],["\u0421hair","BlueLeather chair","Italia","Arma",1400],["Sofa","Purple Sofa","Germany","Wood",7e3],["Sofa","Blue Sofa","Poland","Wood",8e3],["Sofa","Black Sofa","Germany","Arma",10500],["Sofa","Red Sofa","Italia","Wood",5400],["Closet","Purple Closet","Germany","Wood",7e3],["Closet","Blue Closet","Poland","Wood",8e3],["Closet","Black Closet","Germany","Wood",10500],["Closet","Red Closet","Italia","Wood",5400],["Kitchen","Purple Kitchen","Germany","Wood",7e3],["Kitchen","Blue Kitchen","Poland","Wood",8e3],["Kitchen","Black Kitchen","Germany","Wood",10500],["Kitchen","Red Kitchen","Italia","Wood",5400],["Dressing tables","Purple Dressing tables","Germany","Wood",7e3],["Dressing tables","Blue Dressing tables","Poland","Wood",8e3],["Dressing tables","Black Dressing tables","Germany","Wood",10500],["Dressing tables","Red Dressing tables","Italia","Wood",5400],["Table","Purple Table","Germany","Wood",7e3],["Table","Blue Table","Poland","Wood",8e3],["Table","Black Table","Germany","Wood",10500],["Table","Red Table","Italia","Wood",5400]],v=new function e(){var a=this;Object(o.a)(this,e),this._data=[],this._listItem=[],this.idIndicator=0,this.listItemId=0,this._imageBase="https://starwars-visualguide.com/assets/img",this.createItem=function(e,t,n,r,l){var i=a._data.map(function(e){return e.indicator}).indexOf(e);if(-1===i){var o={id:a.idIndicator++,indicator:e,list:[{listItemId:a.listItemId++,itemName:t,manufacturer:n,material:r,cost:l}]};a._data.push(o)}else{var c=a._data[i].list;if(c.find(function(e){return e.itemName===t&&e.manufacturer===n}))console.log("this company, type and taste already exist in Data");else{var s={listItemId:a.listItemId++,itemName:t,manufacturer:n,material:r,cost:l};c.push(s)}}},this.getData=function(){return a._data.map(function(e){return e})},this.getList=function(e){if(null!=e){var t=a._data.find(function(a){return a.id===e}).list;return a._listItem=t,a._listItem}},this.getItem=function(e){if(null!=e){var t=a._listItem.reduce(function(a,t){return t.listItemId===e&&Object.assign(a,t),a},{});return console.log(t),t}},this.getItemImage=function(e){return"https://woonhome.s3.amazonaws.com/2019/05/behzad-ghaffarian-1215343-unsplash.jpg"}};E.forEach(function(e){return v.createItem(e[0],e[1],e[2],e[3],e[4])}),console.log(v);var I=v,N=Object(h.e)(function(e){var a=e.data,t=e.onIndicatorSelected,n=a().map(function(e){var a=e.id,n=e.indicator;return r.a.createElement("li",{key:a,className:"list-group-item",onClick:function(){return t(a)}},n)});return r.a.createElement("ul",{className:"item-list list-group col-md-3"},n)}),y=Object(h.e)(function(e){var a=e.data,t=e.img,n=e.onItemSelected;if(a){var l=a.map(function(a){var l=a.listItemId,i=a.itemName,o=a.cost;return r.a.createElement("div",{key:l,className:"card col-md-4 wrapper-central",onClick:function(){n(l),e.history.push("/item/".concat(l))}},r.a.createElement("img",{src:t(l),alt:"furniture from Italia",className:"card-img-top"}),r.a.createElement("h5",{className:"card-title"},i),r.a.createElement("p",{className:"card-text"},"Cost: $",o))});return r.a.createElement("section",{className:"col-md-9"},r.a.createElement("div",{className:"row"},l))}return null}),C=function(e){var a=e.item,t=e.field,n=e.label;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},n),r.a.createElement("span",null,a[t]))},O=function(e){var a=e.item,t=e.img,n=e.children;if(a){var l=a.listItemId,i=a.itemName;return r.a.createElement("section",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("img",{src:t(l),alt:"furniture from Italia",className:"card-img-top"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h5",{className:"card-title"},i),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.Children.map(n,function(e){return r.a.cloneElement(e,{item:a})}))))}return null},S=function(e){var a=e.item,t=e.img;return r.a.createElement(O,{item:a,img:t},r.a.createElement(C,{field:"manufacturer",label:"Manufacturer: "}),r.a.createElement(C,{field:"material",label:"Material: "}),r.a.createElement(C,{field:"cost",label:"Cost: $ "}))},L=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={data:I,selectItem:null,item:null,userName:"",isLoggedIn:!1},t.onIndicatorSelected=function(e){t.setState({selectItem:e})},t.onItemSelected=function(e){t.setState({item:e})},t.onLogin=function(e){return t.setState({userName:e,isLoggedIn:!t.state.isLoggedIn})},t.logOut=function(e){return t.setState({userName:"",isLoggedIn:!t.state.isLoggedIn})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.data,n=a.selectItem,l=a.item,i=a.userName,o=a.isLoggedIn;return r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/",exact:!0,render:function(){return r.a.createElement(b,{onLogin:e.onLogin})}}),r.a.createElement(h.a,{path:"/catalog",render:function(){return o?r.a.createElement("div",null,r.a.createElement(g,{logOut:e.logOut,userName:i}),r.a.createElement("section",{className:"row container"},r.a.createElement(N,{data:t.getData,onIndicatorSelected:e.onIndicatorSelected}),r.a.createElement(y,{data:t.getList(n),img:t.getItemImage,onItemSelected:e.onItemSelected}))):r.a.createElement(f,null)}}),r.a.createElement(h.a,{path:"/item/:id",render:function(a){var n=a.match;a.location,a.history;return n.params.id=l,o?r.a.createElement("div",null,r.a.createElement(g,{logOut:e.logOut,userName:i}),r.a.createElement("section",{className:"container"},r.a.createElement(S,{item:t.getItem(l),img:t.getItemImage}))):r.a.createElement(f,null)}}))}}]),a}(n.Component);i.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.721fc90a.chunk.js.map