import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs';
import { patient } from '../models/Pateint';
import { map } from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CtserviceService {


  // baseUrl:string="http://localhost:3000/posts";

 private currentUserSubject: BehaviorSubject<patient>;
 public currentUser: Observable<patient>;
  constructor (private http: HttpClient) { 
     this.currentUserSubject = new BehaviorSubject<patient>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): patient {
    return this.currentUserSubject.value;
    }

  getAllPost(): Observable<any>  {
   return this.http.get(`${environment.baseUrl}`)
  }

  login(email:string, password:string):Observable<any> {
    debugger;
    console.log("Inside the Service");
  //  let apiUrl  = `${environment.baseUrl}?`+"email="+email+"&"+"password="+password;
    // console.log("Api Url is here : ",apiUrl);
    console.log(email,password);
    return this.http.post<any>(`${environment.baseUrl}?`+"email="+email+"&"+"password="+password,{email,password})
        .pipe(map(user => {
          console.log(email,password);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            console.log("Inside the patient");
            return user;
        }));
    }
    register(posts : patient) : Observable<any>
    {
      return this.http.post<any>(`${environment.baseUrl}`,posts);
    }

    update(patient : patient) : Observable<any>
    {
      return this.http.post<any>(`${environment.baseUrl}?`+'id='+patient.Empid,patient);
    }

    deletePatient(id : number) : Observable<any>
  {
    return this.http.delete<any>(`${environment.baseUrl}?`+'id='+id);
  }

}