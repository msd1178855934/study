var app = getApp();

Component({
    properties: {
        category: {
            type: Array,
            value: [],
            observer: function observer(t, e) {
                this.initCategory(t);
            }
        },
        selectedLeftId: String,
        selectedRightId: String
    },
    data: {},
    attached: function attached() {},
    methods: {
        initCategory: function initCategory(t) {
            if (this.setData({
                formattedCategory: this.formatCategory(t)
            }), this.data.category.length && !this.data.selectedLeftId && !this.data.selectedRightId) {
                var e = this.data.formattedCategory, a = e.lvlOneCategory[0].id, r = "";
                e.lvlTwoCategoryMap[a].length && (r = e.lvlTwoCategoryMap[a][0].id), this.setData({
                    selectedLeftId: a,
                    selectedRightId: r
                });
            }
        },
        formatCategory: function formatCategory(t) {
            var e = [], a = {};
            return t.forEach(function(t) {
                e.push({
                    id: t.id,
                    name: t.name
                }), a[t.id] = t.subCategory || [];
            }), {
                lvlOneCategory: e,
                lvlTwoCategoryMap: a
            };
        },
        bindtapCategoryItem: function bindtapCategoryItem(t) {
            var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.id;
            this.setData({
                selectedLeftId: a,
                subCategory: this.data.category[e].subCategory || []
            }), this.data.category[e].subCategory && this.data.category[e].subCategory.length || this.triggerEvent("leftrightselect", {
                id: a,
                name: t.currentTarget.dataset.name
            }, {});
        },
        bindtapSubCategoryItem: function bindtapSubCategoryItem(t) {
            t.currentTarget.dataset.index;
            this.setData({
                selectedRightId: t.currentTarget.dataset.id
            }), this.triggerEvent("leftrightselect", {
                id: t.currentTarget.dataset.id,
                name: t.currentTarget.dataset.name
            }, {});
        }
    }
});