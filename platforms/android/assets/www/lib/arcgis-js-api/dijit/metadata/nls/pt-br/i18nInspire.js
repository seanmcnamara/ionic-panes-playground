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

define({documentTypes:{data:{caption:"INSPIRE (Dados)",description:""},service:{caption:"INSPIRE (Serviço)",description:""}},dataThemeKeywords:{caption:"Tema Inspire Data"},inspireServiceType:{discovery:"Serviço de Descoberta",view:"Visualizar Serviço",download:"Serviço de Download",transformation:"Serviço de Transformação",invoke:"Serviço de Solicitação",other:"Outro Serviço"},keywordSections:{dataTheme:"Tema Inspire Data",serviceCategory:"Categoria de Serviço ISO 19119",gemetConcept:"Conceito GEMET",otherKeywords:"Outros Palavras-Chaves"},LanguageCode:{bul:"Búlgaro",cze:"Tcheco",dan:"Dinamarquês",dut:"Holandês",eng:"Inglês",est:"Estônia",fin:"Finlandês",fre:"Francês",ger:"Alemão",gre:"Grego",hun:"Húngaro",gle:"Gaélico (Irlandês)",ita:"Italiano",lav:"Letônia",lit:"Lituano",mlt:"Maltês",pol:"Polonês",por:"Português",rum:"Romano",slo:"Eslovaco",slv:"Esloveno",spa:"Espanhol",swe:"Sueco",chi:"Chinês",kor:"Coreano",nor:"Norueguês",rus:"Russo",tur:"Turco"},otherConstraints:{noLimitations:"Nenhuma limitação",confidentialityOfProceedings:"A confidencialidade dos atos de citações públicas...",internationalRelations:"Relações internacionais, segurança pública ou defesa nacional",courseOfJustice:"O curso da justiça, a capacidade de qualquer pessoa a um julgamento justo...",confidentialityOfCommercial:"A confidencialidade de informações comerciais ou industriais...",intellectualProperty:"Direitos de propriedade intelectual",confidentialityOfPersonalData:"A confidencialidade de dados e/ou arquivo pessoais...",interestsOrProtection:"Os interesses ou proteção de qualquer pessoa que forneceu as informações...",protectionOfEnvironment:"A proteção do ambiente para o qual tais informações se relacionam...",freeText:"Texto livre"},serviceType:{humanInteractionService:"100 Serviços geográficos de interação humana",humanCatalogueViewer:"101 Visualizador de catálogo",humanGeographicViewer:"102 Visualizador geográfico",humanGeographicSpreadsheetViewer:"103 Visualizador de planilha geográfica",humanServiceEditor:"104 Editor de serviço",humanChainDefinitionEditor:"105 Editor de definição da série",humanWorkflowEnactmentManager:"106 Gerenciador de representação do fluxo de trabalho",humanGeographicFeatureEditor:"107 Editor de feição geográfica",humanGeographicSymbolEditor:"108 Editor de símbolo geográfico ",humanFeatureGeneralizationEditor:"109 Editor de generalização de feição",humanGeographicDataStructureViewer:"110 Visualizador da estrutura de dados geográficos",infoManagementService:"200 Serviço de gerenciamento de informações geográficas/modelo",infoFeatureAccessService:"201 Serviço de acesso da feição",infoMapAccessService:"202 Serviço de acesso do mapa",infoCoverageAccessService:"203 Serviço de acesso da coverage",infoSensorDescriptionService:"204 Serviço de descrição do sensor",infoProductAccessService:"205 Serviço de aceso do produto",infoFeatureTypeService:"206 Serviço do tipo de feição",infoCatalogueService:"207 Serviço do catálogo",infoRegistryService:"208 Serviço de registro",infoGazetteerService:"209 Serviço do dicionário geográfico",infoOrderHandlingService:"210 Serviço de manipulação do pedido",infoStandingOrderService:"211 Serviço de pedido permanente",taskManagementService:"300 Serviços de gerenciamento da tarefa/fluxo de trabalho geográfico",chainDefinitionService:"301 Serviço de definição da série",workflowEnactmentService:"302 Serviço de representação do fluxo de trabalho",subscriptionService:"303 Serviço da assinatura",spatialProcessingService:"400 Serviços de processamento geográficos - espacial",spatialCoordinateConversionService:"401 Serviço de conversão da coordenada",spatialCoordinateTransformationService:"402 Serviço de transformação da coordenada",spatialCoverageVectorConversionService:"403 Serviço de conversão da coverage/vetor",spatialImageCoordinateConversionService:"404 Serviço de conversão da coordenada de imagem",spatialRectificationService:"405 Serviço de retificação",spatialOrthorectificationService:"406 Serviço de ortorretificação",spatialSensorGeometryModelAdjustmentService:"407 Serviço de ajuste do modelo de geometria do sensor",spatialImageGeometryModelConversionService:"408 Serviço de conversão do modelo de geometria do sensor",spatialSubsettingService:"409 Serviço de subconfiguração",spatialSamplingService:"410 Serviço de amostragem",spatialTilingChangeService:"411 Serviço de alteração do mosaico",spatialDimensionMeasurementService:"412 Serviço de medida da dimensão",spatialFeatureManipulationService:"413 Serviços de manipulação da feição",spatialFeatureMatchingService:"414 Serviço de combinação da feição",spatialFeatureGeneralizationService:"415 Serviço de generalização da feição",spatialRouteDeterminationService:"416 Serviço de determinação da rota",spatialPositioningService:"417 Serviço de posicionamento",spatialProximityAnalysisService:"418 Serviço da análise de proximidade",thematicProcessingService:"500 Serviços de processamento geográficos - temático",thematicGoparameterCalculationService:"501 Serviço de cálculo de geoparâmetro",thematicClassificationService:"502 Serviço de classificação temática",thematicFeatureGeneralizationService:"503 Serviço de generalização da feição",thematicSubsettingService:"504 Serviço de subconfiguração",thematicSpatialCountingService:"505 Serviço de contagem espacial",thematicChangeDetectionService:"506 Serviço de detecção de alteração",thematicGeographicInformationExtractionService:"507 Serviços de extração de informações geográficas",thematicImageProcessingService:"508 Serviço de processamento de imagens",thematicReducedResolutionGenerationService:"509 Serviço de geração de resolução reduzido",thematicImageManipulationService:"510 Serviços de Manipulação de Imagem",thematicImageUnderstandingService:"511 Serviços de compreensão da imagem",thematicImageSynthesisService:"512 Serviços de síntese da imagem",thematicMultibandImageManipulationService:"513 Manipulação de imagem de múltiplas bandas",thematicObjectDetectionService:"514 Serviço de detecção de objeto",thematicGeoparsingService:"515 Serviço de geoanálise",thematicGeocodingService:"516 Serviço de geocodificação",temporalProcessingService:"600 Serviços de processamento geográficos - temporal",temporalReferenceSystemTransformationService:"601 Serviço de transformação do sistema de referência temporal",temporalSubsettingService:"602 Serviço de subconfiguração",temporalSamplingService:"603 Serviço de amostragem",temporalProximityAnalysisService:"604 Serviço da análise de proximidade temporal",metadataProcessingService:"700 Serviços de processamento geográficos - metadados",metadataStatisticalCalculationService:"701 Serviço de cálculo de estatística",metadataGeographicAnnotationService:"702 Serviços de anotação geográficos",comService:"800 Serviços de comunicação geográficos",comEncodingService:"801 Serviço de codificação",comTransferService:"802 Serviço de transferência",comGeographicCompressionService:"803 Serviço de compactação geográfico",comGeographicFormatConversionService:"804 Serviço de conversão de formato geográfico",comMessagingService:"805 Serviço de mensagem",comRemoteFileAndExecutableManagement:"806 Gerenciamento de executável e arquivo remoto"},useLimitation:{noCondition:"Nenhuma condição se aplica",unknownCondition:"Condições desconhecidas",freeText:"Texto livre"}});