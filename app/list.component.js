var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var form_component_1 = require('./form.component');
require('rxjs/Rx');
var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
        var startForm = [];
        for (var i = 0; i < 10000; i++) {
            startForm[i] = i;
        }
        this.forms = startForm;
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "site",
            templateUrl: 'templates/list.html',
            directives: [form_component_1.FormComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
})();
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map