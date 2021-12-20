import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{    // implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, OnDestroy
  title = 'world-food-program';

  // constructor() {
  //   console.log("constructor");
  // }
  // ngOnInit() {
  //   console.log("OnInit")
  // }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("OnChanges");
  // }
  // ngDoCheck() {
  //   console.log("DoCheck")
  // }
  // ngAfterContentInit() {
  //   console.log("AfterContentInit")
  // }
  // ngAfterContentChecked() {
  //   console.log("AfterContentCjecked")
  // }
  // ngAfterViewInit() {
  //   console.log("AfterViewInit")
  // }
  // ngOnDestroy() {
  //   console.log("OnDestroy")
  // }
}
