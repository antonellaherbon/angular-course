import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-image',
  imports: [],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css',
  standalone: true
})
export class CourseImageComponent {
  @Input('src')
  imageUrl: string;

}
