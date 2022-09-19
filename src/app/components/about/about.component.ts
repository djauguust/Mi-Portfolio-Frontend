import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  universidad: String = 'Universidad Nacional de Tucumán';
  provincia: String = 'Tucumán';
  pais: String = 'Argentina';
  descripcion: String = 'Alumno Avanzado en la carrera de Ingeniería en Computación, Facultad de Ciencias Exactas, Universidad Nacional de Tucumán';
  constructor() { }

  ngOnInit(): void {
  }

}
