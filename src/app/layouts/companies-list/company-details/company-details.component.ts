import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit, OnDestroy {
  
  private routeSubscription: Subscription;
  company : any = {};

  constructor(private dataService : DataService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((response)=>{
      this.company = this.dataService.getCompany(response['id']);
      console.log(this.company)
    })
  }

  ngOnDestroy(): void{
    this.routeSubscription.unsubscribe();
  }
}
