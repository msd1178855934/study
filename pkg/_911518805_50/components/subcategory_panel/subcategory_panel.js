var app = getApp();

Component({
    properties: {
        subCategories: {
            type: Array,
            value: [],
            observer: function observer(e, t, a) {
                console.log("component subCategory subCategories newVal", e, ", oldVal", t, " changedPath", a);
            }
        },
        selectedId: {
            type: String,
            value: "",
            observer: function observer(e, t, a) {
                console.log("component subCategory selectedId newVal", e, ", oldVal", t, " changedPath", a);
            }
        }
    },
    data: {},
    attached: function attached() {},
    methods: {
        bindtapCategoryItem: function bindtapCategoryItem(e) {
            var t = e.currentTarget.dataset.id;
            this.setData({
                selectedId: t
            }), this.triggerEvent("subcategoryselect", {
                id: t
            }, {});
        }
    }
});