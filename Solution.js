function arrayDiff(a, b) {
    if (b == `${[]}`) {
        return a;
    } else if (a == `${[]}`) {
        return a;
    } else {
        for (var i in b) {
            for (var k in a) {
                if (b[i] == a[k]) {
                    a = removeItemAll(a, b[i]);
                }
            }
        }
        return a;
    }

}

function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}
