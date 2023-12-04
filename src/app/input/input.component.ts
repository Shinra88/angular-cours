import { Component, Input } from '@angular/core';
import { FormInputModel } from '../interfaces/form-input-model';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  //tu vas recevoir une valeur qui implémente l'interface FormInputModel
  @Input() inputData!:FormInputModel
  
  

}
