import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calcula Tu IMC';

  persona = {
    nombre: "",
    edad: 0,
    sexo: "",
    estatura: 0,
    peso: 0,
    imc: 0,
    otroSexo: "" // Nuevo campo para género personalizado
  };

  imagen: string | ArrayBuffer | null = null;

  calcularIMC() {
    this.persona.imc = this.persona.peso / (this.persona.estatura * this.persona.estatura);
    this.persona.imc = Math.round(this.persona.imc);
  }

  imcCategoria(imc: number): string {
    if (imc < 18.5) {
      return 'Delgadez: Tu IMC indica que tienes un peso inferior al rango saludable. Es importante mantener una alimentación equilibrada y consultar a un profesional de la salud.';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Normal: Tu IMC está dentro del rango saludable. ¡Sigue manteniendo un estilo de vida saludable!';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'Sobrepeso: Tu IMC indica que tienes sobrepeso. Es recomendable controlar la dieta y aumentar la actividad física para alcanzar un peso saludable.';
    } else {
      return 'Obesidad: Tu IMC indica que tienes obesidad. Consulta a un profesional de la salud para recibir orientación sobre cómo alcanzar un peso saludable.';
    }
  }

  manejarImagenSeleccionada(event: any) {
    const archivo = event.target.files[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onload = (e) => {
        if (e.target) {
          this.imagen = e.target.result;
        }
      };
      lector.readAsDataURL(archivo);
    }
  }
}
