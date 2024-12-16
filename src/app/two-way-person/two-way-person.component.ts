import { Component } from '@angular/core';
import { Persona} from '../Persona'
@Component({
  selector: 'app-two-way-person',
  standalone: false,

  templateUrl: './two-way-person.component.html',
  styleUrl: './two-way-person.component.css'
})
export class TwoWayPersonComponent {
  persona : Persona;

  constructor(){
    this.persona = new Persona('ivan',34);
  }
  ngOnInit(): void{

  }

}
