"use strict";
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
var common_1 = require('angular2/common');
var form_model_1 = require('./form.model');
require('rxjs/Rx');
var FormComponent = (function () {
    function FormComponent(fb) {
        this.nameControl = new common_1.Control("");
        this.controlGroup = fb.group({
            "name": this.nameControl,
            "height": new common_1.Control(""),
            "weight": new common_1.Control("")
        });
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.name = this.nameControl.valueChanges;
        this.form.bmi = this.controlGroup.valueChanges
            .map(function (value) { return _this.toBmi(value['weight'], value['height']); })
            .filter(function (value) { return value > 0; });
        this.form.category = this.form.bmi.map(function (bmi) { return _this.toCategory(bmi); });
    };
    FormComponent.prototype.toBmi = function (weight, height) {
        var heightInMeters = height / 100;
        return weight / (heightInMeters * heightInMeters);
    };
    FormComponent.prototype.toCategory = function (bmi) {
        if (bmi < 18.5)
            return "Underweight";
        else if (bmi < 25)
            return "Normal";
        else if (bmi < 30)
            return "Overweight";
        else
            return "Obese";
    };
    __decorate([
        core_1.Input('form'), 
        __metadata('design:type', form_model_1.Form)
    ], FormComponent.prototype, "form", void 0);
    FormComponent = __decorate([
        core_1.Component({
            selector: "form",
            templateUrl: 'templates/form.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map