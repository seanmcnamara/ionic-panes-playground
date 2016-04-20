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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/Evented","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/layout/AccordionContainer","dijit/TitlePane","dojox/widget/TitleGroup","../../kernel","./AnalysisToolItem","./utils","dojo/i18n!../../nls/jsapi","dojo/text!./templates/Analysis.html"],function(o,e,t,n,i,s,l,c,a,h,r,d,p,T,m,u,g,v,_,S,w,I,f,L,y,C,b,j,D){var A=e([u,g,v,_,S,m],{declaredClass:"esri.dijit.analysis.Analysis",templateString:D,widgetsInTemplate:!0,i18n:null,helpFileName:"Analysis",constructor:function(){this._pbConnects=[]},postMixInProperties:function(){this.inherited(arguments),this.i18n={},t.mixin(this.i18n,j.common),t.mixin(this.i18n,j.tocPanel),t.mixin(this.i18n,j.analysisTools)},startup:function(){this.inherited(arguments),this._titlePanes=[this._summarizeTools,this._locationTools,this._geoenrichTools,this._analyzePatTools,this._proximityTools,this._managedataTools],n.forEach(this._titlePanes,function(o){r.set(o.titleNode,"innerHTML","<span class='esriFloatTrailing helpIcon' esriHelpTopic='"+o.get(o.get("data-esrihelptopic")?"data-esrihelptopic":"data-esriHelpTopic")+"' data-dojo-attach-point='_helpIconNode'></span>"+o.titleNode.innerHTML)},this),this.set("summarizeTools"),this.set("locationTools"),this.set("geoenrichTools"),this.set("analyzePatterns"),this.set("proximityTools"),this.set("manageDataTools"),this._leftAccordion.startup(),n.forEach(this._titlePanes,function(o){o.startup()}),b.initHelpLinks(this.domNode)},destroy:function(){this.inherited(arguments),n.forEach(this._pbConnects,i.disconnect),delete this._pbConnects},_connect:function(o,e,t){this.own(o.on(e,t))},_setSummarizeToolsAttr:function(){var o=d.create("div"),e=new C({name:this.i18n.aggregatePoints,helpTopic:"AggregatePointsTool",toolIcon:"aggregateIcon"},d.create("div",null,o));e.set("showComingSoonLabel",!1),this._connect(e,"tool-select",t.hitch(this,"onToolSelect"));var n=new C({name:this.i18n.summarizeNearby,helpTopic:"SummarizeNearbyTool",toolIcon:"sumNearbyIcon"},d.create("div",null,o));n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect"));var i=new C({name:this.i18n.summarizeWithin,helpTopic:"SummarizeWithinTool",toolIcon:"sumWithinIcon"},d.create("div",null,o));i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect")),this._summarizeTools.set("content",o)},_setLocationToolsAttr:function(){var o=d.create("div"),e=new C({name:this.i18n.findExistingLocations,helpTopic:"FindExistingLocationsTool",toolIcon:"findLocationsIcon"},d.create("div",null,o));e.set("showComingSoonLabel",!1),this._connect(e,"tool-select",t.hitch(this,"onToolSelect"));var n=new C({name:this.i18n.deriveNewLocations,helpTopic:"DeriveNewLocationsTool",toolIcon:"findNewLocationsIcon"},d.create("div",null,o));n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect"));var i=new C({name:this.i18n.findSimilarLocations,helpTopic:"FindSimilarLocationsTool",toolIcon:"findSimilarLocationsIcon"},d.create("div",null,o));i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect"));var s=new C({name:this.i18n.chooseBestFacilities,helpTopic:"ChooseBestFacilitiesTool",toolIcon:"chooseBestFacilitiesIcon"},d.create("div",null,o));s.set("showComingSoonLabel",!1),this._connect(s,"tool-select",t.hitch(this,"onToolSelect"));var l=new C({name:this.i18n.createViewshed,helpTopic:"CreateViewshedTool",toolIcon:"createViewshedIcon"},d.create("div",null,o));l.set("showComingSoonLabel",!1),this._connect(l,"tool-select",t.hitch(this,"onToolSelect"));var c=new C({name:this.i18n.createWatershed,helpTopic:"CreateWatershedsTool",toolIcon:"createWatershedIcon"},d.create("div",null,o));c.set("showComingSoonLabel",!1),this._connect(c,"tool-select",t.hitch(this,"onToolSelect"));var a=new C({name:this.i18n.traceDownstream,helpTopic:"TraceDownstreamTool",toolIcon:"traceDownstreamIcon"},d.create("div",null,o));a.set("showComingSoonLabel",!1),this._connect(a,"tool-select",t.hitch(this,"onToolSelect")),this._locationTools.set("content",o)},_setGeoenrichToolsAttr:function(){var o=d.create("div"),e=new C({name:this.i18n.enrichLayer,helpTopic:"EnrichLayerTool",toolIcon:"geoenrichLayerIcon"},d.create("div",null,o));e.set("showComingSoonLabel",!1),this._connect(e,"tool-select",t.hitch(this,"onToolSelect")),this._geoenrichTools.set("content",o)},_setProximityToolsAttr:function(){var o=d.create("div"),e=new C({name:this.i18n.createBuffers,helpTopic:"CreateBuffersTool",toolIcon:"buffersIcon"},d.create("div",null,o));this._connect(e,"tool-select",t.hitch(this,"onToolSelect")),e.set("showComingSoonLabel",!1);var n=new C({name:this.i18n.createDriveTimeAreas,helpTopic:"CreateDriveTimeAreasTool",toolIcon:"driveIcon"},d.create("div",null,o));h.set(n.optionsDiv,"margin-top","0"),n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect"));var i=new C({name:this.i18n.findNearest,helpTopic:"FindNearestTool",toolIcon:"findClosestFacilityIcon"},d.create("div",null,o));i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect"));var s=new C({name:this.i18n.planRoutes,helpTopic:"PlanRoutesTool",toolIcon:"planRoutesIcon"},d.create("div",null,o));h.set(s.optionsDiv,"margin-top","0"),s.set("showComingSoonLabel",!1),this._connect(s,"tool-select",t.hitch(this,"onToolSelect"));var l=new C({name:this.i18n.connectOriginsToDestinations,helpTopic:"ConnectOriginsToDestinationsTool",toolIcon:"connectODIcon"},d.create("div",null,o));h.set(l.optionsDiv,"margin-top","0"),l.set("showComingSoonLabel",!1),this._connect(l,"tool-select",t.hitch(this,"onToolSelect")),this._proximityTools.set("content",o)},_setAnalyzePatternsAttr:function(){var o,e,n,i;o=d.create("div"),i=new C({name:this.i18n.calculateDensity,helpTopic:"CalculateDensityTool",toolIcon:"createDensitySurfaceIcon"},d.create("div",null,o)),i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect")),e=new C({name:this.i18n.findHotSpots,helpTopic:"FindHotSpotsTool",toolIcon:"findHotSpotsIcon"},d.create("div",null,o)),e.set("showComingSoonLabel",!1),this._connect(e,"tool-select",t.hitch(this,"onToolSelect")),n=new C({name:this.i18n.interpolatePoints,helpTopic:"InterpolatePointsTool",toolIcon:"createInterpolatedSurfaceIcon"},d.create("div",null,o)),n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect")),this._analyzePatTools.set("content",o)},_setInterpolateToolsAttr:function(){var o,e;o=d.create("div"),e=new C({name:this.i18n.createInterpolatedSurface,helpTopic:"SummarizeWithinTool",toolIcon:"createInterpolatedSurfaceIcon"},d.create("div",null,o)),this._interpolateTools.set("content",o)},_setManageDataToolsAttr:function(){var o,e,n,i,s;o=d.create("div"),e=new C({name:this.i18n.dissolveBoundaries,helpTopic:"DissolveBoundariesTool",toolIcon:"dissolveBoundariesIcon"},d.create("div",null,o)),e.set("showComingSoonLabel",!1),this._connect(e,"tool-select",t.hitch(this,"onToolSelect")),n=new C({name:this.i18n.extractData,helpTopic:"ExtractDataTool",toolIcon:"extractDataIcon"},d.create("div",null,o)),n.set("showComingSoonLabel",!1),this._connect(n,"tool-select",t.hitch(this,"onToolSelect")),i=new C({name:this.i18n.mergeLayers,helpTopic:"MergeLayersTool",toolIcon:"mergeLayersIcon"},d.create("div",null,o)),i.set("showComingSoonLabel",!1),this._connect(i,"tool-select",t.hitch(this,"onToolSelect")),s=new C({name:this.i18n.overlayLayers,helpTopic:"OverlayLayersTool",toolIcon:"overlayLayersIcon"},d.create("div",null,o)),s.set("showComingSoonLabel",!1),this._connect(s,"tool-select",t.hitch(this,"onToolSelect")),this._managedataTools.set("content",o)},_getSelectedCategoryAttr:function(){var o;return o=n.filter(this._titlePanes,function(o){return o.open})[0],o.get("data-esrihelptopic")},_getSelectedPaneAttr:function(){var o;return o=n.filter(this._titlePanes,function(o){return o.open})[0]},_setSelectedCategoryAttr:function(o){console.log("setting",o);var e;n.forEach(this._titlePanes,function(t){e=t.get("data-esrihelptopic"),e===o&&t.set("open",!0)},this)},hide:function(o){var e=p("div[data-esrihelptopic ='"+o+"']");0===e.length&&(e=p("a[esrihelptopic ='"+o+"']")),e.length>0&&e.forEach(function(o){o&&w.getEnclosingWidget(o)&&h.set(w.getEnclosingWidget(o).domNode,"display","none")})},disable:function(o,e){var t=p("div[data-esrihelptopic ='"+o+"']");0===t.length&&(t=p("a[esrihelptopic ='"+o+"']")),t.length>0&&t.forEach(function(o){if(o&&w.getEnclosingWidget(o)){var t=w.getEnclosingWidget(o);t.set("showComingSoonLabel",e),h.set(t.optionsDiv,"display","none"),e&&n.forEach(this._pbConnects,function(o){o._nodeId===t.id&&(i.disconnect(o),o=null)},this)}},this)},onToolSelect:function(){}});return l("extend-esri")&&t.setObject("dijit.analysis.Analysis",A,y),A});