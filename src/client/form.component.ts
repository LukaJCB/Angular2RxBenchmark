import {Component, Input, ChangeDetectionStrategy} from 'angular2/core'
import {Validators, FormBuilder,Control, ControlGroup} from 'angular2/common';
import {Observable} from 'rxjs/Rx';
import {Form} from './form.model';
import 'rxjs/Rx';


@Component({
    selector: "form",
    templateUrl: 'templates/form.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
    controlGroup: ControlGroup;
    nameControl: Control = new Control("");
    
    @Input('form') form: Form
    
    constructor(fb: FormBuilder) {
        this.controlGroup = fb.group({
            "name": this.nameControl,
            "height": new Control(""),
            "weight": new Control("")
        });
    }
    
    ngOnInit(){
        this.form.name = this.nameControl.valueChanges;
        
        this.form.bmi = this.controlGroup.valueChanges
        .map(value => this.toBmi(value['weight'], value['height']))
        .filter(value => value > 0);
        
        this.form.category = this.form.bmi.map(bmi => this.toCategory(bmi));
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