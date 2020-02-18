import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  restApiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  createContact( contactData ) { // 1. get the data from comp
    console.log(contactData);
    // 2. send the data to REST API
      // 2.1 identify the rest api url -- 'https://jsonplaceholder.typicode.com/users'
      // 2.2 send the data to the same url using REST API Client -- HttpClient

    const createContactPromise = new Promise( ( resolve, reject) => {
      // ajax calls
      this.http.post(this.restApiURL, contactData)
        .toPromise() // promise call
        .then( (res: any) => {  // 3. get the resp from REST API
          console.log(res);
          // 4. send the resp back to the comp
          resolve(res);
        })
        .catch( (err: any) => { // 3. get the error from REST API
          console.log(err);
          reject(err);
        })
        .finally( () => {
          console.log('It\'s over');
        });
    });
    return createContactPromise;
  }

}
