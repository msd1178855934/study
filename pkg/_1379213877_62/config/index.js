module.exports = {
    regionCode: "440100000000",
    cityCode: "440100",
    wllConfigCacheTime: 600,
    provinceName: "广东省",
    cityName: "广州市",
    cityShortName: "穗",
    env: "prod",
    domain: "https://sk.gzonline.gov.cn",
    dev: {
        pharmacyPath: "/cloudsa3/wyj/ypgg_data_prd2020013101.json",
        buyDomain: "https://skyy-cs.tgovcloud.com",
        wllConfigPath: "/cloudsa3/wyj/wll_mp_dev_config.json",
        regionPath: "/cloudsa3/uc/gz202020201.json",
        wenzhenPath: "/cloudsa3/wenzhen/config/entry.json",
        carCodePath: "https://sk-cs.tgovcloud.com/traffic-gate-es",
        healthCodePath: "/prominent-citizens",
        realNameSetting: "city"
    },
    prod: {
        pharmacyPath: "/cloudsa3/wyj/ypgg_data_prd2020013101.json",
        buyDomain: "https://skyy.gzonline.gov.cn",
        wllConfigPath: "/cloudsa3/wyj/wll_mp_prod_config.json",
        regionPath: "/cloudsa3/uc/gz202020201.json",
        wenzhenPath: "/cloudsa3/wenzhen/config/entry.json",
        carCodePath: "https://sk.gzonline.gov.cn/traffic-gate-es",
        healthCodePath: "/prominent-citizens",
        realNameSetting: "city"
    },
    cdnDomain: "https://imgcache.gzonline.gov.cn",
    appid: "microService-GUANGZHOU",
    regionLevel: [ {
        title: "市"
    }, {
        title: "区"
    } ]
};