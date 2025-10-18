var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ProjectArea2_1 = new ol.format.GeoJSON();
var features_ProjectArea2_1 = format_ProjectArea2_1.readFeatures(json_ProjectArea2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectArea2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectArea2_1.addFeatures(features_ProjectArea2_1);
var lyr_ProjectArea2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectArea2_1, 
                style: style_ProjectArea2_1,
                popuplayertitle: 'Project Area 2',
                interactive: true,
                title: '<img src="styles/legend/ProjectArea2_1.png" /> Project Area 2'
            });
var format_hotosm_tza_waterways_lines_shp_2 = new ol.format.GeoJSON();
var features_hotosm_tza_waterways_lines_shp_2 = format_hotosm_tza_waterways_lines_shp_2.readFeatures(json_hotosm_tza_waterways_lines_shp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hotosm_tza_waterways_lines_shp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hotosm_tza_waterways_lines_shp_2.addFeatures(features_hotosm_tza_waterways_lines_shp_2);
var lyr_hotosm_tza_waterways_lines_shp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hotosm_tza_waterways_lines_shp_2, 
                style: style_hotosm_tza_waterways_lines_shp_2,
                popuplayertitle: 'hotosm_tza_waterways_lines_shp',
                interactive: true,
                title: '<img src="styles/legend/hotosm_tza_waterways_lines_shp_2.png" /> hotosm_tza_waterways_lines_shp'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ProjectArea2_1.setVisible(true);lyr_hotosm_tza_waterways_lines_shp_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ProjectArea2_1,lyr_hotosm_tza_waterways_lines_shp_2];
lyr_ProjectArea2_1.set('fieldAliases', {'fid': 'fid', 'Region_Nam': 'Region_Nam', 'Region_Cod': 'Region_Cod', 'District_C': 'District_C', 'NewDist20': 'NewDist20', });
lyr_hotosm_tza_waterways_lines_shp_2.set('fieldAliases', {'id': 'id', });
lyr_ProjectArea2_1.set('fieldImages', {'fid': '', 'Region_Nam': '', 'Region_Cod': '', 'District_C': '', 'NewDist20': '', });
lyr_hotosm_tza_waterways_lines_shp_2.set('fieldImages', {'id': '', });
lyr_ProjectArea2_1.set('fieldLabels', {'fid': 'no label', 'Region_Nam': 'no label', 'Region_Cod': 'no label', 'District_C': 'no label', 'NewDist20': 'no label', });
lyr_hotosm_tza_waterways_lines_shp_2.set('fieldLabels', {'id': 'no label', });
lyr_hotosm_tza_waterways_lines_shp_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});