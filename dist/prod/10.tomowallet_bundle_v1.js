(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{920:function(e,t,n){e.exports=n.p+"69f1aac0414a89e03b114438d4ed352c.png"},984:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(1),i=n.n(a),c=n(30),l=n(27),u=n(63),f=n(41),s=n(10),p=n.n(s),m=n(90),E=n.n(m),y=n(864),b=n(907),O=n(842),d=n(916),_=n(917),T=n(857),h=n(918),S=n(919),C=n(839),P=n(840),g=n(74),v=n(43),N=n(83),A=n(18),R="TOMOWALLET/CREATE_NEW_WALLET/ADD_WORD",w="TOMOWALLET/CREATE_NEW_WALLET/REMOVE_WORD",L="TOMOWALLET/CREATE_NEW_WALLET/RESET_STATE",I="TOMOWALLET/CREATE_NEW_WALLET/STORE_MNEMONIC",W="TOMOWALLET/CREATE_NEW_WALLET/UPDATE_ERRORS",M=1,j=2,V=3,k=4,K=n(5),F=n(353),U=n.n(F);function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=G(t).call(this,e))||"object"!==Y(r)&&"function"!=typeof r?x(o):r).handleRedirect=n.handleRedirect.bind(x(n)),n.handlePrepareMnemonic=n.handlePrepareMnemonic.bind(x(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"handleRedirect",value:function(e){this.props.history.push(e)}},{key:"handlePrepareMnemonic",value:function(){var e=this.props,t=e.storeMnemonic,n=e.rpcServer,o=e.setPrivateKey,r=e.setFormState;new Promise(function(e){var r=Object(b.generateMnemonic)();t(r),o(Object(A.u)(r,n)),e()}).then(function(){r(j)})}},{key:"render",value:function(){var e=this,t=this.props.intl.formatMessage;return r.a.createElement(O.a,null,r.a.createElement(d.a,null,r.a.createElement(g.n,null,t(K.d.WARNING_HEADER_TITLE)),r.a.createElement(_.a,null,"".concat(t(K.d.WARNING_HEADER_ALTERNATIVE_TEXT)," "),r.a.createElement(g.t,{role:"presentation",onClick:function(){return e.handleRedirect(K.e.IMPORT_WALLET)},className:"d-inline-block"},t(K.d.WARNING_HEADER_ALTERNATIVE_LINK)))),r.a.createElement(g.z,null,r.a.createElement(T.a,{src:U.a,alt:t(K.d.WARNING_IMAGE_ALT)})),r.a.createElement(h.a,null,r.a.createElement(g.o,null,t(K.d.WARNING_CONTENT_TITLE)),r.a.createElement(_.a,null,t(K.d.WARNING_CONTENT_DESCRIPTION)),r.a.createElement(_.a,null,r.a.createElement(g.s,null,t(K.d.WARNING_CONTENT_DESCRIPTION_DANGER)))),r.a.createElement(S.a,null,r.a.createElement(C.a,null,r.a.createElement(P.a,{size:6},r.a.createElement(g.h,{onClick:function(){return e.handleRedirect(K.e.LOGIN)}},t(K.d.COMMON_BUTTON_BACK))),r.a.createElement(P.a,{size:6},r.a.createElement(g.h,{btnYellow:!0,onClick:this.handlePrepareMnemonic},t(K.d.WARNING_BUTTON_NEXT_TO_RECOVERY_PHRASE))))))}}])&&D(n.prototype,a),i&&D(n,i),t}();B.propTypes={intl:i.a.object,history:i.a.object,rpcServer:i.a.object,setFormState:i.a.func,setPrivateKey:i.a.func,storeMnemonic:i.a.func},B.defaultProps={intl:{},history:{},rpcServer:{},setFormState:function(){},setPrivateKey:function(){},storeMnemonic:function(){}};var z=Object(c.d)(v.c,u.f,N.d)(B),J=n(862),X=n(244);function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var te=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=Z(t).call(this,e))||"object"!==Q(r)&&"function"!=typeof r?$(o):r).handleConvertMnemonic=n.handleConvertMnemonic.bind($(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"handleConvertMnemonic",value:function(){return this.props.mnemonic.split(" ")}},{key:"render",value:function(){var e=this.props,t=e.intl.formatMessage,n=e.setFormState,o=e.toggleConfirmationPopup,a=e.toggleKeyViewPopup,i=this.handleConvertMnemonic();return r.a.createElement(O.a,null,r.a.createElement(d.a,null,r.a.createElement(g.n,null,t(K.d.RECOVERY_PHRASE_TITLE))),r.a.createElement(h.a,null,r.a.createElement(g.o,null,t(K.d.RECOVERY_PHRASE_NOTIFICATION_TITLE)),r.a.createElement(_.a,null,t(K.d.RECOVERY_PHRASE_NOTIFICATION_DESCRIPTION)),r.a.createElement(X.a,{className:"mb-4 mt-4 box-border",mnemonic:i}),r.a.createElement(C.a,{noGutters:!0},r.a.createElement(P.a,null,r.a.createElement(g.w,{href:"#"},r.a.createElement(J.a,{icon:["far","save"],className:"mr-2"}),t(K.d.RECOVERY_PHRASE_BUTTON_SAVE))),r.a.createElement(P.a,{className:"text-right"},r.a.createElement(g.t,{role:"presentation",onClick:function(){return a(!0)}},t(K.d.RECOVERY_PHRASE_BUTTON_VIEW_PRIVATE_KEY),r.a.createElement(J.a,{icon:"arrow-right",className:"ml-2"}))))),r.a.createElement(S.a,null,r.a.createElement(C.a,null,r.a.createElement(P.a,{size:6},r.a.createElement(g.h,{onClick:function(){return n(M)}},t(K.d.COMMON_BUTTON_BACK))),r.a.createElement(P.a,{size:6},r.a.createElement(g.h,{btnYellow:!0,onClick:function(){return o(!0)}},t(K.d.RECOVERY_PHRASE_BUTTON_CONFIRMATION))))))}}])&&q(n.prototype,a),i&&q(n,i),t}();te.propTypes={intl:i.a.object,mnemonic:i.a.string,setFormState:i.a.func,toggleConfirmationPopup:i.a.func,toggleKeyViewPopup:i.a.func},te.defaultProps={intl:{},mnemonic:"",setFormState:function(){},toggleConfirmationPopup:function(){},toggleKeyViewPopup:function(){}};var ne=Object(v.c)(te),oe=n(845),re=n(846);function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var fe=function(e){var t=e.removeWord,n=e.wordList,o=e.wordIdx;return p()(n,[o],"")&&r.a.createElement("div",{role:"presentation",onClick:function(){return t(o)},className:"d-inline-block phrase-word"},r.a.createElement("span",{className:"pr-1"},p()(n,[o],"")),r.a.createElement(J.a,{icon:"times-circle"}))},se=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=ce(t).call(this,e))||"object"!==ae(r)&&"function"!=typeof r?le(o):r).state={shuffledMnemonic:[],wordNumber:12},n.handleShuffleMnemonic=n.handleShuffleMnemonic.bind(le(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"componentDidMount",value:function(){this.handleShuffleMnemonic()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.clearComparison;(0,e.updateErrors)([]),t()}},{key:"handleShuffleMnemonic",value:function(){var e=this.props.mnemonic;this.setState({shuffledMnemonic:Object(A.E)(p()(e,"origin","").split(" "))})}},{key:"render",value:function(){var e=this.props,t=e.addWord,n=e.errors,o=e.intl.formatMessage,a=e.mnemonic,i=e.removeWord,c=e.setFormState,l=e.verifyMnemonic,u=this.state,f=u.shuffledMnemonic,s=u.wordNumber;return r.a.createElement(O.a,null,r.a.createElement(d.a,null,r.a.createElement(g.n,null,o(K.d.VERIFICATION_TITLE)),r.a.createElement(_.a,null,o(K.d.VERIFICATION_DESCRIPTION))),r.a.createElement(h.a,null,r.a.createElement(oe.a,null,n.map(function(e,t){return r.a.createElement(re.a,{key:"error_".concat(t+1)},r.a.createElement(g.s,{key:"error_".concat(t+1)},"* ".concat(e)))})),r.a.createElement(X.a,{getCellProps:{wordList:p()(a,"compare",[]),removeWord:i},mnemonic:p()(a,"compare",[]),WordCell:fe}),r.a.createElement(C.a,{className:"mt-4"},f.map(function(e,n){return r.a.createElement(P.a,{key:"word_button_".concat(n+1),xs:6,md:4,className:"py-2"},r.a.createElement(g.f,{onClick:function(){return t(e)},disabled:p()(a,"compare",[]).includes(e)},e))}))),r.a.createElement(S.a,null,r.a.createElement(C.a,null,r.a.createElement(P.a,{size:6},r.a.createElement(g.h,{onClick:function(){return c(j)}},o(K.d.COMMON_BUTTON_BACK))),r.a.createElement(P.a,{size:6},r.a.createElement(g.h,{btnYellow:!0,onClick:l,disabled:p()(a,"compare",[]).length!==s},o(K.d.VERIFICATION_BUTTON_VERIFY))))))}}])&&ie(n.prototype,a),i&&ie(n,i),t}();se.propTypes={addWord:i.a.func,clearComparison:i.a.func,errors:i.a.arrayOf(i.a.string),intl:i.a.object,mnemonic:i.a.object,removeWord:i.a.func,setFormState:i.a.func,updateErrors:i.a.func,verifyMnemonic:i.a.func},se.defaultProps={addWord:function(){},clearComparison:function(){},errors:[],intl:{},mnemonic:{},removeWord:function(){},setFormState:function(){},updateErrors:function(){},verifyMnemonic:function(){}};var pe=Object(c.d)(v.c)(se);function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ee(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var de=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=ye(t).call(this,e))||"object"!==me(r)&&"function"!=typeof r?be(o):r).handleConfirmSuccess=n.handleConfirmSuccess.bind(be(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"handleConfirmSuccess",value:function(){var e=this.props,t=e.confirmSuccess,n=e.history;t(),n.push(K.e.MY_WALLET)}},{key:"render",value:function(){var e=this.props.intl.formatMessage;return r.a.createElement(g.e,{className:"text-center word-break"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("i",{className:"font-icon-checkmark-outline"})),r.a.createElement(g.x,null,e(K.d.SUCCESS_NOTIFICATION_CONTENT_TITLE))),r.a.createElement("div",{className:"my-4"},e(K.d.SUCCESS_NOTIFICATION_CONTENT_DESCRIPTION)),r.a.createElement(C.a,null,r.a.createElement(P.a,{xs:3}),r.a.createElement(P.a,{xs:6},r.a.createElement(g.h,{btnYellow:!0,onClick:this.handleConfirmSuccess},e(K.d.SUCCESS_NOTIFICATION_BUTTON_ACCESS_WALLET))),r.a.createElement(P.a,{xs:3})))}}])&&Ee(n.prototype,a),i&&Ee(n,i),t}();de.propTypes={confirmSuccess:i.a.func,history:i.a.object,intl:i.a.object},de.defaultProps={confirmSuccess:function(){},history:{},intl:{}};var _e=Object(c.d)(u.f,v.c)(de),Te=n(137),he=n(920),Se=n.n(he);function Ce(e){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ve(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ne(e,t){return(Ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ae=function(e){var t=e.formatMessage;return r.a.createElement("div",{className:"text-center"},r.a.createElement(g.d,null,r.a.createElement(T.a,{className:"w-80",src:Se.a,alt:t(K.d.RECOVERY_PHRASE_POPUP_CONFIRMATION_IMAGE_ALT)})),r.a.createElement("div",{className:"mt-3"},t(K.d.RECOVERY_PHRASE_POPUP_CONFIRMATION_CONTENT)))},Re=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=ge(t).call(this,e))||"object"!==Ce(r)&&"function"!=typeof r?ve(o):r).handleClosePopup=n.handleClosePopup.bind(ve(n)),n.handleNext=n.handleNext.bind(ve(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ne(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"handleClosePopup",value:function(){(0,this.props.togglePopup)(!1)}},{key:"handleNext",value:function(){var e=this.props,t=e.setFormState;(0,e.togglePopup)(!1),t(V)}},{key:"render",value:function(){var e=this.props,t=e.confirmation,n=e.intl.formatMessage;return r.a.createElement(Te.a,{isOpen:t.isOpen,toggle:this.handleClosePopup,title:n(K.d.RECOVERY_PHRASE_POPUP_CONFIRMATION_HEADER),Content:Ae,getContentProps:{formatMessage:n},button:{primary:{action:this.handleNext,btnYellow:!0,label:n(K.d.COMMON_BUTTON_NEXT)},secondary:{action:this.handleClosePopup,label:n(K.d.COMMON_BUTTON_BACK)}}})}}])&&Pe(n.prototype,a),i&&Pe(n,i),t}();Re.propTypes={confirmation:i.a.object,intl:i.a.object,setFormState:i.a.func,togglePopup:i.a.func},Re.defaultProps={confirmation:{},intl:{},setFormState:function(){},togglePopup:function(){}};var we=Object(v.c)(Re),Le=n(874),Ie=n.n(Le);function We(e){return(We="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Me(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ve(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ke(e,t){return(ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ke=function(e){var t=e.formatMessage,n=e.keyView,o=e.toggleKeyVisibile;return r.a.createElement("div",{className:"padding"},r.a.createElement(g.o,null,t(K.d.RECOVERY_PHRASE_POPUP_KEY_VIEW_CONTENT_TITLE)),r.a.createElement(_.a,null,t(K.d.RECOVERY_PHRASE_POPUP_KEY_VIEW_CONTENT_TEXT)),r.a.createElement(g.d,null,p()(n,"isPKVisible")?r.a.createElement(Ie.a,{value:p()(n,"key")}):r.a.createElement("div",{role:"presentation",onClick:function(){return o(!0)},className:"p-5 border rounded"},t(K.d.RECOVERY_PHRASE_POPUP_KEY_VIEW_CONTENT_QRCODE_ALT))),r.a.createElement("div",{className:"text-break mt-3"},p()(n,"key")))},Fe=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=je(t).call(this,e))||"object"!==We(r)&&"function"!=typeof r?Ve(o):r).handleClosePopup=n.handleClosePopup.bind(Ve(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ke(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"handleClosePopup",value:function(){var e=this.props,t=e.togglePopup,n=e.toggleKeyVisibile;t(!1),n(!1)}},{key:"render",value:function(){var e=this.props,t=e.intl.formatMessage,n=e.keyView,o=e.toggleKeyVisibile;return r.a.createElement(Te.a,{isOpen:p()(n,"isOpen",!1),toggle:this.handleClosePopup,title:t(K.d.RECOVERY_PHRASE_POPUP_KEY_VIEW_HEADER),Content:Ke,getContentProps:{formatMessage:t,keyView:n,toggleKeyVisibile:o},button:{primary:{btnYellow:!0,label:t(K.d.COMMON_BUTTON_SAVE)},secondary:{action:this.handleClosePopup,label:t(K.d.COMMON_BUTTON_BACK)}}})}}])&&Me(n.prototype,a),i&&Me(n,i),t}();Fe.propTypes={intl:i.a.object,keyView:i.a.object},Fe.defaultProps={intl:{},keyView:{}};var Ue=Object(v.c)(Fe),Ye=n(175),De=function(e){return p()(e,["walletCreation"],Object(Ye.a)({}))},Ge=Object(A.d)(De,function(e){return e.toJS().confirmation}),xe=Object(A.d)(De,function(e){return e.toJS().errors}),He=Object(A.d)(De,function(e){return e.toJS().formState}),Be=Object(A.d)(De,function(e){return e.toJS().keyView}),ze=Object(A.d)(De,function(e){return e.toJS().mnemonic}),Je=Object(Ye.a)({confirmation:{isOpen:!1},errors:[],formState:M,keyView:{isOpen:!1,key:"",isPKVisible:!1},mnemonic:{origin:"",compare:[]}}),Xe=n(42);function Qe(e){return(Qe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function qe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ze(e){return(Ze=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function et(e,t){return(et=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var tt=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=Ze(t).call(this,e))||"object"!==Qe(r)&&"function"!=typeof r?$e(o):r).state={storeData:{}},n.handleStoreWalletData=n.handleStoreWalletData.bind($e(n)),n.handleVerifyMnemonic=n.handleVerifyMnemonic.bind($e(n)),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&et(e,t)}(t,o["PureComponent"]),n=t,(a=[{key:"componentWillUnmount",value:function(){(0,this.props.onResetState)()}},{key:"handleStoreWalletData",value:function(){var e=this.props,t=e.onStoreWallet,n=e.updateWeb3,o=this.state.storeData;t(p()(o,"walletInfo")),n(p()(o,"web3")),Object(A.D)(p()(o,"web3Info"))}},{key:"handleVerifyMnemonic",value:function(){var e=this,t=this.props,n=t.intl.formatMessage,o=t.mnemonic,r=t.onClearComparison,a=t.onSetFormState,i=t.onUpdateErrors,c=t.rpcServer,l=t.toggleLoading,u=p()(o,"origin");if(E()(u,p()(o,"compare",[]).join(" "))){l(!0);var f=Object(A.i)(u,c);Object(A.o)(f).then(function(t){e.setState({storeData:{walletInfo:t,web3:f,web3Info:{loginType:K.b.LOGIN_TYPE.PRIVATE_KEY,recoveryPhrase:u,address:t.address}}})}).then(function(){l(!1),a(k)})}else l(!1),i([n(K.d.VERIFICATION_ERROR_VERIFY_FAILED)]),r()}},{key:"render",value:function(){var e=this.props,t=e.confirmation,n=e.errors,a=e.formState,i=e.intl.formatMessage,c=e.keyView,l=e.mnemonic,u=e.onAddWord,f=e.onClearComparison,s=e.onRemoveWord,m=e.onSetFormState,E=e.onSetPrivateKey,b=e.onStoreMnemonic,O=e.onToggleConfirmationPopup,d=e.onToggleKeyViewPopup,_=e.onToggleKeyVisible,T=e.onUpdateErrors;return r.a.createElement(o.Fragment,null,r.a.createElement(y.Helmet,null,r.a.createElement("title",null,i(K.d.CREATE_WALLET_TITLE))),r.a.createElement(g.i,null,a===M&&r.a.createElement(z,{setFormState:m,setPrivateKey:E,storeMnemonic:b})||a===j&&r.a.createElement(ne,{mnemonic:p()(l,"origin"),setFormState:m,toggleKeyViewPopup:d,toggleConfirmationPopup:O})||a===V&&r.a.createElement(pe,{addWord:u,clearComparison:f,errors:n,mnemonic:l,removeWord:s,setFormState:m,updateErrors:T,verifyMnemonic:this.handleVerifyMnemonic})||a===k&&r.a.createElement(_e,{confirmSuccess:this.handleStoreWalletData}),r.a.createElement(we,{confirmation:t,setFormState:m,togglePopup:O}),r.a.createElement(Ue,{keyView:c,toggleKeyVisibile:_,togglePopup:d})))}}])&&qe(n.prototype,a),i&&qe(n,i),t}();tt.propTypes={confirmation:i.a.object,errors:i.a.arrayOf(i.a.string),formState:i.a.number,history:i.a.object,intl:i.a.object,keyView:i.a.object,mnemonic:i.a.shape({origin:i.a.string,compare:i.a.arrayOf(i.a.string)}),onAddWord:i.a.func,onClearComparison:i.a.func,onRemoveWord:i.a.func,onResetState:i.a.func,onSetFormState:i.a.func,onSetPrivateKey:i.a.func,onStoreMnemonic:i.a.func,onStoreWallet:i.a.func,onToggleConfirmationPopup:i.a.func,onToggleKeyViewPopup:i.a.func,onToggleKeyVisible:i.a.func,onUpdateErrors:i.a.func,rpcServer:i.a.object,toggleLoading:i.a.func,updateWeb3:i.a.func},tt.defaultProps={history:{},intl:{},confirmation:{},errors:[],formState:0,keyView:{},mnemonic:{origin:"",compare:[]},onAddWord:function(){},onClearComparison:function(){},onRemoveWord:function(){},onResetState:function(){},onSetFormState:function(){},onSetPrivateKey:function(){},onStoreMnemonic:function(){},onStoreWallet:function(){},onToggleConfirmationPopup:function(){},onToggleKeyViewPopup:function(){},onToggleKeyVisible:function(){},onUpdateErrors:function(){},rpcServer:{},toggleLoading:function(){},updateWeb3:function(){}};var nt=Object(l.c)(function(){return Object(f.b)({confirmation:Ge,errors:xe,formState:He,keyView:Be,mnemonic:ze})},function(e){return{onAddWord:function(t){return e(function(e){return{type:R,word:e}}(t))},onClearComparison:function(){return e({type:"TOMOWALLET/CREATE_NEW_WALLET/CLEAR_COMPARISON"})},onRemoveWord:function(t){return e(function(e){return{type:w,index:e}}(t))},onResetState:function(){return e({type:L})},onSetFormState:function(t){return e(function(e){return{type:"TOMOWALLET/CREATE_NEW_WALLET/SET_FORM_STATES",newState:e}}(t))},onSetPrivateKey:function(t){return e(function(e){return{type:"TOMOWALLET/CREATE_NEW_WALLET/SET_PRIVATE_KEY",key:e}}(t))},onStoreMnemonic:function(t){return e(function(e){return{type:I,mnemonic:e}}(t))},onStoreWallet:function(t){return e(Object(Xe.d)(t))},onToggleConfirmationPopup:function(t){return e(function(e){return{type:"TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_CONFIRMATION_POPUP",bool:e}}(t))},onToggleKeyViewPopup:function(t){return e(function(e){return{type:"TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_KEY_VIEW_POPUP",bool:e}}(t))},onToggleKeyVisible:function(t){return e(function(e){return{type:"TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_KEY_VISIBLE",bool:e}}(t))},onUpdateErrors:function(t){return e(function(e){return{type:W,errors:e}}(t))}}}),ot=Object(A.r)({key:"walletCreation",reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return e.updateIn(["mnemonic","compare"],function(e){return e.concat(t.word)});case"TOMOWALLET/CREATE_NEW_WALLET/CLEAR_COMPARISON":return e.setIn(["mnemonic","compare"],[]);case w:return e.updateIn(["mnemonic","compare"],function(e){return e.filter(function(e,n){return n!==t.index})});case L:return Je;case"TOMOWALLET/CREATE_NEW_WALLET/SET_FORM_STATES":return e.set("formState",t.newState);case"TOMOWALLET/CREATE_NEW_WALLET/SET_PRIVATE_KEY":return e.setIn(["keyView","key"],t.key);case"TOMOWALLET/CREATE_NEW_WALLET/SHUFFLE_MNEMONIC":var n=Object(A.E)(e.getIn(["mnemonic","origin"]).split(" "));return e.setIn(["mnemonic","shuffled"],n);case I:return e.setIn(["mnemonic","origin"],t.mnemonic);case"TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_CONFIRMATION_POPUP":return e.setIn(["confirmation","isOpen"],t.bool);case"TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_KEY_VIEW_POPUP":return e.setIn(["keyView","isOpen"],t.bool);case"TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_KEY_VISIBLE":return e.setIn(["keyView","isPKVisible"],t.bool);case W:return e.set("errors",t.errors);default:return e}}});t.default=Object(c.d)(nt,ot,v.c,N.d,u.f,A.G)(tt)}}]);