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

define(["dojo/dom-construct","dojo/dom-attr","dojo/_base/lang","dojox/mvc/Templated","dojo/on","../../../declare","dijit/_WidgetBase","dojo/text!./templates/ShoppingCart.html","dgrid/List","dojo/i18n!../../../nls/jsapi","dojo/_base/window"],function(t,i,e,n,s,o,r,h,a,c,d){c=c.geoenrichment.dijit.ShoppingCart;var l=o("esri.dijit.geoenrichment.ShoppingCart",[r,n],{nls:c,templateString:h,list:null,content:null,constructor:function(){this.content={}},buildRendering:function(){this.inherited(arguments),s(this.divList,"click, touchend",e.hitch(this,this._stopEvent))},displayCounter:function(){this.divCounter.innerHTML=this.contentLength().toString()},contentLength:function(){var t=0;for(var i in this.content)this.content.hasOwnProperty(i)&&t++;return t},startup:function(){this.inherited(arguments),this.list=new a({renderRow:e.hitch(this,this.renderVariableRow)},this.divList),this.list.startup(),this.displayCounter(),this.divOuter.style.display="none"},renderVariableRow:function(n){var o=t.create("div",{"class":"ShoppingCartRowOuter"}),r=t.create("div",{"class":"ShoppingCartRow"},o);t.create("div",{"class":"TrimWithEllipses ShoppingCartRowLabel",innerHTML:n.alias},r);var h=t.create("div",{"class":"ShoppingCartRowCloser"},r);return i.set(h,"idDesc",n.idDesc),s(h,"click",e.hitch(this,this.onClick)),o},onClick:function(t){delete this.content[t.currentTarget.attributes.idDesc.value],this.onRemoveElement(t.currentTarget.attributes.idDesc.value),this.refresh()},_showList:function(t){"none"===this.divOuter.style.display&&(this._stopEvent(t),this._displayList())},_toggleList:function(t){this._stopEvent(t),"none"===this.divOuter.style.display?this._displayList():this._hideList()},_displayList:function(){this.refresh(),this.divOuter.style.display="",event.stopPropagation&&event.stopPropagation(),s.once(this.divOuter,"mouseleave",e.hitch(this,this._hideList)),s.once(d.doc,"click",e.hitch(this,this._hideList))},_hideList:function(){this.divOuter&&(this.divOuter.style.display="none")},_stopEvent:function(t){t.stopPropagation&&t.stopPropagation()},addVariable:function(t){var i=!1;return this.content[t.idDesc]||(this.content[t.idDesc]=t,this.displayCounter(),this.onSelect()),!i},setVariables:function(t){this.content={};for(var i=0;i<t.length;i++)this.content[t[i].idDesc]=t[i];this.displayCounter()},addVariables:function(t){for(var i=0;i<t.length;i++)this.content[t[i].idDesc]=t[i];this.displayCounter(),this.onSelect()},removeVariable:function(t){delete this.content[t],this.displayCounter()},refresh:function(){var t=[];for(var i in this.content)this.content.hasOwnProperty(i)&&t.push(this.content[i]);this.list.refresh(),this.list.renderArray(t),this.displayCounter(),this.divEmpty.style.visibility=0===t.length?"visible":"hidden"},collectSelection:function(){var t=[];for(var i in this.content)this.content.hasOwnProperty(i)&&t.push(this.content[i].id2);return t},onRemoveElement:function(){},onSelect:function(){}});return l});