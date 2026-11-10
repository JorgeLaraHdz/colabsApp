import { Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import {
  form,
  FormField,
  required,
  pattern,
  min,
  submit
} from '@angular/forms/signals';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonButton,
  IonInput,
  IonSelect,
  IonSelectOption, IonLabel } from '@ionic/angular';

import { personCircle, chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { firstValueFrom } from 'rxjs';

import { Colabs, type NuevoColaborador } from '../../services/colabs';

interface ColaboradorForm {
  strNombre: string;
  strApellido: string;
  strPuesto: string;
  strRfc: string;
  floatSueldo: number | null;
}

function crearModeloInicial(): ColaboradorForm {
  return {
    strNombre: '',
    strApellido: '',
    strPuesto: '',
    strRfc: '',
    floatSueldo: null
  };
}

@Component({
  selector: 'app-add-colab',
  standalone: true,
  templateUrl: './add-colab.page.html',
  styleUrls: ['./add-colab.page.scss'],
  imports: [IonLabel, IonLabel, 
    FormField,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonButton,
    IonInput,
    IonSelect,
    IonSelectOption
  ]
})
export class AddColabPage {
  private readonly colabs = inject(Colabs);

  readonly mensajeError = signal('');
  readonly mensajeExito = signal('');

  // Cambia estas opciones por tus puestos.
  readonly puestos = [
    'Administrativo',
    'Desarrollador',
    'Soporte técnico'
  ];

  // Datos del formulario.
  readonly modelo = signal<ColaboradorForm>(crearModeloInicial());

  // Formulario y validaciones.
  readonly formulario = form(this.modelo, (campo) => {
    required(campo.strNombre);
    pattern(campo.strNombre, /\S/);

    required(campo.strApellido);
    pattern(campo.strApellido, /\S/);

    required(campo.strPuesto);

    required(campo.strRfc);

    // Formato general del RFC: 12 o 13 caracteres.
    pattern(
      campo.strRfc,
      /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/i
    );

    required(campo.floatSueldo);
    min(campo.floatSueldo, 0);
  });

  constructor() {
    addIcons({'personCircle':personCircle,'chevronBackOutline':chevronBackOutline});
  }

  async guardar(event: Event): Promise<void> {
    event.preventDefault();

    if (this.formulario().submitting()) {
      return;
    }

    this.mensajeError.set('');
    this.mensajeExito.set('');

    try {
      const guardado = await submit(this.formulario, async (campos) => {
        const datos = campos().value();
        const sueldo = datos.floatSueldo;

        if (sueldo === null || !Number.isFinite(sueldo)) {
          return {
            kind: 'sueldoInvalido',
            message: 'Ingresa un sueldo válido.',
            fieldTree: campos.floatSueldo
          };
        }

        const payload: NuevoColaborador = {
          strNombre: datos.strNombre.trim(),
          strApellido: datos.strApellido.trim(),
          strPuesto: datos.strPuesto,
          strRfc: datos.strRfc.trim().toUpperCase(),
          floatSueldo: sueldo
        };

        // Espera a que termine la petición del servicio.
        await firstValueFrom(
          this.colabs.postColabs(payload)
        );

        return undefined;
      });

      if (guardado) {
        this.formulario().reset(crearModeloInicial());
        this.mensajeExito.set('Colaborador guardado correctamente.');
      }
    } catch (error: unknown) {
      const mensaje = error instanceof HttpErrorResponse
        ? error.error?.mensaje
        : undefined;

      this.mensajeError.set(
        typeof mensaje === 'string'
          ? mensaje
          : 'No se pudo guardar el colaborador.'
      );
    }
  }
}