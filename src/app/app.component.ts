import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import chroma from 'chroma-js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  primaryColor: string = '#C7A873'; // Color inicial por defecto (900)
  secondaryColor: string = '#054956'; // Color inicial por defecto (900)
  accentColor: string = '#A95C7C'; // Color inicial por defecto (900)
  primaryShades: string[] = [];
  secondaryShades: string[] = [];
  accentShades: string[] = [];

  constructor() {
    this.generatePalete();
  }

  // Función para generar tonos más claros de un color
  generatePalete() {
    this.primaryShades = this.generateShades(this.primaryColor);
    this.secondaryShades = this.generateShades(this.secondaryColor);
    this.accentShades = this.generateShades(this.accentColor);
  }
  // Función para generar tonos más claros de un color
  generateShades(color: string) {
    const scale = chroma
      .scale([color, 'white']) // Genera una escala entre el color 900 y blanco
      .domain([0, 1]) // Definir el dominio de la escala (0 a 1)
      .mode('lab');
    return [
      chroma(color).hex(), // Shade 900 (color elegido)
      scale(0.2).hex(), // Shade 800
      scale(0.3).hex(), // Shade 700
      scale(0.4).hex(), // Shade 600
      scale(0.5).hex(), // Shade 500
      scale(0.6).hex(), // Shade 400
      scale(0.7).hex(), // Shade 300
      scale(0.8).hex(), // Shade 200
      scale(0.9).hex(), // Shade 100
    ];
  }

  // Método que se ejecuta cuando el usuario cambia el color
  onColorChange() {
    this.generatePalete();
  }
}
