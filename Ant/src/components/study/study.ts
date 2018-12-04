import { Component } from '@angular/core';

/**
 * Generated class for the StudyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'study',
  templateUrl: 'study.html'
})
export class StudyComponent {

  text: string;

  constructor() {
    console.log('Hello StudyComponent Component');
    this.text = 'Hello World';
  }


}
