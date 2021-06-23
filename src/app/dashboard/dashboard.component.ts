import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  filmes;

  constructor( private service: AppService) { }

  ngOnInit(): void {
    this.service.getDadosFilme().subscribe( res =>{
      console.log(res);
      this.filmes = res;
    })
  }

}
