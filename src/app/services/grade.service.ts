import { IGradeService } from './grade.service.interface';
import { Injectable } from '@angular/core';
import { Grade } from '../models/grade.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradeService implements IGradeService {

  constructor(private httpClient: HttpClient) { }

  getGrades(): Observable<Grade[]> {
    throw new Error('Method not implemented.');
  }
  getGrade(_id: string): Observable<Grade> {
    throw new Error('Method not implemented.');
  }
  deleteGrade(_id: string): boolean {
    throw new Error('Method not implemented.');
  }
  post(newGrade: Grade): Observable<Grade> {
    throw new Error('Method not implemented.');
  }
  patch(modifiedGrade: Grade): boolean {
    throw new Error('Method not implemented.');
  }
}
