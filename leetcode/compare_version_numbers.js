/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var arr1 = version1.split('.');
    var arr2 = version2.split('.');

    while (arr1.length > 0 || arr2.length > 0) {
        var ele1 = arr1.shift();
        ele1 = ele1 ? Number.parseInt(ele1) : 0;
        var ele2 = arr2.shift();
        ele2 = ele2 ? Number.parseInt(ele2) : 0;
        if (ele1 > ele2) {
            return 1;
        } else if (ele1 < ele2) {
            return -1;
        }
    }
    return 0;
};

console.log(compareVersion('01', '1'));
