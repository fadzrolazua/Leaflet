import { Routes } from '@angular/router';
import { QuizScreenComponent } from './components/quiz-screen/quiz-screen.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

export const routes: Routes = [
  { path: '', redirectTo: '/file-upload', pathMatch: 'full' },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'quiz-screen', component: QuizScreenComponent },
];
