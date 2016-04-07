import {Component, Input} from 'angular2/core'
import {Validators, FormBuilder,Control, ControlGroup} from 'angular2/common';
import {Form} from './form.model';


@Component({
    selector: "form",
    templateUrl: 'templates/form.html'
})
export class FormComponent {
    
    
    form: Form
    
    constructor(){
        this.form = new Form();
    }
    
    getBmi(): number {
        return this.toBmi(this.form.weight,this.form.height);
    }
    
    getCategory(): string {
        return this.toCategory(this.toBmi(this.form.weight,this.form.height));
    }
    
    toBmi(weight: number, height: number): number {
        const heightInMeters = height / 100;
        return weight / (heightInMeters * heightInMeters);
    }
    
    toCategory(bmi: number): string {
        if (bmi < 18.5) return "Underweight";
        else if (bmi < 25) return "Normal";
        else if (bmi < 30) return "Overweight";
        else return "Obese";
    }
}