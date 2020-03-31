var app = getApp();

Component({
    properties: {
        options: {
            type: Array,
            value: [],
            observer: function observer(e, t, a) {
                console.log("order panel options", "newVal", e);
            }
        },
        selectedId: {
            type: String,
            value: "",
            observer: function observer(e, t, a) {
                console.log("order panel selectedId", "newVal", e);
            }
        }
    },
    data: {},
    attached: function attached() {},
    methods: {
        bindtapCategoryItem: function bindtapCategoryItem(e) {
            var t = e.currentTarget.dataset.id, a = e.currentTarget.dataset.name;
            this.setData({
                selectedId: t
            }), this.triggerEvent("select", {
                id: t,
                name: a
            }, {});
        }
    }
});