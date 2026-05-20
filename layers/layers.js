var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'مصر',
                interactive: false,
                title: '<img src="styles/legend/_0.png" /> مصر'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'البحار',
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> البحار'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'المحافظات',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> المحافظات'
            });
var format___3 = new ol.format.GeoJSON();
var features___3 = format___3.readFeatures(json___3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___3.addFeatures(features___3);
var lyr___3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___3, 
                style: style___3,
                popuplayertitle: 'نهر_النيل',
                interactive: false,
                title: '<img src="styles/legend/__3.png" /> نهر_النيل'
            });
var format___4 = new ol.format.GeoJSON();
var features___4 = format___4.readFeatures(json___4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___4.addFeatures(features___4);
var lyr___4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___4, 
                style: style___4,
                popuplayertitle: 'تغطية_المكاتب',
                interactive: false,
                title: '<img src="styles/legend/__4.png" /> تغطية_المكاتب'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'موقع المكاتب',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> موقع المكاتب'
            });
var format___6 = new ol.format.GeoJSON();
var features___6 = format___6.readFeatures(json___6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___6.addFeatures(features___6);
var lyr___6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___6, 
                style: style___6,
                popuplayertitle: 'مواقع_النيابات',
                interactive: true,
                title: '<img src="styles/legend/__6.png" /> مواقع_النيابات'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'تغطية السيارات الحالية',
                interactive: false,
                title: '<img src="styles/legend/_7.png" /> تغطية السيارات الحالية'
            });
var format____8 = new ol.format.GeoJSON();
var features____8 = format____8.readFeatures(json____8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____8.addFeatures(features____8);
var lyr____8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____8, 
                style: style____8,
                popuplayertitle: 'مواقع_السيارات_الحالية',
                interactive: true,
                title: '<img src="styles/legend/___8.png" /> مواقع_السيارات_الحالية'
            });
var format____9 = new ol.format.GeoJSON();
var features____9 = format____9.readFeatures(json____9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____9.addFeatures(features____9);
var lyr____9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____9, 
                style: style____9,
                popuplayertitle: 'مواقع_النيابات_المخدومة',
                interactive: true,
                title: '<img src="styles/legend/___9.png" /> مواقع_النيابات_المخدومة'
            });
var format_____10 = new ol.format.GeoJSON();
var features_____10 = format_____10.readFeatures(json_____10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_____10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_____10.addFeatures(features_____10);
var lyr_____10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_____10, 
                style: style_____10,
                popuplayertitle: 'مواقع_النيابات_الغير_مخدومة',
                interactive: true,
                title: '<img src="styles/legend/____10.png" /> مواقع_النيابات_الغير_مخدومة'
            });
var format____11 = new ol.format.GeoJSON();
var features____11 = format____11.readFeatures(json____11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____11.addFeatures(features____11);
var lyr____11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____11, 
                style: style____11,
                popuplayertitle: 'تغطية_السيارات_المقترحة',
                interactive: false,
                title: '<img src="styles/legend/___11.png" /> تغطية_السيارات_المقترحة'
            });
var format____12 = new ol.format.GeoJSON();
var features____12 = format____12.readFeatures(json____12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____12.addFeatures(features____12);
var lyr____12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____12, 
                style: style____12,
                popuplayertitle: 'مواقع_السيارات_المقترح',
                interactive: true,
                title: '<img src="styles/legend/___12.png" /> مواقع_السيارات_المقترح'
            });
var format_____13 = new ol.format.GeoJSON();
var features_____13 = format_____13.readFeatures(json_____13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_____13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_____13.addFeatures(features_____13);
var lyr_____13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_____13, 
                style: style_____13,
                popuplayertitle: 'النيابات_المخدومة_بعد_التحسين',
                interactive: true,
                title: '<img src="styles/legend/____13.png" /> النيابات_المخدومة_بعد_التحسين'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr___3.setVisible(true);lyr___4.setVisible(true);lyr__5.setVisible(true);lyr___6.setVisible(true);lyr__7.setVisible(true);lyr____8.setVisible(true);lyr____9.setVisible(true);lyr_____10.setVisible(true);lyr____11.setVisible(true);lyr____12.setVisible(true);lyr_____13.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr___3,lyr___4,lyr__5,lyr___6,lyr__7,lyr____8,lyr____9,lyr_____10,lyr____11,lyr____12,lyr_____13];
