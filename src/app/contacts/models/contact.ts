import { Injectable } from '@angular/core';

export interface IContact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class Contact implements IContact {
  id: number;
  name: string;
  email: string;
  phone: string;

  // util methods can come here
}
