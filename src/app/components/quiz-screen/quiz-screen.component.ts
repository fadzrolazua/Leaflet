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
  currentQuestionIndex: number = 0;

  constructor(private quizDataService: QuizDataService) {}

  ngOnInit(): void {
    this.quizData = this.quizDataService.getQuizData();
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.quizData.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

}
