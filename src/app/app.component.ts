import { Component, ViewChild, ElementRef, ViewChildren, QueryList, OnInit, InjectionToken, Inject, ChangeDetectorRef, DoCheck, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from 'src/db-data';

// function coursesServiceProvider(http: HttpClient): CoursesService {
//     return new CoursesService(http);
// }

// export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
})
export class AppComponent implements OnInit  {
    courses: Course[];

    totalCourses = 0;

    @ViewChild(CourseCardComponent, { read: HighlightedDirective })
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
    @ViewChildren(CourseCardComponent, { read: ElementRef })
    cards: QueryList<CourseCardComponent>;

    constructor(private coursesService: CoursesService
    ) { }

    ngOnInit() {
        this.loadCourses();
    }
    
    loadCourses() {
        this.coursesService.getCourses().subscribe(
            (response) => {
                this.courses = response.payload;
                this.totalCourses = this.courses.length;
                console.log("totalcourses", this.totalCourses)
            },
            (error) => {
                console.error('Error fetching courses:', error);
            }
        )
    };
    
    save(course: Course) {
        this.coursesService.saveCourse(course)
        .subscribe(
            () => console.log("course saved")
            );
    }

    onEditCourse(){
        const course = this.courses[0];
        const newCourse : any = {...course};

        newCourse.description = 'ngOnChanges'
        this.courses[0] = newCourse;
    }

    onToggle(isHighlighted: boolean) {
        console.log(isHighlighted);
    }

    onDestroy(){
        this.courses = [undefined]
    }
}


