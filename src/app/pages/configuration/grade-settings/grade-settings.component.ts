import { Grade } from '../../../models/grade.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GradeService } from '../../../services/grade.mock.service';

interface GradeSetting {
  grade: Grade;
  maxPercentage: number;
}

@Component({
  selector: 'app-grade-settings',
  templateUrl: './grade-settings.component.html',
  styleUrls: ['./grade-settings.component.scss']
})
export class GradeSettingsComponent implements OnInit {
  current!: GradeSetting;
  isNew: boolean = true;
  tempId: number = 0;

  @ViewChild('_minPercentage') new_minPercentage!: ElementRef;
  @ViewChild('_maxPercentage') new_maxPercentage!: ElementRef;
  @ViewChild('_symbolicGrade') new_symbolicGrade!: ElementRef;
  @ViewChild('_descriptiveGrade') new__descriptiveGrade!: ElementRef;


  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.current = {
      grade: {
        id: '',
        minPercentage: 0,
        symbolicGrade: ''
      },
      maxPercentage: 100
    }
  }

  addGrade(): void {
    this.isNew = true;
  }
  onClickGrade(_grade: any): void {
    this.isNew = false;

    let maxCurrent = Number(_grade.querySelector('.max')
      .textContent
      .replace('%', '')
    );
    
    this.gradeService
      .getGrade(_grade.id)
      .subscribe(grade => this.current = {
        grade: grade,
        maxPercentage: maxCurrent
      }
    );
  }
  save(): void {
    let newId: string;
    if(this.isNew) {
      newId = String(this.tempId);
      this.tempId++;
    } else {
      newId = this.current.grade.id;
    }
    let newMinPercentage = Number(this.new_minPercentage.nativeElement.value);
    let newSymbolicGrade = this.new_symbolicGrade.nativeElement.value.toUpperCase();
    let newDescriptiveGrade = this.new__descriptiveGrade.nativeElement.value;

    let newGrade : Grade = {
      id: newId,
      minPercentage: newMinPercentage,
      symbolicGrade: newSymbolicGrade,
      descriptiveGrade: newDescriptiveGrade
    }

    this.isNew ? this.gradeService.post(newGrade) : this.gradeService.patch(newGrade);
  }
}