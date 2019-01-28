import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `

      <h3> You have selected department with ID : {{departmentId}} </h3>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
  `,
  styles: [`
    a { 
      width: 100px;
      height: 60px;
      background-color: silver;
    }
  `]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    // read parameter values with observable
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

}
