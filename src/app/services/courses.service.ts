import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
  useFactory: (http) => new CoursesService(http),
  deps: [HttpClient]
})
export class CoursesService {

  constructor(private http: HttpClient) {}

  getCourses(): Observable<{ payload: Course[] }> {
    const params = new HttpParams()
      .set('page', "1")
      .set('pageSize', "10");

    return this.http.get<{ payload: Course[] }>('/api/courses', { params });
  }

  saveCourse(course: Course){
    const headers = new HttpHeaders({
      'Accept-Language': 'es-AR'
    })
      .set("X-Auth", "userId");

    return this.http.put(`/api/courses/${course.id}`, course, {headers});
  }
}
