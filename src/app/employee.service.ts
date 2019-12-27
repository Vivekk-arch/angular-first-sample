import { Employee } from './employee';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
private employeesUrl = 'api/employees';
  private log(message: string) {
    this.messageService.add(message);
  }
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }
}
