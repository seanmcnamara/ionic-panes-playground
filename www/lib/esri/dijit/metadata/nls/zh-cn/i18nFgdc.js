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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"无",notComplete:"未完成",other:"其他",present:"存在",unknown:"未知",unpublishedMaterial:"未发布材料"},hints:{integerGreaterThanOne:"(请输入一个大于 1 的整数)",integer0To100:"(请输入一个 0 至 100 之间的整数)"},citeinfo:{caption:"引用信息",origin:"创作者",pubdate:"发布日期",pubtime:"发布时间",title:"标题",edition:"版本",geoform:{caption:"地理空间数据表示形式",atlas:"地图集",audio:"音频",diagram:"逻辑示意图",sDocument:"文档",globe:"Globe",map:"地图",model:"模型",multiMediaPresentation:"多媒体演示",profile:"剖面",rasterDigitalData:"栅格数字数据",remoteSensingImage:"遥感影像",section:"地区",spreadsheet:"电子表格",tabularDigitalData:"图表数字数据",vectorDigitalData:"矢量数字数据",video:"视频",view:"查看"},serinfo:{caption:"系列信息",sername:"系列名称",issue:"问题标识"},pubinfo:{caption:"发布信息",pubplace:"发布地点",publish:"发布者"},othercit:"其他引用详细信息",onlink:"在线链接(URL)"},cntinfo:{caption:"联系人信息",section:{primary:"主要",phoneAndEmail:"电话和电子邮件",hoursAndInstructions:"小时和说明"},cntorgp:{caption:"按组织",cntorg:"组织",cntper:"人员"},cntperp:{caption:"按人员",cntper:"人员",cntorg:"组织"},cntpos:"位置",cntaddr:{caption:"地址",addrtype:{caption:"地址类型",mailing:"邮寄",physical:"实际",mailingAndPhysical:"邮寄和实际"},address:"地址",city:"城市",state:"省/自治区/直辖市",postal:"邮政编码",country:"国"},cntvoice:"语音",cnttdd:"TDD/TTY 电话(听力障碍)",cntfax:"传真",cntemail:"电子邮件地址",hours:"小时",cntinst:"说明"},dataqual:{caption:"数据质量信息",section:{attributeAccuracy:"属性精度",logicalConsistency:"逻辑一致性",completeness:"完整性",positionalAccuracy:"定位精度",lineage:"谱系",cloudCover:"云量"},attracc:{caption:"属性精度",attraccr:"属性准确性报告",qattracc:{caption:"属性精度定量评估",attraccv:"属性精度值",attracce:"属性精度说明"}},logic:"逻辑一致性报告",complete:"完整性报告",posacc:"定位精度",horizpa:{caption:"水平定位精度",horizpar:"水平定位精度报告",qhorizpa:{caption:"水平定位精度定量评估",horizpav:"水平定位精度值",horizpae:"水平定位精度说明"}},vertacc:{caption:"垂直定位精度",vertaccr:"垂直定位精度报告",qvertpa:{caption:"垂直定位精度定量评估",vertaccv:"垂直定位精度值",vertacce:"垂直定位精度说明"}},lineage:{caption:"谱系"},srcinfo:{caption:"源信息",srccite:"源引用",srcscale:"源比例分母",typesrc:{caption:"源介质类型",paper:"纸张",stableBaseMaterial:"基础稳定的材料",microfiche:"微缩胶片",microfilm:"微缩胶卷",audiocassette:"录音带",chart:"图表",filmstrip:"胶片条",transparency:"透明度",videocassette:"录影带",videodisc:"影碟",videotape:"录像带",physicalModel:"物理模型",computerProgram:"计算机程序",disc:"光碟",cartridgeTape:"盒式磁带",magneticTape:"磁带",online:"在线",cdrom:"CD-ROM",electronicBulletinBoard:"电子布告板",electronicMailSystem:"电子邮件系统"},srctime:"源内容时限",srccurr:"数据源时间参考信息",srccitea:"源引用缩写",srccontr:"数据源作用"},procstep:{caption:"处理步骤",procdesc:"过程描述",srcused:"源使用的引用缩写",procdate:"处理日期",proctime:"处理时间",srcprod:"源生成的引用缩写",proccont:"处理者联系信息"},cloud:"云量"},distinfo:{caption:"分发信息",section:{distributor:"经销商",description:"描述",orderProcess:"订购程序",prerequisites:"先决条件",availability:"可用性"},distrib:"经销商",resdesc:{caption:"资源描述",liveData:"实时数据和地图",downloadableData:"可下载数据",offlineData:"离线数据",staticMapImages:"静态地图图像",sDocument:"其他文档",application:"应用程序",geographicService:"地理服务",clearingHouse:"交换中心",mapFiles:"地图文件",geographicActivies:"地理活动"},distliab:"分发责任说明",custom:"客户订购程序",techpreq:"技术先决条件",availabl:"可用性"},eainfo:{caption:"实体和属性信息",overview:"概要描述",eaover:"实体和属性概述",eadetcit:"实体和属性详细信息引用"},idinfo:{caption:"标识信息",section:{timeAndStatus:"时间和状态",constraints:"约束",contact:"联系人",additional:"附加"},citeinfo:"引用信息",descript:{caption:"描述",sAbstract:"摘要",purpose:"用途",supplinf:"附加信息"},timeperd:{caption:"内容时限",current:{caption:"时间参考信息",groundCondition:"地面条件",publicationDate:"发布日期"}},status:{caption:"状态",progress:{caption:"进度",complete:"完成",inWork:"正在进行",planned:"已计划"},update:{caption:"维护和更新频率",continual:"持续",daily:"每天",weekly:"每周",monthly:"每月",annually:"每年",unknown:"未知",asNeeded:"根据需要",irregular:"不定期",nonePlanned:"未计划"}},spdom:{caption:"范围(E)",bounding:{caption:"边界坐标",westbc:"西部边界经度",eastbc:"东部边界经度",northbc:"北部边界纬度",southbc:"南部边界纬度"}},keywords:{caption:"关键字",theme:"主题",place:"地点",stratum:"地层",temporal:"时态",thesaursus:"关联主题词表",delimited:"关键字",themektIsoTopicCategory:"ISO 主题...",themektIsoTopicDialog:"ISO 主题",placektGnis:"地理名称信息系统"},accconst:"访问限制",useconst:"使用限制",ptcontac:"资源接触点",browse:{caption:"浏览图形",browsen:"浏览图形 URL",browsed:"浏览图形文件描述",browset:"浏览图形文件类型"},datacred:"数据集可信度",secinfo:{caption:"安全性信息",secsys:"安全性分类系统",secclass:{caption:"安全性分类",topSecret:"绝对机密",secret:"机密",confidential:"机密",restricted:"受限",unclassified:"未分类",sensitive:"敏感"},sechandl:"安全性处理描述"},sNative:"本地数据集环境",crossref:"交叉引用"},metadata:{idinfo:"标识",dataqual:"质量",spdoinfo:"空间数据组织",spref:"空间参考",eainfo:"实体和属性",distinfo:"分发",metainfo:"元数据"},metainfo:{caption:"元数据信息",section:{dates:"元数据日期",contact:"元数据联系人",standard:"元数据标准",additional:"附加"},metd:"元数据日期",metrd:"元数据查看日期",metfrd:"元数据未来查看日期",metstdn:"元数据标准名称",metstdv:"元数据标准版",metac:"元数据访问限制",metuc:"元数据使用限制信息",metsi:{caption:"元数据安全性信息",metscs:"元数据安全性分类系统",metsc:"元数据安全性分类",metshd:"元数据安全性处理描述"}},spref:{caption:"空间参考信息",horizsys:{caption:"地平坐标系",geograph:{caption:"地理(G)",latres:"纬度分辨率",longres:"经度分辨率",geogunit:{caption:"地理坐标单位",decimalDegrees:"十进制度",decimalMinutes:"十进制分",decimalSeconds:"十进制秒",degreesAndDecimalMinutes:"度和十进制分",degreesMinutesAndDecimalSeconds:"度、分和十进制秒",radians:"弧度(A)",grads:"百分度"}},planar:{caption:"平面"},local:{caption:"局部",localdes:"局部描述",localgeo:"局部地理配准信息"},geodetic:{caption:"大地测量模型",horizdn:{caption:"水平基准面名称",nad83:"1983 年的北美基准面",nad27:"1927 年的北美基准面"},ellips:{caption:"椭圆体名称",grs80:"大地测量参考系统 80",clarke1866:"Clarke 1866"},semiaxis:"长半轴",denflat:"扁率的分母"}},vertdef:{caption:"垂直坐标系",altsys:{caption:"高度系统",altdatum:{caption:"高度基准面名称",navd88:"1988 年的北美垂直基准面",ngvd29:"1929 年的国家大地测量垂直基准面"},altres:"高度分辨率",altunits:{caption:"高度距离单位",meters:"米",feet:"英尺"},altenc:{caption:"高度编码方法",explicit:"地平坐标随附的显式高程坐标",implicit:"隐式坐标",attribute:"属性值"}},depthsys:{caption:"深度系统",depthdn:{caption:"深度基准面名称",option1:"局部曲面",option2:"图表基准面；深度基准面",option3:"最低天文潮位",option4:"最高天文潮位",option5:"平均低潮面",option6:"平均高潮面",option7:"平均海平面",option8:"土地测量基准面",option9:"平均低潮面(大潮)",option10:"平均高潮面(大潮)",option11:"平均低潮面(小潮)",option12:"平均高潮面(小潮)",option13:"平均低低潮面",option14:"平均低低潮面(大潮)",option15:"平均高高潮面",option16:"平均高低潮面",option17:"平均低高潮面",option18:"大潮",option19:"回归低低潮面",option20:"小潮",option21:"高潮面",option22:"高高潮面",option23:"低潮面",option24:"低潮面基准面",option25:"最低潮面",option26:"低低潮面",option27:"理论最低低潮面",option28:"平均潮面",option29:"印度洋大潮低潮面",option30:"平均朔望高潮间隙",option31:"平均朔望低潮间隙",option32:"哥伦比亚河基准面",option33:"墨西哥湾低潮面基准面",option34:"赤道大潮低潮面",option35:"近似最低天文潮位",option36:"无校正"},depthres:"深度分辨率",depthdu:{caption:"深度距离单位",meters:"米",feet:"英尺"},depthem:{caption:"深度编码方法",explicit:"水平坐标随附的显式深度坐标",implicit:"隐式坐标",attribute:"属性值"}}}},timeinfo:{caption:"时间段信息",sngdate:"单个日期",mdattim:"多个日期",rngdates:"日期范围",caldate:"日期(D)",time:"时间",begdate:"开始日期",begtime:"开始时间",enddate:"结束日期",endtime:"结束时间"}});