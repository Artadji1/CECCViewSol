var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var lyr_Relief_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Relief",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Relief_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1953917.221389, 1640974.537686, -1905535.264138, 1677428.760958]
                            })
                        });
var format_Altitudes_2 = new ol.format.GeoJSON();
var features_Altitudes_2 = format_Altitudes_2.readFeatures(json_Altitudes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Altitudes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Altitudes_2.addFeatures(features_Altitudes_2);
var lyr_Altitudes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Altitudes_2, 
                style: style_Altitudes_2,
                popuplayertitle: "Altitudes",
                interactive: true,
    title: 'Altitudes<br />\
    <img src="styles/legend/Altitudes_2_0.png" /> <=0<br />\
    <img src="styles/legend/Altitudes_2_1.png" /> ]0 - 5]<br />\
    <img src="styles/legend/Altitudes_2_2.png" /> ]5 - 10]<br />\
    <img src="styles/legend/Altitudes_2_3.png" /> ]10 - 30]<br />\
    <img src="styles/legend/Altitudes_2_4.png" /> >=30<br />'
        });
var format_Typologiedessols_3 = new ol.format.GeoJSON();
var features_Typologiedessols_3 = format_Typologiedessols_3.readFeatures(json_Typologiedessols_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Typologiedessols_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Typologiedessols_3.addFeatures(features_Typologiedessols_3);
var lyr_Typologiedessols_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Typologiedessols_3, 
                style: style_Typologiedessols_3,
                popuplayertitle: "Typologie des sols",
                interactive: true,
    title: 'Typologie des sols<br />\
    <img src="styles/legend/Typologiedessols_3_0.png" /> Hydromorphes<br />\
    <img src="styles/legend/Typologiedessols_3_1.png" /> Vertiques<br />\
    <img src="styles/legend/Typologiedessols_3_2.png" /> Dunes Littorales<br />\
    <img src="styles/legend/Typologiedessols_3_3.png" /> Ferrugineux Tropicaux<br />\
    <img src="styles/legend/Typologiedessols_3_4.png" /> Lithosols<br />\
    <img src="styles/legend/Typologiedessols_3_5.png" /> Peu Evolués<br />'
        });
var format_Niveaudelanappe_4 = new ol.format.GeoJSON();
var features_Niveaudelanappe_4 = format_Niveaudelanappe_4.readFeatures(json_Niveaudelanappe_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveaudelanappe_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveaudelanappe_4.addFeatures(features_Niveaudelanappe_4);
var lyr_Niveaudelanappe_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveaudelanappe_4, 
                style: style_Niveaudelanappe_4,
                popuplayertitle: "Niveau de la nappe",
                interactive: true,
    title: 'Niveau de la nappe<br />\
    <img src="styles/legend/Niveaudelanappe_4_0.png" /> moins de 5 m<br />\
    <img src="styles/legend/Niveaudelanappe_4_1.png" /> 5 - 10 m<br />\
    <img src="styles/legend/Niveaudelanappe_4_2.png" /> 10 - 15 m<br />\
    <img src="styles/legend/Niveaudelanappe_4_3.png" /> 15 - 20 m<br />\
    <img src="styles/legend/Niveaudelanappe_4_4.png" /> en dessous de 20 m<br />'
        });
var format_Localits_5 = new ol.format.GeoJSON();
var features_Localits_5 = format_Localits_5.readFeatures(json_Localits_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localits_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localits_5.addFeatures(features_Localits_5);
var lyr_Localits_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localits_5, 
                style: style_Localits_5,
                popuplayertitle: "Localités",
                interactive: true,
                title: '<img src="styles/legend/Localits_5.png" /> Localités'
            });
var format_Limitesdesdpartements_6 = new ol.format.GeoJSON();
var features_Limitesdesdpartements_6 = format_Limitesdesdpartements_6.readFeatures(json_Limitesdesdpartements_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdesdpartements_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdesdpartements_6.addFeatures(features_Limitesdesdpartements_6);
var lyr_Limitesdesdpartements_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdesdpartements_6, 
                style: style_Limitesdesdpartements_6,
                popuplayertitle: "Limites des départements",
                interactive: true,
                title: '<img src="styles/legend/Limitesdesdpartements_6.png" /> Limites des départements'
            });
var format_DlimitationduSngal_7 = new ol.format.GeoJSON();
var features_DlimitationduSngal_7 = format_DlimitationduSngal_7.readFeatures(json_DlimitationduSngal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DlimitationduSngal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DlimitationduSngal_7.addFeatures(features_DlimitationduSngal_7);
var lyr_DlimitationduSngal_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DlimitationduSngal_7, 
                style: style_DlimitationduSngal_7,
                popuplayertitle: "Délimitation du Sénégal",
                interactive: true,
                title: '<img src="styles/legend/DlimitationduSngal_7.png" /> Délimitation du Sénégal'
            });

