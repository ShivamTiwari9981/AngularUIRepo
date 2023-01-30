import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardModel } from '../models/dashboard-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private myHttp:HttpClient) { }
  baseURL="https://localhost:44301/api/Dashboard/getAllModule";
  moduleList:DashboardModel[]=[];
  GetAllModule():Observable<DashboardModel[]>{
    return this.myHttp.get<DashboardModel[]>(this.baseURL)
  }

  GetUrl(){
    return "http://localhost:44301/api/"
  }
}
