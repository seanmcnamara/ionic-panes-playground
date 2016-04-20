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

define({general:{cancel:"בטל",close:"סגור",none:"ללא",ok:"אישור",other:"אחר",stamp:"חתימה",now:"כעת",choose:"בחר אפשרות אחת:"},editor:{noMetadata:"אין מטה-דאטה לפריט הזה.",xmlViewOnly:"סוג המטה-דאטה המשויך לפריט זה אינו נתמך על-ידי העורך שלך. המטה-דאטה מוכרחים להיות בפורמט ArcGIS.",editorDialog:{caption:"מטה-דאטה",captionPattern:"מטה-דאטה עבור {title}"},primaryToolbar:{view:"תצוגה",viewXml:"הצג XML",edit:"עורך",initializing:"טוען...",startingEditor:"מפעיל את העורך...",loadingDocument:"טוען מסמך...",updatingDocument:"מעדכן מסמך...",generatingView:"יוצר תצוגה...",errors:{errorGeneratingView:"אירעה שגיאה בזמן יצירת התצוגה.",errorLoadingDocument:"אירעה שגיאה בזמן טעינת המסמך."}},changesNotSaved:{prompt:"המסמך שלך מכיל שינויים שלא נשמרו.",dialogTitle:"סגור את עורך המטה-דאטה",closeButton:"סגור"},download:{caption:"הורד",dialogTitle:"הורד",prompt:"לחץ כאן כדי להוריד את הקובץ."},load:{caption:"פתח",dialogTitle:"פתח",typeTab:"מסמך חדש",fileTab:"פתח קובץ",templateTab:"תבנית",itemTab:"הפריט שלך",filePrompt:"בחר קובץ מטה-דאטה מקומי מסוג XML של ArcGIS. המטה-דאטה מוכרחים להיות בפורמט ArcGIS.",templatePrompt:"צור מטה-דאטה",pullItem:"אכלס מטה-דאטה עם פרטי הפריט.",importWarning:"הקובץ שנבחר אינו מופיע בפורמט ArcGIS. המטה-דאטה שהועלו מוכרחים להיות בפורמט ArcGIS.",loading:"טוען...",noMetadata:"ניתן ליצור מטה-דאטה עבור פריט זה על-ידי בחירת אחת מהאפשרויות הבאות.",unrecognizedMetadata:"סוג המטה-דאטה המשויך לפריט זה אינו נתמך על-ידי העורך שלך. ניתן ליצור מטה-דאטה נתמך על-ידי בחירת אחת מהאפשרויות הבאות.",errorLoading:"אירעה שגיאה בזמן הטעינה.",warnings:{badFile:"לא היתה אפשרות לטעון את הקובץ שנבחר.",notAnXml:"הקובץ שנבחר אינו קובץ XML.",notSupported:"סוג קובץ זה אינו נתמך."}},save:{caption:"שמירה",dialogTitle:"שמור מטה-דאטה",working:"שומר מטה-דאטה...",errorSaving:"אירעה שגיאה, המטה-דאטה לא נשמר.",saveDialog:{pushCaption:"החל שינויים על הפריט"}},saveAndClose:{caption:"שמור וסגור"},saveDraft:{caption:"שמור עותק מקומי",dialogTitle:"שמור עותק מקומי"},validate:{caption:"אמת",dialogTitle:"אימות",docIsValid:"המסמך שלך תקף."},del:{caption:"מחק",dialogTitle:"מחק מטה-דאטה",prompt:"האם אתה בטוח שברצונך למחוק את המטה-דאטה?",working:"מוחק מטה-דאטה...",errorDeleting:"אירעה שגיאה, המטה-דאטה לא נמחק."},transform:{caption:"המר",dialogTitle:"המר ל-",prompt:"",working:"ממיר...",errorTransforming:"אירעה שגיאה בזמן המרת המסמך."},errorDialog:{dialogTitle:"אירעה שגיאה"}},arcgis:{portal:{metadataButton:{caption:"מטה-דאטה"}}},calendar:{button:"לוח שנה...",title:"לוח שנה"},geoExtent:{button:"הגדר תיחום גיאוגרפי...",title:"תיחום גיאוגרפי",navigate:"ניווט",draw:"שרטט מלבן",drawHint:"לחץ כלפי מטה כדי להתחיל ושחרר כדי לסיים."},hints:{date:"(yyyy או yyyy-mm או yyyy-mm-dd)",dateTime:"(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy או yyyy-mm או yyyy-mm-dd או yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(השתמש בפסיק או בשורה חדשה כדי להפריד)",fgdcDate:"(yyyy או yyyy-mm או yyyy-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(הכנס מספר שלם)",latitude:"(מעלות עשרוניות)",longitude:"(מעלות עשרוניות)",number:"(הכנס מספר)",numberGreaterThanZero:"(הכנס מספר > 0)"},isoTopicCategoryCode:{caption:"קטגוריה נושא",boundaries:"גבולות מנהליים ופוליטיים",farming:"חקלאות וחוואות",climatologyMeteorologyAtmosphere:"אטמוספירה ומזג אוויר",biota:"ביולוגיה ואקולוגיה",economy:"עסקים וכלכלה",planningCadastre:"רישום קרקעות",society:"תרבות, חברה ודמוגרפיה",elevation:"גבהים ותוצרים הנגזרים מהם",environment:"סביבה ושימור",structure:"מתקנים ומבנים",geoscientificInformation:"גיאולוגי וגאופיסי",health:"בריאות ומחלות",imageryBaseMapsEarthCover:"תמונות ומפות בסיס",inlandWaters:"מקורות מים יבשתיים",location:"איתורים ורשת גאודטית",intelligenceMilitary:"צבא",oceans:"אוקינוסים ושפכי נהרות",transportation:"רשתות תחבורה",utilitiesCommunication:"שירותים ותקשורת"},multiplicity:{moveElementDown:"הזז קטע כלפי מטה",moveElementUp:"הזז קטע כלפי מעלה",removeElement:"הסר קטע",repeatElement:"חזור על קטע"},optionalNode:{switchTip:"כלול או הוצא קטע זה."},serviceTypes:{featureService:"שירות ישויות",mapService:"שירות מפה",imageService:"שירות תמונות",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"אישור",empty:"דרוש ערך.",date:"הערך חייב להיות תאריך.",integer:"הערך חייב להיות מספר שלם.",number:"הערך חייב להיות מספר.",other:"ערך לא חוקי."},validationPane:{clearMessages:"נקה הודעות",prompt:"(לחץ על כל הודעה להלן וספק את המידע הדרוש בשדה שצוין)"}});