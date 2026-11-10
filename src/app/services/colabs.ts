import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NuevoColaborador {
  floatSueldo: number;
  strApellido: string;
  strNombre: string;
  strPuesto: string;
  strRfc: string;
}

@Service()
export class Colabs {
  private readonly http = inject(HttpClient);

  url = 'http://192.168.120.119:5000/getColabs';

  // Ajusta esta URL a la ruta POST que declaraste en Flask.
  urlPost = 'http://192.168.120.119:5000/postColabs';

  getColabs(): Observable<any> {
    return this.http.get(this.url);
  }

  postColabs(data: NuevoColaborador): Observable<unknown> {
    return this.http.post(this.urlPost, data);
  }
}