lyr_Positronretina_0.setVisible(true);lyr_Relief_1.setVisible(true);lyr_Altitudes_2.setVisible(true);lyr_Typologiedessols_3.setVisible(true);lyr_Niveaudelanappe_4.setVisible(true);lyr_Localits_5.setVisible(true);lyr_Limitesdesdpartements_6.setVisible(true);lyr_DlimitationduSngal_7.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_Relief_1,lyr_Altitudes_2,lyr_Typologiedessols_3,lyr_Niveaudelanappe_4,lyr_Localits_5,lyr_Limitesdesdpartements_6,lyr_DlimitationduSngal_7];
lyr_Altitudes_2.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', 'Classes': 'Altitudes (m)', });
lyr_Typologiedessols_3.set('fieldAliases', {'ET_ID': 'ET_ID', 'MSDNOM': 'Types', 'NOM': 'NOM', 'CODE': 'CODE', 'THEME': 'THEME', 'PAYS': 'PAYS', 'TYPESOL': 'TYPESOL', 'IDUU': 'IDUU', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area_hecta': 'area_hecta', 'superficie': 'superficie', 'area': 'area', 'pourcent': 'pourcent', 'Superficie': 'Superficie (ha)', 'Couverture': 'Taux de couverture (%)', });
lyr_Niveaudelanappe_4.set('fieldAliases', {'designatio': 'Nom de la station', 'type_ouvra': 'Type d\'ouvrage', 'X utm': 'X utm', 'Y utm': 'Y utm', 'longitude': 'longitude', 'latitude': 'latitude', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'Année': 'Année de mesure', 'altitude': 'Altitude de la station (m)', 'Niveau nap': 'Niveau de la nappe (m)', 'Type nappe': 'Type de nappe', });
lyr_Localits_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'Nom': 'Nom', });
lyr_Limitesdesdpartements_6.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'Nom', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'area': 'area', });
lyr_DlimitationduSngal_7.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_Altitudes_2.set('fieldImages', {'DN': 'Hidden', 'Area': 'Hidden', 'Classes': 'TextEdit', });
lyr_Typologiedessols_3.set('fieldImages', {'ET_ID': 'Hidden', 'MSDNOM': 'TextEdit', 'NOM': 'Hidden', 'CODE': 'Hidden', 'THEME': 'Hidden', 'PAYS': 'Hidden', 'TYPESOL': 'Hidden', 'IDUU': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'area_hecta': 'Hidden', 'superficie': 'Hidden', 'area': 'Hidden', 'pourcent': 'Hidden', 'Superficie': 'TextEdit', 'Couverture': 'TextEdit', });
lyr_Niveaudelanappe_4.set('fieldImages', {'designatio': 'TextEdit', 'type_ouvra': 'TextEdit', 'X utm': 'Hidden', 'Y utm': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'xcoord': 'Hidden', 'ycoord': 'Hidden', 'Année': 'TextEdit', 'altitude': 'TextEdit', 'Niveau nap': 'TextEdit', 'Type nappe': 'TextEdit', });
lyr_Localits_5.set('fieldImages', {'osm_id': 'Hidden', 'code': 'Hidden', 'fclass': 'Hidden', 'population': 'Hidden', 'Nom': 'TextEdit', });
lyr_Limitesdesdpartements_6.set('fieldImages', {'GID_2': 'Hidden', 'GID_0': 'Hidden', 'COUNTRY': 'Hidden', 'GID_1': 'Hidden', 'NAME_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'NAME_2': 'TextEdit', 'VARNAME_2': 'Hidden', 'NL_NAME_2': 'Hidden', 'TYPE_2': 'Hidden', 'ENGTYPE_2': 'Hidden', 'CC_2': 'Hidden', 'HASC_2': 'Hidden', 'area': 'Hidden', });
lyr_DlimitationduSngal_7.set('fieldImages', {'GID_0': 'Hidden', 'COUNTRY': 'Hidden', });
lyr_Altitudes_2.set('fieldLabels', {'Classes': 'inline label - always visible', });
lyr_Typologiedessols_3.set('fieldLabels', {'MSDNOM': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Couverture': 'inline label - always visible', });
lyr_Niveaudelanappe_4.set('fieldLabels', {'designatio': 'inline label - always visible', 'type_ouvra': 'inline label - always visible', 'Année': 'inline label - always visible', 'altitude': 'inline label - always visible', 'Niveau nap': 'inline label - always visible', 'Type nappe': 'inline label - always visible', });
lyr_Localits_5.set('fieldLabels', {'Nom': 'inline label - always visible', });
lyr_Limitesdesdpartements_6.set('fieldLabels', {'NAME_2': 'inline label - visible with data', });
lyr_DlimitationduSngal_7.set('fieldLabels', {});
lyr_DlimitationduSngal_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});