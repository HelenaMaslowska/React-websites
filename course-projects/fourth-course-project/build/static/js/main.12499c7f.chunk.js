(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__1KeZi",modal:"ErrorModal_modal__1DbLj",header:"ErrorModal_header__cnmY9",content:"ErrorModal_content__3sUmR",actions:"ErrorModal_actions__3Kn-h"}},,,,,,,function(e,t,n){e.exports={style:"Card_style___Nic1"}},function(e,t,n){e.exports={buttons:"Button_buttons__13P2s",button:"Button_button__EKsqa"}},function(e,t,n){e.exports={input:"AddUser_input__lQCpZ"}},function(e,t,n){e.exports={users:"UsersList_users__18zHe"}},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(8),a=n.n(o),c=(n(21),n(13)),s=n(6),l=n(9),i=n.n(l),u=n(0),d=function(e){return Object(u.jsx)("div",{className:"".concat(i.a.style," ").concat(e.className),children:e.children})},j=n(10),m=n.n(j),b=function(e){return Object(u.jsx)("button",{className:" ".concat(m.a.buttons),type:e.type||"button",onClick:e.onClick,children:e.children})},h=n(4),O=n.n(h),x=n(2),f=n.n(x),p=function(e){return Object(u.jsx)("div",{className:f.a.backdrop,onClick:e.onConfirm})},g=function(e){return Object(u.jsxs)(d,{className:f.a.modal,children:[Object(u.jsx)("header",{className:f.a.header,children:Object(u.jsx)("h2",{children:e.title})}),Object(u.jsx)("div",{className:f.a.content,children:Object(u.jsx)("p",{children:e.message})}),Object(u.jsx)("footer",{className:f.a.actions,children:Object(u.jsx)(b,{onClick:e.onConfirm,children:"Okay"})})]})},y=function(e){return Object(u.jsxs)(r.Fragment,{children:[O.a.createPortal(Object(u.jsx)(p,{onConfirm:e.onConfirm}),document.getElementById("backdrop-root"))," ",O.a.createPortal(Object(u.jsx)(g,{title:e.title,message:e.message,onConfirm:e.onConfirm}),document.getElementById("overlay-root"))]})},_=n(11),v=n.n(_),k=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),o=Object(r.useRef)(),a=Object(r.useState)(),c=Object(s.a)(a,2),l=c[0],i=c[1];return Object(u.jsxs)(r.Fragment,{children:[l&&Object(u.jsx)(y,{title:l.title,message:l.message,onConfirm:function(){i(null)}}),Object(u.jsx)(d,{className:v.a.input,children:Object(u.jsxs)("form",{onSubmit:function(r){r.preventDefault();var a=t.current.value,c=o.current.value,s=n.current.value;0!==a.trim().length?0!==c.trim().length?0!==s.trim().length?+s<1?i({title:"You are too young to be here...",message:"Gotcha! So you have less than one year old?"}):(e.onAddUser(a,c,s),t.current.value="",n.current.value="",o.current.value=""):i({title:"How old are you?",message:"I think you don't want to show your age. But you need, please do that and I promise, I will never tell that to anybody."}):i({title:"Enter e-mail",message:"You will log in by your e-mail, so you need to enter here something."}):i({title:"Enter username",message:"I see you, Alex - the Noname O.O"})},children:[Object(u.jsx)("label",{htmlFor:"username",children:" Username "}),Object(u.jsx)("input",{id:"username",type:"text",ref:t}),Object(u.jsx)("label",{htmlFor:"email",children:" Mail "}),Object(u.jsx)("input",{id:"email",type:"mail",ref:o}),Object(u.jsx)("label",{htmlFor:"age",children:" Age "}),Object(u.jsx)("input",{id:"age",type:"number",ref:n}),Object(u.jsx)(b,{type:"submit",children:" Add "})]})})]})},C=n(12),N=n.n(C),E=function(e){return Object(u.jsx)(d,{className:N.a.users,children:Object(u.jsx)("ul",{children:e.users.map((function(e){return Object(u.jsxs)("li",{children:[e.name," ",(t=e,t.age>1?t.age+" years old":t.age+" year old")]},e.key);var t}))})})};var w=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(k,{onAddUser:function(e,t,n){o((function(r){return[].concat(Object(c.a)(r),[{key:Math.random().toString(),name:e,mail:t,age:n}])}))}}),Object(u.jsx)(E,{users:n})]})};a.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(w,{}))}],[[23,1,2]]]);
//# sourceMappingURL=main.12499c7f.chunk.js.map