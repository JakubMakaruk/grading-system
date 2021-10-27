import { GradeSettingsComponent } from '../grade-settings/grade-settings.component';
import { HttpClient } from '@angular/common/http';
import { GradeService } from '../../../services/grade.mock.service';
import { Component, Input, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Grade } from '../../../models/grade.model';


@Component({
  selector: 'app-grades-manager',
  templateUrl: './grades-manager.component.html',
  styleUrls: ['./grades-manager.component.scss']
})
export class GradesManagerComponent implements OnInit {
  faTrashAlt = faTrashAlt;

  grades: Grade[] = [];
  lastSelected: any;

  @Input()
  gradeSettings!: GradeSettingsComponent;

  alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

  // WYKORZYSTAĆ PRZY DRUGIM SPOSOBIE WYŚWIETLANIA SYMBOLI OCEN
  // symbolicGrades = {
  //   'Excellent': 'A',
  //   'Very Good': 'B',
  //   'Good': 'C',
  //   'Pass': 'D',
  //   'Fail': 'F'
  // };

  
  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.gradeService
      .getGrades()
      .subscribe((grades) => this.grades = grades);
  }

  addGrade(): void {
    this.offSelectedGrade();
    this.gradeSettings.addGrade();
  }
  deleteGrade(_id: string): void {
    this.gradeService.deleteGrade(_id);
  }

  onClickGrade(grade: any): void {
    this.gradeSettings.onClickGrade(grade);
  }
  selectGrade(event: any): void {
    if(!this.lastSelected) {
      this.lastSelected = event.srcElement;
      event.srcElement.classList.add('selected');
    } else {
      this.lastSelected.classList.remove('selected');
      event.srcElement.classList.add('selected');
      this.lastSelected = event.srcElement;
    }
  }
  offSelectedGrade(): void {
    if(this.lastSelected) {
      this.lastSelected.classList.remove('selected');
      this.lastSelected = null;
    }
  }
}
