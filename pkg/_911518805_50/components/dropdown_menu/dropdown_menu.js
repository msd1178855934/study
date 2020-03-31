var app = getApp();

Component({
    properties: {
        options: {
            type: Array,
            value: [],
            observer: function observer(t, e, n) {
                t.length <= 1 ? this.setData({
                    isToggleDisabled: !0
                }) : this.setData({
                    isToggleDisabled: !1
                }), this.getName();
            }
        },
        selectedId: {
            type: String,
            value: "",
            observer: function observer(t, e, n) {
                this.getName();
            }
        },
        styleType: {
            type: String,
            value: "dark"
        }
    },
    data: {
        selectedName: "",
        isToggleDisabled: !0,
        isDropdownContentShown: !1
    },
    lifetimes: {
        attached: function attached() {
            this.getName();
        }
    },
    methods: {
        getName: function getName() {
            var t = this;
            t.data.options.length && t.data.selectedId && t.data.options.some(function(e) {
                if (t.data.selectedId === e.id) return t.setData({
                    selectedName: e.name
                }), !0;
            });
        },
        hideMask: function hideMask(t) {
            this.setData({
                isDropdownContentShown: !1
            });
        },
        onToggleDropdown: function onToggleDropdown() {
            this.setData({
                isDropdownContentShown: !this.data.isDropdownContentShown
            });
        },
        onTapSelect: function onTapSelect(t) {
            var e = t.currentTarget.dataset.id, n = t.currentTarget.dataset.name;
            this.setData({
                selectedId: e,
                selectedName: n,
                isDropdownContentShown: !1
            }), this.triggerEvent("select", {
                id: e
            });
        },
        noop: function noop() {}
    }
});