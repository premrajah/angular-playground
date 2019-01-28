import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `

      <h3> You have selected department with ID : {{departmentId}} </h3>

      <p>
        <button (click)="showOverview()">Overview</button>
        <button (click)="showContact()">Contact</button>
      </p>
      <!-- -->
      <router-outlet></router-outlet>

      <p>
        <button (click)="goPrevious()">Previous</button>
        <button (click)="goNext()">Next</button>
      </p>

      
      <p>
        <button (click)="goToDepartments()">Back</button>
      </p>
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

  goToDepartments() {
    // null check
    let selectedId = this.departmentId ? this.departmentId : null;
    // optional parameters
    // this.router.navigate(['/departments', { id: selectedId, test: 'test' }]);

    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

}
