 /* Adam Mertel|UNIVIE */

!function(i,t){!function(i,t){!function(){L.extend({},L.Map.prototype);L.Map.include({options:{padding:.2},createTilesExtentControlGroup:function(i){this.tilesGroup=tilesConfig;for(var t in this.tilesGroup){var s=tilesGroup[t];s.layer.setZIndex(layers.length-t),s.layer.addTo(map),s.originalBounds=s.layer.originalBounds,s.displayed=!1,s.willdisplay=!1}this.on("moveend",function(){this._refreshTilesGroup()}),this._refreshTilesGroup()},_pointInsidePoints:function(i,t){for(var s=i.lat,n=i.lng,e=!1,o=0,r=t.length-1;o<t.length;r=o++){var l=t[o].lat,a=t[o].lng,u=t[r].lat,d=t[r].lng,p=a>n!=d>n&&s<(u-l)*(n-a)/(d-a)+l;p&&(e=!e)}return e},_boundsVisible:function(i,t){var s=!1;for(var n in boundsPoints){var e=boundsPoints[n];if(i.contains(e)){s=!0;break}}if(!s){var o=[],r=[i.getSouthWest(),i.getNorthEast(),i.getNorthWest(),i.getSouthEast()];for(var l in r)o[l]=this._pointInsidePoints(r[l],boundsPoints);s=o.indexOf(!0)!=-1&&o.indexOf(!1)!=-1}return s},_layerVisible:function(i,t){return this._pointInsidePoints(i.getCenter(),t.getLatLngs()[0])},_refreshTilesGroup:function(){var i,t,s=this.getBounds().pad(this.options.padding);for(i in this.tilesGroup)this.tilesGroup[i].willdisplay=!1;for(i in this.tilesGroup){if(t=this.tilesGroup[i],!t.bounds){t.willdisplay=!0;break}if(s.intersects(t.bounds.getBounds())){var n=this._boundsVisible(s,t.bounds),e=!1;if(e=!!n||this._layerVisible(s,t.bounds),e||n)if(t.willdisplay=!0,t.transparent)t.willdisplay=!0;else if(!n)break}}for(i in this.tilesGroup)t=this.tilesGroup[i],t.willdisplay!=t.display&&(t.willdisplay?t.layer.addTo(this):t.layer.removeFrom(this)),t.displayed=_layer.willdisplay}})}(),t[""]=i}({},function(){return this}()),t[""]=i}({},function(){return this}());