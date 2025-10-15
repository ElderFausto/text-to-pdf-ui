import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfService } from './pdf';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  textContent: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private pdfService: PdfService) {}

  generatePdf(): void {
    if (!this.textContent.trim()) {
      this.errorMessage = 'O campo de texto não pode estar vazio.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.pdfService.generatePdf(this.textContent).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'documento.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao gerar o PDF', err);
        this.errorMessage = 'Ocorreu um erro ao gerar o PDF.';
        this.isLoading = false;
      }
    });
  }
}