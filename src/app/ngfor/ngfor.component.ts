import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  standalone: false,

  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {

    lista:string[]=["hola","que","tal","estas"];

    constructor() { }

    ngOnInit() {
    }

}
