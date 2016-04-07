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
var form_model_1 = require('./form.model');
var FormComponent = (function () {
    function FormComponent() {
        this.form = new form_model_1.Form();
    }
    FormComponent.prototype.getBmi = function () {
        return this.toBmi(this.form.weight, this.form.height);
    };
    FormComponent.prototype.getCategory = function () {
        return this.toCategory(this.toBmi(this.form.weight, this.form.height));
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
    FormComponent.prototype.ngDoCheck = function () {
        console.log("checked!");
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: "form",
            templateUrl: 'templates/form.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map