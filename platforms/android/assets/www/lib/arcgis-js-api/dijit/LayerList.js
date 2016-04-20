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

define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/kernel","../kernel","dojo/uacss","dojo/Deferred","dojo/on","dojo/query","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/dom-attr","dojo/i18n!../nls/jsapi","dijit/a11yclick","dijit/_WidgetBase","dijit/_TemplatedMixin","../promiseList","../layerUtils","dojo/text!./LayerList/templates/LayerList.html"],function(e,t,s,i,a,r,l,n,o,c,h,d,y,u,b,f,v,g,L,_){var p=e.some(["ar","he"],function(e){return-1!==i.locale.indexOf(e)}),m=t([f,v],{templateString:_,defaults:{theme:"esriLayerList",map:null,layers:null,showSubLayers:!0,showOpacitySlider:!1,showLegend:!1,removeUnderscores:!0,visible:!0},constructor:function(e){var t=s.mixin({},this.defaults,e);this.set(t),this.css={container:"esriContainer",noLayers:"esriNoLayers",noLayersText:"esriNoLayersText",slider:"esriSlider",sliderLabels:"esriSliderLabels",legend:"esriLegend",tabContainer:"esriTabContainer",tabs:"esriTabs",tabMenu:"esriTabMenu",tabMenuItem:"esriTabMenuItem",tabMenuSelected:"esriTabMenuSelected",tabMenuVisible:"esriTabMenuVisible",tab:"esriTab",tabSelected:"esriTabSelected",toggleButton:"esriToggleButton",iconCollapse:"esri-icon-down",iconExpand:p?"esri-icon-left":"esri-icon-right",list:"esriList",listExpand:"esriListExpand",subListExpand:"esriSubListExpand",listVisible:"esriListVisible",subList:"esriSubList",hasSubList:"esriHasSubList",hasButton:"esriHasButton",hasTabContent:"esriHasTabContent",subListLayer:"esriSubListLayer",layer:"esriLayer",layerScaleInvisible:"esriScaleInvisible",title:"esriTitle",titleContainer:"esriTitleContainer",checkbox:"esriCheckbox",label:"esriLabel",button:"esriButton",content:"esriContent",clearFix:"esriClearFix",clear:"esriClear"}},postCreate:function(){this.inherited(arguments);var e=this;this.own(n(this._layersNode,n.selector("."+this.css.checkbox,"change"),function(){var t,s;t=y.get(this,"data-layer-index"),s=y.get(this,"data-sublayer-index"),e._toggleLayer(t,s),e._toggleState(t,s)})),this.own(n(this._layersNode,n.selector("."+this.css.tabMenuItem,b.press),function(){var t=y.get(this,"data-layer-index"),s=y.get(this,"data-tab-id");e._toggleTab(t,s)})),this.own(n(this._layersNode,n.selector("."+this.css.toggleButton,b.press),function(){var t=y.get(this,"data-layer-index");e._toggleExpand(t)}))},startup:function(){this.inherited(arguments),this._mapLoaded(this.map).then(s.hitch(this,this._init))},destroy:function(){this._removeEvents(),this.inherited(arguments)},refresh:function(){var e=this.layers;this._nodes=[];var t=[];if(e&&e.length)for(var i=0;i<e.length;i++)t.push(this._layerLoaded(i));return g(t).always(s.hitch(this,function(e){this._loadedLayers=e,this._removeEvents(),this._createLayerNodes(),this._setLayerEvents(),this.emit("refresh")}))},_mapLoaded:function(e){var t=new l;return e?e.loaded?t.resolve():n.once(e,"load",s.hitch(this,function(){t.resolve()})):t.resolve(),t.promise},_toggleExpand:function(e){e=parseInt(e,10);var t=this._nodes[e];if(t){var s=t.layer;c.toggle(s,this.css.listExpand);var i=c.contains(s,this.css.listExpand);y.set(t.toggle,"title",i?u.widgets.layerList.collapse:u.widgets.layerList.expand),c.toggle(t.toggle,this.css.iconCollapse,i),c.toggle(t.toggle,this.css.iconExpand,!i)}},_toggleTab:function(e,t){e=parseInt(e,10);var s=this._nodes[e];if(s){var i,a=s.tabs,r=s.tabMenu,l=o("[data-tab-id]",a),n=o("[data-tab-id]",r);for(i=0;i<l.length;i++){var h=y.get(l[i],"data-tab-id");c.toggle(l[i],this.css.tabSelected,t===h)}for(i=0;i<n.length;i++){var d=y.get(n[i],"data-tab-id");c.toggle(n[i],this.css.tabMenuSelected,t===d)}}},_layerLoaded:function(e){var t=this.layers,i=t[e],a=i.layer,r={layer:a,layerInfo:i,layerIndex:e},o=new l;if(a)if(a.loaded)o.resolve(r);else if(a.loadError)o.reject(a.loadError);else{var c,h;c=n.once(a,"load",s.hitch(this,function(){h.remove(),o.resolve(r)})),h=n.once(a,"error",s.hitch(this,function(e){c.remove(),o.reject(e)}))}else o.resolve(r);return o.promise},_checkboxStatus:function(e){return!!e.visibility},_WMSVisible:function(t,s){var i=[];return t&&t.layer&&(i=t.layer.visibleLayers),e.indexOf(i,s.name)>-1},_subCheckboxStatus:function(e,t){var s,i=e.layer.declaredClass;switch(i){case"esri.layers.KMLLayer":s=t.visible;break;case"esri.layers.WMSLayer":s=this._WMSVisible(e,t);break;default:t.defaultVisibility=e.layer&&e.layer.visibleLayers&&-1!==e.layer.visibleLayers.indexOf(t.id)?!0:!1,s=t.defaultVisibility}return s},_getLayerTitle:function(e){var t="",s=e.layer,i=e.layerInfo;return i&&i.title?t=i.title:s&&s.arcgisProps&&s.arcgisProps.title?t=s.arcgisProps.title:s&&s.name?t=s.name:i&&i.id?t=i.id:s&&s.id&&(t=s.id),this.removeUnderscores?t.replace(/_/g," "):t},_showSublayers:function(e){return e.hasOwnProperty("showSubLayers")?e.showSubLayers:this.showSubLayers},_opacityChange:function(e){if(this.layer)this.layer.setOpacity(e);else if(this.layers)for(var t=0;t<this.layers.length;t++)this.layers[t].layerObject&&this.layers[t].layerObject.setOpacity(e)},_legend:function(e,t,i){var a=d.create("div",{role:"tabpanel","data-tab-id":"legend",className:this.css.tab+" "+this.css.legend},e);require(["esri/dijit/Legend"],s.hitch(this,function(e){var s=[t];if(t&&t.featureCollection&&t.featureCollection.layers){s=t.featureCollection.layers;for(var r=0;r<s.length;r++)s[r].layer=s[r].layerObject}var l=new e({map:this.map,layerInfos:s},d.create("div"));d.place(l.domNode,a),l.startup(),this._nodes[i].legend=l}))},_slider:function(e,t,i,a){var r=d.create("div",{role:"tabpanel","data-tab-id":"opacity",className:this.css.tab+" "+this.css.slider},e),l=d.create("div",{},r),n=d.create("div",{},r);require(["dijit/form/HorizontalSlider","dijit/form/HorizontalRuleLabels"],s.hitch(this,function(e,s){var r=new e({showButtons:!1,minimum:.1,maximum:1,layer:t,layers:i,discreteValues:.1,intermediateChanges:!0,value:a,onChange:this._opacityChange},l),o=new s({container:"bottomDecoration",count:0,className:this.css.sliderLabels,labels:["0","50","100"]},n);r.startup(),o.startup()}))},_createLayerNodes:function(){this._layersNode.innerHTML="",this._noLayersNode.innerHTML="",c.remove(this._container,this.css.noLayers);var e=this._loadedLayers;if(e&&e.length)for(var t=0;t<e.length;t++){var s=e[t];if(s){var i=s.layer,a=s.layerIndex,r=s.layerInfo;if(r){if(r.featureCollection&&!r.hasOwnProperty("visibility")){var l=r.featureCollection.layers[0];l&&l.layerObject&&(r.visibility=l.layerObject.visible)}i&&!r.hasOwnProperty("visibility")&&(r.visibility=r.layer.visible),i&&!r.hasOwnProperty("id")&&(r.id=r.layer.id);var n,h=d.create("li",{role:"menuitem",className:this.css.layer});i&&!i.visibleAtMapScale&&c.add(h,this.css.layerScaleInvisible),d.place(h,this._layersNode,"first");var b,f=d.create("div",{className:this.css.title},h),v=d.create("div",{className:this.css.tabContainer},h),g=d.create("ul",{role:"tablist",className:this.css.tabMenu+" "+this.css.clearFix},v),L=d.create("div",{className:this.css.tabs},v),_=[];i&&(b=i.declaredClass);var p=this._checkboxStatus(r),m=d.create("div",{className:this.css.titleContainer},f),x=this.id+"_checkbox_"+a,S=d.create("input",{type:"checkbox",id:x,"data-layer-index":a,className:this.css.checkbox},m);y.set(S,"checked",p);var I,C=d.create("div",{tabindex:0,role:"button","data-layer-index":a,title:u.widgets.layerList.expand,className:this.css.toggleButton+" "+this.css.iconExpand},m);r.button&&(I=r.button,c.add(h,this.css.hasButton),c.add(I,this.css.button),d.place(I,m));var w=this._getLayerTitle(s),N=d.create("label",{className:this.css.label,textContent:w},m);y.set(N,"for",x);var M,E=d.create("div",{className:this.css.clear},m);r.content&&(M=r.content,c.add(M,this.css.content),d.place(M,f));var V={checkbox:S,title:f,tabMenu:g,tabs:L,titleContainer:m,label:N,layer:h,toggle:C,clear:E,button:I,content:M,subNodes:_};if(this._nodes[a]=V,c.toggle(h,this.css.listVisible,p),i&&(n=i.layerInfos,"esri.layers.KMLLayer"===b&&(n=i.folders),this._showSublayers(r)&&"esri.layers.ArcGISTiledMapServiceLayer"!==b&&n&&n.length)){d.create("li",{tabindex:0,"data-tab-id":"sublayers","data-layer-index":a,role:"tab",className:this.css.tabMenuItem,textContent:u.widgets.layerList.sublayers},g),c.add(h,this.css.hasSubList),c.toggle(h,this.css.subListExpand,p);for(var T,k=d.create("div",{className:this.css.tab,"data-tab-id":"sublayers",role:"tabpanel"},L),j=d.create("ul",{role:"group",className:this.css.subList},k),O=[],A=0;A<n.length;A++){var P,B=n[A],D=-1,F=null;if("esri.layers.ArcGISDynamicMapServiceLayer"===b?(P=B.id,D=B.parentLayerId):"esri.layers.KMLLayer"===b?(P=B.id,D=B.parentFolderId):"esri.layers.WMSLayer"===b&&(P=B.name,D=-1),-1!==D){var G=this._nodes[a].subNodes[D];if(O[D])F=O[D];else{var H=G.subLayer;F=d.create("ul",{role:"group",className:this.css.subList},H),c.add(H,this.css.hasSubList),c.toggle(H,[this.css.listVisible,this.css.subListExpand],U),O[D]=F}}var U=this._subCheckboxStatus(r,B);U&&!T&&(T=!0);var W=this.id+"_checkbox_sub_"+a+"_"+P,K=d.create("li",{role:"menuitem",className:this.css.subListLayer},F||j),q=d.create("div",{className:this.css.title},K),z=d.create("div",{className:this.css.titleContainer},q),R=d.create("input",{type:"checkbox",id:W,"data-layer-index":a,"data-sublayer-index":P,className:this.css.checkbox},z);y.set(R,"checked",U);var J=B.title||B.name||"",Q=d.create("label",{className:this.css.label,textContent:J},z);y.set(Q,"for",W);var X=d.create("div",{className:this.css.clear},z),Y={subList:j,subSubList:F,subLayer:K,subTitle:q,subTitleContainer:z,subCheckbox:R,subLabel:Q,subClear:X};_[P]=Y}}if((r.hasOwnProperty("showLegend")?r.showLegend:this.showLegend)&&(d.create("li",{tabindex:0,role:"tab",className:this.css.tabMenuItem,"data-layer-index":a,"data-tab-id":"legend",textContent:u.widgets.layerList.legend},g),this._legend(L,r,a)),r.hasOwnProperty("showOpacitySlider")?r.showOpacitySlider:this.showOpacitySlider){var Z,$;!i&&r.featureCollection?(Z=r.featureCollection.layers,$=r.featureCollection.layers[0].opacity):$=i.opacity,d.create("li",{tabindex:0,"data-tab-id":"opacity",role:"tab",className:this.css.tabMenuItem,"data-layer-index":a,textContent:u.widgets.layerList.opacity},g),this._slider(L,i,Z,$)}var et=o("."+this.css.tab,L),tt=et.length;if(tt&&(c.add(h,[this.css.hasTabContent]),c.add(et[0],this.css.tabSelected)),tt>1){c.add(h,this.css.tabMenuVisible);var st=o("li",g);st.length&&c.add(st[0],this.css.tabMenuSelected)}}}}else c.add(this._container,this.css.noLayers),y.set(this._noLayersNode,"textContent",u.widgets.layerList.noLayers)},_removeEvents:function(){if(this._layerEvents&&this._layerEvents.length)for(var e=0;e<this._layerEvents.length;e++)this._layerEvents[e].remove();this._layerEvents=[]},_emitToggle:function(e,t,s){this.emit("toggle",{layerIndex:e,subLayerIndex:t,visible:s})},_toggleVisible:function(e,t){var s=this._nodes[e].checkbox;c.toggle(this._nodes[e].layer,this.css.listVisible,t);var i=y.get(s,"checked");c.contains(this._nodes[e].layer,this.css.hasSubList)&&c.toggle(this._nodes[e].layer,this.css.subListExpand,i),i!==t&&(y.set(s,"checked",t),this._emitToggle(e,null,t))},_layerVisChangeEvent:function(e,t,i){var a;if(t){var r=e.layerInfo.featureCollection.layers;a=r[i].layer}else a=e.layer;var l=n(a,"visibility-change",s.hitch(this,function(s){t?this._featureCollectionVisible(e.layerIndex,s.visible):this._toggleVisible(e.layerIndex,s.visible)}));if(this._layerEvents.push(l),!t){var o=n(a,"scale-visibility-change",s.hitch(this,function(t){var s=t.target.visibleAtMapScale;c.toggle(this._nodes[e.layerIndex].layer,this.css.layerScaleInvisible,!s)}));if(this._layerEvents.push(o),"esri.layers.ArcGISDynamicMapServiceLayer"===a.declaredClass){var h=n(this.map,"zoom-end",s.hitch(this,function(){this._subLayerScale(e)}));this._layerEvents.push(h),this._subLayerScale(e)}}},_subLayerScale:function(t){var i=t.layer,a=i.createDynamicLayerInfosFromLayerInfos(),r=L._getLayersForScale(this.map.getScale(),a);e.forEach(a,s.hitch(this,function(s){if(!s.subLayerIds){var i=s.id,a=this._nodes[t.layerIndex].subNodes[i];if(a){var l=a.subLayer,n=!1;-1===e.indexOf(r,i)&&(n=!0),c.toggle(l,this.css.layerScaleInvisible,n)}}}))},_layerEvent:function(e){var t=e.layerInfo;if(t.featureCollection&&t.featureCollection.layers&&t.featureCollection.layers.length){var s=t.featureCollection.layers;if(s&&s.length)for(var i=0;i<s.length;i++)this._layerVisChangeEvent(e,!0,i)}else this._layerVisChangeEvent(e)},_getVisibleLayers:function(t,s){var i,a=t.layerInfos,r=[-1];if("undefined"!=typeof s){var l=!a[s].defaultVisibility;a[s].defaultVisibility=l}for(i=0;i<a.length;i++){var n=a[i];if(n.defaultVisibility){r.push(n.id);var o=e.lastIndexOf(r,-1);-1!==o&&r.splice(o,1)}}var c=[];for(i=0;i<r.length;i++){var h=r[i],d=this._allIdsPresent(t,h,r);d&&c.push(h)}for(var y=[],u=0;u<c.length;u++){var b=this._getLayerInfo(t,c[u]);b&&null===b.subLayerIds&&y.push(c[u])}return y.length||(y=[-1]),y},_toggleState:function(e,t){var s,i;e=parseInt(e,10);var a=this._nodes[e];a.legend&&a.legend.refresh(),null!==t?(t=parseInt(t,10),s=a.subNodes[t].subLayer,i=a.subNodes[t].subCheckbox):(s=a.layer,i=a.checkbox);var r=y.get(i,"checked");c.contains(s,this.css.hasSubList)&&c.toggle(s,this.css.subListExpand,r),c.toggle(s,this.css.listVisible,r)},_toggleLayer:function(t,s){if(this.layers&&this.layers.length){var i;t=parseInt(t,10);var a,r=this.layers[t],l=r.layer;l&&(a=l.declaredClass);var n,o,c=r.featureCollection;if(c)for(i=!r.visibility,r.visibility=i,o=0;o<c.layers.length;o++){var h=c.layers[o].layerObject;h.setVisibility(i)}else if(l)if(null!==s){if("esri.layers.ArcGISDynamicMapServiceLayer"===a)s=parseInt(s,10),n=this._getVisibleLayers(l,s),l.setVisibleLayers(n);else if("esri.layers.KMLLayer"===a){s=parseInt(s,10);var d=l.folders;for(o=0;o<d.length;o++){var y=d[o];if(y.id===s){l.setFolderVisibility(y,!y.visible);break}}}else if("esri.layers.WMSLayer"===a){n=l.visibleLayers;var u=e.indexOf(n,s);-1===u?n.push(s):n.splice(u,1),l.setVisibleLayers(n)}}else"esri.layers.ArcGISDynamicMapServiceLayer"===a&&(n=this._getVisibleLayers(l),l.setVisibleLayers(n)),i=!l.visible,r.visibility=i,l.setVisibility(i);else i=!r.visible,r.setVisibility(i);this._emitToggle(t,s,i)}},_featureCollectionVisible:function(t,s){var i,a=this.layers[t],r=a.visibleLayers,l=a.featureCollection.layers;i=r&&r.length?e.every(r,function(e){return l[e].layer.visible===s}):e.every(l,function(e){return e.layer.visible===s}),i&&this._toggleVisible(t,s)},_setLayerEvents:function(){var e=this._loadedLayers;if(e&&e.length)for(var t=0;t<e.length;t++){var s=e[t];s.layer&&this._layerEvent(s)}},_allIdsPresent:function(t,s,i){var a=this._walkUpLayerIds(t,s);return e.every(a,function(t){return e.indexOf(i,t)>-1})},_walkUpLayerIds:function(e,t){var s,i=this._getLayerInfo(e,t),a=[];if(i)for(;-1!==i.parentLayerId;)s=this._getLayerInfo(e,i.parentLayerId),s&&a.push(s.id),i=s;return a},_getLayerInfo:function(e,t){for(var s,i=0;i<e.layerInfos.length;i++){var a=e.layerInfos[i];if(a.id===t){s=a;break}}return s},_isSupportedLayerType:function(e){return e&&!e._basemapGalleryLayerType||e&&"basemap"!==e._basemapGalleryLayerType},_createLayerInfo:function(e){return{layer:e}},_updateAllMapLayers:function(){if(this.map&&(!this.layers||!this.layers.length)){var t=[];e.forEach(this.map.layerIds,function(e){var s=this.map.getLayer(e);this._isSupportedLayerType(s)&&t.push(this._createLayerInfo(s))},this),e.forEach(this.map.graphicsLayerIds,function(e){var s=this.map.getLayer(e);this._isSupportedLayerType(s)&&s._params&&s._params.drawMode&&t.push(this._createLayerInfo(s))},this),this._set("layers",t)}},_init:function(){this._visible(),this._updateAllMapLayers(),this.refresh().always(s.hitch(this,function(){this.set("loaded",!0),this.emit("load")}))},_visible:function(){this.visible?h.set(this.domNode,"display","block"):h.set(this.domNode,"display","none")},_setThemeAttr:function(e){this.domNode&&(c.remove(this.domNode,this.theme),c.add(this.domNode,e)),this._set("theme",e)},_setMapAttr:function(e){this._set("map",e),this._created&&this._mapLoaded(this.map).then(s.hitch(this,function(){this._updateAllMapLayers(),this.refresh()}))},_setLayersAttr:function(e){this._set("layers",e),this._created&&this.refresh()},_setRemoveUnderscoresAttr:function(e){this._set("removeUnderscores",e),this._created&&this.refresh()},_setShowSubLayersAttr:function(e){this._set("showSubLayers",e),this._created&&this.refresh()},_setShowOpacitySliderAttr:function(e){this._set("showOpacitySlider",e),this._created&&this.refresh()},_setShowLegendAttr:function(e){this._set("showLegend",e),this._created&&this.refresh()},_setVisibleAttr:function(e){this._set("visible",e),this._created&&this._visible()}});return r("extend-esri")&&s.setObject("dijit.LayerList",m,a),m});