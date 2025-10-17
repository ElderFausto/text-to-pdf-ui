import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  // URL backend local
  // private apiUrl = 'http://localhost:8080/api/pdf/generate';

  // URL deployada no AWS Elastic Beanstalk
  private apiUrl = `${environment.apiUrl}/pdf/generate`;

  constructor(private http: HttpClient) {}

  generatePdf(text: string): Observable<Blob> {
    return this.http.post(this.apiUrl, text, {
      headers: { 'Content-Type': 'text/plain' },
      responseType: 'blob',
    });
  }
}
