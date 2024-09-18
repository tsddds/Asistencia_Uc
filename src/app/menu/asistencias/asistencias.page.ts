import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {
  asistencias = [
    {asignatura: "PGY4121", fecha: "02/07/2024", presente: true},
    {asignatura: "PGY2121", fecha: "02/07/2024", presente: true},
    {asignatura: "mdy3101", fecha: "02/07/2024", presente: false},
    {asignatura: "ghj9234", fecha: "03/07/2024", presente: false},
    {asignatura: "dwd4636", fecha: "03/07/2024", presente: true},
    {asignatura: "fse4234", fecha: "03/07/2024", presente: false},
    {asignatura: "ffd3123", fecha: "04/07/2024", presente: true},
  ]
  constructor() { }

  ngOnInit() {
  }


}
