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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/kernel","dojo/has","dojo/query","dojo/DeferredList","dojo/dom-class","dojo/dom-construct","dojo/string","dijit/_Widget","dijit/_Templated","../../domUtils","../../graphicsUtils","../../geometry/Polyline","../../geometry/Polygon","../../graphic","../../undoManager","../../tasks/query","../../layers/FeatureLayer","../../layers/FeatureTemplate","../../toolbars/draw","../../toolbars/edit","../AttributeInspector","./Util","./Add","./Update","./Delete","./toolbars/Drawing","./SelectionHelper","./TemplatePicker","../../kernel","../../config","dojo/i18n!../../nls/jsapi","dojo/text!./templates/Editor.html","dijit/ProgressBar","dojo/NodeList-dom"],function(t,e,i,s,r,n,a,o,h,l,c,_,d,u,p,g,y,f,b,T,m,E,O,L,v,w,I,C,A,R,P,S,F,N,G,W){var k=t([_,d],{declaredClass:"esri.dijit.editing.Editor",widgetsInTemplate:!0,templateString:W,onLoad:function(){},constructor:function(t){t=t||{},t.settings||console.error("Editor: please provide 'settings' parameter in the constructor"),t.settings.layerInfos||console.error("Editor: please provide 'layerInfos' parameter in the constructor"),this._settings=t.settings,this._eConnects=[]},startup:function(){this.inherited(arguments),this._setDefaultOptions();var t=this._settings.layerInfos;if(i.every(t,function(t){return t.featureLayer.loaded}))this._initLayers(),this._connectEvents(),this._createWidgets(),this.onLoad(),this.loaded=!0;else{var e=t.length;i.forEach(t,function(t){var i=t.featureLayer;if(i.loaded)e--;else var r=s.connect(i,"onLoad",this,function(){s.disconnect(r),r=null,e--,e||(this._initLayers(),this._connectEvents(),this._createWidgets(),this.onLoad(),this.loaded=!0)})},this)}this._reset(),this._enableMapClickHandler()},stopEditing:function(t){this._updateCurrentFeature(e.hitch(this,function(){this._clearSelection(!1),t&&t()}))},destroy:function(){this.drawingToolbar&&this.drawingToolbar.destroy(),this.attributeInspector&&this.attributeInspector.destroy(),this.templatePicker&&this.templatePicker.destroy(),this._selectionHelper&&this._selectionHelper.destroy(),this._drawToolbar&&this._drawToolbar.deactivate(),this._reset(),this._disableMapClickHandler(),i.forEach(this._eConnects,s.disconnect),s.disconnect(this._dtConnect),s.disconnect(this._templatePickerOnSelectionChangeEvent),this._layer=this._currentGraphic=this._activeType=this._activeTemplate=this._drawingTool=this._drawToolbar=this.editToolbar=this.drawingToolbar=this.attributeInspector=this.templatePicker=this.undoManager=null,this._settings.map.infoWindow&&this._settings.map.infoWindow.clearFeatures&&this._settings.map.infoWindow.clearFeatures(),this.inherited(arguments)},_setDefaultOptions:function(){this._drawToolbar=this._settings.drawToolbar||new O(this._settings.map),this._settings.drawToolbar=this._drawToolbar,this.editToolbar=this._settings.editToolbar||new L(this._settings.map,{textSymbolEditorHolder:this.domNode}),this._settings.editToolbar=this.editToolbar,this._settings.toolbarVisible=this._settings.toolbarVisible||!1,this._settings.toolbarOptions=e.mixin({reshapeVisible:!1,cutVisible:!1,mergeVisible:!1},this._settings.toolbarOptions),this._settings.createOptions=e.mixin({polylineDrawTools:[k.CREATE_TOOL_POLYLINE],polygonDrawTools:[k.CREATE_TOOL_POLYGON],editAttributesImmediately:!0},this._settings.createOptions),this._settings.singleSelectionTolerance=this._settings.singleSelectionTolerance||3,this._settings.maxUndoRedoOperations=this._settings.maxUndoRedoOperations||10,this._settings.editor=this,this._usePopup=this._settings.usePopup=this._settings.map.infoWindow._setPagerCallbacks?!0:!1,this._datePackage=this._settings.datePackage;var t=N.defaults;this._settings.geometryService=this._settings.geometryService||t.geometryService,t.geometryService=t.geometryService||this._settings.geometryService},_initLayers:function(){this._settings.layers=[],this._settings.userIds={},this._settings.createOnlyLayer={};var t=this._settings.layerInfos;i.forEach(t,function(t){if(t.featureLayer&&t.featureLayer.loaded){this._settings.layers.push(t.featureLayer);var e=t.featureLayer.id;t.featureLayer.credential&&(this._settings.userIds[e]=t.featureLayer.credential.userId),t.userId&&(this._settings.userIds[e]=t.userId);var i=t.featureLayer.getEditCapabilities();this._settings.createOnlyLayer[e]=i.canCreate&&!i.canUpdate?!0:!1,this._isTextSymbolPointLayer(t.featureLayer)&&(t.disableAttributeUpdate=!0)}},this)},_reset:function(){this._hideAttributeInspector(),this.editToolbar.deactivate(),this._editVertices=!0,this._layer=null,this._currentGraphic=null,this._activeType=null,this._activeTemplate=null,this._drawingTool=null,this._attributeChanged=!1},_saveFeatureOnClient:function(t){var i,r=this.templatePicker.getSelected();i=r.template?r.featureLayer.renderer.getSymbol(r.template.prototype):r.symbolInfo.symbol,this._tempGraphic=new f(t,i,null,null),this._tempGraphic.setAttributes(e.mixin({},r.template.prototype.attributes));var n=this._settings.map;n.graphics.add(this._tempGraphic);var a=this._findCenterPoint(t);this._createAttributeInspector(!0),n.infoWindow.setTitle(r.featureLayer?r.featureLayer.name:G.widgets.attributeInspector.NLS_title),this.attributeInspector.showFeature(this._tempGraphic,r.featureLayer),this._showInfoWindow(a,n.getInfoWindowAnchor(a)),this._settings.createOnlyLayer[r.featureLayer.id]&&(this._infoWindowHideEvent=s.connect(n.infoWindow,"onHide",this,"_infoWindowHide")),s.disconnect(this._templatePickerOnSelectionChangeEvent),this.templatePicker.clearSelection(),this._drawToolbar.deactivate(),this._enableMapClickHandler(),this.drawingToolbar&&this.drawingToolbar.deactivate(),this._templatePickerOnSelectionChangeEvent=s.connect(this.templatePicker,"onSelectionChange",e.hitch(this,"_onCreateFeature"))},_saveAttributesOnClient:function(t,e,i){this._tempGraphic.attributes[e]="number"==typeof i&&isNaN(i)?null:i},_infoWindowHide:function(){this._createFeature(this._tempGraphic.geometry,this._tempGraphic.attributes),s.disconnect(this._infoWindowHideEvent)},_createFeature:function(t,s){return this._editClickPoint=this._findCenterPoint(t),t.rings?void this._simplify(t,e.hitch(this,function(t){this._drawingTool!==E.TOOL_AUTO_COMPLETE_POLYGON?this._applyEdits([{layer:this._layer,adds:[this._createGraphic(t,s)]}],e.hitch(this,function(){this._chainAttachment(this._oEdits[0].adds[0].attributes[this._oEdits[0].layer.objectIdField],this._oEdits[0].layer)})):this._autoComplete(t,e.hitch(this,function(t){t&&t.length&&this._applyEdits([{layer:this._layer,adds:i.map(t,e.hitch(this,function(t){return this._createGraphic(t,s)}))}],function(){this._chainAttachment(this._oEdits[0].adds[0].attributes[this._oEdits[0].layer.objectIdField],this._oEdits[0].layer)})}))})):void this._applyEdits([{layer:this._layer,adds:[this._createGraphic(t,s)]}],e.hitch(this,function(){this._chainAttachment(this._oEdits[0].adds[0].attributes[this._oEdits[0].layer.objectIdField],this._oEdits[0].layer),this._layer&&this._layer.renderer&&"heatmap"===this._layer.renderer.type&&this._layer.refresh()}))},_chainAttachment:function(t,e){this.attributeInspector&&this.attributeInspector._attachmentEditor&&this.attributeInspector._attachmentEditor._tempUpload&&this.attributeInspector._attachmentEditor._chainAttachment(t,e)},_updateCurrentFeature:function(t){var e=this._isModified();e?this._updateFeature(e,t):t&&t(!1)},_updateFeature:function(t,i,s){var r,n=t.geometry,a=t.getLayer(),o=a.hasM;o||s&&!this._isModified()?(r=new f,r.setAttributes(t.attributes),this._applyEdits([{layer:t.getLayer(),updates:[r]}],i)):n.rings?this._simplify(n,e.hitch(this,function(s){this._applyEdits([{layer:t.getLayer(),updates:[e.mixin(t,{geometry:s})]}],i)})):this._applyEdits([{layer:t.getLayer(),updates:[t]}],i)},_deleteFeature:function(t,e){var s=[];if(t)s.push({layer:t.getLayer(),deletes:[t]});else{var r=this._settings.layers;s=i.map(i.filter(r,function(t){return t.getSelectedFeatures().length>0}),function(t){return{layer:t,deletes:t.getSelectedFeatures()}}),s&&s.length||!this._currentGraphic||s.push({layer:this._layer,deletes:[this._currentGraphic]})}this._applyEdits(s,e)},_stopEditing:function(t,i,s,r){u.hide(this.progressBar.domNode),this._undoRedoAdd();var n;if(t._isSelOnly===!0||1===t.mode||6===t.mode){if(i&&i.length){this.templatePicker.clearSelection();var a=new T;a.objectIds=[i[0].objectId],this._settings.createOnlyLayer[t.id]?this._settings.map.graphics.remove(this._tempGraphic):this._selectFeatures([t],a,e.hitch(this,"_onEditFeature"))}}else n=this._selectionHelper.findMapService(this._settings.map,t),n&&n.refresh(),i&&i.length&&(this.templatePicker.clearSelection(),this._settings.createOnlyLayer[t.id]?this._settings.map.graphics.remove(this._tempGraphic):w.findFeatures(i,t,e.hitch(this,"_onEditFeature")));r&&r.length&&(this._clearSelection(!0),this._undoRedo&&(n=this._selectionHelper.findMapService(t,this._settings.map),n&&n.refresh())),this._undoRedo&&s&&s.length&&(n=this._selectionHelper.findMapService(t,this._settings.map),n&&n.refresh(),this.attributeInspector.refresh(),this._undoRedo=!1),this.drawingToolbar&&this.drawingToolbar._updateUI(),this._undoRedo=!1},_undoRedoAdd:function(){if(this._settings._isApplyEditsCall=!1,this._settings.undoManager&&"CUT"!==this._activeTool&&"UNION"!==this._activeTool){var t=this._edits&&this._edits.length?this._edits[0]:null;if(t){var i=t.adds||[],s=t.updates||[],r=t.deletes||[],n={featureLayer:t.layer};i.length?this.undoManager.add(new I(e.mixin(n,{addedGraphics:i}))):r.length?this.undoManager.add(new A(e.mixin(n,{deletedGraphics:r}))):s.length&&this._rollbackGraphic&&this.undoManager.add(new C(e.mixin(n,{preUpdatedGraphics:[this._rollbackGraphic],postUpdatedGraphics:s}))),this._edits=null,this._rollbackGraphic=null}}},_activateDrawToolbar:function(t){this._layer=t.featureLayer,this._activeType=t.type,this._activeTemplate=t.template,this._drawingTool=this._activeTemplate?this._activeTemplate.drawingTool:null,this._drawTool=this._toDrawTool(this._drawingTool,t.featureLayer),s.disconnect(this._dtConnect),this._dtConnect=this._settings.createOnlyLayer[t.featureLayer.id]?s.connect(this._drawToolbar,"onDrawEnd",this,"_saveFeatureOnClient"):s.connect(this._drawToolbar,"onDrawEnd",this,"_createFeature"),this.editToolbar.deactivate(),this._disableMapClickHandler(),this.drawingToolbar?this.drawingToolbar.activateEditing(this._drawTool,this._layer):this._drawToolbar.activate(this._drawTool)},_activateEditToolbar:function(t,e){var s=t.getLayer(),r=s?s.geometryType:null,n=this._isTextSymbolPoint(t),a=L.MOVE;"esriGeometryPoint"!==r&&this._isNotesFeature(t)===!0?(a=a|L.ROTATE|L.SCALE,this._editVertices=!1):"esriGeometryPoint"!==r&&this._editVertices===!0?(a=a|L.ROTATE|L.SCALE,this._editVertices=!1):n?(a=a|L.ROTATE|L.SCALE|L.EDIT_TEXT,this._editVertices=!1):(a|=L.EDIT_VERTICES,this._editVertices=!0),this._attributeChanged=this._isModified(),this._rollbackGraphic=new f(t.toJson());var o=s.getEditCapabilities({feature:t,userId:this._settings.userIds[s.id]}),h=i.filter(this._settings.layerInfos,function(t){return t.featureLayer.layerId===s.layerId})[0];if(o.canUpdate&&!h.disableGeometryUpdate&&s.allowGeometryUpdates&&(this.editToolbar.activate(a,t),n&&(this.editToolbar._textEditor._addTextBox(t),this.editToolbar._textSymbolEditor&&this.editToolbar._textSymbolEditor.hide())),!this._settings.map.infoWindow.isShowing&&!this._updateAttributeDisabled(t)){var l=e&&e.screenPoint||this._findCenterPoint(t);this._showInfoWindow(l,this._settings.map.getInfoWindowAnchor(l))}},_createGraphic:function(t,s){var r=this._activeType&&this._activeType.symbol||this._layer.defaultSymbol,n=new f(t,r,s);return this._activeTemplate||s?n.attributes=s||e.mixin({},this._activeTemplate.prototype.attributes):(n.attributes=n.attributes||[],i.forEach(this._layer.fields,function(t){n.attributes[t.name]=null},this)),n},_connectEvents:function(){var t=this._settings.layers;i.forEach(t,function(t){this._connect(t,"onEditsComplete",e.hitch(this,"_stopEditing",t))},this),i.forEach(t,function(t){this._connect(t,"onBeforeApplyEdits",e.hitch(this,function(){u.show(this.progressBar.domNode),this._settings._isApplyEditsCall=!0}))},this),this._connect(this.editToolbar,"onGraphicClick",e.hitch(this,"_activateEditToolbar")),this._connect(this.editToolbar,"onGraphicFirstMove",e.hitch(this,"_hideAttributeInspector")),this._connect(this.editToolbar,"onVertexFirstMove",e.hitch(this,"_hideAttributeInspector")),this._connect(this.editToolbar,"onScaleStart",e.hitch(this,"_hideAttributeInspector")),this._connect(this.editToolbar,"onRotateStart",e.hitch(this,"_hideAttributeInspector"))},_connect:function(t,e,i){this._eConnects.push(s.connect(t,e,i))},_createWidgets:function(){this._selectionHelper=new P(this._settings),this._createTemplatePicker(),this._createAttributeInspector(),this._createDrawingToolbar(),this._createUndoRedoManager()},_createTemplatePicker:function(){if(this._settings.templatePicker)this.templatePicker=this._settings.templatePicker,u.hide(this.templatePickerDiv);else{var t=i.filter(this._settings.layers,function(t){return t.getEditCapabilities().canCreate});this.templatePicker=new S({"class":"esriTemplatePicker",featureLayers:t,showTooltip:!0,maxLabelLength:this._settings.typesCharacterLimit,columns:"auto",rows:"auto"},this.templatePickerDiv),this.templatePicker.startup(),this._settings.templatePicker=this.templatePicker}this._templatePickerOnSelectionChangeEvent=s.connect(this.templatePicker,"onSelectionChange",e.hitch(this,"_onCreateFeature"))},_createAttributeInspector:function(t){if(this._settings.attributeInspector)this._customAttributeInspector=!0,this.attributeInspector=this._settings.attributeInspector;else{this._customAttributeInspector=!1;var s=this._settings.map;this.attributeInspector=new v({layerInfos:this._settings.layerInfos,hideNavButtons:this._usePopup,datePackage:this._datePackage},l.create("div")),this.attributeInspector.startup(),s.infoWindow.setContent(this.attributeInspector.domNode),s.infoWindow.setTitle(G.widgets.attributeInspector.NLS_title),s.infoWindow.resize(350,375),r.query(".esriAttributeInspector .atiLayerName").style({display:"none"})}this._connect(this.attributeInspector,"onDelete",e.hitch(this,"_deleteFeature")),this._connect(this.attributeInspector,"onNext",e.hitch(this,function(t){this._updateCurrentFeature(e.hitch(this,function(){this._attributeChanged=!1,this._onEditFeature(t)}))})),this._usePopup&&this._settings.map.infoWindow._setPagerCallbacks(this.attributeInspector,e.hitch(this.attributeInspector,"next"),e.hitch(this.attributeInspector,"previous")),t?this._connect(this.attributeInspector,"onAttributeChange",e.hitch(this,"_saveAttributesOnClient")):this._connect(this.attributeInspector,"onAttributeChange",e.hitch(this,function(t,s,r){var n=t.getLayer(),a=i.filter(n.fields,function(t){return t.name===s})[0];a&&""===r&&(r=null),this._rollbackGraphic=new f(e.clone(t.toJson())),this.attributeInspector._rollbackInfo={field:a,graphic:this._rollbackGraphic},this._currentGraphic.attributes[s]="number"==typeof r&&isNaN(r)?null:r,this._updateFeature(this._currentGraphic,null,!0),this._attributeChanged=!1}))},_createDrawingToolbar:function(){this._settings.toolbarVisible===!0&&(this.drawingToolbar=new R({"class":"esriDrawingToolbar",drawToolbar:this._drawToolbar,editToolbar:this.editToolbar,settings:this._settings,onDelete:e.hitch(this,"_deleteFeature"),onApplyEdits:e.hitch(this,"_applyEdits"),onShowAttributeInspector:e.hitch(this,"_onEditFeature")},this.drawingToolbarDiv))},_createUndoRedoManager:function(){(this._settings.enableUndoRedo||this._settings.undoManager)&&(this._settings.enableUndoRedo=!0,this.undoManager=this._settings.undoManager,this.undoManager||(this.undoManager=this._settings.undoManager=new b({maxOperations:this._settings.maxUndoRedoOperations})),this._connect(document,"onkeypress",e.hitch(this,function(t){(t.metaKey||t.ctrlKey)&&("z"===t.charOrCode&&this._undo(),"y"===t.charOrCode&&this._redo())})))},_enableMapClickHandler:function(){this._mapClickHandler=s.connect(this._settings.map,"onClick",e.hitch(this,function(t){return this._drawToolbar._geometryType?void 0:"SELECT"===this._activeTool?void(this._activeTool=""):void this._updateCurrentFeature(e.hitch(this,function(){this._reset(),this._updateSelection(t)}))}))},_disableMapClickHandler:function(){s.disconnect(this._mapClickHandler)},_onCreateFeature:function(){var t=this.templatePicker.getSelected();t?this._updateCurrentFeature(e.hitch(this,function(){this._currentGraphic&&this._clearSelection(!1),this._reset(),this._activateDrawToolbar(t)})):(this._reset(),s.disconnect(this._dtConnect),this._drawToolbar.deactivate(),this._enableMapClickHandler(),this.drawingToolbar&&this.drawingToolbar.deactivate())},_isTextSymbolPoint:function(t){if("point"===t.geometry.type||"multipoint"===t.geometry.type){var e=t.getLayer(),i=e.renderer,s=t.symbol||e._getSymbol(t);if(!s&&(i.hasVisualVariables("sizeInfo",!1)||i.hasVisualVariables("colorInfo",!1)||i.hasVisualVariables("opacityInfo",!1))&&i.addBreak&&i.infos&&1===i.infos.length&&(s=i.infos[0].symbol||i.defaultSymbol),s&&"textsymbol"===s.type)return!0}return!1},_isTextSymbolPointLayer:function(t){return"esriGeometryPoint"===t.geometryType&&t.renderer&&t.renderer._symbols&&t.renderer._symbols[0]&&t.renderer._symbols[0].symbol&&"textsymbol"===t.renderer._symbols[0].symbol.type?!0:!1},_updateAttributeDisabled:function(t){var e=t.getLayer();if(!e)return!1;var i,s,r=!1;for(i=0;i<this._settings.layerInfos.length;i++)if(s=this._settings.layerInfos[i],s.featureLayer==e){r=s.disableAttributeUpdate;break}return r},_onEditFeature:function(t,i){if(t=(e.isArray(t)?t[0]:t)||null){if(this._layer=t.getLayer(),!this._customAttributeInspector&&!this._updateAttributeDisabled(t)){if(i=i||this._editClickPoint||this._findCenterPoint(t),this._currentFeatureCount>1){var s=(this._popupFeatures.indexOf(t),this._currentFeatureCount-this._popupFeatures.indexOf(t)+1);s>this._currentFeatureCount&&(s=1),this._settings.map.infoWindow.setTitle(c.substitute(G.widgets.popup.NLS_pagingInfo,{index:s,total:this._currentFeatureCount}))}else this._settings.map.infoWindow.setTitle(this._layer?this._layer.name:G.widgets.attributeInspector.NLS_title);(this.drawingToolbar||!this._settings.map.infoWindow.isShowing)&&this._showInfoWindow(i,this._settings.map.getInfoWindowAnchor(i)),this._editClickPoint=null}t!==this._currentGraphic&&(this._editVertices=!0,this._currentGraphic=t,t.getDojoShape()&&t.getDojoShape().moveToFront(),this._layer.hasM||this._activateEditToolbar(t))}},_applyEdits:function(t,s){if(t=t||[],!(t.length<=0)){this._edits=this._oEdits=t;var r=[];i.forEach(t,function(t){t.layer&&r.push(t.layer.applyEdits(t.adds,t.updates,t.deletes))}),r.length>0&&(this._deferredsList=new o(r).addCallback(e.hitch(this,function(){u.hide(this.progressBar.domNode),s&&s();var t=this._settings.map;t&&t.infoWindow.reposition&&t.infoWindow.isShowing&&t.infoWindow.reposition()})))}},_undo:function(){this._settings.undoManager&&!this._settings._isApplyEditsCall&&(this.editToolbar.deactivate(),this._undoRedo=!0,this._settings.undoManager.undo())},_redo:function(){this._settings.undoManager&&!this._settings._isApplyEditsCall&&(this.editToolbar.deactivate(),this._undoRedo=!0,this._settings.undoManager.redo())},_simplify:function(t,e){y.prototype.isSelfIntersecting(t)?this._settings.geometryService.simplify([t],function(t){var i=t&&t.length?t[0]:i;e&&e(i)}):e&&e(t)},_autoComplete:function(t,i){var s=this._getLayers("esriGeometryPolygon"),r=new T;r.geometry=t,r.returnGeometry=!0,this._selectFeatures(s,r,e.hitch(this,function(e){!e||e.length<=0?i&&i([t]):this._settings.geometryService.autoComplete(p.getGeometries(e),this._toPolylines([r.geometry]),function(t){i&&i(t)})}))},_getLayers:function(t){var e=this._settings.layers;return i.filter(e,function(e){return e.geometryType===t})},_selectFeatures:function(t,e,i,s){this._selectionHelper.selectFeatures(t,e,s||m.SELECTION_NEW,i)},_updateSelection:function(t){var s=t.mapPoint,r=t.graphic;if(r&&r.getLayer()&&!this._isValidLayer(r.getLayer()))return void this._clearSelection();if(this._selectionHelper.selectFeaturesByGeometry(this._settings.layers,s,m.SELECTION_NEW,e.hitch(this,function(t){var n=i.some(t,e.hitch(this,function(t){return t==r}));if(r&&!n){var a=r.getLayer();if(this._isValidLayer(a)){var o=new T;o.objectIds=[r.attributes[a.objectIdField]],this._selectionHelper.selectFeatures([a],o,m.SELECTION_ADD,e.hitch(this,function(t){this._updatePopupButtons(t),this._onEditFeature(t,s)}))}else this._clearSelection()}else t&&t.length?(this._updatePopupButtons(t),this._onEditFeature(t,s)):this._clearSelection()})),r&&this._isTextSymbolPoint(r)){var n=0;n=n|L.MOVE|L.ROTATE|L.SCALE|L.EDIT_TEXT,this.editToolbar.activate(n,r)}},_updatePopupButtons:function(t){if(!this._usePopup||!t)return this._popupFeatures=null,void(this._currentFeatureCount=null);var s=t.length,n=[this._settings.map.infoWindow._prevFeatureButton,this._settings.map.infoWindow._nextFeatureButton];i.forEach(n,e.hitch(this,function(t){s>1?h.remove(t,"hidden"):h.add(t,"hidden")}));var a=s>1?"block":"none";r.query(".esriAttributeInspector .atiLayerName").style({display:a}),this._currentFeatureCount=s,this._popupFeatures=t},_clearSelection:function(t){this._currentFeatureCount=0,this._popupFeatures=null,this._selectionHelper.clearSelection(t||!1),this._reset()},_findCenterPoint:function(t){var e,i=t.geometry||t;switch(i.type){case"point":e=i;break;case"polyline":var s=i.paths[0].length;e=i.getPoint(0,Math.ceil(s/2));break;case"polygon":var r=i.rings.length-1,n=i.rings[r].length-1;e=i.getPoint(r,n)}return this._settings.map.toScreen(e)},_hideAttributeInspector:function(){!this._customAttributeInspector&&this._settings.map.infoWindow&&this._settings.map.infoWindow.hide()},_toPolylines:function(t){var e=i.map(t,function(t){var e=new g(t.spatialReference);return i.forEach(t.rings,function(t){e.addPath(t)}),e});return e},_isNotesFeature:function(t){var e=t.getLayer(),s=e?e.types||null:null;if(!s)return!1;var r,n=t.attributes[e.typeIdField];if(i.some(s,function(t){return t.id===n?(r=t.templates,!0):!1}),!r)return!1;var a=r[0]||null;if(!a)return!1;var o=this._isShapeTool(a.drawingTool)||null;return o?!0:!1},_isValidLayer:function(t){var e,i=this._settings.layerInfos;for(e=0;e<i.length;e++){var s=i[e],r=s.featureLayer?s.featureLayer.id:s.layerId;if(t.id==r)return!0}return!1},_isShapeTool:function(t){switch(t){case E.TOOL_ARROW:return O.ARROW;case E.TOOL_LEFT_ARROW:return O.LEFT_ARROW;case E.TOOL_RIGHT_ARROW:return O.RIGHT_ARROW;case E.TOOL_UP_ARROW:return O.UP_ARROW;case E.TOOL_DOWN_ARROW:return O.DOWN_ARROW;case E.TOOL_CIRCLE:return O.CIRCLE;case E.TOOL_ELLIPSE:return O.ELLIPSE;case E.TOOL_TRIANGLE:return O.TRIANGLE;case E.TOOL_RECTANGLE:return O.RECTANGLE;default:return null}},_toDrawTool:function(t,e){var i=e.geometryType;switch(t){case E.TOOL_POINT:return O.POINT;case E.TOOL_ARROW:return O.ARROW;case E.TOOL_LEFT_ARROW:return O.LEFT_ARROW;case E.TOOL_RIGHT_ARROW:return O.RIGHT_ARROW;case E.TOOL_UP_ARROW:return O.UP_ARROW;case E.TOOL_DOWN_ARROW:return O.DOWN_ARROW;case E.TOOL_CIRCLE:return O.CIRCLE;case E.TOOL_ELLIPSE:return O.ELLIPSE;case E.TOOL_TRIANGLE:return O.TRIANGLE;case E.TOOL_RECTANGLE:return O.RECTANGLE;case E.TOOL_LINE:return O.POLYLINE;case E.TOOL_POLYGON:return O.POLYGON;case E.TOOL_FREEHAND:return"esriGeometryPolyline"===i?O.FREEHAND_POLYLINE:O.FREEHAND_POLYGON;default:var s=O.POINT;return"esriGeometryPolyline"===i?(s=O.POLYLINE,this._settings.createOptions.polylineDrawTools[0]===k.CREATE_TOOL_FREEHAND_POLYLINE&&(s=O.FREEHAND_POLYLINE)):"esriGeometryPolygon"===i&&(s=O.POLYGON,this._settings.createOptions.polygonDrawTools[0]===k.CREATE_TOOL_FREEHAND_POLYGON&&(s=O.FREEHAND_POLYGON)),s}},_isModified:function(){var t=this.editToolbar.getCurrentState();return(t.isModified||this._attributeChanged)&&t.graphic?t.graphic:null},_showInfoWindow:function(t,e){this._customAttributeInspector||this._settings.map.infoWindow.show(t,e)}});return e.mixin(k,{CREATE_TOOL_POLYLINE:"polyline",CREATE_TOOL_FREEHAND_POLYLINE:"freehandpolyline",CREATE_TOOL_POLYGON:"polygon",CREATE_TOOL_FREEHAND_POLYGON:"freehandpolygon",CREATE_TOOL_AUTOCOMPLETE:"autocomplete",CREATE_TOOL_RECTANGLE:"rectangle",CREATE_TOOL_TRIANGLE:"triangle",CREATE_TOOL_CIRCLE:"circle",CREATE_TOOL_ELLIPSE:"ellipse",CREATE_TOOL_ARROW:"arrow",CREATE_TOOL_UP_ARROW:"uparrow",CREATE_TOOL_DOWN_ARROW:"downarrow",CREATE_TOOL_RIGHT_ARROW:"rightarrow",CREATE_TOOL_LEFT_ARROW:"leftarrow"}),n("extend-esri")&&e.setObject("dijit.editing.Editor",k,F),k});