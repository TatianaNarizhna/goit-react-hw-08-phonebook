(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(38);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},105:function(e,t,a){e.exports={LoginContainer:"LoginView_LoginContainer__1S52O",form:"LoginView_form__9N1FQ",title:"LoginView_title__1C48l"}},114:function(e,t,a){"use strict";a.r(t);var n=a(102),r=a(101),o=a(0),i=a(8),l=a(16),s=a(105),c=a.n(s),m=a(2);t.default=function(){var e=Object(i.c)(),t=Object(o.useState)(""),a=Object(n.a)(t,2),s=a[0],u=a[1],b=Object(o.useState)(""),f=Object(n.a)(b,2),p=f[0],d=f[1],h=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"email":return u(n);case"password":return d(n);default:return}};return Object(m.jsxs)("div",{className:c.a.LoginContainer,children:[Object(m.jsx)("h2",{className:c.a.title,children:"Login page"}),Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(l.a.logIn({email:s,password:p})),u(""),d("")},className:c.a.form,autoComplete:"off",children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label"}),"Email",Object(m.jsx)("input",{type:"email",name:"email",value:s,className:"form-control",placeholder:"name@example.com",onChange:h})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{className:c.a.label}),"Password",Object(m.jsx)("input",{type:"password",name:"password",value:p,className:"form-control",placeholder:"more then 5 symbols",onChange:h})]}),Object(m.jsx)(r.a,{type:"submit",variant:"contained",color:"primary",children:"Enter"})]})]})}}}]);
//# sourceMappingURL=login-view.1696b160.chunk.js.map