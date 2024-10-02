//mockStudent.data.ts
//import the interface

//Create a mock data array of type User and export so it is
//available to other files

import {MacBook} from "./models/mac-book";

export const macbookList: MacBook[] = [
{id: 1, model: 'MacBook Pro 14-inch 2021', chip: 'M1', serialNumber: 'macbook1', memory: 16, color: 'Silver', hasOwner: true },
{id: 2, model: 'MacBook Pro 16-inch 2023', chip: 'M2', serialNumber: 'macbook2', memory: 32, color: 'Space Grey', hasOwner: false },
{id: 3, model: 'MacBook Air 15-inch 2023', chip: 'M2', serialNumber: 'macbook3', memory: 16, color: 'Silver', hasOwner: false },
 {id: 4,model: 'MacBook Air 13-inch 2024', chip: 'M3', serialNumber: 'macbook4', memory: 16, color: 'Starlight', hasOwner: true },
{id: 5, model: 'MacBook Pro 16-inch 2023', chip: 'M3', serialNumber: 'macbook5', memory: 32, color: 'Silver', hasOwner: true },
{id: 6, model: 'MacBook Pro 14-inch 2021', chip: 'M3', serialNumber: 'macbook6', memory: 32, color: 'Space Grey', hasOwner: false }
  //Add more as needed
];
