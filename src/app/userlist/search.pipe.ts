import { Pipe, PipeTransform } from '@angular/core';
import { IPhoneBook} from "../phonebook/user.interfase";

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(users: IPhoneBook[], search: string = ''): IPhoneBook[] {
    if (!search.trim()) {
      return users
    }
    return users.filter(user => {
      return user.firstName.toLowerCase().includes(search.toLowerCase())
        || user.lastName.toLowerCase().includes(search.toLowerCase())
        || user.number.toLowerCase().includes(search.toLowerCase())
    })
  }
}
