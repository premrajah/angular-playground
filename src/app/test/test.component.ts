import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `<div> 

    <p class='redColor'>Hello {{name}}</p>
    toUpperCase() - {{name.toUpperCase()}}/Length - {{ name.length}}
    <p>Method: {{greetUser()}}</p>
    <p>Page Location : {{siteUrl}}</p>
<hr>
    <input [id]="myId" type="text" value="Prem" />
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Prem" />
<hr>
    <p [class]="successClass">Class Binding</p>
    //Conditionally apply a single class
    <p [class.text-danger]="hasError">Class Binding</p>
    <p [ngClass]="messageClasses">The goat and the cat.</p>
<hr>
    <p [style.color]="'orange'">Style Binding</p>
    <p [style.color]="hasError ? 'red' : 'green' ">Style Binding</p>
    <p [style.color]="highlightColor">Style Binding</p>
    <p [ngStyle]="titleStyles">Style Binding</p>
<hr>
<p>Event Binding</p>
    <button (click)="onClick($event)">Greet</button> 
    <br>
    <button (click)="greeting='Ah ha' ">Greet</button>
    <div>{{greeting}}</div>
<hr>
    <p>Template Reference Variables</p>
    <input #myMessageInput type="text" />
    <button (click)="logMessage(myMessageInput.value)">Log</button>{{myMessageInput.value}}
<hr>
    <p>Two Way Binding: ngModel</p>
    <input [(ngModel)]="lastname" type=text />
<br>
    {{lastname}} // Needs FormsModule
<hr>
    <p>Structural Directives *ngIf *ngSwitch *ngFor</p>
    // *ngIf
    <p *ngIf="displayName; else elseBlock">The boy who cried wolf</p>
    <div *ngIf="showName; then thenBlock; else elseBlock"></div>
    
    <ng-template #elseBlock>
      <p> --- Name is Hidden ---</p>
    </ng-template>

    <ng-template #thenBlock>
      <p> +++ Name is Visible +++</p>
    </ng-template>
    
    // *ngSwitch
    <div [ngSwitch]="colorDisplay">
      <div *ngSwitchCase=" 'red' ">You picked {{colorDisplay}} color</div>
      <div *ngSwitchCase=" 'blue' ">You picked {{colorDisplay}} color</div>
      <div *ngSwitchCase=" 'green' ">You picked {{colorDisplay}} color</div>
      <div *ngSwitchDefault>Pick Again</div>
    </div>

    //*ngFor list
    <div 
    *ngFor="let color of colorsArray; 
              index as i; 
              first as f;
              last as l;
              odd as o;
              even as e ">
      <div [style.color]="color">
        Index: {{i}}, 
        Value: {{color}}, 
        FirstIndex: {{f}}, 
        LastIndex: {{l}},
        Odd: {{o}},
        Even: {{e}}
      </div>
    </div>
<hr>
    //Component Interaction

    

</div>`,
  // styleUrls: ['./test.component.sass']
  styles: [`
    .redColor {color: red; }
    .text-success { color: green; }
    .text-danger { color: red; }
    .text-special { font-style: italic; }
  `]
})
export class TestComponent implements OnInit {

  public name = "Prem";
  public lastname = "";
  public displayName = false;
  public showName = true;

  public colorDisplay = "yellow";
  
  public siteUrl: any = window.location.href;
  public myId = "testId";
  public isDisabled = false;
  
  public  successClass = "text-success";
  public isSpecial = true;
  public hasError = false;

  public highlightColor = "pink";

  public colorsArray = [ "red", "green", "orange", "maroon", "blue"]


  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyles = {
    fontStyle: "italic",
    fontWeight: "bolder",
    color: "blue",
    textDecoration: "line-through"
  }

  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return this.name;
  }

  onClick(event) {
    console.log(event);
    this.greeting = "Welcome " + this.name + " Event Type: " + event.type;
  }

  logMessage(value) {
    console.log(value);
  }

}
