/**
 * Created by ÏşÄÈ on 2016/10/16.
 */
var util = {
    extend:function(o1, o2) {
        for (var key in o2) {
            if (o2.hasOwnProperty(key)) {
                o1[key] = o2[key];
            }
        }
    }
}