import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared";
import { IEvent } from "./shared/event.model";

@Component({
  templateUrl: "./create-event.component.html",
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :-ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent {
  newEvent;
  event: IEvent;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) { }

  saveEvent(fromValues) {
    this.eventService.saveEvent(fromValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(["/events"]);
    }
    );
  }

  cancel() {
    this.router.navigate(["/events"]);
  }
}
