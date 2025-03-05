import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizDataService } from '../../services/quiz-data.service';

@Component({
  selector: 'app-quiz-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-screen.component.html',
  styleUrl: './quiz-screen.component.css'
})
export class QuizScreenComponent {
  quizData: any[] = [];

  constructor(private quizDataService: QuizDataService) {}

  ngOnInit(): void {
    this.quizData = this.quizDataService.getQuizData();
  }
}
