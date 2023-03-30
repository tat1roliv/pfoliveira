
import { Student } from 'src/app/models/student';

export interface StudentState{
    loadingData: boolean;
    students: Student[];
}
