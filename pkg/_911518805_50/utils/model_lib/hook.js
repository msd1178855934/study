var constants = require("./constants"), util = require("./util");

function removeHook() {
    if (null != this[constants.Name_Has_Hooked]) {
        this[constants.Name_Reactive_Models_Mapping_Tree].getAllPathModels().forEach(function(e) {
            e.unBindData();
        }), delete this[constants.Name_Reactive_Models_Mapping_Tree], this[constants.Name_Has_Hooked] = constants.enumHookStatus.InstanceRemoved, 
        this.setData = this[constants.Name_Original_SetData];
    }
}

var originalPage = Page, HookPage = function HookPage(e) {
    e.onLoad;
    var o = e.onUnload;
    originalPage(Object.assign(e, {
        onUnload: function onUnload() {
            removeHook.apply(this, arguments), o && o.apply(this, arguments);
        }
    }));
};

Page = HookPage;

var originalComponent = Component, HookComponent = function HookComponent(e) {
    if (e.lifetimes && e.lifetimes.detached) {
        var o = e.lifetimes.detached;
        originalComponent(util.mergeDeep(e, {
            lifetimes: {
                detached: function detached() {
                    o.apply(this, arguments), removeHook.apply(this, arguments);
                }
            }
        }));
    } else if (e.detached) {
        var t = e.detached;
        originalComponent(util.mergeDeep(e, {
            detached: function detached() {
                t.apply(this, arguments), removeHook.apply(this, arguments);
            }
        }));
    } else originalComponent(util.mergeDeep(e, {
        lifetimes: {
            detached: function detached() {
                removeHook.apply(this, arguments);
            }
        }
    }));
};

Component = HookComponent;