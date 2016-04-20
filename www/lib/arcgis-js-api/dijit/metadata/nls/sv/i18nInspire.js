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

define({documentTypes:{data:{caption:"INSPIRE (Data)",description:""},service:{caption:"INSPIRE (Tjänst)",description:""}},dataThemeKeywords:{caption:"Inspire-datatema"},inspireServiceType:{discovery:"Upptäcktstjänst",view:"Visningstjänst",download:"Hämtningstjänst",transformation:"Transformationstjänst",invoke:"Anropstjänst",other:"Annan tjänst"},keywordSections:{dataTheme:"Inspire-datatema",serviceCategory:"ISO 19119-tjänstkategori",gemetConcept:"GEMET-koncept",otherKeywords:"Andra nyckelord"},LanguageCode:{bul:"Bulgariska",cze:"Tjeckiska",dan:"Danska",dut:"Nederländska",eng:"Engelska",est:"Estniska",fin:"Finska",fre:"Franska",ger:"Tyska",gre:"Grekiska",hun:"Ungerska",gle:"Gaeliska (irisk)",ita:"Italienska",lav:"Lettiska",lit:"Litauiska",mlt:"Maltesiska",pol:"Polska",por:"Portugisiska",rum:"Rumänska",slo:"Slovakiska",slv:"Slovenska",spa:"Spanska",swe:"Svenska",chi:"Kinesiska",kor:"Koreanska",nor:"Norska",rus:"Ryska",tur:"Turkiska"},otherConstraints:{noLimitations:"Inga begränsningar",confidentialityOfProceedings:"Sekretess som omfattar myndigheters verksamhet...",internationalRelations:"Internationella förbindelser, det nationella försvaret eller allmän säkerhet",courseOfJustice:"Domstolsförfaranden, personers möjlighet att få en rättvis rättegång...",confidentialityOfCommercial:"Sekretess som omfattar kommersiell eller industriell information...",intellectualProperty:"Immateriella rättigheter",confidentialityOfPersonalData:"Sekretess som omfattar personuppgifter och/eller akter om en fysisk person...",interestsOrProtection:"Tredje parts intressen, om den parten har tillhandahållit den begärda informationen...",protectionOfEnvironment:"Skydd av den miljö som informationen avser...",freeText:"Fritext"},serviceType:{humanInteractionService:"100 Geografiska tjänster för mänsklig interaktion",humanCatalogueViewer:"101 Visningstjänst för datakatalog",humanGeographicViewer:"102 Geografisk visningstjänst",humanGeographicSpreadsheetViewer:"103 Tjänst för geografisk visning av kalkylblad",humanServiceEditor:"104 Tjänsteredigerare",humanChainDefinitionEditor:"105 Redigeringstjänst för tjänstekedjedefinition",humanWorkflowEnactmentManager:"106 Hanteringstjänst för informationsflöden",humanGeographicFeatureEditor:"107 Redigeringstjänst för geografiska objekt",humanGeographicSymbolEditor:"108 Redigeringstjänst för geografiska symboler ",humanFeatureGeneralizationEditor:"109 Redigeringstjänst för generalisering av geoobjekt",humanGeographicDataStructureViewer:"110 Visningstjänst för geografisk datastruktur",infoManagementService:"200 Geografiska modell-/informationshanteringstjänster",infoFeatureAccessService:"201 Tjänst för åtkomst till geoobjekt",infoMapAccessService:"202 Tjänst för åtkomst till karta",infoCoverageAccessService:"203 Tjänst för åtkomst till coverage",infoSensorDescriptionService:"204 Tjänst för sensorbeskrivning",infoProductAccessService:"205 Tjänst för produktåtkomst",infoFeatureTypeService:"206 Tjänst för geoobjektstypskatalog",infoCatalogueService:"207 Katalogtjänst",infoRegistryService:"208 Registertjänst",infoGazetteerService:"209 Ortnamnstjänst",infoOrderHandlingService:"210 Orderhanteringstjänst",infoStandingOrderService:"211 Tjänst för stående beställning",taskManagementService:"300 Geografiska tjänster för flödesstyrning/uppgiftshantering",chainDefinitionService:"301 Tjänst för kedjedefinition",workflowEnactmentService:"302 Tjänst för tillämpning av arbetsflöde",subscriptionService:"303 Prenumerationstjänst",spatialProcessingService:"400 Geografiska bearbetningstjänster – spatial",spatialCoordinateConversionService:"401 Tjänst för konvertering av koordinater",spatialCoordinateTransformationService:"402 Tjänst för omvandling av koordinater",spatialCoverageVectorConversionService:"403 Tjänst för konvertering av coverage/vektor",spatialImageCoordinateConversionService:"404 Tjänst för konvertering av bildkoordinater",spatialRectificationService:"405 Rektifieringstjänst",spatialOrthorectificationService:"406 Tjänst för ortorektifiering",spatialSensorGeometryModelAdjustmentService:"407 Tjänst för justering av sensorgeometrimodeller",spatialImageGeometryModelConversionService:"408 Tjänst för konvertering av bildgeometrimodeller",spatialSubsettingService:"409 Selekteringstjänst",spatialSamplingService:"410 Samplingstjänst",spatialTilingChangeService:"411 Tjänst för tilingändring",spatialDimensionMeasurementService:"412 Tjänst för mätning av dimensioner",spatialFeatureManipulationService:"413 Tjänst för objektmodifiering",spatialFeatureMatchingService:"414 Tjänst för matchning av objekt",spatialFeatureGeneralizationService:"415 Tjänst för generalisering av objekt",spatialRouteDeterminationService:"416 Vägbeskrivningstjänst",spatialPositioningService:"417 Positioneringstjänst",spatialProximityAnalysisService:"418 Tjänst för avståndsanalys",thematicProcessingService:"500 Geografiska bearbetningstjänster – tematiska",thematicGoparameterCalculationService:"501 Tjänst för beräkning av geografiska parametrar",thematicClassificationService:"502 Tjänst för tematisk klassificering",thematicFeatureGeneralizationService:"503 Tjänst för generalisering av objekt",thematicSubsettingService:"504 Selekteringstjänst",thematicSpatialCountingService:"505 Geografisk räkningstjänst",thematicChangeDetectionService:"506 Tjänst för förändringsdetektering",thematicGeographicInformationExtractionService:"507 Tjänst för extrahering av geografisk information",thematicImageProcessingService:"508 Bildbearbetningstjänst",thematicReducedResolutionGenerationService:"509 Tjänst för upplösningsreducering",thematicImageManipulationService:"510 Bildmodifieringstjänster",thematicImageUnderstandingService:"511 Tjänster för bildförståelse",thematicImageSynthesisService:"512 Bildsyntestjänster",thematicMultibandImageManipulationService:"513 Modifiering av flerbandsbilder",thematicObjectDetectionService:"514 Tjänst för objektdetektering",thematicGeoparsingService:"515 Geoanalystjänst",thematicGeocodingService:"516 Geokodningstjänst",temporalProcessingService:"600 Geografiska bearbetningstjänster – temporala",temporalReferenceSystemTransformationService:"601 Tjänst för omvandling av temporal referens",temporalSubsettingService:"602 Selekteringstjänst",temporalSamplingService:"603 Samplingstjänst",temporalProximityAnalysisService:"604 Tjänst för analys av tidsavstånd",metadataProcessingService:"700 Geografiska bearbetningstjänster – metadata",metadataStatisticalCalculationService:"701 Tjänst för statistisk beräkning",metadataGeographicAnnotationService:"702 Tjänst för geografiska noteringar",comService:"800 Geografiska kommunikationstjänster",comEncodingService:"801 Kodningstjänst",comTransferService:"802 Överföringstjänst",comGeographicCompressionService:"803 Geografisk komprimeringstjänst",comGeographicFormatConversionService:"804 Tjänst för konvertering av geografiska dataformat",comMessagingService:"805 Meddelandetjänst",comRemoteFileAndExecutableManagement:"806 Fjärrhantering av filer och körbara filer"},useLimitation:{noCondition:"Inga villkor gäller",unknownCondition:"Villkor okända",freeText:"Fritext"}});