lyr__0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTRY_NAME': 'CNTRY_NAME', 'FIRST_FIRS': 'FIRST_FIRS', 'Arabic_Nam': 'Arabic_Nam', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr__1.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'min_zoom': 'min_zoom', });
lyr__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'A_Name': 'A_Name', 'E_Name': 'E_Name', 'Code': 'Code', 'Info': 'Info', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'عدد_ا': 'عدد_ا', 'الكثا': 'الكثا', });
lyr___3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Arabic_Nam': 'Arabic_Nam', 'E_Name': 'E_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr___4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr__5.set('fieldAliases', {'م': 'م', 'اسم_ا': 'اسم_ا', 'عنوان': 'عنوان', 'المحا': 'المحا', 'الموق': 'الموق', 'X': 'X', 'Y': 'Y', 'تصنيف': 'تصنيف', });
lyr___6.set('fieldAliases', {'م': 'م', 'أسماء': 'أسماء', 'X': 'X', 'Y': 'Y', 'NEAR_FID': 'NEAR_FID', 'NEAR_DIST': 'NEAR_DIST', });
lyr__7.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr____8.set('fieldAliases', {'م': 'م', 'رقم_ا': 'رقم_ا', 'المحا': 'المحا', 'المقر': 'المقر', 'الموق': 'الموق', 'x': 'x', 'y': 'y', 'المق_1': 'المق_1', 'مقر_ا': 'مقر_ا', 'x_مقتر': 'x_مقتر', 'y_مقتر': 'y_مقتر', });
lyr____9.set('fieldAliases', {'م': 'م', 'أسماء': 'أسماء', 'X': 'X', 'Y': 'Y', });
lyr_____10.set('fieldAliases', {'م': 'م', 'أسماء': 'أسماء', 'X': 'X', 'Y': 'Y', });
lyr____11.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr____12.set('fieldAliases', {'م': 'م', 'رقم_ا': 'رقم_ا', 'المحا': 'المحا', 'المقر': 'المقر', 'المق_1': 'المق_1', 'x_مقتر': 'x_مقتر', 'y_مقتر': 'y_مقتر', });
lyr_____13.set('fieldAliases', {'م': 'م', 'أسماء': 'أسماء', 'X': 'X', 'Y': 'Y', });
lyr__0.set('fieldImages', {'OBJECTID': '', 'CNTRY_NAME': '', 'FIRST_FIRS': '', 'Arabic_Nam': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr__1.set('fieldImages', {'featurecla': '', 'scalerank': '', 'min_zoom': '', });
lyr__2.set('fieldImages', {'OBJECTID': '', 'A_Name': '', 'E_Name': '', 'Code': '', 'Info': '', 'Shape_Leng': '', 'Shape_Area': '', 'عدد_ا': '', 'الكثا': '', });
lyr___3.set('fieldImages', {'OBJECTID': '', 'Arabic_Nam': '', 'E_Name': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr___4.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', });
lyr__5.set('fieldImages', {'م': '', 'اسم_ا': '', 'عنوان': '', 'المحا': '', 'الموق': '', 'X': '', 'Y': '', 'تصنيف': '', });
lyr___6.set('fieldImages', {'م': '', 'أسماء': '', 'X': '', 'Y': '', 'NEAR_FID': '', 'NEAR_DIST': '', });
lyr__7.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', });
lyr____8.set('fieldImages', {'م': '', 'رقم_ا': '', 'المحا': '', 'المقر': '', 'الموق': '', 'x': '', 'y': '', 'المق_1': '', 'مقر_ا': '', 'x_مقتر': '', 'y_مقتر': '', });
lyr____9.set('fieldImages', {'م': '', 'أسماء': '', 'X': '', 'Y': '', });
lyr_____10.set('fieldImages', {'م': '', 'أسماء': '', 'X': '', 'Y': '', });
lyr____11.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', });
lyr____12.set('fieldImages', {'م': '', 'رقم_ا': '', 'المحا': '', 'المقر': '', 'المق_1': '', 'x_مقتر': '', 'y_مقتر': '', });
lyr_____13.set('fieldImages', {'م': '', 'أسماء': '', 'X': '', 'Y': '', });
lyr__0.set('fieldLabels', {'OBJECTID': 'no label', 'CNTRY_NAME': 'no label', 'FIRST_FIRS': 'no label', 'Arabic_Nam': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr__1.set('fieldLabels', {'featurecla': 'no label', 'scalerank': 'no label', 'min_zoom': 'no label', });
lyr__2.set('fieldLabels', {'OBJECTID': 'no label', 'A_Name': 'no label', 'E_Name': 'no label', 'Code': 'no label', 'Info': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'عدد_ا': 'no label', 'الكثا': 'no label', });
lyr___3.set('fieldLabels', {'OBJECTID': 'no label', 'Arabic_Nam': 'no label', 'E_Name': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr___4.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr__5.set('fieldLabels', {'م': 'no label', 'اسم_ا': 'no label', 'عنوان': 'no label', 'المحا': 'no label', 'الموق': 'no label', 'X': 'no label', 'Y': 'no label', 'تصنيف': 'no label', });
lyr___6.set('fieldLabels', {'م': 'no label', 'أسماء': 'no label', 'X': 'no label', 'Y': 'no label', 'NEAR_FID': 'no label', 'NEAR_DIST': 'no label', });
lyr__7.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr____8.set('fieldLabels', {'م': 'no label', 'رقم_ا': 'no label', 'المحا': 'no label', 'المقر': 'no label', 'الموق': 'no label', 'x': 'no label', 'y': 'no label', 'المق_1': 'no label', 'مقر_ا': 'no label', 'x_مقتر': 'no label', 'y_مقتر': 'no label', });
lyr____9.set('fieldLabels', {'م': 'no label', 'أسماء': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_____10.set('fieldLabels', {'م': 'no label', 'أسماء': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr____11.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr____12.set('fieldLabels', {'م': 'no label', 'رقم_ا': 'no label', 'المحا': 'no label', 'المقر': 'no label', 'المق_1': 'no label', 'x_مقتر': 'no label', 'y_مقتر': 'no label', });
lyr_____13.set('fieldLabels', {'م': 'no label', 'أسماء': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_____13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});