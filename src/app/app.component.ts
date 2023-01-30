import { Component } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo App';
  constructor(public deshboardService:DashboardService){}

  ngOnInit(){
    return this.deshboardService.GetAllModule().subscribe(res=>{
      this.deshboardService.moduleList=res;
      console.log(this.deshboardService.moduleList)
    });
  }
}
