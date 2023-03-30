
import { Course } from 'src/app/models/course';

export interface CourseState{
    loadingDataCourse: boolean;
    courses: Course[];
}
