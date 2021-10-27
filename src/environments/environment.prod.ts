import { GradeService } from './../app/services/grade.service';
import { GradeService as MockGradeService } from './../app/services/grade.mock.service';

export const environment = {
  production: true,
  providers: [
    { provide: MockGradeService, useClass: GradeService }
  ]
};
