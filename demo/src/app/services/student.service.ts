import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { BehaviorSubject, Observable } from 'rxjs';
import { of , from , filter} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {



public students$!: BehaviorSubject<Student[]>;

constructor() {

}





}
