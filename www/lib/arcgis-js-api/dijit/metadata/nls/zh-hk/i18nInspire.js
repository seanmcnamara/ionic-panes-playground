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

define({documentTypes:{data:{caption:"INSPIRE (資料)",description:""},service:{caption:"INSPIRE (服務)",description:""}},dataThemeKeywords:{caption:"Inspire 資料主題"},inspireServiceType:{discovery:"探索服務",view:"檢視服務",download:"下載服務",transformation:"轉換服務",invoke:"啟動服務",other:"其他服務"},keywordSections:{dataTheme:"Inspire 資料主題",serviceCategory:"ISO 19119 服務類別",gemetConcept:"GEMET 概念",otherKeywords:"其他關鍵字"},LanguageCode:{bul:"保加利亞語",cze:"捷克語",dan:"丹麥語",dut:"荷蘭語",eng:"英語",est:"愛沙尼亞語",fin:"芬蘭語",fre:"法語",ger:"德語",gre:"希臘語",hun:"匈牙利語",gle:"蓋爾語(愛爾蘭語)",ita:"義大利語",lav:"拉脫維亞語",lit:"立陶宛語",mlt:"馬爾他語",pol:"波蘭語",por:"葡萄牙語",rum:"羅馬尼亞語",slo:"斯洛伐克語",slv:"斯洛凡尼亞語",spa:"西班牙語",swe:"瑞典語",chi:"中文",kor:"朝鮮語",nor:"挪威語",rus:"俄語",tur:"土耳其語"},otherConstraints:{noLimitations:"無限制",confidentialityOfProceedings:"公家機關處理程序的機密性",internationalRelations:"國際關係、公共安全或國防",courseOfJustice:"司法程序，任何人接受公平審判的權利...",confidentialityOfCommercial:"商業或產業資訊的機密性...",intellectualProperty:"智慧財產權",confidentialityOfPersonalData:"個人資料和/或檔案的機密性...",interestsOrProtection:"資訊提供者的權益或保護...",protectionOfEnvironment:"與此類資訊相關的環境的保護...",freeText:"任意文字"},serviceType:{humanInteractionService:"100 地理人類互動服務",humanCatalogueViewer:"101 目錄檢視器",humanGeographicViewer:"102 地理檢視器",humanGeographicSpreadsheetViewer:"103 地理工作表檢視器",humanServiceEditor:"104 服務編輯器",humanChainDefinitionEditor:"105 鏈結定義編輯器",humanWorkflowEnactmentManager:"106 工作流程實施管理器",humanGeographicFeatureEditor:"107 地理圖徵編輯器",humanGeographicSymbolEditor:"108 地理符號編輯器 ",humanFeatureGeneralizationEditor:"109 圖徵通用化編輯器",humanGeographicDataStructureViewer:"110 地理資料結構檢視器",infoManagementService:"200 地理模型/資訊管理服務",infoFeatureAccessService:"201 圖徵存取服務",infoMapAccessService:"202 地圖存取服務",infoCoverageAccessService:"203 覆蓋存取服務",infoSensorDescriptionService:"204 感應器描述服務",infoProductAccessService:"205 產品存取服務",infoFeatureTypeService:"206 圖徵類型服務",infoCatalogueService:"207 目錄服務",infoRegistryService:"208 註冊服務",infoGazetteerService:"209 地名詞典服務",infoOrderHandlingService:"210 訂單處理服務",infoStandingOrderService:"211 長期訂單服務",taskManagementService:"300 地理工作流程/任務管理服務",chainDefinitionService:"301 鏈結定義服務",workflowEnactmentService:"302 工作流程實施服務",subscriptionService:"303 訂閱服務",spatialProcessingService:"400 地理處理服務 - 空間",spatialCoordinateConversionService:"401 坐標轉換服務",spatialCoordinateTransformationService:"402 坐標變換服務",spatialCoverageVectorConversionService:"403 覆蓋/矢量轉換服務",spatialImageCoordinateConversionService:"404 影像坐標轉換服務",spatialRectificationService:"405 校正服務",spatialOrthorectificationService:"406 正射校正服務",spatialSensorGeometryModelAdjustmentService:"407 感應器幾何模型校正服務",spatialImageGeometryModelConversionService:"408 影像幾何模型轉換服務",spatialSubsettingService:"409 構造子集服務",spatialSamplingService:"410 採樣服務",spatialTilingChangeService:"411 圖磚變更服務",spatialDimensionMeasurementService:"412 尺寸測量服務",spatialFeatureManipulationService:"413 圖徵處理服務",spatialFeatureMatchingService:"414 圖徵相符服務",spatialFeatureGeneralizationService:"415 圖徵通用化服務",spatialRouteDeterminationService:"416 路徑確定服務",spatialPositioningService:"417 定位服務",spatialProximityAnalysisService:"418 鄰域分析服務",thematicProcessingService:"500 地理處理服務 - 主題",thematicGoparameterCalculationService:"501 地理參數計算服務",thematicClassificationService:"502 主題分類服務",thematicFeatureGeneralizationService:"503 圖徵通用化服務",thematicSubsettingService:"504 構造子集服務",thematicSpatialCountingService:"505 空間計算服務",thematicChangeDetectionService:"506 變更檢測服務",thematicGeographicInformationExtractionService:"507 地理資訊擷取服務",thematicImageProcessingService:"508 影像處理服務",thematicReducedResolutionGenerationService:"509 解析度降低生成服務",thematicImageManipulationService:"510 影像處理服務",thematicImageUnderstandingService:"511 影像理解服務",thematicImageSynthesisService:"512 影像合成服務",thematicMultibandImageManipulationService:"513 多頻段影像處理",thematicObjectDetectionService:"514 物件檢測服務",thematicGeoparsingService:"515 地理解析服務",thematicGeocodingService:"516 地理編碼服務",temporalProcessingService:"600 地理處理服務 - 時態",temporalReferenceSystemTransformationService:"601 時態參考系統變換服務",temporalSubsettingService:"602 構造子集服務",temporalSamplingService:"603 採樣服務",temporalProximityAnalysisService:"604 時態鄰域分析服務",metadataProcessingService:"700 地理處理服務 - 中繼資料",metadataStatisticalCalculationService:"701 統計計算服務",metadataGeographicAnnotationService:"702 地理註記服務",comService:"800 地理通訊服務",comEncodingService:"801 編碼服務",comTransferService:"802 傳輸服務",comGeographicCompressionService:"803 地理壓縮服務",comGeographicFormatConversionService:"804 地理格式轉換服務",comMessagingService:"805 訊息傳遞服務",comRemoteFileAndExecutableManagement:"806 遠距檔案和可執行檔案管理"},useLimitation:{noCondition:"無適用條件",unknownCondition:"未知條件",freeText:"任意文字"}});