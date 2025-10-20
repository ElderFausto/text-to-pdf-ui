import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class PdfService {
  // URL backend local
  // private apiUrl = 'http://localhost:8080/api/pdf/generate';

  // URL deployada no AWS Elastic Beanstalk
  private apiUrl = `${environment.apiUrl}/api/pdf/generate`;

  constructor(private http: HttpClient) {}

  generatePdf(htmlContent: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/html', // Mudamos para text/html no passo anterior
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    return this.http.post(this.apiUrl, htmlContent, {
      headers: headers, 
      responseType: 'blob'
    });
  }
}
