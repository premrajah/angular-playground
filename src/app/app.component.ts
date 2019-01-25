import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Zinox';

  public sharedName = "Clark Kent";
  public messageFromChild = "";


}
