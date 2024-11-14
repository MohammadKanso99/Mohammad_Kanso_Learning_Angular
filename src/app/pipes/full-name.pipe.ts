import { Pipe, PipeTransform } from '@angular/core';
import {MacBook} from "../Shared/models/mac-book";

@Pipe({
  name: 'fullName',
  standalone: true
})
export class FullNamePipe implements PipeTransform {

  transform(macbook: MacBook | undefined): string {
    return `${macbook?.model} ${macbook?.chip}`;
  }

}
