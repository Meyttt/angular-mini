import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(users, value) {
    return users.filter(user => {
      if (value == null) {
        console.log(true)
        return true;
      }
      return user.name.includes(value);
    });
  }
}
