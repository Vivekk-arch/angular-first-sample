import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [{id: 11, name: 'Vivek'},
    {id: 12, name: 'Niranjan'},
    {id: 13, name: 'Vithya'},
    {id: 14, name: 'Vaishu'}
    ];
    return {employees};
  }


  constructor() { }
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 11;
  }
}
