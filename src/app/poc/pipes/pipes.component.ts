import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  servers = [
    {
      instanceType: 'medium',
      name: 'production server',
      status: 'stable',
      started: new Date(2017,1, 15)
    },
    {
      instanceType: 'large',
      name: 'database server',
      status: 'stable',
      started: new Date(15,1, 2017)
    },
    {
      instanceType: 'small',
      name: 'developpement server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    }
  ];

  search: 's';

  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return{
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',

    };
  }

  constructor() { }

  ngOnInit() {
  }

}
