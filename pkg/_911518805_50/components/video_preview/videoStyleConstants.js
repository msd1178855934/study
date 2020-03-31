var r = "8rpx", TL = "border-top-left-radius: " + r, TR = "border-top-right-radius: " + r, BL = "border-bottom-left-radius: " + r, BR = "border-bottom-right-radius: " + r, FULL = "border-radius: " + r;

module.exports = {
    radiusBorderStyle: {
        "1-1": FULL,
        "1-2": TL + ";" + BL,
        "2-2": TR + ";" + BR,
        "1-3": TL + ";" + BL,
        "2-3": TR,
        "3-3": BR,
        "1-4": TL,
        "2-4": TR,
        "3-4": BL,
        "4-4": BR,
        "1-5": TL,
        "2-5": TR,
        "3-5": "",
        "4-5": BL,
        "5-5": BR,
        "1-6": TL,
        "2-6": TR,
        "3-6": "",
        "4-6": BL,
        "5-6": "",
        "6-6": BR,
        "1-1--nearby": FULL,
        "1-2--nearby": FULL,
        "2-2--nearby": FULL,
        "1-1--forward": FULL,
        "1-2--forward": TL + ";" + BL,
        "2-2--forward": TR + ";" + BR,
        "1-3--forward": TL + ";" + BL,
        "2-3--forward": "",
        "3-3--forward": TR + ";" + BR,
        "1-1--small": TL + ";" + TR
    }
};