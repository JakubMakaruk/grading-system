import { Observable } from "rxjs";
import { Grade } from "../models/grade.model";

export interface IGradeService {
    getGrades(): Observable<Grade[]>;
    getGrade(_id: string) : Observable<Grade>;
    deleteGrade(_id: string) : boolean;
    post(newGrade: Grade) : Observable<Grade>; 
    patch(modifiedGrade: Grade): boolean;
}