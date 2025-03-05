import { Component, EventEmitter, Output } from '@angular/core';
import * as XLSX from 'xlsx';
import { QuizDataService } from '../../services/quiz-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  @Output() onFileUploaded = new EventEmitter<any>();

  constructor(private quizDataService: QuizDataService, private router: Router) {}

  handleFileInput(event: any): void {
    const file = event.target.files[0];
  
    if (!file) {
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = (e: any) => {
      const data = e.target.result;
  
      const workbook = XLSX.read(data, { type: 'binary' });
  
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
  
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
  
      this.quizDataService.setQuizData(jsonData);
  
      this.router.navigate(['/quiz-screen']);
    };
  
    reader.readAsBinaryString(file);
  }
}
