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

define(["../kernel","../numberUtils","../dijit/RendererSlider","../dijit/RendererSlider/sliderUtils","../Color","dijit/_TemplatedMixin","dijit/_WidgetBase","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/debounce","dojo/dom-style","dojo/Evented","dojo/has","dojo/dom-construct","dojo/dom-class","dojox/gfx","dojo/text!./SizeInfoSlider/templates/SizeInfoSlider.html"],function(t,i,e,s,a,o,h,l,n,m,r,u,d,c,_,p,f,g){var S=n([h,o,d],{declaredClass:"esri.dijit.SizeInfoSlider",baseClass:"esriSizeInfoSlider",templateString:g,values:null,minValue:null,maxValue:null,minSize:null,maxSize:null,histogram:null,statistics:!1,zoomOptions:null,showHistogram:!0,showStatistics:!0,showLabels:!0,showTicks:!0,showHandles:!0,histogramWidth:100,rampWidth:26,symbolWidth:50,_rampNode:null,_sliderHeight:null,_barsGroup:null,_updateTimer:null,_forceMinValue:null,_forceMaxValue:null,constructor:function(t,i){i&&(void 0!==t.minValue&&this.set("_forceMinValue",t.minValue),void 0!==t.maxValue&&this.set("_forceMaxValue",t.maxValue),this._css={handlerTickSize:"esri-handler-tick-size"},this._updateTimeout=r(this._updateTimeout,0),this._attachSymbols=r(this._attachSymbols,0))},postCreate:function(){this.inherited(arguments),this._setupDataDefaults()},startup:function(){this.inherited(arguments),this._slider=new e({type:"SizeInfoSlider",values:this.values,minimum:this.zoomOptions?this.zoomOptions.minSliderValue:this.minValue,maximum:this.zoomOptions?this.zoomOptions.maxSliderValue:this.maxValue,_minZoomLabel:this.zoomOptions?this.minValue:null,_maxZoomLabel:this.zoomOptions?this.maxValue:null,_isZoomed:this.zoomOptions?!0:!1,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles},this._sliderNode),this._slider.startup(),this._rampNode=this._slider._sliderAreaRight,this._sliderHeight=u.get(this._rampNode,"height")||155,this._createSVGSurfaces(),this._slider.on("slide",m.hitch(this,function(t){this._fillRamp(t.values)})),this._slider.on("change",m.hitch(this,function(t){this.sizeInfo.minDataValue=t.values[0],this.sizeInfo.maxDataValue=t.values[1],this.set("values",[this.sizeInfo.minDataValue,this.sizeInfo.maxDataValue]),this._fillRamp(),this.emit("change",m.clone(this.sizeInfo))})),this._slider.on("handle-value-change",m.hitch(this,function(t){this.set("values",t.values),this.sizeInfo.minDataValue=t.values[0],this.sizeInfo.maxDataValue=t.values[1],this._updateRendererSlider(),this.emit("handle-value-change",m.clone(this.sizeInfo))})),this._slider.on("data-value-change",m.hitch(this,function(t){this.set({minValue:t.min,maxValue:t.max}),this._updateRendererSlider(),this.emit("data-value-change",{minValue:t.min,maxValue:t.max,sizeInfo:m.clone(this.sizeInfo)})})),this._slider.on("stop",m.hitch(this,function(){this.emit("handle-value-change",m.clone(this.sizeInfo))})),this._slider.on("zoom-out",m.hitch(this,function(){this.set("zoomOptions",null)})),this.statistics&&this.showStatistics&&this._generateStatistics(),this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram(),this.watch("minValue",this._updateTimeout),this.watch("maxValue",this._updateTimeout),this.watch("symbol",this._updateTimeout),this.watch("sizeInfo",this._updateTimeout),this.watch("minSize",this._updateTimeout),this.watch("maxSize",this._updateTimeout),this.watch("statistics",this._updateTimeout),this.watch("histogram",this._updateTimeout),this.watch("zoomOptions",this._updateTimeout),this.watch("showHistogram",this._toggleHistogram),this.watch("zoomOptions",this._zoomEventHandler)},destroy:function(){this.inherited(arguments),this._slider&&this._slider.destroy(),this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy(),this.countTooltips&&l.forEach(this.countTooltips,function(t){t.destroy()})},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){this.set({minSize:this.sizeInfo.minSize,maxSize:this.sizeInfo.maxSize,values:[this.sizeInfo.minDataValue,this.sizeInfo.maxDataValue]}),null!==this.zoomOptions&&this.zoomOptions!==!1?(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue,this._slider.set({minimum:this.zoomOptions.minSliderValue,maximum:this.zoomOptions.maxSliderValue,_minZoomLabel:this.minValue,_maxZoomLabel:this.maxValue,_isZoomed:!0})):this._slider.set({minimum:this.minValue,maximum:this.maxValue,_minZoomLabel:null,_maxZoomLabel:null,_isZoomed:!1}),this._slider.set("values",this.values),this._slider._reset(),this._slider._updateRoundedLabels(),this._slider._generateMoveables(),this._clearRect(),this._createSVGSurfaces(),this.statistics&&this.showStatistics&&this._generateStatistics(),this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram()},_zoomEventHandler:function(){this.emit("zoomed",!!this.zoomOptions)},_setupDataDefaults:function(){this.set({minSize:this.sizeInfo.minSize,maxSize:this.sizeInfo.maxSize}),this.set(this.statistics?{minValue:this.statistics.min,maxValue:this.statistics.max}:{minValue:0,maxValue:100}),null!==this._forceMinValue&&this.set("minValue",this._forceMinValue),null!==this._forceMaxValue&&this.set("maxValue",this._forceMaxValue),null!==this.zoomOptions&&this.zoomOptions!==!1&&(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue),null===this.sizeInfo.minDataValue&&null===this.sizeInfo.maxDataValue||0===this.sizeInfo.minDataValue&&0===this.sizeInfo.maxDataValue?null===this.minValue&&null===this.maxValue&&this.set({minValue:0,maxValue:100,values:[20,80]}):this.minValue===this.maxValue?this.set(0===this.minValue?{maxValue:100,values:[20,80]}:null===this.minValue?{minValue:0,maxValue:100,values:[20,80]}:{minValue:0,maxValue:2*this.minValue,values:[this.maxValue/5,this.maxValue/5*4]}):this.set("values",[this.sizeInfo.minDataValue,this.sizeInfo.maxDataValue]),null===this.minValue&&this.set("minValue",0),null===this.maxValue&&this.set("maxValue",100)},_createSVGSurfaces:function(){this._proportionalSymbolSurface=f.createSurface(this._rampNode,this.rampWidth,this._sliderHeight),this._surfaceRect=this._proportionalSymbolSurface.createRect({width:this.rampWidth,height:this._sliderHeight}),this._histogramSurface=s.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth),this._fillRamp(),this._attachSymbols()},_attachSymbols:function(){this._attachSymbol(this._slider.moveables[0],this.minSize,"min"),this._attachSymbol(this._slider.moveables[1],this.maxSize,"max")},_attachSymbol:function(t,i){t._symbol||(t._symbol=_.create("div",{style:"position: absolute; left: 10px;"},t));var e,s=u.get(t._handleContainer,"height"),a=t._symbol,o=this.symbol||{type:"custom"};switch(o.type){case"simplelinesymbol":e=i===this.minSize?5:13,this._generateLineSymbol(t,e,s);break;case"simplemarkersymbol":default:e=i===this.minSize?12:48,this._generateCircleSymbol(a,e,s)}return a},_generateLineSymbol:function(t,i,e){var s,o=t._tick,h=t._symbol;return p.add(o,this._css.handlerTickSize),u.set(h,"top",e/2-i+"px"),u.set(h,"height",2*i+"px"),u.set(h,"width",i-4+"px"),h.innerHTML="",s=f.createSurface(h),s.rawNode.style.position="absolute",s.rawNode.style.top=1===i?"1px":i/2+"px",this.isLeftToRight()||(s.rawNode.style.left="-45px"),s.setDimensions(this.rampWidth,i),s.createRect({width:this.rampWidth,height:i}).setFill(new a([0,121,193,.8])),s},_generateCircleSymbol:function(t,i,e){var s,o=i/2,h=1,l=12===i?!0:!1;return u.set(t,"top",e/2-(o+h)+"px"),u.set(t,"height",2*(o+h)+"px"),u.set(t,"width",l?2*(o+h):o+"px"),u.set(t,"left",l?"8px":"10px"),t.innerHTML="",s=f.createSurface(t),s.rawNode.style.position="absolute",this.isLeftToRight()||(s.rawNode.style.left="-45px"),l?(s.setDimensions(2*(o+h),2*(o+h)),s.createCircle({cx:7,cy:o+h,r:o}).setFill(new a([0,121,193,.8])).setStroke("#fff")):(s.setDimensions(o+h,2*(o+h)),s.createCircle({cx:0,cy:o+h,r:o}).setFill(new a([0,121,193,.8])).setStroke("#fff")),s},_fillRamp:function(t){var i=this._slider,e=this._sliderHeight,s=t?t[0]:i.values[0],a=t?t[1]:i.values[1],o=Math.round(e-(s-i.minimum)/(i.maximum-i.minimum)*e),h=Math.round(e-(a-i.minimum)/(i.maximum-i.minimum)*e),l=10,n=this.rampWidth;this._proportionalSymbolSurface.clear(),this._proportionalSymbolSurface.createPath().moveTo(n,0).lineTo(n,h).lineTo(l,o).lineTo(l,e).lineTo(0,e).lineTo(0,0).closePath().setFill("#9a9a9a"),u.set(this._proportionalSymbolSurface.rawNode,"overflow","visible"),u.set(this._proportionalSymbolSurface.rawNode,"background-color","#d9d9d9"),null!==this.zoomOptions&&this.zoomOptions!==!1&&(this.toggleSliderBottom&&this.toggleSliderTop?(this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(f.matrix.translate(0,5)),this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(f.matrix.translate(0,195))):this.toggleSliderBottom?this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(f.matrix.translate(0,195)):this.toggleSliderTop&&this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(f.matrix.translate(0,5)))},_clearRect:function(){this._proportionalSymbolSurface.destroy(),this._histogramSurface.destroy()},_showHistogram:function(){this.histogram||this.zoomOptions&&this.zoomOptions.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(u.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):u.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){var t=this.zoomOptions&&this.zoomOptions.histogram?this.zoomOptions.histogram:this.histogram;this._barsGroup=s.generateHistogram(this._histogramSurface,t,this.histogramWidth,this.rampWidth,this.isLeftToRight()),this.countTooltips=s.generateCountTooltips(t,this._barsGroup)},_generateStatistics:function(){if(!(this.statistics.count<2||isNaN(this.statistics.avg))){var t,e,a,o,h=this.statistics,l=this._slider,n=this.zoomOptions||null,m=s.getPrecision(this.maxValue);h.min===h.max&&h.min===h.avg?(a=0,o=2*h.avg):(a=h.min,o=h.max),(a!==l.minimum||o!==l.maximum)&&(a=l.minimum,o=l.maximum),n&&(a=n.minSliderValue,o=n.maxSliderValue),t=this._sliderHeight*(o-h.avg)/(o-a),e=i.round([h.avg,o,a])[0],this._avgHandleObjs=s.generateAvgLine(this._histogramSurface,e,t,m,this.isLeftToRight())}}});return c("extend-esri")&&m.setObject("dijit.SizeInfoSlider",S,t),S});