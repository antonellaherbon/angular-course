import { Component, OnInit } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    courses = [...COURSES];

    startDate = new Date(2000,0,1);
    title = this.courses[0].description
    course = this.courses[0];

    onCoureSelected(course:Course){
        console.log("card clicked" + course);
    }
}


