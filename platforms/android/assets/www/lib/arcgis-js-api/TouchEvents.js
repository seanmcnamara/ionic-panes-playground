// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/html","dojo/_base/lang","dojo/_base/sniff","dojo/dom","./kernel","./Evented","./geometry/Point","./geometry/ScreenPoint"],function(e,t,s,i,h,n,o,c,a){var u=e([o],{declaredClass:"esri.TouchEvents",tapRadius:8,doubleTapRadius:10,tapStartTolerance:50,doubleTapDuration:300,map:null,constructor:function(e,h){this.node=e,s.mixin(this,h),t.setSelectable(e,!1),this._touchStart=s.hitch(this,this._touchStart),this._touchMove=s.hitch(this,this._touchMove),this._touchEnd=s.hitch(this,this._touchEnd),this._touchCancel=s.hitch(this,this._touchCancel),e.addEventListener("touchstart",this._touchStart,!1),e.addEventListener("touchmove",this._touchMove,!1),e.addEventListener("touchend",this._touchEnd,!1),e.addEventListener("touchcancel",this._touchCancel,!1),this.map&&i("ios")&&(this._mouseOver=s.hitch(this,this._mouseOver),this._mouseOut=s.hitch(this,this._mouseOut),this._mouseDown=s.hitch(this,this._mouseDown),this._mouseUp=s.hitch(this,this._mouseUp),this._mouseClick=s.hitch(this,this._mouseClick),e.addEventListener("mouseover",this._mouseOver,!1),e.addEventListener("mouseout",this._mouseOut,!1),e.addEventListener("mousedown",this._mouseDown,!1),e.addEventListener("mouseup",this._mouseUp,!1),e.addEventListener("click",this._mouseClick,!1)),this._numTouches=0,this._nodeTouches=[],this._touches={},this._touchIds=[],this._taps=[],this._immediate=!1},_touchStart:function(e){var t,s,h,n,o,c=this._touches,a=e.changedTouches.length,u=(new Date).getTime();if(!(i("android")&&i("safari")&&1===e.targetTouches.length&&e.touches.length===e.targetTouches.length&&e.targetTouches.length===e.changedTouches.length&&0===e.changedTouches[0].identifier&&c[e.changedTouches[0].identifier])){for(this._addTouch(e),t=0;a>t;t++)s=e.changedTouches[t],h=c[s.identifier]={},h.startX=s.pageX,h.startY=s.pageY,h.startTS=u,-1===this._touchIds.indexOf(s.identifier)&&this._touchIds.push(s.identifier);this._swipeActive&&(n=this._nodeTouches[0]),this._pinchActive&&(o=this._nodeTouches[1]),1===this._numTouches?this._swipeActive?(this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(e,n))):this._pinchActive&&(this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(e,[n,o]))):2===this._numTouches?this._swipeActive&&(n&&(h=c[this._touchIds[0]],h.startX=n.pageX,h.startY=n.pageY,h.moved=!1),this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(e,n))):this._swipeActive?(this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(e,n))):this._pinchActive&&(this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(e,[n,o])))}},_touchMove:function(e){e.preventDefault(),this._updateTouch(e);var t,s,h,n,o,c,a=this._touches,u=e.changedTouches.length;if(!(i("android")&&i("safari")&&1===e.targetTouches.length&&e.touches.length===e.targetTouches.length&&e.targetTouches.length===e.changedTouches.length&&0===e.changedTouches[0].identifier&&a[e.changedTouches[0].identifier]&&this._touchIds.length>1)){for(t=0;u>t;t++)s=e.changedTouches[t],h=a[s.identifier],h&&(n=Math.abs(s.pageX-h.startX),o=Math.abs(s.pageY-h.startY),!h.moved&&(n>=this.tapRadius||o>=this.tapRadius)&&(h.moved=h.absMoved=!0),c=c?c:h.moved);if(1===this._numTouches){var r=e.changedTouches[0];this._swipeActive?this._fire("onSwipeMove",this._processTouchEvent(e,r)):c&&(this._swipeActive=!0,this._fire("onSwipeStart",this._processTouchEvent(e,r)))}else if(2===this._numTouches){var _=this._nodeTouches[0],p=this._nodeTouches[1];if(this._pinchActive)this._fire("onPinchMove",this._processTouchEvent(e,[_,p]));else if(c){var d=a[_.identifier],v=a[p.identifier],f=Math.abs(d.startX-v.startX),T=Math.abs(d.startY-v.startY),m=Math.sqrt(f*f+T*T),l=Math.abs(_.pageX-p.pageX),g=Math.abs(_.pageY-p.pageY),E=Math.sqrt(l*l+g*g);Math.abs(E-m)>=2*this.tapRadius&&(this._pinchActive=!0,this._fire("onPinchStart",this._processTouchEvent(e,[_,p])))}}}},_touchEnd:function(e){this._removeTouch(e);var t,s,i,h=this._touches,n=e.changedTouches,o=n.length,c=(new Date).getTime(),a=this._touchIds;for(t=0;o>t;t++)i=h[n[t].identifier],i&&(i.absMoved&&(s=!0),i.pageX=n[t].pageX,i.pageY=n[t].pageY,i.endTS=c);if(0===this._numTouches){if(this._touches={},this._touchIds=[],this._swipeActive)this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(e,n[0]));else if(this._pinchActive)this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(e,n));else if(!s){var u=1/0,r=-1/0,_=1/0,p=-1/0,d=this.tapStartTolerance,v=[],f=!0;for(t=0;t<a.length;t++)i=h[a[t]],v.push(i),i.startTS<u&&(u=i.startTS),i.startTS>r&&(r=i.startTS),i.endTS<_&&(_=i.endTS),i.endTS>p&&(p=i.endTS),delete h[a[t]];if(1===v.length&&n[0]){var T=Math.abs(n[0].pageX-v[0].startX),m=Math.abs(n[0].pageY-v[0].startY);(T>=this.tapRadius||m>=this.tapRadius)&&(f=!1)}f&&Math.abs(r-u)<=d&&Math.abs(p-_)<=d&&this._basicTap(e,v)}}else if(1===this._numTouches&&this._pinchActive){var l=this._nodeTouches[0];i=h[l.identifier],i.startX=l.pageX,i.startY=l.pageY,i.moved=!1,this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(e,[n[0],l]))}},_touchCancel:function(e){this._numTouches&&this._touchEnd(e)},_basicTap:function(e,t){var s=(new Date).getTime(),i=this;if(e=this._processTouchEvent(e,t),this._taps.push({touchInfos:t,ts:s,event:e}),this._taps.length>2&&this._taps.shift(),this._fire("onBasicTap",e),clearTimeout(this._tapTimer),this._immediate)this._analyzeTap(!0);else{var h=2===this._taps.length?this.doubleTapDuration/2:this.doubleTapDuration;this._tapTimer=setTimeout(function(){var e=i;i=null,clearTimeout(e._tapTimer),e._analyzeTap()},h)}},_analyzeTap:function(e){var t=this._taps,s=t[0],i=t[1],h=s.touchInfos,n=i&&i.touchInfos;if(t.length)if(e||(this._taps=[]),s&&i)if(h.length===n.length)if(i.ts-s.ts<=this.doubleTapDuration){var o,c,a;1===h.length?(c=Math.abs(h[0].startX-n[0].startX),a=Math.abs(h[0].startY-n[0].startY),o=c<=this.doubleTapRadius&&a<=this.doubleTapRadius):o=!0,o?this._processedDoubleTap(t):this._processedTap(i)}else this._processedTap(i);else this._processedTap(i);else this._processedTap(s||i)},_processedTap:function(e){var t=e.event;this._fire("onProcessedTap",t),1===e.touchInfos.length?this._fire("onTap",this._fixEvent(t)):2===e.touchInfos.length&&this._fire("onTwoFingerTap",t)},_processedDoubleTap:function(e){var t,s,i=1===e[1].touchInfos.length;i&&(t=[this._fixEvent(e[0].event),this._fixEvent(e[1].event)],t[1].relatedEvents=t),s=[e[0].event,e[1].event],s[1].relatedEvents=s,this._fire("onProcessedDoubleTap",s[1]),i&&(this._fire("onDoubleTap",t[1]),this._fire("onDblClick",t[1]))},_addTouch:function(e){var t,s,i,n,o=e.changedTouches,c=this._nodeTouches;for(this._numTouches+=o.length,t=0;t<o.length;t++){for(i=c.length,n=!1,s=0;i>s&&!(n=c[s].identifier===o[t].identifier);s++);n?this._numTouches--:c.push(o[t])}for(t=c.length-1;t>=0;t--)h.isDescendant(c[t].target,document.body)||(c.splice(t,1),this._numTouches--);this._numTouches<0&&(this._numTouches=0)},_removeTouch:function(e){var t,s=[],i=[],h=e.changedTouches,n=this._nodeTouches;for(this._numTouches-=h.length,this._numTouches<0&&(this._numTouches=0),t=0;t<h.length;t++)s.push(h[t].identifier);for(t=n.length-1;t>=0;t--)-1!==s.indexOf(n[t].identifier)&&i.push(n.splice(t,1)[0]);return i},_updateTouch:function(e){var t,s,i=[],h=e.changedTouches,n=this._nodeTouches;for(t=0;t<h.length;t++)i.push(h[t].identifier);for(t=0;t<n.length;t++)s=i.indexOf(n[t].identifier),-1!==s&&n.splice(t,1,h[s])},_mouseOver:function(e){this._fire("onMouseOver",this._processMouseEvent(e))},_mouseOut:function(e){this._fire("onMouseOut",this._processMouseEvent(e))},_mouseDown:function(e){this._fire("onMouseDown",this._processMouseEvent(e))},_mouseUp:function(e){this._fire("onMouseUp",this._processMouseEvent(e))},_mouseClick:function(e){this._fire("onClick",this._processMouseEvent(e))},_fire:function(e,t){if("onDblClick"===e&&this.mouseEvents){this.mouseEvents.preventClickEvents(!0);var s=this;setTimeout(function(){s.mouseEvents.preventClickEvents(!1)},350)}this[e]&&this[e](t),this.map&&this.map[e]&&this.map[e](t)},_fixEvent:function(e){var t,s={};for(t in e)s[t]=e[t];return this.map&&(s.screenPoint=s.screenPoints[0],s.mapPoint=s.mapPoints[0]),s},_processTouchEvent:function(e,t){var i=this.map,h=i&&i.position,n=0;if(h&&t)if(s.isArray(t)){var o,u;for(e.screenPoints=[],e.mapPoints=[],o=0;o<t.length;o++)t[o]?(u=new a(t[o].pageX-h.x,t[o].pageY-h.y),e.screenPoints.push(u),e.mapPoints.push(i.extent?i.toMap(u):new c)):n++}else e.screenPoint=new a(t.pageX-h.x,t.pageY-h.y),e.mapPoint=i.extent?i.toMap(e.screenPoint):new c;return e.numPoints=t?s.isArray(t)?t.length-n:1:0,e},_processMouseEvent:function(e){var t=this.map,s=t&&t.position;return s&&(e.screenPoint=new a(e.pageX-s.x,e.pageY-s.y),e.mapPoint=t.extent?t.toMap(e.screenPoint):new c),e},setImmediateTap:function(e){this._immediate=e},destroy:function(){var e=this.node;e.removeEventListener("touchstart",this._touchStart,!1),e.removeEventListener("touchmove",this._touchMove,!1),e.removeEventListener("touchend",this._touchEnd,!1),e.removeEventListener("touchcancel",this._touchCancel,!1),this.map&&(e.removeEventListener("mouseover",this._mouseOver,!1),e.removeEventListener("mouseout",this._mouseOut,!1),e.removeEventListener("mousedown",this._mouseDown,!1),e.removeEventListener("mouseup",this._mouseUp,!1),e.removeEventListener("click",this._mouseClick,!1)),t.setSelectable(e,!0),clearTimeout(this._tapTimer),this.node=this.map=this._numTouches=this._nodeTouches=this._touches=this._touchIds=this._taps=null}});return i("extend-esri")&&(n.TouchEvents=u),u});