import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
  public API = "//thawing-chamber-47973.herokuapp.com";
  public USER_API = this.API + "/owners";

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.USER_API);
  }

  get(id: string) {
    return this.http.get(this.USER_API + "/" + id);
  }

  getBy_linksHelfHref(link: string) {
    return this.http.get(link);
  }

  save(user: any): Observable<any> {
    let result: Observable<Object>;
    if (user["href"]) {
      result = this.http.put(user.href, user);
    } else {
      result = this.http.post(this.USER_API, user);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
