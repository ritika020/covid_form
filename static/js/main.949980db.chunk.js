(this["webpackJsonpupcloud-covid"]=this["webpackJsonpupcloud-covid"]||[]).push([[0],{100:function(e,t,a){},231:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(26),c=a.n(i),l=(a(98),a.p,a(99),a(85)),r=a(86),o=a(87),d=a(31),u=a(93),m=a(92),p=(a(100),a(101),a(88)),h=a.n(p),j=a(89),f=a.n(j),b=a(55),N=a.n(b),g=a(90),O=a(91),v=a.n(O),x=function(){var e=Object(g.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,v.a.post("https://nimaaaa-project.herokuapp.com/covidForm",t,{headers:{accept:"application/json","Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),null}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=a(0),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).addNew=function(e){e.preventDefault()},s.onResolved=function(){s.setState({messageSent:!0})},s.handleClick=function(e){s.hiddenFileInput.current.click()},s.handleUpload=function(e){console.log(e.target.files.length);var t=e.target.files[0];console.log(t),s.setState({fileUploadState:t,fileName:t.name})},s.state={data:{firstName:"",middleName:"",sirname:"",contactNo:"",address:"",state:"",district:"",cityOrVillages:"",message:"",messageSent:!1,fileUploadState:null,fileName:"",fileImages:[],images:"",natureOfService:""}},s.hiddenFileInput=n.a.createRef(null),s.handleChange=s.handleChange.bind(Object(d.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.recaptcha.execute();new FormData(e.target);var t=new FormData;t.append("firstName",this.state.firstName),t.append("middleName",this.state.middleName),t.append("sirname",this.state.sirname),t.append("contactNo",this.state.contactNo),t.append("state",this.state.state),t.append("message",this.state.message),t.append("cityOrVillages",this.state.cityOrVillages),t.append("district",this.state.district),t.append("natureOfService",this.state.natureOfService),t.append("myFiles",this.state.fileUploadState,this.state.fileName),console.log(t),x(t).then((function(e){console.log(e),"success"===e.data.status&&(alert("Success "+e.data.message),window.location.reload())})).catch((function(e){alert("Error : "+e),console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(_.jsx)(f.a,{children:Object(_.jsxs)("div",{className:"form__main",children:[Object(_.jsxs)("div",{className:"row form__y1",children:[Object(_.jsx)("div",{className:"form__h1",children:"Enroll Yourself"}),Object(_.jsx)("div",{className:"form__c1 col-12 p-0",children:"Nisl, duis est vel pretium, rhoncus egestas in porta. Iaculis arcu odio tellus quis nam nullam nunc, risus vulputate. Nulla in lacus sed curabitur. Faucibus id non convallis morbi diam arcu vitae nunc aliquet. In in mauris sem volutpat eget. Amet dui dis mattis nunc nibh. Blandit nisl pharetra tincidunt mauris quis ullamcorper pellentesque turpis euismod. A, arcu lorem cras enim turpis suspendisse. Vestibulum cursus"})]}),Object(_.jsxs)("div",{className:"row form__y2",children:[Object(_.jsx)("div",{className:"form__h2",children:"Important Notice"}),Object(_.jsx)("div",{className:"form__c2 col-md-12 p-0",children:"Nisl, duis est vel pretium, rhoncus egestas in porta. Iaculis arcu odio tellus quis nam nullam nunc, risus vulputate. Nulla in lacus sed curabitur. Faucibus id non convallis morbi diam arcu vitae nunc aliquet. In in mauris sem volutpat ege"})]}),Object(_.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(_.jsxs)("div",{className:"row form__y3",children:[Object(_.jsxs)("div",{className:"form-group col-md-3 pl-0",children:[Object(_.jsx)("input",{id:"firstName",name:"firstName",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z_ ]{1,32}",onChange:this.handleChange,type:"text",class:"form-control",placeholder:" ",required:!0,style:{color:"#390969"}}),Object(_.jsx)("span",{className:"Form__span",children:"First Name"})]}),Object(_.jsxs)("div",{className:"form-group col-md-3 pl-0",children:[Object(_.jsx)("input",{id:"middleName",name:"middleName",onChange:this.handleChange,type:"text",class:"form-control",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z_ ]{1,32}",placeholder:" ",required:!0}),Object(_.jsx)("span",{className:"Form__span",children:"Middle Name"})]}),Object(_.jsxs)("div",{className:"form-group col-md-3 pl-0",children:[Object(_.jsx)("input",{name:"sirname",id:"sirname",onChange:this.handleChange,type:"text",class:"form-control",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z_ ]{1,32}",placeholder:" ",required:!0}),Object(_.jsx)("span",{className:"Form__span",children:"Last Name"})]}),Object(_.jsxs)("div",{className:"form-group col-md-3 pl-0",children:[Object(_.jsx)("input",{id:"contactNo",name:"contactNo",onChange:this.handleChange,pattern:"[1-9]{1}[0-9]{9}",type:"tel",class:"form-control",placeholder:" ",required:!0}),Object(_.jsx)("span",{className:"Form__span",children:"Mobile Number"})]})]}),Object(_.jsx)("div",{className:"row form__y4",children:Object(_.jsxs)("div",{className:"form-group col-md-12 pl-0",children:[Object(_.jsx)("textarea",{id:"address",name:"address",onChange:this.handleChange,class:"form-control",placeholder:" ",rows:"2",required:!0}),Object(_.jsx)("span",{className:"Form__span",children:"Address"})]})}),Object(_.jsxs)("div",{className:"row form__y5",children:[Object(_.jsxs)("div",{className:"form-group col-md-3 pl-0",children:[Object(_.jsx)("input",{id:"state",name:"state",onChange:this.handleChange,type:"text",class:"form-control ",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z_ ]{1,32}",placeholder:" ",required:!0}),Object(_.jsx)("span",{className:"Form__span",children:"State"})]}),Object(_.jsxs)("div",{className:"form-group col-md-3 pl-0",children:[Object(_.jsx)("input",{id:"district",name:"district",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z_ ]{1,32}",onChange:this.handleChange,type:"text",class:"form-control",required:!0,placeholder:" "}),Object(_.jsx)("span",{className:"Form__span",children:"District"})]}),Object(_.jsxs)("div",{className:"form-group col-md-3 pl-0",children:[Object(_.jsx)("input",{id:"village",name:"village",onChange:this.handleChange,type:"text",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z_ ]{1,32}",class:"form-control",required:!0,placeholder:" "}),Object(_.jsx)("span",{className:"Form__span",children:"City/Gaon/Village"})]}),Object(_.jsxs)("div",{className:"form-group col-md-3 pl-0",children:[Object(_.jsx)("input",{id:"natureOfService",name:"natureOfService",onChange:this.handleChange,type:"text",title:"*ENTER CHARACTER VALUES ONLY",pattern:"[A-Za-z_ ]{1,32}",class:"form-control",required:!0,placeholder:" "}),Object(_.jsx)("span",{className:"Form__span",children:"Nature Of Service"})]}),Object(_.jsxs)("div",{className:"form-group col-md-3 pl-0",children:[Object(_.jsx)("button",{className:"btn upload_button",type:"button",onClick:this.handleClick,children:"Upload Image"}),Object(_.jsx)("input",{type:"file",required:!0,ref:this.hiddenFileInput,id:"fileButton",onChange:this.handleUpload,style:{display:"none"}}),null!=this.state.fileUploadState&&Object(_.jsx)("p",{children:this.state.fileName})]})]}),Object(_.jsx)("div",{className:"row form__y7 d-flex justify-content-center",children:Object(_.jsxs)("button",{class:"button",className:"Form_submit",style:{alignSelf:"center"},children:[" ","Submit Form"]})}),Object(_.jsx)(h.a,{ref:function(t){return e.recaptcha=t},sitekey:"6LcS8U0aAAAAAGaOUd9LRVKHnhDBzShPHgZ8gErf",onResolved:this.onResolved})]})]})})}}]),a}(n.a.Component);var A=function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(C,{}),Object(_.jsx)("div",{className:"footer_upcloud",children:"Powered by Upcloud Technology Pvt. Ltd."})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,232)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))};c.a.render(Object(_.jsx)(A,{}),document.getElementById("root")),y()},98:function(e,t,a){},99:function(e,t,a){}},[[231,1,2]]]);
//# sourceMappingURL=main.949980db.chunk.js.map