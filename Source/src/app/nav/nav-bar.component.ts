import { Component } from '@angular/core'
import { $ } from 'protractor';
import { EventService } from '../events';
import { ISession } from '../events/shared/event.model';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent {

  searchTerm = '';
  foundSessions: ISession[];
  constructor(public auth: AuthService, private eventService: EventService) {

  }


  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(
      (sessions => {
        this.foundSessions = sessions;
      })
    )

  }


}