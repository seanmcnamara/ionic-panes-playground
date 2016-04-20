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

define({general:{cancel:"Storno",close:"Zavřít",none:"Žádný",ok:"OK",other:"Jiný",stamp:"Razítko",now:"Nyní",choose:"Zvolte jednu z možností:"},editor:{noMetadata:"Této položce chybí metadata.",xmlViewOnly:"Typ metadat přiřazených k této položce není editorem podporován. Metadata musí být ve formátu ArcGIS.",editorDialog:{caption:"Metadata",captionPattern:"Metadata položky {title}"},primaryToolbar:{view:"Zobrazit",viewXml:"Zobrazit XML",edit:"Editovat",initializing:"Nahrávání…",startingEditor:"Spouštění editoru…",loadingDocument:"Načítání dokumentu…",updatingDocument:"Aktualizace dokumentu…",generatingView:"Generování zobrazení…",errors:{errorGeneratingView:"Při generování zobrazení došlo k chybě.",errorLoadingDocument:"Při načítání dokumentu došlo k chybě."}},changesNotSaved:{prompt:"Dokument obsahuje neuložené změny.",dialogTitle:"Zavřít editor metadat",closeButton:"Zavřít"},download:{caption:"Stahování",dialogTitle:"Stahování",prompt:"Chcete-li soubor stáhnout, klikněte sem."},load:{caption:"Otevřít",dialogTitle:"Otevřít",typeTab:"Nový dokument",fileTab:"Otevřít soubor",templateTab:"Šablona",itemTab:"Vaše položka",filePrompt:"Vyberte místní soubor XML metadat ArcGIS. Metadata musí být ve formátu ArcGIS.",templatePrompt:"Vytvořit metadata",pullItem:"Zadejte do metadat podrobnosti položky.",importWarning:"Vybraný soubor neodpovídá formátu ArcGIS. Aktualizovaná metadata musí být ve formátu ArcGIS.",loading:"Nahrávání…",noMetadata:"Metadata této položky můžete vytvořit výběrem jedné z následujících možností:",unrecognizedMetadata:"Typ metadat přiřazených k této položce není editorem podporován. Podporovaná metadata můžete vytvořit výběrem jedné z následujících možností:",errorLoading:"Při načítání došlo k chybě.",warnings:{badFile:"Vybraný soubor se nepodařilo načíst.",notAnXml:"Vybraný soubor není ve formátu XML.",notSupported:"Tento typ souboru není podporován."}},save:{caption:"Uložit",dialogTitle:"Uložit metadata",working:"Ukládání metadat…",errorSaving:"Došlo k chybě, metadata nebyla uložena.",saveDialog:{pushCaption:"Použít změny u položky"}},saveAndClose:{caption:"Uložit a zavřít"},saveDraft:{caption:"Uložit místní kopii",dialogTitle:"Uložit místní kopii"},validate:{caption:"Ověřit",dialogTitle:"Ověření",docIsValid:"Váš dokument je platný."},del:{caption:"Smazat",dialogTitle:"Odstranit metadata",prompt:"Určitě chcete odstranit tato metadata?",working:"Odstraňování metadat…",errorDeleting:"Došlo k chybě, metadata nebyla odstraněna."},transform:{caption:"Transformovat",dialogTitle:"Transformovat na",prompt:"",working:"Probíhá transformace…",errorTransforming:"Při transformaci dokumentu došlo k chybě."},errorDialog:{dialogTitle:"Nastala chyba"}},arcgis:{portal:{metadataButton:{caption:"Metadata"}}},calendar:{button:"Kalendář…",title:"Kalendář"},geoExtent:{button:"Nastavit geografický rozsah…",title:"Geografický rozsah",navigate:"Navigovat",draw:"Nakreslit obdélník",drawHint:"Stiskem zahájíte akci a uvolněním ji ukončíte."},hints:{date:"(rrrr nebo rrrr-mm nebo rrrr-mm-dd)",dateTime:"(rrrr-mm-ddThh:mm:ss.sss[+−]hh:mm)",dateOrDateTime:"(rrrr nebo rrrr-mm nebo rrrr-mm-dd nebo rrrr-mm-ddThh:mm:ss.sss[+−]hh:mm)",delimitedTextArea:"(k oddělení použijte čárku nebo nový řádek)",fgdcDate:"(rrrr nebo rrrr-mm nebo rrrr-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+−]hh:mm)",integer:"(zadejte celé číslo)",latitude:"(desetinné stupně)",longitude:"(desetinné stupně)",number:"(zadejte číslo)",numberGreaterThanZero:"(zadejte číslo > 0)"},isoTopicCategoryCode:{caption:"Kategorie tématu",boundaries:"Administrativní a politické hranice",farming:"Zemědělství a farmaření",climatologyMeteorologyAtmosphere:"Atmosféra a podnebí",biota:"Biologie a ekologie",economy:"Obchod a hospodářství",planningCadastre:"Katastrální",society:"Kultura, společnost a demografie",elevation:"Nadmořská výška a odvozené produkty",environment:"Životní prostředí a ochrana přírody",structure:"Zařízení a stavby",geoscientificInformation:"Geologie a geofyzika",health:"Zdravotnictví",imageryBaseMapsEarthCover:"Obrazová data a podkladové mapy",inlandWaters:"Vnitrozemské vodní zdroje",location:"Lokality a geodetické sítě",intelligenceMilitary:"Vojenské",oceans:"Oceány a ústí řek",transportation:"Dopravní sítě",utilitiesCommunication:"Služby a komunikace"},multiplicity:{moveElementDown:"Posunout sekci dolů",moveElementUp:"Posunout sekci nahoru",removeElement:"Odebrat sekci",repeatElement:"Opakovat sekci"},optionalNode:{switchTip:"Umožňuje zahrnout nebo vyloučit tuto sekci."},serviceTypes:{featureService:"Feature Service",mapService:"Mapová služba",imageService:"Obrazová služba",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} – {message}",patternWithHint:"{label} − {message} {hint}",ok:"OK",empty:"Tato hodnota je povinná.",date:"Hodnota musí být datum.",integer:"Hodnota musí být celé číslo.",number:"Hodnota musí být číslo.",other:"Neplatná hodnota."},validationPane:{clearMessages:"Vymazat zprávy",prompt:"(klikněte na každou zprávu uvedenou níže a zadejte požadované údaje do určených polí)"}});