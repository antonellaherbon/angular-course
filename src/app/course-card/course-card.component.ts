import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: true
})
export class CourseCardComponent {
  @Input({
    required: true
  }) course: Course;

  @Input({
    required: true
  }) index: number

  @Input() cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("clicked")
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == "BEGINNER") {
      return 'begginer';
    }
  }

  cardStyles() {
    return { 'text-decoration': 'underline' };
  }
}
