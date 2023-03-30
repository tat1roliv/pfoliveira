
import { Lesson } from 'src/app/models/lesson';

export interface LessonState{
    loadingDataLesson: boolean;
    lessons: Lesson[];
}
