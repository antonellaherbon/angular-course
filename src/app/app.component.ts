import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit, OnInit{
    courses: Course[];

    @ViewChild(CourseCardComponent, {read: HighlightedDirective})
    highlighted: HighlightedDirective;
    // startDate = new Date(2000,0,1);
    // title = this.courses[0].description
    // course = this.courses[0];


    // @ViewChild --> decorator that allows you to get a reference to a DOM element or a component within the template of a component. 
    // @ViewChild('cardRef', {read: ElementRef})
    // card: CourseCardComponent;

    // @ViewChild('container')
    // containerDiv: ElementRef;


    //@ViewChildren --> allows to query multiple elements or child components in the template
    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards: QueryList<CourseCardComponent>;
    
    constructor(private http: HttpClient, private coursesService: CoursesService) {
        
    }


    ngOnInit() {
        this.loadCourses();
    }
    
    loadCourses() {
    this.coursesService.getCourses().subscribe(
      (response) => {
        this.courses = response.payload; 
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    )};

    ngAfterViewInit() {
        // console.log(this.cards)
    }

    onCoureSelected(course:Course){
    }

    save(course: Course){
        this.coursesService.saveCourse(course)
        .subscribe(
            () => console.log("course saved")
        );
    }

    onCourseEdited(){
        this.courses.push({
                id: 1,
                description: "Angular Core Deep Dive",
                iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
                longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
                category: 'INTERMEDIATE',
                lessonsCount: 10
            }
        );
    }

    onToggle(isHighlighted: boolean){
        console.log(isHighlighted);
    }
}


