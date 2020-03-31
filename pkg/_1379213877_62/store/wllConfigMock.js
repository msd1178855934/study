module.exports = {
    buy_type: "lot",
    feedback_open: 1,
    buy_feedback_open: 1,
    personal_center_info: {
        is_open: 1,
        tips: "结果将在每晚8点提交预约申请后显示，可能稍有延迟，请耐心等候。"
    },
    home_notice: {
        is_open: 1,
        title: "重要提示",
        text: "1111尊敬的广州市民以及来穗的朋友：目前，正值防控新型肺炎的关键时期，请大家齐心协力、共克时艰，通过“穗康”微信小程序主动申报离（返）穗情况和健康状况，我们将对主动申报14天之内来自湖北或曾到过湖北（现已返穗）并有发热等相关症状（经排查核实的）的人员，配备“五个一”（一支温度计、一打口罩、一个表格、一支笔、一份宣传册）。感谢您的积极配合，祝您身体健康，家庭幸福！",
        duration: 60
    },
    buy_flow_info: {
        is_open: 1,
        start_time: "20:00",
        end_time: "24:00",
        oveTips: "今日预约还未开始，每晚8点开放，请耐心等候",
        sellOutTips: "别着急，明晚8点可再次预约。我们一直在努力筹集口罩货源，尽最大努力护您周全",
        closeTips: "系统异常，请稍后再试。",
        isNeedReport: 1,
        needReportTips: "为确保能及时了解您的健康情况，预约购买口罩前须先填写健康自查上报表，请点击“确认”进行填写。",
        probability: 20,
        tmplIds: [ "kROFAr3lqfJVmdgB2jDS6DQhVTnePC6y-k-c9GiMSiA" ],
        is_need_subscribe_message: 1,
        interval_day: 0,
        buy_explain: {
            en: {
                agree: "I have read the instructions on face mask purchase.",
                buttonText: "I want to make a reservation.",
                navTitle: "Reservation for face mask purchase",
                title: "Instructions on reservation for face mask purchase",
                desc: [ "In order that people in Guangzhou purchase face masks conveniently, the Office of the Guangzhou Municipal Command Post for COVID-19 Prevention and Control has entrusted Guangzhou Pharmaceutical Holdings Limited to provide online reservation, lot drawing, door-to-door distribution and in-store purchase services in a unified manner.", "From February 22, the system has been further upgraded, and the purchase reservation and lot drawing rules are as follows:" ],
                attention: [ "1. Anyone in Guangzhou may make a reservation and get registered with his identity card or any other valid identity document.", "2. Reservation can be made in the mode of either “online settlement and door-to-door express delivery” or “offline settlement and in-store pickup”. In the latter case, please select a store for pickup.", "3. Each person may reserve the purchase of 10 ordinary face masks or ordinary N95 masks each time, and any successful registration is valid within its original period only.", "4. One reservation period is 10 days, and no repeated reservation is required within 10 days from the date of registration.", "5. Each person has only one chance to win the lot in one period. If you win the lot, you should not participate in lot drawing within 10 days; if you still need to make a reservation after 10 days from lot winning, you should make a reservation and get registered again. For example, if you win the lot on February 18, you cannot get registered until February 27 and participate in lot drawing until February 28. If you have not won the lot, you may participate in lot drawing every day in the period until you win the lot or the period ends; when you make a reservation again after the end of the period, you should get registered again. Anyone aged 65 years or above has to get registered only once.", "6. The data of valid reservations and registrations is saved by the system at 22:00 every day, and used for lot drawing at 15:00 on the following day. You can see the results in “Personal Center—My Reservation” at around 18:00.", "7. If you win the lot for “online settlement and door-to-door express delivery” successfully, an online payment interface will appear, and you should complete payment as prompted. Guangzhou Jianmin Pharmacy Chain Co., Ltd. will provide door-to-door express delivery for your order (in Guangzhou City only). If you fail to pay within the specified time, the order will become invalid automatically. If you win the lot for “offline settlement and in-store pickup” successfully, an interface of the store name, address, reservation number (including barcode) and effective period of purchase registered at the time of reservation will appear. You can handle settlement and pickup at the registered store with the above information and your registered valid document.", "8. Due to the differences of the procurement price and market fluctuations, an average purchase price in a certain period will be set for the mask, and be supervised by Office of Price Administration.", "9. The Guangzhou Notary Office will supervise the lot drawing process.", "10. Any user who violates the rules and practices cheating will be disqualified for reservation. In serious cases, the user will be held legally liable according to law." ]
            },
            chs: {
                agree: "我已阅读口罩购买说明",
                buttonText: "我要预约购买",
                navTitle: "口罩预约购买",
                title: "关于口罩预约购买的说明",
                desc: [ "为方便在穗人士购买口罩，市新冠肺炎防控指挥部办公室委托广药集团统一提供口罩线上预约、摇号抽签、配送到家或到店购买服务。", "2月22日起，系统进一步升级，预约摇号购买规则如下：" ],
                attention: [ "1、在穗人士可凭身份证等有效身份证明进行预约登记。", "2、预约分为“线上结算，快递到家”和“线下结算，到店自取”两类，预约时只能选其一。如果选择“线下结算，到店自取”，须选择具体的自取门店。", "3、每人每次可预约购买普通防护口罩10个或普通N95口罩10个，已经成功登记的在原周期内有效。", "4、预约登记10天为一个周期，自登记之日起10天内无需重复预约登记。", "5、每人每个周期只有1次中签机会。如中签，中签日起10天内不在参与摇号；中签10天后，如还需预约购买，须重新预约登记，如：2月18日中签，2月27日方可再次登记，2月28日参加摇号。如未中签，在周期内可每日参加抽签，直至中签或周期结束；周期结束后，再预约购买时，须重新预约登记。年满65周岁的人士只需登记一次。", "6、每天22:00系统将有效预约登记的数据封存，次日15:00对数据进行摇号抽签，18:00左右可在“个人中心——我的预约”中查询结果。", "7、如果成功中签“线上结算，快递到家”的，将会出现线上付款界面，请按提示完成付款。订单由广州建民医药连锁有限公司提供快递到家服务（仅限于广州市内）。超时未支付的，订单将自动失效。如果成功中签“线下结算，到店自取”的，将出现预约时登记的门店名称、地址、预约号（含条形码）和购买有效期的界面。您可在有限期内，凭上述信息和预约登记时的有效证件到预约时登记的门店办理结算自取。", "8、由于口罩采购价格存在差异和市场波动，将选取一定时间内+B2的采购平均价合理加成后销售，并由物价监管部门予以监督。", "9、广州公证处将对摇号过程进行监督。", "10、对于任何违反规则、存在作弊行为的用户，将取消预约资格，情节严重的，将依法追究法律责任。" ]
            },
            ja: {
                agree: "私はマスク購入手順を確認しました。",
                buttonText: "私は～を予約購入します。",
                navTitle: "マスクの予約購入",
                title: "マスクの予約購入について",
                desc: [ "新型コロナウイルス肺炎の予防抑制指揮部の事務室は、広州市に滞留する方がマスクを購入するために、マスクのインライン予約、抽選、自宅配送や店頭での購入サービスをすべて広薬集団に依頼しました。", "2月22日から、システムがアップグレードされ、予約番号抽選販売ルールは以下の通りです。" ],
                attention: [ "1.広州市に滞留する方が身分証などの有効な身分証明書を持参し予約登録を行います。", "2.予約は「インライン決済、自宅配送」及び「オフライン決済、店頭受取」の2種類があります。予約の際にはどちらかを選んでください。「オフライン決済、店頭受取」を選択した場合は、引き取りに行く店舗を選択します。", "3.お一人様1回につき、一般マスク10枚又は一般N95マスク10枚を予約購入することができ、登録後の設定期間内に有効です。", "4.予約登録10日間を1つの期間とし、登録日から10日以内に予約登録を繰り返す必要はありません。", "5.お一人様、各期間ごとにつき、1回の当たるチャンスがあります。当たった場合は、当たった日から10日以内に抽選に参加しないこと。当たった日から10日後、予約購入には再度予約登録をしなければなりません。例えば、2月18日に当たった場合、2月27日に再登録し、2月28日に抽選に参加することができます。抽選に外れた場合は、抽選に当たるまで、又は抽選期間が終了するまで、抽選に毎日参加することができます。当該期間が終了し、再度予約購入する際には、もう一度予約登録をしなければなりません。満65歳の方が一度だけ登録すればよい。", "6.システムは毎日22：00まで有効な予約登録データを集計し、翌日15：00に抽選を行い、18：00頃に「個人センター-私の予約」で結果をチェックすることができます。", "7.「インライン決済、自宅配送」に当たった場合は、インライン支払画面が表示されますので、指示に従って支払を完了してください。注文は広州建民医薬連鎖有限公司が宅配便サービス（広州市内のみ）を提供します。期限まで支払いを完了しない場合は、注文は自動的に無効になります。「オフライン決済、店頭受取」に当たった場合は、予約時に登録された店舗名、住所、予約番号（バーコード含む）及び購入の有効期間を示す画面が表示されます。有効期間内に、上記の情報と予約登録時の有効な証明書を持参して予約時に登録された店舗で決済と受取を行います。", "8.マスク購入価格に違いや市場変動があるため、一定期間内の平均調達価格をベースに合理的に計算した価格て販売します。販売は物価監督管理部門の監督を受けます。", "9.広州公証処は抽選過程を監督します。", "10.規則違反、不正行為を行ったユーザーに対して、予約資格を取り消し、重大な結果を招いた場合は、法的責任を追及する場合があります。" ]
            },
            kr: {
                agree: "저는 이미 마스크 구매 설명을 읽었습니다.",
                buttonText: "저는 예약 구매하겠습니다.",
                navTitle: "마스크 예약 구매",
                title: "마스크 예약 구매에 대한 설명",
                desc: [ "시（市） 코로나바이러스 예방 제어 지휘부 사무실은 광저우에서 마스크를 구입할 수 있도록 광약그룹에 위탁하여 마스크 온라인 예약, 번호추첨, 주택배달 또는 매장 구매 서비스를 통일적으로 요청했다. ", "2일 22일 부터 시스템은 한층 더 업그레이드 되고 예약번호 구매규칙은 다음과 같다:" ],
                attention: [ "1. 광저우 소재 인사는 신분증 등 유효신분증명으로 예약 등록 할 수 있다. ", "2. 예약은 “온라인 결제, 주택 배달”과 “오프라인 결제, 매장 자취” 두 종류로 나누며 예약 시 그중 하나만 선택할 수 있다. “오프라인 결제, 매장 자취”를 선택할 경우 구체적인 자취할 매장을 선택해야 한다. ", "3. 인당 1회 일반방호마스크 10개 또는 일반 N95 마스크 10개를 예약 구매할 수 있으며 이미 동록 완료된 경우 기존 주기 내에 유효하다.", "4. 예약등록은 10일을 하나의 주기로 하며 등기한 날로부터 10일 내에 중복하여 예약 동록할 필요가 없다. ", "5. 매개인은 매주에 단 1회의 당첨기회만 갖는다. 만약 당첨되면 당첨일로부터 10일 내에 추첨에 참여 하지 안는다; 당첨 10일 후 예약 구매 더 필요할 경우 다시 예약 등록해야 한다. 예를 들면 2월 18일 당첨, 2월 27일에야 다시 예약 등록하고 2월 28일 추첨에 참여할 수 있다. 당첨 된지 않을 경우 주기내에 매일 추첨에 참여할 수 있으며 당첨 또는 주기 완료될 때까지 할 수 있다; 주기 완료 후 재 예약 구매할 경우 다시 예약 등록해야 한다. 만 65세 이상인 인사는 한 번만 등록하면 된다. ", "6. 매일 22:00 시스템은 유효한 예약 등록 데이터를 봉인하여 보관하고 다음날 15:00 데이터를 추첨하며 18:00 정도는 “개인센터-나의 예약”에서 결과를 조회할 수 있다. ", "7. “온라인 결제, 택배 송달”에 성공적으로 당첨되면 온라인 결제 인터페이스가 뜬다. 제시된 대로 결제를 완성하면 된다. 주문은 광저우 건민의약체인유한공사가 택배송달 서비스(광저위시내에만 해당)를 제공한다. 제 시간에 지불 안하면 주문이 자동적으로 효력을 잃는다. 만약 “오프라인 결제 매장 자취”에 성공적으로 당첨되면 예약 시 등록된 매장 이름, 주소, 예약번호 (바코드 포함)와 구매 유효기간 인터페이스가 뜬다. 당신은 제한된 기간 내에 상술 정보와 예약등록 시의 유효증명서를 소지하여 예약  시 등록한 가게에 가서 결제 자취를 할 수 있다. ", "8. 마스크 구매 가격 차이와 시장 파동 때문에 일정 시간 내 구매 평균 가격을 합리적으로 추가하여 판매할 것이며 물가감독관리부분의 감독을 받는다. ", "9. 광저우공증사무소는 번호추첨과정을감독한다. ", "10. 규칙을 위반하고 부정행위가 있는 모든 사용자에 대하여 예약자격을 취소하며 그 정황이 중한 경우 법에 의하여 법적책임을 추궁한다." ]
            }
        },
        unCanOrderText: "您的预约申请我们已经收到，请勿重复提交。结果可在“个人中心—我的预约”中查看。"
    },
    lot_flow_info: {
        is_open: 1,
        start_time: "00:00",
        end_time: "24:00",
        oveTips: "今日预约还未开始，每晚8点开放，请耐心等候",
        sellOutTips: "别着急，明晚8点可再次预约。我们一直在努力筹集口罩货源，尽最大努力护您周全",
        closeTips: "系统异常，请稍后再试。",
        isNeedReport: 1,
        needReportTips: "为确保能及时了解您的健康情况，预约购买口罩前须先填写健康自查上报表，请点击“确认”进行填写。",
        probability: 100,
        tmplIds: [ "kROFAr3lqfJVmdgB2jDS6DQhVTnePC6y-k-c9GiMSiA" ],
        is_need_subscribe_message: 1,
        lot_time: "18:00",
        modify_start_time: "18:30",
        modify_end_time: "21:30",
        modify_order_tips: "您已提交过预约登记，正在参与摇号中，如果填写信息需要修改，在18：30-21：30时间内可以修改，每天只能修改一次，且当天修改数据不能修改",
        modify_not_in_valid_time_tips: "该时间不能修改，请18:30-21:30时间内修改",
        modify_has_modify_tips: "当天录入的数据不能修改，且每天只能修改一次",
        enable_modify_order: !0,
        interval_day: 10,
        buy_explain: {
            en: {
                title: "Notice on Online Reservation for Masks",
                desc: [ "To make it convenient for Guangzhou residents to buy masks, Guangzhou Disease Control and Prevention Office entrusted Guangzhou Pharmaceutical Holdings with services of online reservation for masks, masks lottery, delivery of masks or shop at designated drugstores.", "From February 16, the new system will be undergoing a test run. Here are the rules of online reservation and purchase of masks." ],
                attention: [ "1. People living in Guangzhou could make a reservation through their ID card or other valid documentation.", "2. You can either choose to pay the bill online and wait for the delivery, or pay the bill offline and fetch the masks at designated drugstores that you selected previously.", "3. Each person can reserve and buy 10 ordinary masks or 10 N95 masks at most within a cycle (10 days).", "4. The registration and reservation information will be valid for 10 days, so you don’t need to make another reservation during this period.", "5. Each person could only win the lottery once in a cycle. If you win the lottery, you shall not reserve the masks within 10 days. If you still need to make reservation 10 days after you win the lottery, then you need to make a new registration. For example, if you win the lottery on February 18, then you may wait until February 27 to register and participate in the lottery on 28. If you don’t win the lottery, then you can participate in it every day until you win it or the end of a cycle. After a cycle ends, you need to make a new registration.", "6. Every day at 10 p.m. the system will collect the information registered and select lucky users by lottery at 3p.m the next day. So you may need to check the result at “Personal Center-My Reservation” around 6 p.m. every day since February 17.", "7. If you win the lottery of “pay the bill online and wait for the delivery”, you should pay for the masks by following the system prompt, and Guangzhou Pharmaceutical Holdings will arrange for the delivery (within Guangzhou city). You are supposed to pay within the configured timeout, otherwise your reservation will become invalid. If you win the lottery of “pay the bill offline and fetch the masks at designated drugstores”, you will see the information including the name of the designated drugstore you registered, the detailed address, reservation number, and valid period of your purchase. You can pay the bill at the drugstore you registered through valid documentation and above information within the valid period.", "8. Due to the differences of the procurement price and market fluctuations, an average purchase price in a certain period will be set for the mask, and be supervised by Office of Price Administration.", "9. Guangzhou Notary Public Office will supervise the lottery process.", "10. Those who break the rules and conduct cheating behavior will be disqualified from the reservation system. In serious cases, they shall be investigated for legal responsibility according to law." ]
            },
            chs: {
                title: "关于口罩预约购买的说明",
                desc: [ "为方便在穗人士购买口罩，市新冠肺炎防控指挥部办公室委托广药集团统一提供口罩线上预约、摇号抽签、配送到家或到店购买服务。", "2月22日起，系统进一步升级，预约摇号购买规则如下：" ],
                attention: [ "1、在穗人士可凭身份证等有效身份证明进行预约登记。", "2、预约分为“线上结算，快递到家”和“线下结算，到店自取”两类，预约时只能选其一。如果选择“线下结算，到店自取”，须选择具体的自取门店。", "3、每人每次可预约购买普通防护口罩10个或普通N95口罩10个，已经成功登记的在原周期内有效。", "4、预约登记10天为一个周期，自登记之日起10天内无需重复预约登记。", "5、每人每个周期只有1次中签机会。如中签，中签日起10天内不再参与摇号；中签10天后，如还需预约购买，须重新预约登记，如：2月18日中签，2月27日方可再次登记，2月28日参加摇号。如未中签，在周期内可每日参加抽签，直至中签或周期结束；周期结束后，再预约购买时，须重新预约登记。年满65周岁的人士只需登记一次。", "6、每天22:00系统将有效预约登记的数据封存，次日15:00对数据进行摇号抽签，18:00左右可在“个人中心——我的预约”中查询结果。", "7、如果成功中签“线上结算，快递到家”的，将会出现线上付款界面，请按提示完成付款。订单由广州健民医药连锁有限公司提供快递到家服务（仅限于广州市内）。超时未支付的，订单将自动失效。如果成功中签“线下结算，到店自取”的，将出现预约时登记的门店名称、地址、预约号（含条形码）和购买有效期的界面。您可在有效期内，凭上述信息和预约登记时的有效证件到预约时登记的门店办理结算自取。", "8、由于口罩采购价格存在差异和市场波动，将选取一定时间内的采购平均价合理加成后销售，并由物价监管部门予以监督。", "9、广州公证处将对摇号过程进行监督。", "10、对于任何违反规则、存在作弊行为的用户，将取消预约资格，情节严重的，将依法追究法律责任。" ]
            }
        },
        lotDelayTips: "数据更新可能稍有延迟，请耐心等候。",
        express_text: "加包装物流费6元",
        preorderBth: {
            isShow: 0,
            text: "查看02月15日抢购预约记录"
        },
        result_notice: {
            is_open: 1,
            title: "2月19日口罩预约摇号公示",
            short_desc: "2月19日口罩预约摇号公示",
            content: "1、2020年2月19日，在“穗康”小程序上登记且符合摇号资质合计2,629,006人。\n2、经过组织货源，可预约口罩1,400,000只。其中1,002,370只提供给“穗康”小程序用于今天下午3点预约摇号。另397,630只口罩用于大参林和采芝林自行预约。",
            version: "2"
        },
        unCanOrderText: "您的预约申请我们已收到，请勿重复提交。2月17日起，每天18：00左右系统公布随机摇号中签名单，请耐心等候。",
        rgisterSuccessText: "本次预约10天内有效。2月17日起，每天18：00左右系统公布随机摇号中签名单，请耐心等候。",
        changeableYesText: "您已选择服从分配，将提高中签概率。若当前选择口罩型号未中签，则从所选药店其他有库存的型号中再次摇号。",
        changeableNoText: "建议您选择“接受”服从分配，将提高中签概率"
    }
};