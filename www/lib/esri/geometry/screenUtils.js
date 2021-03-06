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

define(["dojo/_base/array","dojo/_base/lang","dojo/sniff","../kernel","./Point","./ScreenPoint","./Polyline","./Polygon","./Multipoint","./Extent"],function(n,e,t,i,r,a,o,f,c,u){function s(n,e,t,i,o){var f,c=n.spatialReference,u=i.spatialReference,s=i.x,g=i.y;return c&&u&&!c.equals(u)&&c._canProject(u)&&(f=c.isWebMercator()?r.lngLatToXY(s,g):r.xyToLngLat(s,g,!0),s=f[0],g=f[1]),s=(s-n.xmin)*(e/n.getWidth()),g=(n.ymax-g)*(t/n.getHeight()),o||(s=Math.round(s),g=Math.round(g)),new a(s,g)}function g(e,t,i,a){var s=e.xmin,g=e.ymax,h=t/e.getWidth(),x=i/e.getHeight(),p=n.forEach,m=Math.round;if(a instanceof r)return new r(m((a.x-s)*h),m((g-a.y)*x));if(a instanceof c){var l=new c,y=l.points;return p(a.points,function(n,e){y[e]=[m((n[0]-s)*h),m((g-n[1])*x)]}),l}if(a instanceof u)return new u(m((a.xmin-s)*h),m((g-a.ymin)*x),m((a.xmax-s)*h),m((g-a.ymax)*h));if(a instanceof o){var d,v=new o,M=v.paths;return p(a.paths,function(n,e){d=M[e]=[],p(n,function(n,e){d[e]=[m((n[0]-s)*h),m((g-n[1])*x)]})}),v}if(a instanceof f){var w,P=new f,L=P.rings;return p(a.rings,function(n,e){w=L[e]=[],p(n,function(n,e){w[e]=[m((n[0]-s)*h),m((g-n[1])*x)]})}),P}}function h(n,e,t,i,a,f){var c,u,s=i instanceof o,g=n.spatialReference,h=i.spatialReference;return g&&h&&!g.equals(h)&&g._canProject(h)&&(g.isWebMercator()?c=r.lngLatToXY:(c=r.xyToLngLat,u=!0)),m(n.xmin,n.ymax,e/n.getWidth(),t/n.getHeight(),a,f,s?i.paths:i.rings,c,u)}function x(n,e,t,i){return new r(n.xmin+i.x/(e/n.getWidth()),n.ymax-i.y/(t/n.getHeight()),n.spatialReference)}function p(e,t,i,a){var s=e.xmin,g=e.ymax,h=e.spatialReference,x=t/e.getWidth(),p=i/e.getHeight(),m=n.forEach;if(a instanceof r)return new r(s+a.x/x,g-a.y/p,h);if(a instanceof c){var l=new c(h),y=l.points;return m(a.points,function(n,e){y[e]=[s+n[0]/x,g-n[1]/p]}),l}if(a instanceof u)return new u(s+a.xmin/x,g-a.ymin/p,s+a.xmax/x,g-a.ymax/p,h);if(a instanceof o){var d,v=new o(h),M=v.paths;return m(a.paths,function(n,e){d=M[e]=[],m(n,function(n,e){d[e]=[s+n[0]/x,g-n[1]/p]})}),v}if(a instanceof f){var w,P=new f(h),L=P.rings;return m(a.rings,function(n,e){w=L[e]=[],m(n,function(n,e){w[e]=[s+n[0]/x,g-n[1]/p]})}),P}}var m=function(){return t("ie")<9?function(n,e,t,i,r,a,o,f,c){var u,s,g,h,x,p,m,l,y,d=[],v=Math.round,M=o.length;for(u=0;M>u;u++)if(s=o[u],x=f?f(s[0][0],s[0][1],c):s[0],(h=s.length)>1)for(p=v((x[0]-n)*t+r),m=v((e-x[1])*i+a),x=f?f(s[1][0],s[1][1],c):s[1],l=v((x[0]-n)*t+r),y=v((e-x[1])*i+a),d.push("M",p+","+m,"L",l+","+y),g=2;h>g;g++)x=f?f(s[g][0],s[g][1],c):s[g],p=v((x[0]-n)*t+r),m=v((e-x[1])*i+a),d.push(p+","+m);else p=v((x[0]-n)*t+r),m=v((e-x[1])*i+a),d.push("M",p+","+m);return d}:function(n,e,t,i,r,a,o,f,c){var u,s,g,h,x,p,m=[],l=Math.round;for(u=0,g=o?o.length:0;g>u;u++)for(x=o[u],m.push("M"),s=0,h=x?x.length:0;h>s;s++)p=f?f(x[s][0],x[s][1],c):x[s],m.push(l((p[0]-n)*t+r)+","+l((e-p[1])*i+a));return m}}(),l={toScreenPoint:s,toScreenGeometry:g,_toScreenPath:h,toMapPoint:x,toMapGeometry:p};return t("extend-esri")&&e.mixin(e.getObject("geometry",!0,i),l),l});