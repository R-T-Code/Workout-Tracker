(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports={heading:"Heading1_heading__3V2nj"}},133:function(e,t,a){e.exports={content:"ContentWrapper_content__Ce21L"}},134:function(e,t,a){e.exports={button:"Button1_button__2qvbi"}},137:function(e,t,a){e.exports=a.p+"static/media/logo.1c8f1005.svg"},138:function(e,t,a){e.exports=a.p+"static/media/history_logo.0faa3a25.svg"},143:function(e,t,a){e.exports=a(293)},171:function(e,t){},173:function(e,t){},210:function(e,t){},211:function(e,t){},24:function(e,t,a){e.exports={current:"CurrentTemplate_current__3TFFQ",form:"CurrentTemplate_form__1Vqa4",input:"CurrentTemplate_input__2g4FS",label:"CurrentTemplate_label__1OEyO",exc:"CurrentTemplate_exc__2s20M",create:"CurrentTemplate_create__1ijA0",name:"CurrentTemplate_name__2-4tF",delete:"CurrentTemplate_delete__nv-_r",btn_update:"CurrentTemplate_btn_update__3c31R",btn_delete:"CurrentTemplate_btn_delete__EclWj"}},25:function(e,t,a){e.exports={current:"CurrentWorkout_current__rD6hr",form:"CurrentWorkout_form__C_hvx",exc:"CurrentWorkout_exc__2A2_T",exercise:"CurrentWorkout_exercise__wUra3",exercise_name:"CurrentWorkout_exercise_name__NFAFh",input_container:"CurrentWorkout_input_container__1FIOU",input:"CurrentWorkout_input__22Hee",label:"CurrentWorkout_label__3f4AG",add:"CurrentWorkout_add__3TDun",btnFinish:"CurrentWorkout_btnFinish__2qvtG"}},291:function(e,t,a){},293:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"onInputChange",function(){return J}),a.d(n,"onLogin",function(){return X}),a.d(n,"logout",function(){return K});var r={};a.r(r),a.d(r,"onInputChange",function(){return le}),a.d(r,"onRegister",function(){return ie});var o={};a.r(o),a.d(o,"createTemplate",function(){return _e}),a.d(o,"deleteTemplate",function(){return ve}),a.d(o,"addExc",function(){return be}),a.d(o,"deleteExc",function(){return we}),a.d(o,"fetchTemplates",function(){return xe}),a.d(o,"fetchOneTemplate",function(){return ke}),a.d(o,"saveTemplate",function(){return ye}),a.d(o,"updateTemplate",function(){return Oe});var c={};a.r(c),a.d(c,"startWorkout",function(){return Ne}),a.d(c,"addSet",function(){return Ce}),a.d(c,"deleteSet",function(){return je}),a.d(c,"finishWorkout",function(){return Se}),a.d(c,"loadWorkoutName",function(){return Te});var s={};a.r(s),a.d(s,"createExc",function(){return $e}),a.d(s,"loadExercises",function(){return et});var l=a(0),i=a.n(l),u=a(130),m=a.n(u),p=a(15),d=a(16),h=a(18),f=a(17),g=a(19),E=a(4),_=a.n(E),v=a(12),b="REGISTRATION_INPUT_CHANGE",w="REGISTRATION_FORM_SUCCESS",x="REGISTRATION_FORM_ERROR",k="LOGIN_INPUT_CHANGE",y="LOGIN_FORM_SUCCESS",O="LOGIN_FORM_ERROR",N="LOGOUT",C="TEMPLATES_FETCH",j="TEMPLATES_ERROR",S="TEMPLATES_CREATE",T="TEMPLATES_DELETE",I="TEMPLATES_ADD_EXERCISE",W="TEMPLATES_DELETE_EXERCISE",R="TEMPLATES_SAVED",A="EXERCISES_CREATE",F="LOAD_EXERCISES",L="START_WORKOUT",M="ADD_SET",D="DELETE_SET",H="FINISH_WORKOUT",U="WORKOUT_ERROR",Y="LOAD_WORKOUT_NAME",G=a(6),P=a.n(G),B=a(57),q=a.n(B);function J(e){var t=e.target,a=t.name,n=t.value;return{type:k,name:a,value:n}}function X(e,t,a){e.preventDefault();var n={};return t.email||(n.email="Enter Your email"),t.password||(n.password="Enter Your password"),0!==Object.keys(n).length?{type:O,errors:n}:function(){var e=Object(v.a)(_.a.mark(function e(r){var o;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.post("/api/auth/login",t);case 3:o=e.sent,localStorage.setItem("auth-token",o.data),P.a.defaults.headers.common.Authorization="Bearer "+o.data,r({type:y,data:q.a.decode(o.data)}),a.push("/"),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response),"user not found"===e.t0.response.data&&(n.email="User not found"),"incorrect password"===e.t0.response.data&&(n.password="Incorrect password"),r({type:O,errors:n});case 16:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()}function K(e){return localStorage.removeItem("auth"),delete P.a.defaults.headers.common.Authorization,e.push("/login"),{type:N}}var V=a(10),z=a(61),Z=a.n(z),Q=a(132),$=a.n(Q),ee=function(e){return i.a.createElement("h1",{className:[$.a.heading,e.className].join(" ")},e.children)},te=a(133),ae=a.n(te),ne=function(e){return i.a.createElement("div",{className:[ae.a.content,e.className].join(" ")},e.children)},re=a(134),oe=a.n(re),ce=function(e){return i.a.createElement("button",{className:[oe.a.button,e.className].join(" ")},e.children)},se=Object(V.b)(function(e){return{login:e.login,auth:e.auth}},n)(function(e){var t=e.login.errors;return i.a.createElement("div",{className:Z.a.login},i.a.createElement(ee,null,"Login"),i.a.createElement(ne,null,i.a.createElement("form",{onSubmit:function(t){return e.onLogin(t,e.login,e.history)}},i.a.createElement("div",{className:Z.a.field},i.a.createElement("label",{htmlFor:"email"},t.email?i.a.createElement("span",null,t.email):"Email"),i.a.createElement("input",{type:"text",id:"email",autoComplete:"new-email",value:e.login.email,onChange:e.onInputChange,name:"email"})),i.a.createElement("div",{className:Z.a.field},i.a.createElement("label",{htmlFor:"password"},t.password?i.a.createElement("span",null,t.password):"Password"),i.a.createElement("input",{type:"password",id:"password",autoComplete:"new-password",value:e.login.password,onChange:e.onInputChange,name:"password"})),i.a.createElement(ce,null,"Login"))))});function le(e){return{type:b,name:e.target.name,value:e.target.value}}function ie(e,t,a){e.preventDefault();var n={};return t.name||(n.name="Enter user name"),t.email||(n.email="Enter user email"),t.password||(n.password="Enter user password"),0!==Object.keys(n).length?{type:x,errors:n}:function(){var e=Object(v.a)(_.a.mark(function e(r){var o;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.post("/api/auth/register",t);case 3:o=e.sent,localStorage.setItem("auth-token",o.data),P.a.defaults.headers.common.Authorization="Bearer "+o.data,r({type:w,data:t}),a.push("/"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response),"that user exists"===e.t0.response.data&&(n.email="That user exists"),r({type:x,errors:n});case 15:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()}var ue=a(47),me=a.n(ue),pe=Object(V.b)(function(e){return{registration:e.registration}},r)(function(e){var t=e.registration.errors;return i.a.createElement("div",{className:me.a.register},i.a.createElement(ee,null,"Registration"),i.a.createElement(ne,null,i.a.createElement("form",{onSubmit:function(t){return e.onRegister(t,e.registration,e.history)}},i.a.createElement("div",{className:me.a.field},i.a.createElement("label",{htmlFor:"name"},t.name?i.a.createElement("span",null,t.name):"Name"),i.a.createElement("input",{type:"text",id:"name",autoComplete:"new-name",value:e.registration.name,onChange:e.onInputChange,name:"name"})),i.a.createElement("div",{className:me.a.field},i.a.createElement("label",{htmlFor:"email"},t.email?i.a.createElement("span",null,t.email):"Email"),i.a.createElement("input",{type:"text",id:"email",autoComplete:"new-email",value:e.registration.email,onChange:e.onInputChange,name:"email"})),i.a.createElement("div",{className:me.a.field},i.a.createElement("label",{htmlFor:"password"},t.password?i.a.createElement("span",null,t.password):"Password"),i.a.createElement("input",{type:"password",id:"password",autoComplete:"new-password",value:e.registration.password,onChange:e.onInputChange,name:"password"})),i.a.createElement(ce,null,"Register"))))}),de=a(295),he=a(5),fe=a(294),ge=a(38),Ee=a.n(ge);function _e(e){return{type:S,name:e}}function ve(e,t){return localStorage.getItem("workout")===e&&(localStorage.removeItem("exercises"),localStorage.removeItem("workout")),function(){var a=Object(v.a)(_.a.mark(function a(n){return _.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,P.a.delete("/api/templates/"+e);case 3:n({type:T,name:e}),t.push("/"),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0.response),n({type:j});case 11:case"end":return a.stop()}},a,this,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()}function be(e,t){return{type:I,workout:e,exc:t}}function we(e,t){return{type:W,workout:e,exc:t}}function xe(){return function(){var e=Object(v.a)(_.a.mark(function e(t){var a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/api/templates");case 3:a=e.sent,t({type:C,templates:a.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response),t({type:j});case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()}function ke(e){return function(){var t=Object(v.a)(_.a.mark(function t(a){var n;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.a.get("/api/templates/"+e);case 3:n=t.sent,a({type:C,templates:n.data}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.response),a({type:j});case 11:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()}function ye(e,t){return function(){var a=Object(v.a)(_.a.mark(function a(n){return _.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,P.a.post("/api/templates",e);case 3:n({type:R}),t.push("/"),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0.response),n({type:j});case 11:case"end":return a.stop()}},a,this,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()}function Oe(e,t){var a=JSON.parse(localStorage.getItem("exercises"));if(a){var n=[];e.exercises.forEach(function(e,t){var r=[];a[t]&&(r=a[t].sets),n.push(Object(he.a)({},e,{sets:r}))}),localStorage.setItem("exercises",JSON.stringify(n))}return function(){var a=Object(v.a)(_.a.mark(function a(n){return _.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,P.a.put("/api/templates",e);case 3:n({type:R}),t.push("/"),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0.response),n({type:j});case 11:case"end":return a.stop()}},a,this,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()}function Ne(e){return{type:L,template:e}}function Ce(e,t,a){return{type:M,name:e,weight:t,reps:a}}function je(e,t){return{type:D,excIndex:e,setIndex:t}}function Se(e,t,a){return function(){var n=Object(v.a)(_.a.mark(function n(r){return _.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.a.post("/api/workouts",{name:e,exercises:t,duration:123});case 3:a.push("/"),r({type:H,message:"workout finished!"}),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.response),r({type:U});case 11:case"end":return n.stop()}},n,this,[[0,7]])}));return function(e){return n.apply(this,arguments)}}()}function Te(e){return{type:Y,name:e}}var Ie=a(79),We=a.n(Ie),Re=function(e){return i.a.createElement("div",{className:We.a.welcome},i.a.createElement("h1",{className:We.a.heading},"Welcome to LifTrack"),i.a.createElement("p",null,"Please start by creating Your first workout."))},Ae=a(62),Fe=a.n(Ae),Le=function(e){return e.show?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{onClick:e.hideModal,className:Fe.a.backdrop}),i.a.createElement("div",{className:Fe.a.modal},i.a.createElement("h2",null,e.children),i.a.createElement("div",{onClick:e.hideModal,className:Fe.a.button},"Ok"))):null},Me=Object(he.a)({},o,c),De=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={warning:!1},a.toggleWarning=function(){a.setState({warning:!a.state.warning})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTemplates()}},{key:"render",value:function(){var e=this,t=this.props,a=0===t.templates.list.length&&i.a.createElement(Re,null),n=t.templates.list.map(function(a){return i.a.createElement("div",{key:a.name,className:Ee.a.template},i.a.createElement("div",{onClick:function(){var n=localStorage.getItem("workout");n&&a.name!==n?e.toggleWarning():(t.history.push("/workout/"+a.name),t.startWorkout(a))},className:Ee.a.name},a.name),i.a.createElement(fe.a,{to:"/template/"+a.name+"/edit",className:Ee.a.edit},"Edit"))});return i.a.createElement("div",{className:Ee.a.templates},i.a.createElement(ne,null,i.a.createElement(ee,null,"Choose Your Workout"),n,i.a.createElement(fe.a,{to:"/new-template",className:Ee.a.create},i.a.createElement(ce,null,"Create New Workout")),i.a.createElement(Le,{show:this.state.warning,hideModal:this.toggleWarning},"You must complete your ",localStorage.getItem("workout")," workout")),a)}}]),t}(l.Component),He=Object(V.b)(function(e){return{templates:e.templates}},Me)(De),Ue=a(32),Ye=a.n(Ue),Ge=function(e){return e.error?i.a.createElement("div",null,e.error):null},Pe=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",error:""},a.onInputChange=function(e){return a.setState({name:e.target.value})},a.onFormSubmit=function(e){if(e.preventDefault(),a.state.name){if(a.props.templates.list.filter(function(e){return e.name.toLowerCase()===a.state.name.toLowerCase()}).length>0)return a.setState({error:"This workout already exsists"});var t=a.state.name.replace(/\//g,"-");a.props.createTemplate(t),a.props.history.push("/template/"+t+"/create")}},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:Ye.a.new},i.a.createElement(ee,null,"Name your workout"),i.a.createElement("form",{onSubmit:this.onFormSubmit,className:Ye.a.form},i.a.createElement("label",{className:Ye.a.label,htmlFor:"workout-name"},"Workout Name"),i.a.createElement("input",{id:"workout-name",value:this.state.name,onChange:this.onInputChange,className:Ye.a.input,type:"text",name:"name",autoComplete:"new-name"}),i.a.createElement(ce,{className:Ye.a.button},"Create"),i.a.createElement(Ge,{error:this.state.error})),i.a.createElement("small",{className:Ye.a.small},"Ex.: Chest Day, Bicep/Tricep, Legs"))}}]),t}(l.Component),Be=Object(V.b)(function(e){return{templates:e.templates}},o)(Pe),qe=a(141),Je=a(24),Xe=a.n(Je),Ke=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},a.onInputChange=function(e){return a.setState({name:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.state.name&&(a.props.addExc(a.props.match.params.template,a.state.name),a.setState({name:""}))},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.templates.list.length>0||this.props.fetchOneTemplate(this.props.match.params.template)}},{key:"render",value:function(){var e=this,t=this.props.templates.list.filter(function(t){return t.name===e.props.match.params.template}),a=Object(qe.a)(t,1)[0],n=a&&a.exercises.map(function(t,n){return i.a.createElement("div",{key:n,className:Xe.a.exc},i.a.createElement("h3",{className:Xe.a.name},t.name),i.a.createElement("button",{className:Xe.a.delete,onClick:function(){return e.props.deleteExc(a.name,t.name)}},"X"))}),r=i.a.createElement(l.Fragment,null,i.a.createElement("button",{className:Xe.a.btn_update,onClick:function(){return e.props.updateTemplate(a,e.props.history)}},"Update"),i.a.createElement("button",{className:Xe.a.btn_delete,onClick:function(){return e.props.deleteTemplate(a.name,e.props.history)}},"Delete")),o=i.a.createElement(l.Fragment,null,i.a.createElement("button",{className:Xe.a.create,onClick:function(){return e.props.saveTemplate(a,e.props.history)}},"Create"));return i.a.createElement(ne,null,i.a.createElement(ee,null,"Add exercises to ",this.props.match.params.template),i.a.createElement("form",{onSubmit:this.onFormSubmit,className:Xe.a.form},i.a.createElement("label",{htmlFor:"exercise-name",className:Xe.a.label},"Exercise Name"),i.a.createElement("input",{id:"exercise-name",placeholder:"Ex. Bench Press, Bicep Curl, Squats",value:this.state.name,onChange:this.onInputChange,className:Xe.a.input,type:"text",name:"name",autoComplete:"new-name"}),i.a.createElement(ce,{className:Xe.a.button},"Add")),0===this.props.templates.list.length?i.a.createElement("div",null,"Loading"):n,"edit"===this.props.match.params.action?r:o)}}]),t}(l.Component),Ve=Object(V.b)(function(e){return{templates:e.templates}},o)(Ke),ze=a(30),Ze=a(25),Qe=a.n(Ze);function $e(e,t){return{type:A,name:e,workout:t}}function et(e){return{type:F,data:e}}var tt=a(135),at=a.n(tt),nt=a(48),rt=a.n(nt),ot=function(e){return e.show?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{onClick:e.cancel,className:rt.a.backdrop}),i.a.createElement("div",{className:rt.a.modal},i.a.createElement("h2",null,e.children),i.a.createElement("div",{onClick:e.confirm,className:rt.a.yes},"Yes"),i.a.createElement("div",{onClick:e.cancel,className:rt.a.no},"No"))):null},ct=Object(he.a)({},o,c,s),st=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={exc:[],mood:"",confirmation:!1},a.onInputChange=function(e,t){var n=Object(ze.a)(a.state.exc);n[t][e.target.name]=e.target.value,a.setState({exc:n})},a.clearFields=function(e){var t=a.state.exc.map(function(t,a){return e===a?{weight:"",reps:"",height:"auto"}:t});a.setState({exc:t})},a.toggleSets=function(e){var t=a.state.exc.map(function(t,a){return e===a?Object(he.a)({},t,{height:0===t.height?"auto":0}):t});a.setState({exc:t})},a.confirm=function(){return a.setState({confirmation:!0})},a.cancel=function(){return a.setState({confirmation:!1})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("exercises"),t=localStorage.getItem("workout");t===this.props.match.params.name&&e&&(e=JSON.parse(e).map(function(e){return Object(he.a)({},e,{weight:"",reps:""})}),this.props.loadWorkoutName(t),this.props.loadExercises(e)),e||(0===this.props.exercises.length&&this.props.history.push("/"),e=this.props.exercises.map(function(){return{weight:"",reps:"",height:0}})),this.setState({exc:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.exercises.map(function(t,a){var n=e.state.exc[a]?e.state.exc[a].weight:"",r=e.state.exc[a]?e.state.exc[a].reps:"",o=e.state.exc[a]?e.state.exc[a].height:0,c=t.sets.map(function(t,n){return i.a.createElement("li",{key:n},t.weight,"kg / ",t.reps,"x / ",i.a.createElement("span",{onClick:function(){return e.props.deleteSet(a,n)}},"del"))});return i.a.createElement(l.Fragment,{key:a},i.a.createElement("div",{className:Qe.a.exercise},i.a.createElement("h3",{className:Qe.a.exercise_name,onClick:function(){return e.toggleSets(a)}},t.name),i.a.createElement(at.a,{duration:300,height:o},i.a.createElement("nav",null,i.a.createElement("div",{className:Qe.a.input_container},i.a.createElement("label",{className:Qe.a.label,htmlFor:"weight"},"Weight"),i.a.createElement("input",{id:"weight",className:Qe.a.input,name:"weight",type:"text",onChange:function(t){return e.onInputChange(t,a)},value:n})),i.a.createElement("div",{className:Qe.a.input_container},i.a.createElement("label",{className:Qe.a.label,htmlFor:"reps"},"Repetitions"),i.a.createElement("input",{className:Qe.a.input,id:"reps",name:"reps",type:"text",onChange:function(t){return e.onInputChange(t,a)},value:r})),i.a.createElement("button",{onClick:function(){e.props.addSet(t.name,n,r),e.clearFields(a)},className:Qe.a.add},"Add")),i.a.createElement("ul",null,c))))});return i.a.createElement(ne,null,i.a.createElement(ee,null,this.props.match.params.name),a,i.a.createElement("button",{onClick:this.confirm,className:Qe.a.btnFinish},"End Workout"),i.a.createElement(ot,{confirm:function(){t.finishWorkout(t.currentWorkout.name,t.exercises,t.history),localStorage.removeItem("exercises"),localStorage.removeItem("workout")},cancel:this.cancel,show:this.state.confirmation},"Finish Workout?"))}}]),t}(l.Component),lt=Object(V.b)(function(e){return{currentWorkout:e.currentWorkout,exercises:e.exercises}},ct)(st),it=a(136),ut=a.n(it),mt=a(39),pt=a.n(mt),dt=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={workouts:null,edit:!1},a.componentDidMount=Object(v.a)(_.a.mark(function e(){var t;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/api/workouts");case 3:t=e.sent,a.setState({workouts:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}},e,this,[[0,7]])})),a.toggleEdit=function(){return a.setState({edit:!a.state.edit})},a.deleteWorkout=function(){var e=Object(v.a)(_.a.mark(function e(t){var n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.delete("/api/workouts/"+t);case 3:n=a.state.workouts.filter(function(e){return e._id!==t}),a.setState({workouts:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state.workouts&&this.state.workouts.map(function(t,a){return i.a.createElement("div",{className:pt.a.entry,key:a},i.a.createElement(fe.a,{to:"/history/workout/"+t._id}," ",t.name),i.a.createElement("span",{className:pt.a.date}," ",ut()(t.createdAt).format("YYYY MM DD")),e.state.edit&&i.a.createElement("small",{className:pt.a.close,onClick:function(){return e.deleteWorkout(t._id)}},"x"))});return i.a.createElement(ne,null,i.a.createElement("h1",{className:pt.a.heading},"History ",i.a.createElement("span",{onClick:this.toggleEdit,className:pt.a.edit},"Edit")),t)}}]),t}(l.Component),ht=a(49),ft=a.n(ht),gt=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={workout:null},a.componentDidMount=Object(v.a)(_.a.mark(function e(){var t;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/api/workouts/"+a.props.match.params.id);case 3:t=e.sent,a.setState({workout:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}},e,this,[[0,7]])})),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state;if(!this.state.workout)return i.a.createElement("div",null,"...loading");var t=e.workout.exercises.map(function(e,t){var a=e.sets.map(function(e,t){return i.a.createElement("li",{key:t},e.weight," kg - ",e.reps,"x")});return i.a.createElement("div",{key:t,className:ft.a.entry},i.a.createElement("p",{className:ft.a.excName},e.name),i.a.createElement("ol",{type:"I",className:ft.a.list},a))});return i.a.createElement(ne,null,i.a.createElement("h1",{className:ft.a.heading},e.workout.name),t)}}]),t}(l.Component),Et=function(e){return i.a.createElement("div",null,i.a.createElement(de.a,{path:"/",exact:!0,component:He}),i.a.createElement(de.a,{path:"/new-template",exact:!0,component:Be}),i.a.createElement(de.a,{path:"/template/:template/:action",component:Ve}),i.a.createElement(de.a,{path:"/workout/:name",component:lt}),i.a.createElement(de.a,{path:"/history",exact:!0,component:dt}),i.a.createElement(de.a,{path:"/history/workout/:id",exact:!0,component:gt}))},_t=a(299),vt=a(33),bt=a.n(vt),wt=a(137),xt=a.n(wt),kt=a(138),yt=a.n(kt),Ot=Object(_t.a)(Object(V.b)(function(e){return{auth:e.auth}},n)(function(e){return i.a.createElement("header",{className:bt.a.header},i.a.createElement(fe.a,{to:"/"},i.a.createElement("img",{className:bt.a.logo,src:xt.a,alt:"logo"})),e.auth.name?i.a.createElement("div",{className:bt.a.box},i.a.createElement(fe.a,{to:"/history"},i.a.createElement("img",{src:yt.a,className:bt.a.history,alt:"history"})),i.a.createElement("p",{className:bt.a.name},"Give It Your Best! ",i.a.createElement("br",null)," ",e.auth.name),i.a.createElement("i",{onClick:function(){return e.logout(e.history)},className:"fas fa-sign-out-alt"})):i.a.createElement("div",{className:bt.a.box},i.a.createElement(fe.a,{to:"/login"},"Login"),i.a.createElement(fe.a,{to:"/register"},"Register")))})),Nt=a(297),Ct=a(298),jt=a(31),St=a(140),Tt=a(37),It={name:"",email:"",password:"",errors:{},loading:!1},Wt={email:"",password:"",loading:!1,errors:{}},Rt={loading:!1,error:!1,list:[]},At=Object(jt.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:case w:return t.data;case N:return localStorage.removeItem("auth-token"),{};default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(he.a)({},e,Object(Tt.a)({},t.name,t.value));case x:return Object(he.a)({},e,{errors:t.errors});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(he.a)({},e,Object(Tt.a)({},t.name,t.value));case O:return Object(he.a)({},e,{errors:t.errors});default:return e}},templates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(he.a)({},e,{list:[].concat(Object(ze.a)(e.list),[{name:t.name,exercises:[]}])});case T:var a=e.list.filter(function(e){return e.name!==t.name});return Object(he.a)({},e,{list:a});case I:var n=e.list.map(function(e){return e.name===t.workout?Object(he.a)({},e,{exercises:[].concat(Object(ze.a)(e.exercises),[{name:t.exc,sets:[]}])}):e});return Object(he.a)({},e,{list:n});case W:var r=e.list.map(function(e){if(e.name===t.workout){var a=e.exercises.filter(function(e){return e.name!==t.exc});return Object(he.a)({},e,{exercises:a})}return e});return Object(he.a)({},e,{list:r});case C:return Object(he.a)({},e,{list:t.templates});case N:return Rt;default:return e}},currentWorkout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{name:t.template.name};case M:return localStorage.setItem("workout",e.name),e;case Y:return{name:t.name};default:return e}},exercises:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return t.template.exercises;case F:return t.data;case M:var a=e.map(function(e){if(e.name!==t.name)return e;var a=t.weight,n=t.reps;return Object(he.a)({},e,{sets:[].concat(Object(ze.a)(e.sets),[{weight:a,reps:n}])})});return localStorage.setItem("exercises",JSON.stringify(a)),a;case D:var n=e.map(function(e,a){if(a===t.excIndex){var n=e.sets.filter(function(e,a){return a!==t.setIndex});return Object(he.a)({},e,{sets:n})}return e});return localStorage.setItem("exercises",JSON.stringify(n)),n;default:return e}}}),Ft=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||jt.d,Lt=Object(jt.e)(At,Ft(Object(jt.a)(St.a))),Mt=a(142),Dt=a(296),Ht=Object(V.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=Object(Mt.a)(e,["component"]);return i.a.createElement(de.a,Object.assign({},a,{render:function(e){return a.auth.email?i.a.createElement(t,e):i.a.createElement(Dt.a,{to:"/login"})}}))}),Ut=localStorage.getItem("auth-token");if(Ut){P.a.defaults.headers.common.Authorization="Bearer "+Ut;var Yt=q.a.decode(Ut);Lt.dispatch({type:y,data:Yt})}var Gt=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement(Nt.a,null,i.a.createElement("div",null,i.a.createElement(Ot,null),i.a.createElement(Ct.a,null,i.a.createElement(de.a,{path:"/login",component:se}),i.a.createElement(de.a,{path:"/register",component:pe}),i.a.createElement(Ht,{path:"/",component:Et}))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(291);m.a.render(i.a.createElement(V.a,{store:Lt},i.a.createElement(Gt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,a){e.exports={new:"NewTemplate_new__2Hwj6",form:"NewTemplate_form__gVKHZ",input:"NewTemplate_input__3-XKR",label:"NewTemplate_label__tGeEN"}},33:function(e,t,a){e.exports={header:"Header_header__3k2dk",box:"Header_box__2ZLs2",name:"Header_name__iO5Yj",history:"Header_history__2t5F2",logo:"Header_logo__3YpHc"}},38:function(e,t,a){e.exports={template:"Templates_template__NUpHG",name:"Templates_name__2wqAz",edit:"Templates_edit__2C6sj"}},39:function(e,t,a){e.exports={heading:"History_heading__1p7N6",entry:"History_entry__2L3_h",date:"History_date__2Qd-T",close:"History_close__2Y1Wv",edit:"History_edit__3JD7a",button:"History_button__nqv1C"}},47:function(e,t,a){e.exports={register:"Register_register__1hbnY",field:"Register_field__jnHlS"}},48:function(e,t,a){e.exports={backdrop:"ConfirmationModal_backdrop__iUhVE",modal:"ConfirmationModal_modal__qcgq4",yes:"ConfirmationModal_yes__3wZx-",no:"ConfirmationModal_no__2JGs2"}},49:function(e,t,a){e.exports={heading:"HistoryWorkout_heading__19hT3",entry:"HistoryWorkout_entry__1YSmG"}},61:function(e,t,a){e.exports={login:"Login_login__2rBjB",field:"Login_field__1N5Ek"}},62:function(e,t,a){e.exports={backdrop:"WarrningModal_backdrop__3KWvf",modal:"WarrningModal_modal__vYERT",button:"WarrningModal_button__3qz7V"}},79:function(e,t,a){e.exports={welcome:"Welcome_welcome__16Aeb",heading:"Welcome_heading__33U6l"}}},[[143,2,1]]]);
//# sourceMappingURL=main.2fe9509b.chunk.js.map