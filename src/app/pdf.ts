import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  // URL backend 
  private apiUrl = 'https://elder-pdf-api-docker.onrender.com';

  constructor(private http: HttpClient) { }

  generatePdf(text: string): Observable<Blob> {
    return this.http.post(this.apiUrl, text, {
      headers: { 'Content-Type': 'text/plain' },
      responseType: 'blob'
    });
  }
}