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

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../SpatialReference","./Point","./Polyline","./Polygon"],function(e,a,t,r,s,n,i,h){function o(e){var a=Math.PI/180,t=6378137,r=.006694379990197414,s=.0818191908429643,i=Math.sin(e.y*a),h=(1-r)*(i/(1-r*i*i)-1/(2*s)*Math.log((1-s*i)/(1+s*i))),o=t*e.x*a,c=t*h*.5,M=new n(o,c);return M}function c(e,a,t,r){for(var i,h,o,c,M=6378137,u=6356752.31424518,f=1/298.257223563,l=Math.sin(t),v=Math.cos(t),g=(1-f)*Math.tan(e),d=1/Math.sqrt(1+g*g),p=g*d,y=Math.atan2(g,v),m=d*l*d*l,q=1-m,w=q*(M*M-u*u)/(u*u),S=1+w/16384*(4096+w*(-768+w*(320-175*w))),x=w/1024*(256+w*(-128+w*(74-47*w))),P=r/(u*S),D=2*Math.PI;Math.abs(P-D)>1e-12;)o=Math.cos(2*y+P),i=Math.sin(P),h=Math.cos(P),c=x*i*(o+x/4*(h*(-1+2*o*o)-x/6*o*(-3+4*i*i)*(-3+4*o*o))),D=P,P=r/(u*S)+c;var E=p*i-d*h*v,I=Math.atan2(p*h+d*i*v,(1-f)*Math.sqrt(m+E*E)),_=Math.atan2(i*l,d*h-p*i*v),b=f/16*q*(4+f*(4-3*q)),A=_-(1-b)*f*Math.sqrt(m)*(P+b*i*(o+b*h*(-1+2*o*o))),R=I/(Math.PI/180),j=(a+A)/(Math.PI/180),z=new n(j,R,new s({wkid:4326}));return z}function M(e,a,t,r){var s,n,i,h,o,c,M,u,f,l,v=6378137,g=6356752.31424518,d=1/298.257223563,p=r-a,y=Math.atan((1-d)*Math.tan(e)),m=Math.atan((1-d)*Math.tan(t)),q=Math.sin(y),w=Math.cos(y),S=Math.sin(m),x=Math.cos(m),P=p,D=1e3;do{if(M=Math.sin(P),u=Math.cos(P),i=Math.sqrt(x*M*x*M+(w*S-q*x*u)*(w*S-q*x*u)),0===i)return 0;o=q*S+w*x*u,c=Math.atan2(i,o),f=w*x*M/i,n=1-f*f,h=o-2*q*S/n,isNaN(h)&&(h=0),l=d/16*n*(4+d*(4-3*n)),s=P,P=p+(1-l)*d*f*(c+l*i*(h+l*o*(-1+2*h*h)))}while(Math.abs(P-s)>1e-12&&--D>0);if(0===D){var E=6371009,I=Math.acos(Math.sin(e)*Math.sin(t)+Math.cos(e)*Math.cos(t)*Math.cos(r-a))*E,_=r-a,b=Math.sin(_)*Math.cos(t),A=Math.cos(e)*Math.sin(t)-Math.sin(e)*Math.cos(t)*Math.cos(_),R=Math.atan2(b,A);return{azimuth:R,geodesicDistance:I}}var j=n*(v*v-g*g)/(g*g),z=1+j/16384*(4096+j*(-768+j*(320-175*j))),N=j/1024*(256+j*(-128+j*(74-47*j))),k=N*i*(h+N/4*(o*(-1+2*h*h)-N/6*h*(-3+4*i*i)*(-3+4*h*h))),C=g*z*(c-k),F=Math.atan2(x*Math.sin(P),w*S-q*x*Math.cos(P)),G=Math.atan2(w*Math.sin(P),w*S*Math.cos(P)-q*x),K={azimuth:F,geodesicDistance:C,reverseAzimuth:G};return K}function u(a,t){var r=Math.PI/180,s=6371008.771515059;if(s/1e4>t&&(t=s/1e4),!(a instanceof i||a instanceof h)){var n="_geodesicDensify: the input geometry is neither polyline nor polygon";throw console.error(n),new Error(n)}var o,u=a instanceof i,f=u?a.paths:a.rings,l=[];return e.forEach(f,function(e){l.push(o=[]),o.push([e[0][0],e[0][1]]);var a,s,n,i,h,u;for(a=e[0][0]*r,s=e[0][1]*r,h=0;h<e.length-1;h++)if(n=e[h+1][0]*r,i=e[h+1][1]*r,a!==n||s!==i){var f=M(s,a,i,n),v=f.azimuth,g=f.geodesicDistance,d=g/t;if(d>1){for(u=1;d-1>=u;u++){var p=u*t,y=c(s,a,v,p);o.push([y.x,y.y])}var m=(g+Math.floor(d-1)*t)/2,q=c(s,a,v,m);o.push([q.x,q.y])}var w=c(s,a,v,g);o.push([w.x,w.y]),a=w.x*r,s=w.y*r}}),u?new i({paths:l,spatialReference:a.spatialReference}):new h({rings:l,spatialReference:a.spatialReference})}function f(a,t){var r=Math.PI/180,s=[];return e.forEach(a,function(a){var n=0;e.forEach(a.paths,function(e){var a,t,s,i,h,o,c=0;for(a=1;a<e.length;a++)t=e[a-1][0]*r,s=e[a][0]*r,i=e[a-1][1]*r,h=e[a][1]*r,(i!==h||t!==s)&&(o=M(i,t,h,s),c+=o.geodesicDistance/1609.344);n+=c}),n*=v[t],s.push(n)}),s}function l(a,t){var r=[];e.forEach(a,function(e){var a=u(e,1e4);r.push(a)});var s,i,h=[];return e.forEach(r,function(a){var r=0;e.forEach(a.rings,function(e){s=o(new n(e[0][0],e[0][1])),i=o(new n(e[e.length-1][0],e[e.length-1][1]));var a,t=i.x*s.y-s.x*i.y;for(a=0;a<e.length-1;a++)s=o(new n(e[a+1][0],e[a+1][1])),i=o(new n(e[a][0],e[a][1])),t+=i.x*s.y-s.x*i.y;t/=4046.87,r+=t}),r*=v[t],h.push(r/-2)}),h}var v={esriMiles:1,esriKilometers:1.609344,esriFeet:5280,esriMeters:1609.34,esriYards:1760,esriNauticalMiles:.869,esriCentimeters:160934,esriDecimeters:16093.4,esriInches:63360,esriMillimeters:1609340,esriAcres:1,esriAres:40.4685642,esriSquareKilometers:.00404685642,esriSquareMiles:.0015625,esriSquareFeet:43560,esriSquareMeters:4046.85642,esriHectares:.404685642,esriSquareYards:4840,esriSquareInches:6272640,esriSquareMillimeters:4046856420,esriSquareCentimeters:40468564.2,esriSquareDecimeters:404685.642},g={geodesicDensify:u,geodesicLengths:f,geodesicAreas:l,_unitsDictionary:v,_toEqualAreaPoint:o,_directGeodeticSolver:c,_inverseGeodeticSolver:M};return t("extend-esri")&&a.mixin(a.getObject("geometry",!0,r),g),g});