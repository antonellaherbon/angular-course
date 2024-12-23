import { Component, Input, EventEmitter, Output, ViewChild, AfterViewInit, ContentChild, ElementRef, ContentChildren, AfterContentInit, QueryList, TemplateRef, ViewEncapsulation, ChangeDetectionStrategy, Attribute, OnChanges, OnDestroy, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: true,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit, OnChanges, OnDestroy, AfterContentChecked, AfterViewChecked {
  @Input({
    required: true
  }) course: Course;
  
  @Input({
    required: true
  }) index: number
  
  @Input() cardIndex: number;
  
  @Output('courseChanged')
  courseSelected = new EventEmitter<Course>();
  
  @Input()
  noImageTpl: TemplateRef<any>;

  /**
   *
   */
  // constructor(@Attribute ('type') private type: string) {  }
  
  //@ContentChild --> decorator used to query for a single content element or component that is projected into the component's content area (via ng-content). 
  // @ContentChild(CourseImageComponent, {read: ElementRef})
  // image: ElementRef;
  

  //@ContentChildren --> decorator used to query for multiple elements or child components that are projected into a component’s content area via the ng-content directive
  @ContentChildren(CourseImageComponent)
  images: QueryList<CourseImageComponent>;
  
  onSavedClicked(description: string) {
    this.courseSelected.emit({...this.course, description});
  }
  
  cardClasses() {
    if (this.course.category == "BEGINNER") {
      return 'begginer';
    }
  }
  
  cardStyles() {
    return { 'text-decoration': 'underline' };
  }
  
  ngAfterViewInit() {
    // console.log(this.image);
    console.log("after view init")
  }
  
  ngAfterContentInit() {
    // console.log(this.images)
    console.log("after content init")
  }

  onTitleChange(newTitle: string){
    this.course.description = newTitle;
  }

  ngOnDestroy() {
    console.log("ngDestroy")    
  }

  ngOnChanges(changes) {
      console.log("onChanges", changes);
  }

  ngAfterContentChecked() {
    console.log("after content checked");
  }

  ngAfterViewChecked(): void {
    console.log("view checked")
  }
}
