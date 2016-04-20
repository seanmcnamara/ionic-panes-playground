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

define(["../../declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/when","dojox/mvc/sync","./_Wizard","./DataBrowser/DataCategoriesPage","./DataBrowser/DataCollectionsPage","./DataBrowser/DataVariablesPage","./DataBrowser/ShoppingCart","./DataBrowser/VariableInfo","./DataBrowser/Breadcrumb","./DataBrowser/autoTooltip","./AnimationHelper","dojo/i18n!../../nls/jsapi"],function(t,e,i,s,a,o,n,h,l,c,r,u,p,d,g,C){C=C.geoenrichment.dijit;var m="cat",b="col",B="var",f=t("esri.dijit.geoenrichment.DataBrowser",[n],{title:C.DataBrowser.title,okButton:C.WizardButtons.apply,backButton:C.WizardButtons.back,cancelButton:C.WizardButtons.cancel,countryID:null,countryBox:!0,selection:null,shoppingCart:null,variableInfo:null,breadcrumb:null,dataCollections:null,previousPage:null,_titleNode:null,_flyAnim:null,_varTitle:null,constructor:function(){this.shoppingCart=new r,this.variableInfo=new u,this.breadcrumb=new p({onCategoriesClick:e.hitch(this,this.loadPage,m),onDCsClick:e.hitch(this,this.loadPage,b)})},buildRendering:function(){this.inherited(arguments),this._flyAnim=new g(this.domNode),this.breadcrumb.flyAnim=this._flyAnim,i.add(this.domNode,"DataBrowser"),this.shoppingCart.placeAt(this.domNode),this.breadcrumb.placeAt(this.domNode);var t=s.create("div",{style:"position: absolute;"},this.domNode);this._titleNode=s.create("div",{"class":"DataBrowser_Title"},t),d(this.domNode)},startup:function(){this.inherited(arguments),this.shoppingCart.multiSelect=!0,this.shoppingCart.onSelect=e.hitch(this,this._onSelect),this.shoppingCart.startup(),this.dataCollections||(this.dataCollections={}),this.pages[m]=new h({countryBox:this.countryBox,shoppingCart:this.shoppingCart,selection:this.selection,dataCollections:this.dataCollections,flyAnim:this._flyAnim,onSelect:e.hitch(this,function(t){this.previousPage=m,this._loadCollectionsPage(t)}),onSearch:e.hitch(this,function(t){this._varTitle=t,this.previousPage=m,this._loadVarsPage()})}),o(this,"countryID",this.pages[m],"countryID");var t=[];this.backButton&&t.push({label:this.backButton,onClick:e.hitch(this,this._onBack)}),this.okButton&&t.push({label:this.okButton,onClick:e.hitch(this,this._onOK)}),this.cancelButton&&t.push({label:this.cancelButton,onClick:e.hitch(this,this._onCancel)}),this.addButtons(m,t),this.loadPage(m)},loadPage:function(t){switch(t){case m:this.pages[b]&&(this.pages[b].set("selectedCategory",null),this.pages[b].set("selectedCollections",null)),this.pages[B]&&(this.pages[B].set("selectedCategory",null),this.pages[B].set("selectedCollections",null));break;case b:this.pages[b]&&this.pages[b].set("selectedCollections",null),this.pages[B]&&this.pages[B].set("selectedCollections",null);break;case B:}this.inherited(arguments),this._currentPage.syncWithShoppingCart&&this._currentPage.syncWithShoppingCart(),this._updateBreadcrumb(t)},_updateBreadcrumb:function(t){switch(t){case m:this.breadcrumb.domNode.style.display="none";break;case b:this.breadcrumb.domNode.style.display="",this.breadcrumb.selectCategory(this.pages[b].get("selectedCategory"));break;case B:this.breadcrumb.domNode.style.display="";var e=this.pages[B].get("selectedCollections"),i=this.pages[b]?this.pages[b].get("selectedCategory"):null;1===e.length?this.breadcrumb.selectDataCollection(e[0].metadata.title,i):this.breadcrumb.selectDataCollection("All Variables",i)}},_loadCollectionsPage:function(t){if(!this.pages[b]){this.pages[b]=new l({onSelect:e.hitch(this,function(t,e){this._varTitle=e,this.previousPage=b,this._loadVarsPage(t)}),shoppingCart:this.shoppingCart,variableInfo:this.variableInfo,multiSelect:!0,flyAnim:this._flyAnim});var i=[{label:C.WizardButtons.back,onClick:e.hitch(this,this.loadPage,m)}];this.okButton&&i.push({label:this.okButton,onClick:e.hitch(this,this._onOK)}),this.cancelButton&&i.push({label:this.cancelButton,onClick:e.hitch(this,this._onCancel)}),this.addButtons(b,i)}t&&(this.pages[b].set("selectedCategory",t),this.loadPage(b),this.pages[b].syncWithShoppingCart(),this.shoppingCart.onRemoveElement=e.hitch(this.pages[b],this.pages[b].onRemoveElementFromShoppingCart))},_loadVarsPage:function(t){if(!this.pages[B]){this.pages[B]=new c({shoppingCart:this.shoppingCart,variableInfo:this.variableInfo,multiSelect:!0,flyAnim:this._flyAnim});var i=[{label:C.WizardButtons.back,onClick:e.hitch(this,function(){this.loadPage(this.previousPage)})}];this.okButton&&i.push({label:this.okButton,onClick:e.hitch(this,this._onOK)}),this.cancelButton&&i.push({label:this.cancelButton,onClick:e.hitch(this,this._onCancel)}),this.addButtons(B,i)}this.pages[B].varTitle=this._varTitle,this.pages[B].set("selectedCategory",t);var s=this.pages[this.previousPage].get("selectedCollections");s&&(this.pages[B].set("selectedCollections",s),this.loadPage(B),this.pages[B].syncWithShoppingCart(),this.shoppingCart.onRemoveElement=e.hitch(this.pages[B],this.pages[B].onRemoveElementFromShoppingCart))},_setTitleAttr:function(t){this._set("title",t),this._titleNode.innerHTML=t},_onSelect:function(){this.selection=this.shoppingCart.collectSelection(),this.emit("select"),this.onSelect()},onSelect:function(){},_onBack:function(){this.emit("back"),this.onBack()},onBack:function(){},_onOK:function(){this.selection=this.shoppingCart.collectSelection(),this.emit("ok"),this.onOK()},onOK:function(){},_onCancel:function(){this.emit("cancel"),this.onCancel()},onCancel:function(){}});return f});