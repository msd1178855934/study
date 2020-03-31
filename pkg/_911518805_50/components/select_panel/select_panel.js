var app = getApp();

Component({
    properties: {
        category: Array,
        selectedId: {
            type: String,
            value: "",
            observer: function observer(t, e, a) {}
        }
    },
    data: {},
    attached: function attached() {},
    methods: {
        bindtapCategoryItem: function bindtapCategoryItem(t) {
            t.currentTarget.dataset.index;
            var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.name, r = t.currentTarget.dataset.obj;
            this.setData({
                selectedId: e
            }), this.triggerEvent("select", {
                id: e,
                name: a,
                obj: r
            }, {});
        }
    }
});