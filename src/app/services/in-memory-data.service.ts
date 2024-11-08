import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MacBook } from '../Shared/models/mac-book';

export class InMemoryDataService implements InMemoryDbService {
  //returns an object with a students property,
  // which is an array of User objects
  createDb():{macbooks: MacBook[]} {
    /*
    Inside the method, a constant array named students is defined,
    containing several User objects. Each User object represents a
    student with properties such as id, firstName, lastName,
     department, and isAdmin. For example, one of the User objects is
     */
    const macbooks: MacBook[] = [
      {id: 1, model: 'MacBook Pro 14-inch 2021', chip: 'M1', serialNumber: 'macbook1', memory: 16, color: 'Silver', hasOwner: true },
      {id: 2, model: 'MacBook Pro 16-inch 2023', chip: 'M2', serialNumber: 'macbook2', memory: 32, color: 'Space Grey', hasOwner: false },
      {id: 3, model: 'MacBook Air 15-inch 2023', chip: 'M2', serialNumber: 'macbook3', memory: 16, color: 'Silver', hasOwner: false },
      {id: 4,model: 'MacBook Air 13-inch 2024', chip: 'M3', serialNumber: 'macbook4', memory: 16, color: 'Starlight', hasOwner: true },
      {id: 5, model: 'MacBook Pro 16-inch 2023', chip: 'M3', serialNumber: 'macbook5', memory: 32, color: 'Silver', hasOwner: true },
      {id: 6, model: 'MacBook Pro 14-inch 2021', chip: 'M3', serialNumber: 'macbook6', memory: 32, color: 'Space Grey', hasOwner: false }
    ];
    return { macbooks };
  }
}
