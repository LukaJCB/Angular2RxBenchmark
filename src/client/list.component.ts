import {Component} from 'angular2/core';
import {Validators, FormBuilder,Control, ControlGroup} from 'angular2/common';
import {Observable} from 'rxjs/Rx';
import {Form} from './form.model';
import {FormComponent} from './form.component';
import 'rxjs/Rx';


@Component({
    selector: "site",
    templateUrl: 'templates/list.html',
    directives: [FormComponent]
})
export class ListComponent {
    
    forms: number[];
    
    
     
    ngOnInit() {
       
        
        const startForm = [];
        for (let i = 0; i < 10000; i++){
            startForm[i] = i;
        }
        this.forms = startForm;
        
      
         
    }
    
    addNewPerson: () => any;
    
}