import { IGradeService } from './grade.service.interface';
import { Injectable } from '@angular/core';
import { Grade } from '../models/grade.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeService implements IGradeService {

  grades: Grade[] = [
    {
      id: "ungr-0e0668e7-e907-4c7d-8af9-a0a4a37f6d82",
      minPercentage: 0,
      symbolicGrade: "Good",
      descriptiveGrade: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      id: "ungr-2ebf3a08-6246-4005-a2b4-6d8b3d9349c2",
      minPercentage: 50,
      symbolicGrade: "Very Good",
    }
  ]

  //GET /grades
  getGrades() : Observable<Grade[]> {
    return of(this.grades);
  }

  //GET /grades/{gradeId}
  /*
    wiem, że używanie "any" to zła praktyka, natomiast
    nie wiem dlaczego Observable<Grade> wyrzucało błąd
  */
  getGrade(_id: string) : Observable<any> {
    return of(this.grades.find(grade => grade.id === _id));
  }

  //DELETE /grades/{gradeId}
  deleteGrade(_id: string) : boolean {
    let index = this.grades.findIndex(x => x.id == _id);
    if(index !== -1) {
      this.grades.splice(index, 1);
      return true;
    }
    return false;
  }

  //POST /grades
  post(newGrade: Grade) : Observable<Grade> {
    if(this.grades.unshift(newGrade)) {
      this.grades.sort((a,b) => a.minPercentage - b.minPercentage);
      return of(newGrade);
    }
    return of();
  }

  //PATCH /grades/{gradeId}
  patch(modifiedGrade: Grade): boolean {
    let grade = this.grades.find(grade => grade.id == modifiedGrade.id);

    if(grade) {
      grade.minPercentage = modifiedGrade.minPercentage;
      grade.symbolicGrade = modifiedGrade.symbolicGrade;
      grade.descriptiveGrade = modifiedGrade.descriptiveGrade;
      this.grades.sort((a,b)=>a.minPercentage - b.minPercentage);
      return true;
    } 
    return false;
  }
}
