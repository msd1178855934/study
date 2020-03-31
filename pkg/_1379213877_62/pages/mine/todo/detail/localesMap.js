module.exports = {
    "zh-CN": {
        sexMap: {
            "男": "男",
            "女": "女"
        },
        statusMap: {
            0: "处理中",
            1: "进行中",
            2: "已办结"
        },
        nationMap: {
            1: "中国大陆",
            2: "中国港澳台地区",
            3: "外国"
        },
        domicilePlaceMap: {
            1: "广州市",
            2: "广东其他地市",
            3: "湖北省",
            4: "其他"
        },
        identityTypeMap: {
            1: "身份证",
            3: "护照",
            4: "军官证",
            8: "港澳居民来往内地通行证",
            9: "台湾居民来往内地通行证",
            6: "港澳居民居住证",
            7: "台湾居民居住证",
            11: "出入境通行证"
        },
        residentFlagMap: {
            1: "是，在广州居住了已有半年以上",
            2: "否，我是临时来广州的"
        },
        residentConditionMap: {
            1: "一直在广州3个月或以上",
            2: "来/返回广州超过14日",
            3: "来/返回广州不超过14日（含14日）",
            4: "目前仍在外地"
        },
        travelRegionClassMap: {
            1: "武汉市",
            2: "湖北(不含武汉)",
            4: "中国大陆其他省(自治区)市",
            3: "中国港澳台地区",
            5: "其他国家",
            6: "温州市",
            7: "韩国",
            8: "日本"
        },
        personTypeMap: {
            1: "未返穗本地常住居民",
            2: "持续在穗人员",
            3: "一月初返穗居民",
            4: "一月初来穗人员",
            5: "一月中返穗居民",
            6: "一月中来穗人员",
            11: "居家医学观察人员",
            12: "集中医学观察人员"
        },
        socialContactMap: {
            1: "14日内密切接触近期有湖北旅居史者",
            2: "自我感觉14日内曾与患者接触过者",
            11: "14日内在湖北旅游居住过的人员",
            12: "14日内曾接触疑似患者",
            13: "14日内其他地方来或返回广州人员",
            14: "其他人员"
        },
        healthStateMap: {
            1: "正常活动",
            2: "居家健康服务",
            3: "集中健康服务",
            4: "集中医学观察"
        },
        symptomTypeMap: {
            1: "自觉正常",
            2: "发热",
            3: "干咳",
            4: "乏力",
            5: "腹泻",
            6: "感冒",
            7: "头疼头晕",
            11: "发热37.3 ℃以下",
            12: "发热37.3 ℃（含）以上",
            13: "干咳",
            14: "乏力",
            15: "其它症状"
        },
        booleanMap: {
            0: "否",
            1: "是"
        },
        keyMap: [ {
            label: "编号",
            key: "id"
        }, {
            label: "报告状态",
            key: "statusStr"
        }, {
            label: "姓名",
            key: "username"
        }, {
            label: "性别",
            key: "gender"
        }, {
            label: "手机号码",
            key: "phone"
        }, {
            label: "证件类型",
            key: "identityTypeStr"
        }, {
            label: "证件号码",
            key: "identity"
        }, {
            label: "国籍/地区",
            key: "nationStr"
        }, {
            label: "户籍所在地",
            key: "domicilePlaceStr"
        }, {
            label: "籍贯",
            key: "nativePlace"
        }, {
            label: "居住地址",
            key: "address"
        }, {
            label: "详细地址",
            key: "addr"
        } ],
        keyMapOther: [ {
            label: "是否常住广州",
            key: "residentFlagStr"
        }, {
            label: "近期是否在广州",
            key: "residentConditionStr"
        }, {
            label: "来或返回广州日期",
            key: "returnDate"
        }, {
            label: "目前所在地",
            key: "recentRegionName"
        }, {
            label: "拟返回广州日期",
            key: "quasiReturnDate"
        }, {
            label: "近一个月旅居史",
            key: "travelRegionClassStr"
        }, {
            label: "近期接触史",
            key: "socialContactStr"
        }, {
            label: "14日内密切接触日期",
            key: "contactDateRecent"
        }, {
            label: "14日内感觉接触日期",
            key: "contactDateLike"
        }, {
            label: "个人健康状态",
            key: "healthStateStr"
        }, {
            label: "症状列表",
            key: "symptomTypeStr"
        }, {
            label: "其它症状",
            key: "symptomDscr"
        } ],
        reporterKeyMap: [ {
            label: "姓名",
            key: "clueSupplier"
        }, {
            label: "联系电话",
            key: "clueSupplierPhone"
        } ],
        reportedKeyMap: [ {
            label: "姓名",
            key: "username"
        }, {
            label: "性别",
            key: "gender"
        }, {
            label: "联系电话",
            key: "phone"
        }, {
            label: "居住地址",
            key: "street"
        }, {
            label: "详细住址",
            key: "addr"
        }, {
            label: "关联车牌",
            key: "clueVehicle"
        }, {
            label: "涉事人类型",
            key: "socialContact11Str"
        }, {
            label: "来或返回广州日期",
            key: "returnDate"
        }, {
            label: "涉事人类型",
            key: "socialContact12Str"
        }, {
            label: "来或返回广州日期",
            key: "contactDateRecent"
        }, {
            label: "涉事人类型",
            key: "socialContact13Str"
        }, {
            label: "来或返回广州日期",
            key: "quasiReturnDate"
        }, {
            label: "涉事人类型",
            key: "socialContact14Str"
        } ],
        reportContentKeyMap: [ {
            label: "反映详细内容",
            key: "symptomDscr"
        } ]
    },
    en: {
        sexMap: {
            "男": "male",
            "女": "female"
        },
        statusMap: {
            0: "Processing",
            1: "ongoing",
            2: "Finished"
        },
        nationMap: {
            1: "Chinese Mainland",
            2: "Hong Kong, Macao and Taiwan",
            3: "Foreign countries"
        },
        domicilePlaceMap: {
            1: "Guang Zhou",
            2: "Other cities in Guangdong Province",
            3: "Hubei Province",
            4: "Other"
        },
        identityTypeMap: {
            1: "ID card",
            3: "Passport",
            4: "Certificate of officers",
            8: "Mainland travel permit for Hong Kong and Macao residents",
            9: "Mainland travel permit for Taiwan residents",
            6: "Hong Kong and Macao residence permit",
            7: "Taiwan residence permit",
            11: "Entry and exit permit"
        },
        residentFlagMap: {
            1: "Yes, I've lived in Guangzhou for more than half a year.",
            2: "No, I've been in Guangzhou for a short time."
        },
        residentConditionMap: {
            1: "Stay in Guangzhou for over 3 months.",
            2: "Came or returned to Guangzhou over 14 days ago.",
            3: "Came or returned to Guangzhou within 14 days.",
            4: "Still outside of Guangzhou."
        },
        travelRegionClassMap: {
            1: "Wuhan",
            2: "Hubei (excluding Wuhan)",
            4: "Other Provinces or Cities in Chinese Mainland",
            3: "Hong Kong, Macao and Taiwan",
            5: "Other countries",
            6: "Wenzhou",
            7: "South Korea",
            8: "Japan"
        },
        personTypeMap: {
            1: "Local permanent residents who have not returned to Guangzhou",
            2: "People always in Guangzhou",
            3: "Residents who returned to Guangzhou in early January",
            4: "Non-residents who came to Guangzhou in early January",
            5: "Residents who returned to Guangzhou in mid January",
            6: "Non-residents who returned to Guangzhou in mid January",
            11: "Under medical observation at home",
            12: "Under centralized medical observation"
        },
        socialContactMap: {
            1: "Have close contact with those who traveled to or lived in Hubei within 14 days.",
            2: "Feel that you have contacted someone who is infected with COVID-19 within 14 days.",
            11: "Traveled to or lived in Hubei Province within 14 days.",
            12: "Contacted with suspected patients within 14 days.",
            13: "Came or returned to Guangzhou within 14 days.",
            14: "Others."
        },
        healthStateMap: {
            1: "Normal",
            2: "Conducting medical observation at home.",
            3: "Receiving medical observation at centralized designated places.",
            4: "Receiving centralized medical observation"
        },
        symptomTypeMap: {
            1: "Normal",
            2: "Fever",
            3: "Dry cough",
            4: "Fatigue",
            5: "Diarrhea",
            6: "Catch a cold",
            7: "Headache, dizziness",
            11: "fever below 37.3 ℃",
            12: "fever above 37.3 ℃ (including)",
            13: "Dry cough",
            14: "Fatigue",
            15: "Other symptoms"
        },
        booleanMap: {
            0: "No",
            1: "Yes"
        },
        keyMap: [ {
            label: "Number",
            key: "id"
        }, {
            label: "Report the status",
            key: "statusStr"
        }, {
            label: "Name",
            key: "username"
        }, {
            label: "Gender",
            key: "gender"
        }, {
            label: "Phone number",
            key: "phone"
        }, {
            label: "Type of ID",
            key: "identityTypeStr"
        }, {
            label: "ID number",
            key: "identity"
        }, {
            label: "Nationality",
            key: "nationStr"
        }, {
            label: "Household registration location",
            key: "domicilePlaceStr"
        }, {
            label: "Place of origin",
            key: "nativePlace"
        }, {
            label: "Current address",
            key: "address"
        }, {
            label: "Detailed address",
            key: "addr"
        } ],
        keyMapOther: [ {
            label: "Are you a permanent resident of Guangzhou?",
            key: "residentFlagStr"
        }, {
            label: "Are you in Guangzhou recently?",
            key: "residentConditionStr"
        }, {
            label: "Date of arrival in or return to Guangzhou",
            key: "returnDate"
        }, {
            label: "Current location",
            key: "recentRegionName"
        }, {
            label: "Planned date of return to Guangzhou",
            key: "quasiReturnDate"
        }, {
            label: "Travel or living history within 1 month",
            key: "travelRegionClassStr"
        }, {
            label: "Recent contact history",
            key: "socialContactStr"
        }, {
            label: "Date of close contact within 14 days",
            key: "contactDateRecent"
        }, {
            label: "Feel the contact date within 14 days",
            key: "contactDateLike"
        }, {
            label: "Personal health status",
            key: "healthStateStr"
        }, {
            label: "List of symptoms",
            key: "symptomTypeStr"
        }, {
            label: "Other symptoms",
            key: "symptomDscr"
        } ],
        reporterKeyMap: [ {
            label: "Name",
            key: "clueSupplier"
        }, {
            label: "Contact Number",
            key: "clueSupplierPhone"
        } ],
        reportedKeyMap: [ {
            label: "Name",
            key: "username"
        }, {
            label: "Gender",
            key: "gender"
        }, {
            label: "Contact Number",
            key: "phone"
        }, {
            label: "Current address",
            key: "street"
        }, {
            label: "Detailed address",
            key: "addr"
        }, {
            label: "Related Plate Number",
            key: "clueVehicle"
        }, {
            label: "Type of person involved",
            key: "socialContact11Str"
        }, {
            label: "Date of arrival in or return to Guangzhou",
            key: "returnDate"
        }, {
            label: "Type of person involved",
            key: "socialContact12Str"
        }, {
            label: "Date of arrival in or return to Guangzhou",
            key: "contactDateRecent"
        }, {
            label: "Type of person involved",
            key: "socialContact13Str"
        }, {
            label: "Date of arrival in or return to Guangzhou",
            key: "quasiReturnDate"
        }, {
            label: "Type of person involved",
            key: "socialContact14Str"
        } ],
        reportContentKeyMap: [ {
            label: "Reflect the details",
            key: "symptomDscr"
        } ]
    },
    ja: {
        sexMap: {
            "男": "男",
            "女": "女"
        },
        statusMap: {
            0: "処理中",
            1: "進行中",
            2: "すでに開設した"
        },
        nationMap: {
            1: "中国大陸",
            2: "中国の香港, マカオと台湾地区",
            3: "海外"
        },
        domicilePlaceMap: {
            1: "Guang Zhou",
            2: "広東省他の都市",
            3: "Hubei Province",
            4: "その他"
        },
        identityTypeMap: {
            1: "身分証明書.",
            3: "パスポート",
            4: "軍官証.",
            8: "香港とマカオの住民が内陸通行用通行証",
            9: "台湾住民が内陸通行用通行証",
            6: "香港とマカオの住民証明書",
            7: "台湾住民居住証",
            11: "出入国通行証"
        },
        residentFlagMap: {
            1: "はい、広州に半年以上住んでいます。",
            2: "いいえ、私は臨時に広州に来ています"
        },
        residentConditionMap: {
            1: "ずっと広州で3ヶ月またはそれ以上います",
            2: "広州に来て、または戻って十四日以上泊まっていました。",
            3: "広州に来て、または戻って十四日以内泊まっていました(14日を含む)",
            4: "現在も他所にあります"
        },
        travelRegionClassMap: {
            1: "武漢市",
            2: "湖北(武漢を除く)",
            4: "中国大陸他省(自治区)市",
            3: "中国の香港, マカオと台湾地区",
            5: "その他の国",
            6: "温州市",
            7: "韓国",
            8: "日本"
        },
        personTypeMap: {
            1: "広州に戻っていない地元常住住民。",
            2: "広州継続駐在者",
            3: "1月初めに広州に戻った住民",
            4: "一月の初めに広州に来た人員",
            5: "1月中に広州を戻る住民",
            6: "1月中に広州に来た人員",
            11: "在宅医学観察者",
            12: "集中医学観察者"
        },
        socialContactMap: {
            1: "14日間に湖北省駐在の人と密接に接触しました",
            2: "自分で14日以内に患者と接触したことがあると感じています",
            11: "14日に湖北省に滞在した経験のある人",
            12: "14日以内に擬似患者と接触した",
            13: "14日以内に他の所から来たか広州に戻った人員",
            14: "その他の人員"
        },
        healthStateMap: {
            1: "正常に活動します",
            2: "在宅健康サービス",
            3: "集中健康サービス",
            4: "集中医学観察者。"
        },
        symptomTypeMap: {
            1: "自分で正常だど感じています",
            2: "発熱",
            3: "からせき",
            4: "だるい",
            5: "下痢",
            6: "風邪",
            7: "頭痛眩暈",
            11: "发热37.3 ℃以下",
            12: "发热37.3 ℃（含）以上",
            13: "からせき",
            14: "だるい",
            15: "他の症状"
        },
        booleanMap: {
            0: "いいえ",
            1: "は"
        },
        keyMap: [ {
            label: "番号",
            key: "id"
        }, {
            label: "状態を報告する",
            key: "statusStr"
        }, {
            label: "姓名",
            key: "username"
        }, {
            label: "性别",
            key: "gender"
        }, {
            label: "携帯電話番号",
            key: "phone"
        }, {
            label: "証明書タイプ",
            key: "identityTypeStr"
        }, {
            label: "証明書番号",
            key: "identity"
        }, {
            label: "国籍·地域",
            key: "nationStr"
        }, {
            label: "戸籍所在地",
            key: "domicilePlaceStr"
        }, {
            label: "本籍地",
            key: "nativePlace"
        }, {
            label: "居住住所",
            key: "address"
        }, {
            label: "詳しい住所",
            key: "addr"
        } ],
        keyMapOther: [ {
            label: "広州に住んでいますか",
            key: "residentFlagStr"
        }, {
            label: "近いうちに広州にいますか",
            key: "residentConditionStr"
        }, {
            label: "広州に来るまたはもどる期日",
            key: "returnDate"
        }, {
            label: "現在の所在地",
            key: "recentRegionName"
        }, {
            label: "広州に戻る予定日",
            key: "quasiReturnDate"
        }, {
            label: "ここ1か月の滞在履歴",
            key: "travelRegionClassStr"
        }, {
            label: "最近の接触歴",
            key: "socialContactStr"
        }, {
            label: "14日以内に日を密接に接触する",
            key: "contactDateRecent"
        }, {
            label: "14日以内に接触日を感じる",
            key: "contactDateLike"
        }, {
            label: "個人の健康状態",
            key: "healthStateStr"
        }, {
            label: "症状の一覧",
            key: "symptomTypeStr"
        }, {
            label: "その他の症状",
            key: "symptomDscr"
        } ],
        reporterKeyMap: [ {
            label: "姓名",
            key: "clueSupplier"
        }, {
            label: "連絡電話",
            key: "clueSupplierPhone"
        } ],
        reportedKeyMap: [ {
            label: "姓名",
            key: "username"
        }, {
            label: "性别",
            key: "gender"
        }, {
            label: "連絡電話",
            key: "phone"
        }, {
            label: "居住住所",
            key: "street"
        }, {
            label: "詳しい住所",
            key: "addr"
        }, {
            label: "ナンバープレート",
            key: "clueVehicle"
        }, {
            label: "人型",
            key: "socialContact11Str"
        }, {
            label: "広州に来るまたはもどる期日",
            key: "returnDate"
        }, {
            label: "人型",
            key: "socialContact12Str"
        }, {
            label: "広州に来るまたはもどる期日",
            key: "contactDateRecent"
        }, {
            label: "人型",
            key: "socialContact13Str"
        }, {
            label: "広州に来るまたはもどる期日",
            key: "quasiReturnDate"
        }, {
            label: "人型",
            key: "socialContact14Str"
        } ],
        reportContentKeyMap: [ {
            label: "詳細を反映する",
            key: "symptomDscr"
        } ]
    },
    kr: {
        sexMap: {
            "男": "남",
            "女": "녀"
        },
        statusMap: {
            0: "처리중",
            1: "진행중",
            2: "완료됨"
        },
        nationMap: {
            1: "중국대륙",
            2: "중국홍콩마카오대만지역",
            3: "해외"
        },
        domicilePlaceMap: {
            1: "광저우시",
            2: "광둥성내 기타 지역",
            3: "후베이성",
            4: "기타"
        },
        identityTypeMap: {
            1: "신분증",
            3: "여권",
            4: "장교증",
            8: "홍콩마카오주민대륙통행증",
            9: "타이완주민대륙통행증",
            6: "홍콩마카오주민거주증",
            7: "타이완주민거주증",
            11: "출입국통행증"
        },
        residentFlagMap: {
            1: "네,광저우에 반년이상 거주하였습니다.",
            2: "아니요,광저우에 임시 방문중입니다."
        },
        residentConditionMap: {
            1: "광저우에 연속 3개월이상 체류중입니다.",
            2: "광저우에 방문/복귀한지 14일 넘습니다.",
            3: "광저우에 방문/복귀한지 14일 미만입니다.",
            4: "지금 다른 지역에 체류중입니다."
        },
        travelRegionClassMap: {
            1: "우한시",
            2: "후베이(우한제외)",
            4: "중국대륙기타성(자치구)시",
            3: "중국홍콩마카오대만지역",
            5: "기타 국가",
            6: "원저우시",
            7: "한국",
            8: "일본"
        },
        personTypeMap: {
            1: "광저우에 복귀하지 않은 시민",
            2: "광저우를 떠난적 없는 시민",
            3: "1월초에 광저우로 복귀한 시민",
            4: "1월초에 광저우로 방문온 사람",
            5: "1월중순에 광저우로 복귀한 시민",
            6: "1월중순에 광저우로 방문온 사람",
            11: "자택 격리 중임",
            12: "집중 격리 중임"
        },
        socialContactMap: {
            1: "최근 14일내, 후베이 여행이력자와 접촉",
            2: "14일내에 감염환자와 접촉이 있었다고 생각하는 자",
            11: "14일내 후베이지역 방문했거나 거주했던자",
            12: "14일내 의심환자 접촉자",
            13: "14일내 기타 지역출발 광저우도착 복귀자･방문자",
            14: "기타 인원"
        },
        healthStateMap: {
            1: "정상임",
            2: "자택건강서비스",
            3: "집중건강서비스",
            4: "집중의학관찰"
        },
        symptomTypeMap: {
            1: "자기판단에 정상임",
            2: "발열",
            3: "기침",
            4: "무력감",
            5: "설사",
            6: "감기",
            7: "두통어지럼",
            11: "발열 37.3 ℃이하",
            12: "발열 37.3 ℃(포함)이상",
            13: "기침",
            14: "무력감",
            15: "기타 증상"
        },
        booleanMap: {
            0: "아니요",
            1: "예"
        },
        keyMap: [ {
            label: "번호",
            key: "id"
        }, {
            label: "보고상태",
            key: "statusStr"
        }, {
            label: "성함",
            key: "username"
        }, {
            label: "성별",
            key: "gender"
        }, {
            label: "휴대전화",
            key: "phone"
        }, {
            label: "증서타입",
            key: "identityTypeStr"
        }, {
            label: "증서번호",
            key: "identity"
        }, {
            label: "국적/지역",
            key: "nationStr"
        }, {
            label: "호적 소재지",
            key: "domicilePlaceStr"
        }, {
            label: "본관",
            key: "nativePlace"
        }, {
            label: "거주지",
            key: "address"
        }, {
            label: "상세주소",
            key: "addr"
        } ],
        keyMapOther: [ {
            label: "광저우에 거주지인지?",
            key: "residentFlagStr"
        }, {
            label: "요즘 광저우에 계셨는지?",
            key: "residentConditionStr"
        }, {
            label: "광저우 방문이나 복귀 날자",
            key: "returnDate"
        }, {
            label: "당전 거주지",
            key: "recentRegionName"
        }, {
            label: "광저우에 복귀하는 날자.",
            key: "quasiReturnDate"
        }, {
            label: "최근 한달의 동선",
            key: "travelRegionClassStr"
        }, {
            label: "최근 접촉이력",
            key: "socialContactStr"
        }, {
            label: "14일내 긴밀 접촉 날자",
            key: "contactDateRecent"
        }, {
            label: "14일내 의심 접촉 날자",
            key: "contactDateLike"
        }, {
            label: "개인건강상태",
            key: "healthStateStr"
        }, {
            label: "증상리스트",
            key: "symptomTypeStr"
        }, {
            label: "상세 내역 보고",
            key: "symptomDscr"
        } ],
        reporterKeyMap: [ {
            label: "성함",
            key: "clueSupplier"
        }, {
            label: "전화번호",
            key: "clueSupplierPhone"
        } ],
        reportedKeyMap: [ {
            label: "성함",
            key: "username"
        }, {
            label: "성별",
            key: "gender"
        }, {
            label: "휴대전화",
            key: "phone"
        }, {
            label: "거주지",
            key: "street"
        }, {
            label: "상세주소",
            key: "addr"
        }, {
            label: "연계번호판",
            key: "clueVehicle"
        }, {
            label: "관련자 타입",
            key: "socialContact11Str"
        }, {
            label: "광저우 방문이나 복귀 날자",
            key: "returnDate"
        }, {
            label: "일에 관계된 사람 유형",
            key: "socialContact12Str"
        }, {
            label: "광저우 (廣州)로 오거나 돌아오는 날짜",
            key: "contactDateRecent"
        }, {
            label: "일에 관계된 사람 유형",
            key: "socialContact13Str"
        }, {
            label: "광저우에 복귀하는 날자",
            key: "quasiReturnDate"
        }, {
            label: "일에 관계된 사람 유형",
            key: "socialContact14Str"
        } ],
        reportContentKeyMap: [ {
            label: "상세한 내용을 반영하다",
            key: "symptomDscr"
        } ]
    }
};