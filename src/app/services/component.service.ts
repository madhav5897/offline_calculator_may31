import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
    public isChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isquoteschanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public reset: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public quoteselectedchanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

        }
