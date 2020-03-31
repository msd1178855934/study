module.exports = {
    "zh-CN": {
        select: "选择",
        personName: "姓名",
        enterName: "请输入姓名",
        phone: "手机号码",
        idType: "证件类型",
        idNumber: "证件号码",
        sex: "性别",
        birthData: "出生日期",
        nationality: "国籍/地区",
        selectNationality: "请选择国籍/地区",
        placeOfDomicile: "户籍所在地",
        selectPlaceOfDomicile: "请选择户籍所在地",
        nativePlace: "籍贯",
        selectNativePlace: "请选择籍贯",
        address: "居住地址",
        selectAddress: "请选择居住地址",
        addressDatile: "详细地址",
        selectAddressDatile: "请填写详细住址（楼栋门牌号）",
        inGuangzhou: "近期是否在广州",
        inOUtGUangZhouDate: "来或返回广州日期",
        inOUtGUangZhouDate14: "请选择返回日期（最近14日内）",
        currentLocation: "目前所在地",
        selectCurrentLocation: "请选择目前所在地点",
        isGuangZhou: "是否常住广州",
        outGuangZhou: "拟返回广州日期",
        selectDate: "请选择日期",
        monthTraveling: "近一个月旅居史",
        Recenthistory: "近期接触史（选填）",
        Recenthistory14: "14日内密切接触近期有湖北旅居史者",
        RecenthistoryDesc14: "近期有湖北旅居史者指：14日内来自湖北和去过湖北的人员",
        RecenthistoryPerson14: "自我感觉14日内曾与患者接触过者",
        RecenthistoryPersonDesc: "近期与确诊患者有接触，如乘搭同一公共交通工具等情况",
        contactDate: "接触日期",
        selectDate14: "请选择日期（最近14日内）",
        healthStatus: "个人健康状态",
        symptomsTitle: "是否有如下症状（必选）",
        symptomsLable: "是否有如下症状",
        symptomDscrLable: "其他症状",
        symptomDscrPlaceholder: "请简要描述症状情况(不超过10个汉字)",
        agree: "我已阅知本申报所列事项，并保证以上申报内容正确属实",
        infoBasic: "基本信息",
        submit: "提交",
        getPhone: "获取绑定手机号",
        enterPhone: "请输入手机号码",
        selectTypeId: "请选证件类型",
        enterId: "请输入证件号码",
        selectGenger: "请选择性别",
        birthDate: "请选择出生日期",
        myHealth: "上报我的健康信息",
        heHealth: "为他人上报健康状况",
        checkId: "请输入正确的身份证号码",
        checkHmHid: "请输入正确的证件号码",
        checRequired: "请输入其他症状",
        symptomDscrLength: "其他症状描述不超过10个汉字",
        checkBirthday: "请输入正确的出生日期",
        requiredmonthTraveling: "请选择近一个月旅居史",
        selectSymptoms: "请选择症状",
        loding: "努力加载中...",
        serverCrowded: "服务器拥挤，请稍后再试",
        portrait: "他人头像",
        information: "头像信息",
        uploadAvatar: "请上传他人头像",
        completed: "上传完成",
        upload: "上传",
        selectRegion: {
            serverCrowded: "服务器拥挤，请稍后再试",
            unableLocation: "无法获取定位信息",
            firstAuthorize: "请先授权获取当前定位信息",
            street: "街道",
            area: "区",
            community: "社区"
        },
        sexMap: {
            "男": "男",
            "女": "女"
        },
        nationRange: [ {
            name: "中国大陆",
            value: 1
        }, {
            name: "中国港澳台地区",
            value: 2
        }, {
            name: "外国",
            value: 3
        } ],
        domicilePlaceRange: [ {
            name: "广州市",
            value: 1
        }, {
            name: "广东其他地市",
            value: 2
        }, {
            name: "湖北省",
            value: 3
        }, {
            name: "其他",
            value: 4
        } ],
        cardTypeRange: [ {
            name: "身份证",
            value: 1
        }, {
            name: "军官证",
            value: 4
        }, {
            name: "护照",
            value: 3
        }, {
            name: "港澳居民来往内地通行证",
            value: 8
        }, {
            name: "台湾居民来往内地通行证",
            value: 9
        }, {
            name: "港澳居民居住证",
            value: 6
        }, {
            name: "台湾居民居住证",
            value: 7
        }, {
            name: "出入境通行证",
            value: 11
        } ],
        residentFlagItems: [ {
            name: "是，在广州居住了已有半年以上",
            value: 1
        }, {
            name: "否，我是临时来广州的",
            value: 2
        } ],
        residentConditionItems: [ {
            name: "一直在广州3个月或以上",
            value: 1
        }, {
            name: "来或返回广州超过14日",
            value: 2
        }, {
            name: "来或返回广州不超过14日（含14日）",
            value: 3
        }, {
            name: "目前仍在外地",
            value: 4
        } ],
        travelRegionClassItems: [ {
            name: "武汉市",
            value: 1
        }, {
            name: "湖北（不含武汉）",
            value: 2
        }, {
            name: "温州市",
            value: 6
        }, {
            name: "中国大陆其他省(自治区)市",
            value: 4
        }, {
            name: "中国港澳台地区",
            value: 3
        }, {
            name: "韩国",
            value: 7
        }, {
            name: "日本",
            value: 8
        }, {
            name: "其他国家",
            value: 5
        } ],
        personTypeItems: [ {
            name: "未返穗本地常住居民",
            value: 1,
            desc: "在2020-1-1之后一直没返穗的本地常住居民。"
        }, {
            name: "持续在穗人员",
            value: 2,
            desc: "于2020-1-1之前到目前一直在穗人员。"
        }, {
            name: "一月初返穗居民",
            value: 3,
            desc: "在2020-1-1至2020-1-15间返穗本地常住居民。"
        }, {
            name: "一月初来穗人员",
            value: 4,
            desc: "在2020-1-1至2020-1-15间来穗外地临时人员。"
        }, {
            name: "一月中返穗居民",
            value: 5,
            desc: "于2020-1-15后返穗本地常住居民。"
        }, {
            name: "一月中来穗人员",
            value: 6,
            desc: "于2020-1-15后来穗外地临时人员。"
        }, {
            name: "居家医学观察人员 ",
            value: 11
        }, {
            name: "集中医学观察人员 ",
            value: 12
        } ],
        symptomItems: [ {
            name: "自觉正常",
            value: 1
        }, {
            name: "发热37.3 ℃以下",
            value: 11
        }, {
            name: "发热37.3 ℃（含）以上",
            value: 12
        }, {
            name: "干咳",
            value: 13
        }, {
            name: "乏力",
            value: 14
        }, {
            name: "其他症状",
            value: 15
        } ],
        socialContactItems: [ {
            name: "14日内密切接触近期有湖北旅居史者",
            value: 1,
            desc: "近期有湖北旅居史者指：14日内来自湖北和去过湖北的人员"
        }, {
            name: "自我感觉14日内曾与患者接触过者",
            value: 2,
            desc: "近期与确诊患者有接触，如乘搭同一交通工具等情况"
        } ],
        healthStateItems: [ {
            name: "正常活动",
            value: 1,
            desc: "自觉正常无不适症状"
        }, {
            name: "居家健康服务",
            value: 2,
            desc: "广州有固定住处，在家自我健康观察"
        }, {
            name: "集中健康服务",
            value: 3,
            desc: "广州无固定住处，如住酒店等实施集中健康观察"
        }, {
            name: "集中医学观察",
            value: 4,
            desc: "在医疗机构医学观察"
        } ],
        selfFormRules: {
            symptomDscr: [ {
                type: "symptomDscrLength",
                message: "其他症状描述不超过10个汉字"
            } ],
            username: [ {
                type: "required",
                message: "请填写姓名"
            } ],
            personType: [ {
                type: "required",
                message: "请选择人员类型"
            } ],
            phone: [ {
                type: "required",
                message: "请输入中国大陆手机号码"
            }, {
                type: "mobile",
                message: "请输入中国大陆手机号码"
            } ],
            identityType: [ {
                type: "required",
                message: "请选择证件类型"
            } ],
            identity: [ {
                type: "required",
                message: "请输入证件号码"
            }, {
                type: "id",
                message: "请输入正确的身份证号码"
            } ],
            birthday: [ {
                type: "required",
                message: "请选择正确的出生日期"
            }, {
                type: "birthdayLength",
                message: "请选择正确的出生日期"
            } ],
            street: [ {
                type: "required",
                message: "请选择居住地址"
            } ],
            addr: [ {
                type: "required",
                message: "请输入详细住址"
            } ],
            gender: [ {
                type: "required",
                message: "请选择性别"
            } ],
            residentFlag: [ {
                type: "required",
                message: "请选择是否常住广州"
            } ],
            residentCondition: [ {
                type: "required",
                message: "请选择近期是否在广州"
            } ],
            healthState: [ {
                type: "required",
                message: "请选择个人健康现状"
            } ],
            avatarKey: [ {
                type: "required",
                message: "请选择头像"
            } ]
        },
        sexRange: [ {
            name: "男",
            value: "男"
        }, {
            name: "女",
            value: "女"
        } ],
        PROVINCE_LISTS: [ {
            name: "北京",
            ename: "beijing"
        }, {
            name: "天津",
            ename: "tianjin"
        }, {
            name: "上海",
            ename: "shanghai"
        }, {
            name: "重庆",
            ename: "chongqing"
        }, {
            name: "中国香港",
            ename: "xianggang"
        }, {
            name: "中国澳门",
            ename: "aomen"
        }, {
            name: "河北",
            ename: "hebei"
        }, {
            name: "山西",
            ename: "shanxi"
        }, {
            name: "内蒙古",
            ename: "neimenggu"
        }, {
            name: "辽宁",
            ename: "liaoning"
        }, {
            name: "吉林",
            ename: "jilin"
        }, {
            name: "黑龙江",
            ename: "heilongjiang"
        }, {
            name: "江苏",
            ename: "jiangsu"
        }, {
            name: "浙江",
            ename: "zhejiang"
        }, {
            name: "安徽",
            ename: "anhui"
        }, {
            name: "福建",
            ename: "fujian"
        }, {
            name: "江西",
            ename: "jiangxi"
        }, {
            name: "山东",
            ename: "shandong"
        }, {
            name: "河南",
            ename: "henan"
        }, {
            name: "湖北",
            ename: "hubei"
        }, {
            name: "湖南",
            ename: "hunan"
        }, {
            name: "广东",
            ename: "guangdong"
        }, {
            name: "广西",
            ename: "guangxi"
        }, {
            name: "海南",
            ename: "hainan"
        }, {
            name: "四川",
            ename: "sichuan"
        }, {
            name: "贵州",
            ename: "guizhou"
        }, {
            name: "云南",
            ename: "yunnan"
        }, {
            name: "西藏",
            ename: "xizang"
        }, {
            name: "陕西",
            ename: "shanxi1"
        }, {
            name: "甘肃",
            ename: "gansu"
        }, {
            name: "青海",
            ename: "qinghai"
        }, {
            name: "宁夏",
            ename: "ningxia"
        }, {
            name: "新疆",
            ename: "xinjiang"
        }, {
            name: "中国台湾",
            ename: "taiwan"
        } ],
        recentRegion_LISTS: [ {
            name: "北京",
            ename: "beijing"
        }, {
            name: "天津",
            ename: "tianjin"
        }, {
            name: "上海",
            ename: "shanghai"
        }, {
            name: "重庆",
            ename: "chongqing"
        }, {
            name: "河北",
            ename: "hebei"
        }, {
            name: "山西",
            ename: "shanxi"
        }, {
            name: "内蒙古",
            ename: "neimenggu"
        }, {
            name: "辽宁",
            ename: "liaoning"
        }, {
            name: "吉林",
            ename: "jilin"
        }, {
            name: "黑龙江",
            ename: "heilongjiang"
        }, {
            name: "江苏",
            ename: "jiangsu"
        }, {
            name: "浙江",
            ename: "zhejiang"
        }, {
            name: "安徽",
            ename: "anhui"
        }, {
            name: "福建",
            ename: "fujian"
        }, {
            name: "江西",
            ename: "jiangxi"
        }, {
            name: "山东",
            ename: "shandong"
        }, {
            name: "河南",
            ename: "henan"
        }, {
            name: "湖北",
            ename: "hubei"
        }, {
            name: "湖南",
            ename: "hunan"
        }, {
            name: "广东",
            ename: "guangdong"
        }, {
            name: "广西",
            ename: "guangxi"
        }, {
            name: "海南",
            ename: "hainan"
        }, {
            name: "四川",
            ename: "sichuan"
        }, {
            name: "贵州",
            ename: "guizhou"
        }, {
            name: "云南",
            ename: "yunnan"
        }, {
            name: "西藏",
            ename: "xizang"
        }, {
            name: "陕西",
            ename: "shanxi1"
        }, {
            name: "甘肃",
            ename: "gansu"
        }, {
            name: "青海",
            ename: "qinghai"
        }, {
            name: "宁夏",
            ename: "ningxia"
        }, {
            name: "新疆",
            ename: "xinjiang"
        }, {
            name: "中国香港",
            ename: "xianggang"
        }, {
            name: "中国澳门",
            ename: "aomen"
        }, {
            name: "中国台湾",
            ename: "taiwan"
        }, {
            name: "国外",
            ename: "guowai"
        } ]
    },
    en: {
        select: "Select",
        personName: "Name",
        enterName: "Enter your name",
        phone: "Phone number",
        idType: "Type of ID",
        idNumber: "ID number",
        sex: "Gender",
        birthData: "Date of birth",
        nationality: "Nationality",
        selectNationality: "Choose your nationality",
        placeOfDomicile: "Household registration location",
        selectPlaceOfDomicile: "Choose the place of household registration",
        nativePlace: "Place of origin",
        selectNativePlace: "Choose your place of origin",
        address: "Current address",
        selectAddress: "Select a residential address",
        addressDatile: "Detailed address",
        selectAddressDatile: "Fill in the detailed address (building number)",
        inGuangzhou: "Are you in Guangzhou recently?",
        inOUtGUangZhouDate: "Date of arrival in or return to Guangzhou",
        inOUtGUangZhouDate14: "Please select the return date (within the last 14 days)",
        currentLocation: "Current location",
        selectCurrentLocation: "Please select your current location",
        isGuangZhou: "Are you a permanent resident of Guangzhou?",
        outGuangZhou: "Planned date of return to Guangzhou",
        selectDate: "Please select date",
        monthTraveling: "Travel or living history within 1 month",
        Recenthistory: "Recent contact history (optional)",
        Recenthistory14: "Have close contact with those who traveled to or lived in Hubei within 14 days.",
        RecenthistoryDesc14: "Recent Hubei travel or living history refers to: from and to Hubei within 14 days",
        RecenthistoryPerson14: "Feel that you have contacted someone who is infected with COVID-19 within 14 days.",
        RecenthistoryPersonDesc: "Recent contact with a patient infected with COVID-19, such as traveling on the same public transportation vehicle, etc",
        contactDate: "Contact date",
        selectDate14: "Please select date (within the last 14 days)",
        healthStatus: "Personal health status",
        symptomsTitle: "Do you have any of the following symptoms (required)",
        symptomsLable: "If you have any of the following symptoms",
        symptomDscrLable: "Other symptoms",
        symptomDscrPlaceholder: "Briefly describe the symptoms",
        agree: "I have read the matters listed in this declaration and guarantee that the above declaration is correct and true",
        infoBasic: "Basic information",
        submit: "Submit",
        getPhone: "link with NO.",
        enterPhone: "Enter your phone number",
        selectTypeId: "Please choose the type of certificate",
        enterId: "Enter the document number",
        selectGenger: "Select gender",
        birthDate: "Select date of birth",
        myHealth: "Report my health information",
        heHealth: "Report the health status of others",
        checkId: "Please enter the correct ID number",
        checkHmHid: "Please enter the correct ID number",
        checRequired: "Please enter other symptoms",
        symptomDscrLength: "Other symptoms, describing with not more than 10 Chinese characters",
        checkBirthday: "Please enter the correct date of birth",
        requiredmonthTraveling: "Please choose your travel or living History within 1 month",
        selectSymptoms: "Please select symptoms",
        loding: "Loading...",
        serverCrowded: "The server is crowded. Please try again later.",
        portrait: "Portrait of others",
        information: "Head information",
        uploadAvatar: "Upload other people's avatars",
        completed: "Upload completed",
        upload: "Upload",
        selectRegion: {
            serverCrowded: "The server is crowded. Please try again later.",
            unableLocation: "Unable to obtain location information",
            firstAuthorize: "Please first authorize access to the current location information",
            street: "Sub-district",
            area: "District",
            community: "Community"
        },
        sexMap: {
            "男": "Men",
            "女": "women"
        },
        nationRange: [ {
            name: "provinces on the Chines\n                 Mainland",
            value: 1
        }, {
            name: "Hong Kong, Macao and Taiwan",
            value: 2
        }, {
            name: "Foreign countries",
            value: 3
        } ],
        domicilePlaceRange: [ {
            name: "Guangzhou",
            value: 1
        }, {
            name: "Other cities in Guangdong Province",
            value: 2
        }, {
            name: "Hubei",
            value: 3
        }, {
            name: "Other",
            value: 4
        } ],
        cardTypeRange: [ {
            name: "ID card",
            value: 1
        }, {
            name: "Certificate of officers",
            value: 4
        }, {
            name: "Passport",
            value: 3
        }, {
            name: "Mainland travel permit for Hong Kong and Macao residents",
            value: 8
        }, {
            name: "Mainland travel permit for Taiwan residents",
            value: 9
        }, {
            name: "Hong Kong and Macao residence permit",
            value: 6
        }, {
            name: "Taiwan residence permit",
            value: 7
        }, {
            name: "Entry and exit permit",
            value: 11
        } ],
        residentFlagItems: [ {
            name: "Yes, I've lived in Guangzhou for more\n                  than half a year.",
            value: 1
        }, {
            name: "No, I've been in Guangzhou for a short time.",
            value: 2
        } ],
        residentConditionItems: [ {
            name: "Stay in Guangzhou for over 3 months.",
            value: 1
        }, {
            name: "Came or returned to Guangzhou over 14 days ago.",
            value: 2
        }, {
            name: "Came or returned to Guangzhou within 14 days",
            value: 3
        }, {
            name: "Still outside of Guangzhou.",
            value: 4
        } ],
        travelRegionClassItems: [ {
            name: "Wuhan",
            value: 1
        }, {
            name: "Hubei (excluding Wuhan)",
            value: 2
        }, {
            name: "Wenzhou",
            value: 6
        }, {
            name: "Other provinces on the Chinese Mainland",
            value: 4
        }, {
            name: "Hong Kong, Macao and Taiwan",
            value: 3
        }, {
            name: "South Korea",
            value: 7
        }, {
            name: "Japan",
            value: 8
        }, {
            name: "Other countries",
            value: 5
        } ],
        personTypeItems: [ {
            name: "Local permanent residents who have not returned to Guangzhou",
            value: 1,
            desc: "Local permanent resident who has not returned to Guangzhou after January 1, 2020。"
        }, {
            name: "People always in Guangzhou",
            value: 2,
            desc: "Anyone who has been in Guangzhou from January 1, 2020 to date"
        }, {
            name: "Residents who returned to Guangzhou in early January",
            value: 3,
            desc: "Local permanent resident who returned to Guangzhou during January 1-15, 2020"
        }, {
            name: "Non-residents who came to Guangzhou in early January",
            value: 4,
            desc: "Non-local temporary staff member who came to Guangzhou during January 1-15, 2020"
        }, {
            name: "Residents who returned to Guangzhou in mid January",
            value: 5,
            desc: "Local permanent resident who returned to Guangzhou after January 15, 2020"
        }, {
            name: "Non-residents who returned to Guangzhou in mid January",
            value: 6,
            desc: "Non-local temporary staff member who came to Guangzhou after January 15, 2020"
        }, {
            name: "Under medical observation at home ",
            value: 11
        }, {
            name: "Under centralized medical observation ",
            value: 12
        } ],
        symptomItems: [ {
            name: "Normal",
            value: 1
        }, {
            name: "fever below 37.3 ℃",
            value: 11
        }, {
            name: "fever above 37.3 ℃ (including)",
            value: 12
        }, {
            name: "Dry cough",
            value: 13
        }, {
            name: "Fatigue",
            value: 14
        }, {
            name: "Other symptoms",
            value: 15
        } ],
        socialContactItems: [ {
            name: "Have close contact with those who traveled to or lived in Hubei within 14 days.",
            value: 1,
            desc: "Recent Hubei travel or living history refers to: from and to Hubei within 14 days"
        }, {
            name: "Feel that you have contacted those who is infected with COVID-19 within 14 days.",
            value: 2,
            desc: "Recent contact with a patient infected with COVID-19, such as traveling on the same public transportation vehicle, etc"
        } ],
        healthStateItems: [ {
            name: "Normal",
            value: 1,
            desc: "Feel normal and have no uncomfortable symptoms"
        }, {
            name: "Conducting medical observation at home.",
            value: 2,
            desc: "With a permanent residence in Guangzhou, self health observation at home"
        }, {
            name: "Receiving medical observation at centralized designated places.",
            value: 3,
            desc: "Receiving centralized medical observation in Guangzhou, such as staying in a hotel, with no permanent residence"
        }, {
            name: "Receiving centralized medical observation",
            value: 4,
            desc: "Medical observation in medical institutions"
        } ],
        selfFormRules: {
            symptomDscr: [ {
                type: "symptomDscrLength",
                message: "Other symptoms, describing with not more than 10 Chinese characters"
            } ],
            username: [ {
                type: "required",
                message: "Please fill in your name"
            } ],
            personType: [ {
                type: "required",
                message: "Please select the type of person"
            } ],
            phone: [ {
                type: "required",
                message: "Please enter your Chinese mainland mobile phone number"
            }, {
                type: "mobile",
                message: "Please enter your Chinese mainland mobile phone number"
            } ],
            identityType: [ {
                type: "required",
                message: "Please select the type of ID"
            } ],
            identity: [ {
                type: "required",
                message: "Please enter the document number"
            }, {
                type: "id",
                message: "Please enter the correct ID number"
            } ],
            birthday: [ {
                type: "required",
                message: "Please choose the correct date of birth"
            }, {
                type: "birthdayLength",
                message: "Please choose the correct date of birth"
            } ],
            street: [ {
                type: "required",
                message: "Please select a residential address"
            } ],
            addr: [ {
                type: "required",
                message: "Please enter a detailed address"
            } ],
            gender: [ {
                type: "required",
                message: "Please select gender"
            } ],
            residentFlag: [ {
                type: "required",
                message: "Please choose whether you are a permanent Guangzhou resident or not"
            } ],
            residentCondition: [ {
                type: "required",
                message: "Please choose whether you will be in Guangzhou recently"
            } ],
            healthState: [ {
                type: "required",
                message: "Please choose your health status"
            } ],
            avatarKey: [ {
                type: "required",
                message: "Please select a picture"
            } ]
        },
        sexRange: [ {
            name: "men",
            value: "男"
        }, {
            name: "women",
            value: "女"
        } ],
        PROVINCE_LISTS: [ {
            name: "Beijing",
            ename: "beijing"
        }, {
            name: "Tianjin",
            ename: "tianjin"
        }, {
            name: "Shanghai",
            ename: "shanghai"
        }, {
            name: "Chongqing",
            ename: "chongqing"
        }, {
            name: "Hong Kong",
            ename: "xianggang"
        }, {
            name: "Macao",
            ename: "aomen"
        }, {
            name: "Hebei",
            ename: "hebei"
        }, {
            name: "Shanxi",
            ename: "shanxi"
        }, {
            name: "Inner Mongolia",
            ename: "neimenggu"
        }, {
            name: "Liaoning",
            ename: "liaoning"
        }, {
            name: "Jilin",
            ename: "jilin"
        }, {
            name: "Heilongjiang",
            ename: "heilongjiang"
        }, {
            name: "Jiangsu",
            ename: "jiangsu"
        }, {
            name: "Zhejiang",
            ename: "zhejiang"
        }, {
            name: "Anhui",
            ename: "anhui"
        }, {
            name: "Fujian",
            ename: "fujian"
        }, {
            name: "Jiangxi",
            ename: "jiangxi"
        }, {
            name: "Shandong",
            ename: "shandong"
        }, {
            name: "Henan",
            ename: "henan"
        }, {
            name: "Hubei",
            ename: "hubei"
        }, {
            name: "Hunan",
            ename: "hunan"
        }, {
            name: "Guangdong",
            ename: "guangdong"
        }, {
            name: "Guangxi",
            ename: "guangxi"
        }, {
            name: "Hainan",
            ename: "hainan"
        }, {
            name: "Sichuan",
            ename: "sichuan"
        }, {
            name: "Guizhou",
            ename: "guizhou"
        }, {
            name: "Yunnan",
            ename: "yunnan"
        }, {
            name: "Tibet",
            ename: "xizang"
        }, {
            name: "Shaanxi",
            ename: "shanxi1"
        }, {
            name: "Gansu",
            ename: "gansu"
        }, {
            name: "Qinghai",
            ename: "qinghai"
        }, {
            name: "Ningxia",
            ename: "ningxia"
        }, {
            name: "Xinjiang",
            ename: "xinjiang"
        }, {
            name: "Taiwan",
            ename: "taiwan"
        } ],
        recentRegion_LISTS: [ {
            name: "Beijing",
            ename: "beijing"
        }, {
            name: "Tianjin",
            ename: "tianjin"
        }, {
            name: "Shanghai",
            ename: "shanghai"
        }, {
            name: "Chongqing",
            ename: "chongqing"
        }, {
            name: "Hebei",
            ename: "hebei"
        }, {
            name: "Shanxi",
            ename: "shanxi"
        }, {
            name: "Inner Mongolia",
            ename: "neimenggu"
        }, {
            name: "Liaoning",
            ename: "liaoning"
        }, {
            name: "Jilin",
            ename: "jilin"
        }, {
            name: "Heilongjiang",
            ename: "heilongjiang"
        }, {
            name: "Jiangsu",
            ename: "jiangsu"
        }, {
            name: "Zhejiang",
            ename: "zhejiang"
        }, {
            name: "Anhui",
            ename: "anhui"
        }, {
            name: "Fujian",
            ename: "fujian"
        }, {
            name: "Jiangxi",
            ename: "jiangxi"
        }, {
            name: "Shandong",
            ename: "shandong"
        }, {
            name: "Henan",
            ename: "henan"
        }, {
            name: "Hubei",
            ename: "hubei"
        }, {
            name: "Hunan",
            ename: "hunan"
        }, {
            name: "Guangdong",
            ename: "guangdong"
        }, {
            name: "Guangxi",
            ename: "guangxi"
        }, {
            name: "Hainan",
            ename: "hainan"
        }, {
            name: "Sichuan",
            ename: "sichuan"
        }, {
            name: "Guizhou",
            ename: "guizhou"
        }, {
            name: "Yunnan",
            ename: "yunnan"
        }, {
            name: "Tibet",
            ename: "xizang"
        }, {
            name: "Shaanxi",
            ename: "shanxi1"
        }, {
            name: "Gansu",
            ename: "gansu"
        }, {
            name: "Qinghai",
            ename: "qinghai"
        }, {
            name: "Ningxia",
            ename: "ningxia"
        }, {
            name: "Xinjiang",
            ename: "xinjiang"
        }, {
            name: "Hong Kong",
            ename: "xianggang"
        }, {
            name: "Macao",
            ename: "aomen"
        }, {
            name: "Taiwan",
            ename: "taiwan"
        }, {
            name: "Foreign countries",
            ename: "guowai"
        } ]
    },
    ja: {
        select: "選択",
        personName: "氏名",
        enterName: "氏名を入力してください",
        phone: "携帯電話番号",
        idType: "証書タイプ",
        idNumber: "証書番号",
        sex: "性別",
        birthData: "生年月日",
        nationality: "国籍/地区",
        selectNationality: "国籍を選んでください/地区",
        placeOfDomicile: "戸籍所在地",
        selectPlaceOfDomicile: "戸籍所在地をお選びください",
        nativePlace: "本籍地",
        selectNativePlace: "本籍を選んでください",
        address: "居住住所",
        selectAddress: "居住住所を選んでください。",
        addressDatile: "詳しい住所",
        selectAddressDatile: "詳細住所(ビル棟番地)をご記入ください",
        inGuangzhou: "近いうちに広州にいますか",
        inOUtGUangZhouDate: "広州に来るまたはもどる期日",
        inOUtGUangZhouDate14: "戻る日を選んでください(直近14日以内)",
        currentLocation: "現在の所在地",
        selectCurrentLocation: "現在の所在地を選んでください",
        isGuangZhou: "広州に住んでいますか",
        outGuangZhou: "広州に戻る予定日",
        selectDate: "期日を選んでください",
        monthTraveling: "ここ1か月の滞在履歴",
        Recenthistory: "最近の接触歴(選んで記入)",
        Recenthistory14: "14日間に湖北省駐在の人と密接に接触しました",
        RecenthistoryDesc14: "最近、湖北省駐在履歴のある人は、14日以内に湖北省行き来したことのある人を指します",
        RecenthistoryPerson14: "自分で14日以内に患者と接触したことがあると感じています",
        RecenthistoryPersonDesc: "最近は確診患者と接触したことがあります。例えば、同一公共交通車などに乗ったなど",
        contactDate: "接触期日",
        selectDate14: "日付を選んでください(直近14日以内)",
        healthStatus: "個人の健康状態",
        symptomsTitle: "次のような症状がありますか(必須選択)",
        symptomsLable: "次のような症状がありますか",
        symptomDscrLable: "他の症状",
        symptomDscrPlaceholder: "症状の概要を述べてください(不超过10个汉字)",
        agree: "私は既に本申告書に記載されています事項を閲覧し、そして以上の申告内容が正確であることを保証します",
        infoBasic: "基本情報",
        submit: "提出",
        getPhone: "取得",
        enterPhone: "携帯番号を入力してください",
        selectTypeId: "証明書の種類を選んでください",
        enterId: "証明書番号を入力してください",
        selectGenger: "性別を選んでください。",
        birthDate: "生年月日を選んでください",
        myHealth: "私の健康情報を報告します",
        heHealth: "他人のために健康を報告します",
        checkId: "正しい身分証明書番号を入力してください",
        checkHmHid: "正しい証明書番号を入力してください",
        checRequired: "他の症状を入力してください",
        symptomDscrLength: "他の症状は10字以内にすること",
        checkBirthday: "正確な生年月日を入力してください",
        requiredmonthTraveling: "1ヶ月近くの寄寓履歴を選んでください",
        selectSymptoms: "症状を選んでください",
        loding: "一生懸命にロード中...",
        serverCrowded: "サーバーーが込んでおりますので、後ほどやってみてください",
        portrait: "他人の顔写真",
        information: "プロフィール情報",
        uploadAvatar: "他人の顔写真をアップロードしてください。",
        completed: "アップロード完了",
        upload: "アップロード",
        selectRegion: {
            serverCrowded: "サーバーーが込んでおりますので、後ほどやってみてください",
            unableLocation: "位置情報が取得できません",
            firstAuthorize: "現在位置決め情報の取得を先に授権してください",
            street: "街",
            area: "区",
            community: "コミュニティ"
        },
        sexMap: {
            "男": "男",
            "女": "女"
        },
        nationRange: [ {
            name: "中国大陸",
            value: 1
        }, {
            name: "中国の香港, マカオと台湾地区",
            value: 2
        }, {
            name: "海外",
            value: 3
        } ],
        domicilePlaceRange: [ {
            name: "広州市",
            value: 1
        }, {
            name: "広東省他の都市",
            value: 2
        }, {
            name: "湖北省",
            value: 3
        }, {
            name: "その他",
            value: 4
        } ],
        cardTypeRange: [ {
            name: "身分証明書",
            value: 1
        }, {
            name: "軍官証",
            value: 4
        }, {
            name: "パスポート",
            value: 3
        }, {
            name: "香港とマカオの住民が内陸通行用通行証",
            value: 8
        }, {
            name: "台湾住民が内陸通行用通行証",
            value: 9
        }, {
            name: "香港とマカオの住民証明書",
            value: 6
        }, {
            name: "台湾住民居住証",
            value: 7
        }, {
            name: "出入国通行証",
            value: 11
        } ],
        residentFlagItems: [ {
            name: "はい、広州に半年以上住んでいます",
            value: 1
        }, {
            name: "いいえ、私は臨時に広州に来ています",
            value: 2
        } ],
        residentConditionItems: [ {
            name: "ずっと広州で3ヶ月またはそれ以上います",
            value: 1
        }, {
            name: "広州に来て、または戻って十四日以上泊まっていました",
            value: 2
        }, {
            name: "広州に来て、または戻って十四日以内泊まっていました(14日を含む)",
            value: 3
        }, {
            name: "現在も他所にあります",
            value: 4
        } ],
        travelRegionClassItems: [ {
            name: "武漢市",
            value: 1
        }, {
            name: "湖北(武漢を除く)",
            value: 2
        }, {
            name: "温州市",
            value: 6
        }, {
            name: "中国大陸の県",
            value: 4
        }, {
            name: "中国の香港, マカオと台湾地区",
            value: 3
        }, {
            name: "韩国",
            value: 7
        }, {
            name: "日本",
            value: 8
        }, {
            name: "その他の国",
            value: 5
        } ],
        personTypeItems: [ {
            name: "広州に戻っていない地元常住住民。",
            value: 1,
            desc: "2020年1月1日後に、広東に戻っていない現地住民。"
        }, {
            name: "広州継続駐在者",
            value: 2,
            desc: "2020年1月1日前に、広東に住んでいる住民。"
        }, {
            name: "1月初めに広州に戻った住民",
            value: 3,
            desc: "2020年1月1日〜2020年1月15日の間に広東に帰った現地住民。"
        }, {
            name: "一月の初めに広州に来た人員",
            value: 4,
            desc: "2020年1月1日〜2020年1月15日の間に現地以外から広東に来た一時的な滞在者。"
        }, {
            name: "1月中に広州を戻る住民",
            value: 5,
            desc: "2020年1月15日後に広東に戻った現地住民。"
        }, {
            name: "1月中に広州に来た人員",
            value: 6,
            desc: "2020年1月15日後に現地以外から広東に来た一時的な滞在者。"
        }, {
            name: "在宅医学観察者 ",
            value: 11
        }, {
            name: "集中医学観察者",
            value: 12
        } ],
        symptomItems: [ {
            name: "自分で正常だど感じています",
            value: 1
        }, {
            name: "发热3热は37.3°c以下",
            value: 11
        }, {
            name: "発熱37.3%以上",
            value: 12
        }, {
            name: "からせき",
            value: 13
        }, {
            name: "だるい",
            value: 14
        }, {
            name: "他の症状",
            value: 15
        } ],
        socialContactItems: [ {
            name: "14日間に湖北省駐在の人と密接に接触しました",
            value: 1,
            desc: "最近、湖北省駐在履歴のある人は、14日以内に湖北省行き来したことのある人を指します"
        }, {
            name: "自分で14日以内に患者と接触したことがあると感じています",
            value: 2,
            desc: "最近は確診患者と接触したことがあります。例えば、同一公共交通車などに乗ったなど"
        } ],
        healthStateItems: [ {
            name: "正常に活動します",
            value: 1,
            desc: "自分の感じで正常で、不快な症状はありません"
        }, {
            name: "在宅健康サービス",
            value: 2,
            desc: "広州には固定住所があり，家では自己健康観察をしています"
        }, {
            name: "集中健康サービス",
            value: 3,
            desc: "広州には固定住所がなく，ホテルに泊まるなど集中的な健康観察を実施しています"
        }, {
            name: "集中医学観察",
            value: 4,
            desc: "医療機関で医学観察"
        } ],
        selfFormRules: {
            symptomDscr: [ {
                type: "symptomDscrLength",
                message: "他の症状記載は10字以内にすること"
            } ],
            username: [ {
                type: "required",
                message: "お名前をご記入ください"
            } ],
            personType: [ {
                type: "required",
                message: "人員の種類を選んでください"
            } ],
            phone: [ {
                type: "required",
                message: "中国大陸の携帯電話番号を入力してください"
            }, {
                type: "mobile",
                message: "中国大陸の携帯電話番号を入力してください"
            } ],
            identityType: [ {
                type: "required",
                message: "証明書のタイプを選んでください"
            } ],
            identity: [ {
                type: "required",
                message: "証明書番号を入力してください"
            }, {
                type: "id",
                message: "正しい身分証明書番号を入力してください"
            } ],
            birthday: [ {
                type: "required",
                message: "正しい生年月日を選んでください"
            }, {
                type: "birthdayLength",
                message: "正しい生年月日を選んでください"
            } ],
            street: [ {
                type: "required",
                message: "住所を選んでください。"
            } ],
            addr: [ {
                type: "required",
                message: "詳細な住所を入力してください"
            } ],
            gender: [ {
                type: "required",
                message: "性別を選んでください。"
            } ],
            residentFlag: [ {
                type: "required",
                message: "広州に常住するかを選んでください"
            } ],
            residentCondition: [ {
                type: "required",
                message: "広州に常住するかを選んでください"
            } ],
            healthState: [ {
                type: "required",
                message: "個人の健康状態を選んでください"
            } ],
            avatarKey: [ {
                type: "required",
                message: "アイコンを選択してください"
            } ]
        },
        sexRange: [ {
            name: "男",
            value: "男"
        }, {
            name: "女",
            value: "女"
        } ],
        PROVINCE_LISTS: [ {
            name: "北京",
            ename: "beijing"
        }, {
            name: "天津",
            ename: "tianjin"
        }, {
            name: "上海",
            ename: "shanghai"
        }, {
            name: "重慶",
            ename: "chongqing"
        }, {
            name: "香港",
            ename: "xianggang"
        }, {
            name: "マカオ",
            ename: "aomen"
        }, {
            name: "河北",
            ename: "hebei"
        }, {
            name: "山西",
            ename: "shanxi"
        }, {
            name: "内モンゴル",
            ename: "neimenggu"
        }, {
            name: "遼寧省",
            ename: "liaoning"
        }, {
            name: "吉林",
            ename: "jilin"
        }, {
            name: "黒竜江",
            ename: "heilongjiang"
        }, {
            name: "江苏省",
            ename: "jiangsu"
        }, {
            name: "浙江省",
            ename: "zhejiang"
        }, {
            name: "安徽",
            ename: "anhui"
        }, {
            name: "福建省",
            ename: "fujian"
        }, {
            name: "江西",
            ename: "jiangxi"
        }, {
            name: "山東",
            ename: "shandong"
        }, {
            name: "河南",
            ename: "henan"
        }, {
            name: "湖北",
            ename: "hubei"
        }, {
            name: "湖南",
            ename: "hunan"
        }, {
            name: "広東",
            ename: "guangdong"
        }, {
            name: "広西",
            ename: "guangxi"
        }, {
            name: "海南",
            ename: "hainan"
        }, {
            name: "四川省",
            ename: "sichuan"
        }, {
            name: "貴州",
            ename: "guizhou"
        }, {
            name: "雲南",
            ename: "yunnan"
        }, {
            name: "チベット",
            ename: "xizang"
        }, {
            name: "陝西",
            ename: "shanxi1"
        }, {
            name: "甘粛",
            ename: "gansu"
        }, {
            name: "青海",
            ename: "qinghai"
        }, {
            name: "寧夏",
            ename: "ningxia"
        }, {
            name: "新疆",
            ename: "xinjiang"
        }, {
            name: "台湾",
            ename: "taiwan"
        } ],
        recentRegion_LISTS: [ {
            name: "北京",
            ename: "beijing"
        }, {
            name: "天津",
            ename: "tianjin"
        }, {
            name: "上海",
            ename: "shanghai"
        }, {
            name: "重慶",
            ename: "chongqing"
        }, {
            name: "河北",
            ename: "hebei"
        }, {
            name: "山西(山西)",
            ename: "shanxi"
        }, {
            name: "内モンゴル",
            ename: "neimenggu"
        }, {
            name: "遼寧省",
            ename: "liaoning"
        }, {
            name: "吉林",
            ename: "jilin"
        }, {
            name: "黒竜江",
            ename: "heilongjiang"
        }, {
            name: "江苏省",
            ename: "jiangsu"
        }, {
            name: "浙江省",
            ename: "zhejiang"
        }, {
            name: "安徽",
            ename: "anhui"
        }, {
            name: "福建省",
            ename: "fujian"
        }, {
            name: "江西",
            ename: "jiangxi"
        }, {
            name: "山東",
            ename: "shandong"
        }, {
            name: "河南",
            ename: "henan"
        }, {
            name: "湖北",
            ename: "hubei"
        }, {
            name: "湖南",
            ename: "hunan"
        }, {
            name: "広東",
            ename: "guangdong"
        }, {
            name: "広西",
            ename: "guangxi"
        }, {
            name: "海南",
            ename: "hainan"
        }, {
            name: "四川省",
            ename: "sichuan"
        }, {
            name: "貴州",
            ename: "guizhou"
        }, {
            name: "雲南",
            ename: "yunnan"
        }, {
            name: "チベット",
            ename: "xizang"
        }, {
            name: "陝西(陝西)",
            ename: "shanxi1"
        }, {
            name: "甘粛",
            ename: "gansu"
        }, {
            name: "青海",
            ename: "qinghai"
        }, {
            name: "寧夏",
            ename: "ningxia"
        }, {
            name: "新疆",
            ename: "xinjiang"
        }, {
            name: "香港",
            ename: "xianggang"
        }, {
            name: "マカオ",
            ename: "aomen"
        }, {
            name: "台湾",
            ename: "taiwan"
        }, {
            name: "海外",
            ename: "guowai"
        } ]
    },
    kr: {
        select: "선택",
        personName: "성함",
        enterName: "성함을 입력하십시오.",
        phone: "휴대전화",
        idType: "증서타입",
        idNumber: "증서번호",
        sex: "성별",
        birthData: "생년월일",
        nationality: "국적",
        selectNationality: "국적을 선택하십시오",
        placeOfDomicile: "호적 소재지",
        selectPlaceOfDomicile: "호적 소재지를 선택하십시오",
        nativePlace: "본관",
        selectNativePlace: "본관을 선택하십시오",
        address: "거주지",
        selectAddress: "거주지 주소를 선택하십시오",
        addressDatile: "상세주소",
        selectAddressDatile: "상세주소(빌딩넘버)를 기입하십시오",
        inGuangzhou: "요즘 광저우에 계셨는지?",
        inOUtGUangZhouDate: "광저우 방문이나 복귀 날자",
        inOUtGUangZhouDate14: "복귀날자(최근 14일 이내)를 선택하십시오.",
        currentLocation: "당전 거주지",
        selectCurrentLocation: "당전 거주지를 선택하십시오.",
        isGuangZhou: "광저우에 거주지인지",
        outGuangZhou: "광저우에 복귀하는 날자",
        selectDate: "날자를 선택하십시오",
        monthTraveling: "최근 한달의 동선",
        Recenthistory: "최근 접촉이력(선택사항)",
        Recenthistory14: "최근 14일내, 후베이 여행이력자와 접촉",
        RecenthistoryDesc14: "최근 후베이 여행이력자란,14일내 후베이지역에서 왔거나 후베이지역을 방문한 자",
        RecenthistoryPerson14: "14일내에 감염환자와 접촉이 있었다고 생각하는 자",
        RecenthistoryPersonDesc: "최근 감염환자와 접촉,예하면 공중교통도구에 같이 승차한 경우",
        contactDate: "접촉 날자",
        selectDate14: "날자(최근14일내)를 선택하십시오",
        healthStatus: "개인건강상태",
        symptomsTitle: "하기 증상이 있는지(필수사항)",
        symptomsLable: "하기 증상이 있는지",
        symptomDscrLable: "기타 증상",
        symptomDscrPlaceholder: "증상을 간략히 적으십시오",
        agree: "나는 위의 신고서에 나열한 사항을 확인하였으며 신고내용이 사실임을 보증합니다.",
        infoBasic: "프로파일",
        submit: "제출",
        getPhone: "핸드폰 번호 찾기",
        enterPhone: "핸드폰 번호를 입력하십시오",
        selectTypeId: "증서 타입을 선택하십시오",
        enterId: "증서 번호를 입력하십시오",
        selectGenger: "성별을 선택하십시오",
        birthDate: "생년월일을 선택하십시오",
        myHealth: "개인건강상태신고",
        heHealth: "타인의 건강상태를 신고한다.",
        checkId: "올바른 주민등록 번호를 입력하십시오.",
        checkHmHid: "정확한 증서 번호를 입력하십시오",
        checRequired: "기타 증상을 입력하십시오",
        symptomDscrLength: "기타 증상서술은 한자 10자이내로 함",
        checkBirthday: "정확한 생년월일을 입력하십시오",
        requiredmonthTraveling: "최근 1개월내 동선을 선택하십시오",
        selectSymptoms: "증상을 선택하십시오",
        loding: "로딩 중...",
        serverCrowded: "서버접속이 안됨",
        portrait: "타인 의 두상",
        information: "이미지 정보",
        uploadAvatar: "다른 사람 프로필 사진 올 려 주세요",
        completed: "업로드 완료",
        upload: "업로드",
        selectRegion: {
            serverCrowded: "서버접속이 안됨",
            unableLocation: "위치정보 없음",
            firstAuthorize: "먼저 당전 지리위치정보를 확인을 허락하십시오.",
            street: "가도(街道)",
            area: "구(區)",
            community: "거주단지(社區)"
        },
        sexMap: {
            "男": "남",
            "女": "녀"
        },
        nationRange: [ {
            name: "중국 대륙",
            value: 1
        }, {
            name: "중국홍콩마카오대만지역",
            value: 2
        }, {
            name: "해외",
            value: 3
        } ],
        domicilePlaceRange: [ {
            name: "광저우시",
            value: 1
        }, {
            name: "광둥성내 기타 지역",
            value: 2
        }, {
            name: "후베이",
            value: 3
        }, {
            name: "기타",
            value: 4
        } ],
        cardTypeRange: [ {
            name: "신분증",
            value: 1
        }, {
            name: "장교증",
            value: 4
        }, {
            name: "여권",
            value: 3
        }, {
            name: "홍콩마카오주민대륙통행증",
            value: 8
        }, {
            name: "타이완주민대륙통행증",
            value: 9
        }, {
            name: "홍콩마카오주민거주증",
            value: 6
        }, {
            name: "타이완주민거주증",
            value: 7
        }, {
            name: "출입국통행증",
            value: 11
        } ],
        residentFlagItems: [ {
            name: "네,광저우에 반년이상 거주하였습니다.",
            value: 1
        }, {
            name: "아니요,광저우에 임시 방문중입니다.",
            value: 2
        } ],
        residentConditionItems: [ {
            name: "광저우에 연속 3개월이상 체류중입니다.",
            value: 1
        }, {
            name: "광저우에 방문/복귀한지 14일 넘습니다.",
            value: 2
        }, {
            name: "광저우에 방문/복귀한지 14일 미만입니다.",
            value: 3
        }, {
            name: "지금 다른 지역에 체류중입니다.",
            value: 4
        } ],
        travelRegionClassItems: [ {
            name: "우한시",
            value: 1
        }, {
            name: "후베이(우한제외)",
            value: 2
        }, {
            name: "원저우시",
            value: 6
        }, {
            name: "중국 대륙의 기타 성",
            value: 4
        }, {
            name: "중국홍콩마카오대만지역",
            value: 3
        }, {
            name: "한국",
            value: 7
        }, {
            name: "일본",
            value: 8
        }, {
            name: "기타 국가",
            value: 5
        } ],
        personTypeItems: [ {
            name: "멤버타입을 선택하십시오",
            value: 1,
            desc: "2020-1-1이전부터 광저우에 줄곧 거주한 자"
        }, {
            name: "광저우를 떠난적 없는 시민",
            value: 2,
            desc: "2020-1-1에서 2020-1-15사이 광저우에 복귀한 거주민"
        }, {
            name: "1월초에 광저우로 복귀한 시민",
            value: 3,
            desc: "2020-1-1에서 2020-1-15사이 다른 지역에서 광저우를 일시 방문 온 자"
        }, {
            name: "1월초에 광저우로 방문온 사람",
            value: 4,
            desc: "2020-1-15이후 광저우에 복귀한 거주민"
        }, {
            name: "1월중순에 광저우로 복귀한 시민",
            value: 5,
            desc: "2020-1-15이후 다른 지역에서 광저우를 일시 방문 온 자"
        }, {
            name: "1월중순에 광저우로 방문온 사람",
            value: 6,
            desc: "于2020-1-15后来穗外地临时人员。"
        }, {
            name: "자택 격리 중임 ",
            value: 11
        }, {
            name: "집중 격리 중임 ",
            value: 12
        } ],
        symptomItems: [ {
            name: "자기판단에 정상임",
            value: 1
        }, {
            name: "발열 37.3 ℃이하",
            value: 11
        }, {
            name: "발열 37.3 ℃(포함)이상",
            value: 12
        }, {
            name: "기침",
            value: 13
        }, {
            name: "무력감",
            value: 14
        }, {
            name: "기타 증상",
            value: 15
        } ],
        socialContactItems: [ {
            name: "최근 14일내, 후베이 여행이력자와 접촉",
            value: 1,
            desc: "최근 후베이 여행이력자란,14일내 후베이지역에서 왔거나 후베이지역을 방문한 자"
        }, {
            name: "14일내에 감염환자와 접촉이 있었다고 생각하는 자",
            value: 2,
            desc: "최근 감염환자와 접촉,예하면 공중교통도구에 같이 승차한 경우"
        } ],
        healthStateItems: [ {
            name: "정상임",
            value: 1,
            desc: "자기판단에 건강하고 몸이 아픈데 없음"
        }, {
            name: "자택건강서비스",
            value: 2,
            desc: "광저우에 고정 거주지가 있어 자택감시중"
        }, {
            name: "집중건강서비스",
            value: 3,
            desc: "광저우에 고정된 거주지가 없고 호텔등 장소에 집중건강감시중"
        }, {
            name: "집중의학관찰",
            value: 4,
            desc: "의료기관에서 관찰중"
        } ],
        selfFormRules: {
            symptomDscr: [ {
                type: "symptomDscrLength",
                message: "기타 증상 서술은 한자로 10자이내로 함."
            } ],
            username: [ {
                type: "required",
                message: "성함을 입력하십시요"
            } ],
            personType: [ {
                type: "required",
                message: "사람 종류를 고르십시오"
            } ],
            phone: [ {
                type: "required",
                message: "중국대륙의 핸드폰번호를 입력하십시오"
            }, {
                type: "mobile",
                message: "중국대륙의 핸드폰번호를 입력하십시오"
            } ],
            identityType: [ {
                type: "required",
                message: "증서 타입을 선택하십시오"
            } ],
            identity: [ {
                type: "required",
                message: "증서 번호를 입력하십시오"
            }, {
                type: "id",
                message: "올바른 주민등록 번호를 입력하십시오."
            } ],
            birthday: [ {
                type: "required",
                message: "정확한 생년월일을 선택하십시오"
            }, {
                type: "birthdayLength",
                message: "정확한 생년월일을 선택하십시오"
            } ],
            street: [ {
                type: "required",
                message: "주거지 주소를 선택하십시오"
            } ],
            addr: [ {
                type: "required",
                message: "상세한 주소를 입력하십시오"
            } ],
            gender: [ {
                type: "required",
                message: "성별을 선택하십시오"
            } ],
            residentFlag: [ {
                type: "required",
                message: "광저우에 거주하시는지 선택하십시오"
            } ],
            residentCondition: [ {
                type: "required",
                message: "최근 광저우에 계셨는지 선택하십시오"
            } ],
            healthState: [ {
                type: "required",
                message: "개인건강상태를 선택하십시오"
            } ],
            avatarKey: [ {
                type: "required",
                message: "이미지 선택"
            } ]
        },
        sexRange: [ {
            name: "남",
            value: "男"
        }, {
            name: "녀",
            value: "女"
        } ],
        PROVINCE_LISTS: [ {
            name: "베이징",
            ename: "beijing"
        }, {
            name: "톈진",
            ename: "tianjin"
        }, {
            name: "상하이",
            ename: "shanghai"
        }, {
            name: "충 칭",
            ename: "chongqing"
        }, {
            name: "홍콩",
            ename: "xianggang"
        }, {
            name: "마카오",
            ename: "aomen"
        }, {
            name: "허베이",
            ename: "hebei"
        }, {
            name: "산시(山西)",
            ename: "shanxi"
        }, {
            name: "내몽골",
            ename: "neimenggu"
        }, {
            name: "랴오닝",
            ename: "liaoning"
        }, {
            name: "지린",
            ename: "jilin"
        }, {
            name: "헤이룽쟝",
            ename: "heilongjiang"
        }, {
            name: "장쑤",
            ename: "jiangsu"
        }, {
            name: "저장",
            ename: "zhejiang"
        }, {
            name: "안후이",
            ename: "anhui"
        }, {
            name: "푸젠",
            ename: "fujian"
        }, {
            name: "장시",
            ename: "jiangxi"
        }, {
            name: "산둥",
            ename: "shandong"
        }, {
            name: "허난",
            ename: "henan"
        }, {
            name: "후베이",
            ename: "hubei"
        }, {
            name: "후난",
            ename: "hunan"
        }, {
            name: "광둥",
            ename: "guangdong"
        }, {
            name: "광시",
            ename: "guangxi"
        }, {
            name: "하이난",
            ename: "hainan"
        }, {
            name: "쓰촨",
            ename: "sichuan"
        }, {
            name: "구이저우",
            ename: "guizhou"
        }, {
            name: "윈난",
            ename: "yunnan"
        }, {
            name: "시짱",
            ename: "xizang"
        }, {
            name: "산시(陝西)",
            ename: "shanxi1"
        }, {
            name: "간쑤",
            ename: "gansu"
        }, {
            name: "칭하이",
            ename: "qinghai"
        }, {
            name: "닝샤",
            ename: "ningxia"
        }, {
            name: "신장",
            ename: "xinjiang"
        }, {
            name: "타이완",
            ename: "taiwan"
        } ],
        recentRegion_LISTS: [ {
            name: "베이징",
            ename: "beijing"
        }, {
            name: "톈진",
            ename: "tianjin"
        }, {
            name: "상하이",
            ename: "shanghai"
        }, {
            name: "충칭",
            ename: "chongqing"
        }, {
            name: "허베이",
            ename: "hebei"
        }, {
            name: "산시(山西)",
            ename: "shanxi"
        }, {
            name: "내몽골",
            ename: "neimenggu"
        }, {
            name: "랴오닝",
            ename: "liaoning"
        }, {
            name: "지린",
            ename: "jilin"
        }, {
            name: "헤이룽장",
            ename: "heilongjiang"
        }, {
            name: "장쑤",
            ename: "jiangsu"
        }, {
            name: "저장",
            ename: "zhejiang"
        }, {
            name: "안후이",
            ename: "anhui"
        }, {
            name: "푸젠",
            ename: "fujian"
        }, {
            name: "장시",
            ename: "jiangxi"
        }, {
            name: "산둥",
            ename: "shandong"
        }, {
            name: "허난",
            ename: "henan"
        }, {
            name: "후베이",
            ename: "hubei"
        }, {
            name: "후안",
            ename: "hunan"
        }, {
            name: "광둥",
            ename: "guangdong"
        }, {
            name: "광시",
            ename: "guangxi"
        }, {
            name: "하이난",
            ename: "hainan"
        }, {
            name: "쓰촨",
            ename: "sichuan"
        }, {
            name: "구이저우",
            ename: "guizhou"
        }, {
            name: "윈난",
            ename: "yunnan"
        }, {
            name: "시짱",
            ename: "xizang"
        }, {
            name: "산시(陝西)",
            ename: "shanxi1"
        }, {
            name: "간쑤",
            ename: "gansu"
        }, {
            name: "칭하이",
            ename: "qinghai"
        }, {
            name: "닝샤",
            ename: "ningxia"
        }, {
            name: "신장",
            ename: "xinjiang"
        }, {
            name: "홍콩",
            ename: "xianggang"
        }, {
            name: "마카오",
            ename: "aomen"
        }, {
            name: "타이완",
            ename: "taiwan"
        }, {
            name: "해외",
            ename: "guowai"
        } ]
    }
};