import { UIService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import{Subscription} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription;

  
  constructor(private uiService: UIService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  toggleAddTask(){

    //console.log('toggle')
    this.uiService.toggleAddTask();
  }

}
