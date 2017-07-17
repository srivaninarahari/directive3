import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
     PersonNames:string[] = ["sirisha","sreevani" , "karthik", "kavitha", "manoj"]
  constructor() { }
  ngOnInit() {
  }

}
