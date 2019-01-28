import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'department-list',
  template: `<div>
    <p>Department List</p>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{ department.name }}
      </li>
    </ul>
  </div>`,
  styles: [`.items {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding-left: 0;
    width: 10em;
  }
  .items li {
    cursor: pointer ;
    position: relative ;
    left: 0 ;
    background-color: #EEE ;
    margin: .5em ;
    padding: .3em ;
    height: 1.6em ;
    border-radius: 4px;
  }
    

  .selected {
    color: red;
  }
  
  
  `,
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectedId: any;

  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" }
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department: any) {
    // link parameters array PATH | ROUTE PARAMETER
    // this.router.navigate(['/departments', department.id]);

    this.router.navigate([department.id], { relativeTo: this.route });
  }


  // method to bind  class
  isSelected(department: any){
    return department.id === this.selectedId;
  }

}
