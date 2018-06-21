import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {RouterLinkWithHref} from '@angular/router';

interface UserService {
  results: Array<any>;
}

@Injectable()
export class UsersService {
  size = 8;
  constructor(private httpClient: HttpClient) {
  }

  setSize (size) {
    this.size = size;
  }
  getUsers() {
    return this.httpClient.get<UserService>('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')
      .map((res) => res.results)
      .map(users => {
          return users.map(u => {
              return {
                name: u.name.first + ' ' + u.name.last,
                image: u.picture.large,
                geo: u.location.city + ', ' + u.location.state + ', ' + u.location.street
              };
            }
          );
        }
      );
  }

  }

