import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
import { Observable } from 'rxjs';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  student$: Observable<Student> = this.studentService.getStudent();
  
  constructor(private studentService: StudentService) { 
    
  }
}
