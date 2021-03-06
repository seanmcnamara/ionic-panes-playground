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

define(["../../../declare","dojo/_base/lang","dojo/dom-construct","dojo/dom-class","dojo/on","dojo/keys","dijit/Tooltip","dijit/form/TextBox"],function(t,e,o,i,h,s,r,n){var a=t([n],{prompt:"",_trueValue:"",buildRendering:function(){this.inherited(arguments),i.add(this.domNode,"SearchTextBox");var t=o.create("div",{"class":"SearchTextBox_SearchBox"},this.domNode);h(t,"click",e.hitch(this,this._onSearch)),h(this,"keypress",e.hitch(this,this._stopEvent)),this._onBlur(null)},showTooltip:function(t){r.show(t,this.textbox,["above","below"])},_stopEvent:function(t){t.charOrCode&&13===t.charOrCode&&(t.stopPropagation(),t.preventDefault())},_setPromptMessageAttr:function(t){this.prompt=t,this._trueValue&&0!==this._trueValue.length&&this.textbox.value&&0!==this.textbox.value.length||(this._setDisplayedValueAttr(this.prompt),i.add(this.textbox,"SearchTextBox_PromptMode"))},_onFocus:function(){this._trueValue&&0!==this._trueValue.length||i.remove(this.textbox,"SearchTextBox_PromptMode"),this._setDisplayedValueAttr(this._trueValue),this.inherited(arguments)},_onBlur:function(){r.hide(this.textbox),this._trueValue=this._getValueAttr(),this._trueValue&&0!==this._trueValue.length||(this._setDisplayedValueAttr(this.prompt),i.add(this.textbox,"SearchTextBox_PromptMode")),this.inherited(arguments)},_onInput:function(t){r.hide(this.textbox),t.keyCode==s.ENTER&&this._onSearch(),this.inherited(arguments)},_onSearch:function(){this.onSearch()},onSearch:function(){}});return a});