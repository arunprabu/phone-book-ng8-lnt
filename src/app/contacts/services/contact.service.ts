import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

// Decorator -- makes this class dep injectable
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private restApiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  createContact( contactData ): Promise<Contact> { // 1. get the data from comp
    console.log(contactData);
    // 2. send the data to REST API
      // 2.1 identify the rest api url -- 'https://jsonplaceholder.typicode.com/users'
      // 2.2 send the data to the same url using REST API Client -- HttpClient

    const createContactPromise = new Promise( ( resolve, reject) => {
      // ajax calls
      this.http.post(this.restApiURL, contactData)
        .toPromise() // promise call
        .then( (res: Contact) => {  // 3. get the resp from REST API
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
    return createContactPromise as Promise<Contact>;
  }

  getContacts(): Observable<Contact[]> {
    console.log('Before Loading contacts -- in service');
    // 1. call the rest api with get method
    return this.http.get(this.restApiURL)
      .pipe( map( (res: Contact[]) => { // 2. get the resp from service
        console.log(res);
        // enrich
        // xml => json
        // sort, filter
        return res; // 3. send the resp back to the comp
      }));
  }

  getContactById( id ): Observable<Contact> {
    console.log('contac ID:' + id );
    // 1. call the rest api with get method
    return this.http.get(this.restApiURL + '/' + id )
      .pipe( map( (res: Contact) => { // 2. get the resp from service
        console.log(res);
        return res; // 3. send the resp back to the comp
      }));
  }

  updateContact( contactData ): Promise<Contact> {
    console.log(contactData);
    const updateContactPromise = new Promise( ( resolve, reject ) =>{
      this.http.put(this.restApiURL + '/' + contactData.id, contactData)
        .toPromise()
        .then( ( res: Contact ) => {
          console.log(res);
          resolve(res);
        })
        .catch ( (err: any ) => {
          console.log(err);
          reject(err);
        })
        .finally( () => {
          console.log('It\'s Over');
        });
    });

    return updateContactPromise as Promise<Contact>;
  }

  // todo: Delete Contact
  
}

