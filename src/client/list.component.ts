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
    
    forms: Observable<Form[]>;
    
    numberOfPeople: Observable<number>;
    
     
    ngOnInit() {
       
        const peopleSignal: Observable<{}> = Observable.create(observer => {
            this.addNewPerson = () => observer.next();
        }).share();
        
        const startForm = [];
        for (let i = 0; i < 10000; i++){
            startForm[i] = new Form();
        }
        
        this.forms =  peopleSignal.map(() => [new Form()])
        .startWith(startForm)
        .scan((acc: Form[], value) => acc.concat(value));
         
        this.numberOfPeople = this.forms.map(forms => forms.length);
         
    }
    
    addNewPerson: () => any;
    
}