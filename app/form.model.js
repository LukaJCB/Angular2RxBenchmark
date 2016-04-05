"use strict";
var Rx_1 = require('rxjs/Rx');
var Form = (function () {
    function Form() {
        this.name = Rx_1.Observable.create();
        this.bmi = Rx_1.Observable.create();
        this.category = Rx_1.Observable.create();
    }
    return Form;
}());
exports.Form = Form;
//# sourceMappingURL=form.model.js.map