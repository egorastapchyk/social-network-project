"use strict";(self.webpackChunksocial_network_project=self.webpackChunksocial_network_project||[]).push([[900],{9900:function(s,t,e){e.r(t),e.d(t,{default:function(){return B}});var n=e(1413),r=e(2791),i=e(7375),a=e(7781),o=e(6871),u=e(6070),c=e(1548),l=e(184),d=e(2982),f="MyPosts_postsBlock__lB-pf",p="MyPosts_posts__GSiZ2",x="Post_item__Yu4oG",j=function(s){return(0,l.jsxs)("div",{className:x,children:[(0,l.jsx)("img",{src:s.avatar}),s.message,(0,l.jsx)("div",{children:(0,l.jsx)("span",{children:s.likesCount})})]})},h=e(6139),v=e(704),m=e(5304),g=e(9086),_=(0,m.D)(100),k=r.memo((function(s){var t=(0,d.Z)(s.postsData).reverse().map((function(s,t){return(0,l.jsx)(j,{avatar:s.imgUrl,message:s.message,likesCount:s.likesCount,id:s.id},t)}));return(0,l.jsxs)("div",{className:f,children:[(0,l.jsx)("h3",{children:"My posts"}),(0,l.jsx)(P,{onSubmit:function(t){s.addPost(t.newPostText)}}),(0,l.jsx)("div",{className:p,children:t})]})})),P=(0,v.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,l.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,l.jsx)("div",{children:(0,l.jsx)(h.Z,{name:"newPostText",component:g.gx,placeholder:"Enter your message",validate:[m.C,_]})}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{children:"ADD POST"})})]})})),S=k,b=(0,i.$j)((function(s){return{postsData:s.profilePage.postsData,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(t){s((0,u.Wl)(t))}}}))(S),U=e(885),C="ProfileInfo_descriptionBlock__XBXuJ",Z="ProfileInfo_descriptionUser__8mP6K",w="ProfileInfo_checkMark__SMrC-",D=e(9237),M=e(7613),N=function(s){var t=(0,r.useState)(!1),e=(0,U.Z)(t,2),n=e[0],i=e[1],a=(0,r.useState)(s.status),o=(0,U.Z)(a,2),u=o[0],c=o[1];(0,r.useEffect)((function(){c(s.status)}),[s.status]);return(0,l.jsxs)("div",{children:[!n&&(0,l.jsx)("div",{children:(0,l.jsx)("span",{onDoubleClick:function(){i(!0)},children:s.status||"---"})}),n&&(0,l.jsx)("div",{children:(0,l.jsx)("input",{onChange:function(s){c(s.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),s.updateUserStatus(u)},value:u})})]})},A=e(1628),I=function(s){var t=s.profile,e=s.status,n=s.updateUserStatus;if(!t)return(0,l.jsx)(A.Z,{});var r=Object.entries(t.contacts);return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:C,children:[(0,l.jsx)("img",{src:t.photos.large}),(0,l.jsx)(N,{status:e,updateUserStatus:n}),(0,l.jsxs)("div",{className:Z,children:[(0,l.jsx)("span",{children:t.fullName}),(0,l.jsxs)("div",{children:[t.lookingForAJob,(0,l.jsx)("img",{src:0!=t.lookingForAJob?D:M,className:w})]}),(0,l.jsx)("span",{children:t.lookingForAJobDescription}),(0,l.jsx)("span",{children:t.aboutMe}),r.map((function(s,t){var e=(0,U.Z)(s,2),n=e[0],r=e[1];return(0,l.jsx)("span",{children:r?"".concat(n,":").concat(r):null},t)}))]})]})})},T=function(s){return(0,l.jsxs)("div",{children:[(0,l.jsx)(I,{profile:s.profile,status:s.status,updateUserStatus:s.updateUserStatus}),(0,l.jsx)(b,{})]})},B=(0,a.qC)((0,i.$j)((function(s){var t=s.profilePage,e=t.profile,n=t.status,r=s.auth;return{profile:e,status:n,authorizedUserId:r.userId,isAuth:r.isAuth}}),{getUserProfile:u.et,getUserStatus:u.Tq,updateUserStatus:u.OL}),(function(s){return function(t){return(0,l.jsx)(s,(0,n.Z)((0,n.Z)({},t),{},{navigate:(0,o.s0)()}))}}),c.D)((function(s){var t=(0,o.UO)().userId,e=void 0===t?s.authorizedUserId:t;return e||s.navigate("/login"),(0,r.useEffect)((function(){s.getUserProfile(e),s.getUserStatus(e)}),[]),(0,l.jsx)("div",{children:(0,l.jsx)(T,(0,n.Z)((0,n.Z)({},s),{},{profile:s.profile,status:s.status,updateStatus:s.updateStatus}))})}))},7613:function(s,t,e){s.exports=e.p+"static/media/falseCheckMark.10a4e3cc13b56e403851.png"},9237:function(s,t,e){s.exports=e.p+"static/media/trueCheckMark.81f98c307602bfcbf822.png"}}]);
//# sourceMappingURL=900.00522549.chunk.js.map