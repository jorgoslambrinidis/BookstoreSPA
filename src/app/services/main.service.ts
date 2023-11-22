import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  /**
   * Creates a url for the endpoint
   * @param baseUrl
   * @param action
   * @returns URL string
   */
  createUrl(baseUrl: string, action: string): string {
    return `${baseUrl}${action}`;
  }

}
