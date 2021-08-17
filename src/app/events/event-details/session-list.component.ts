import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../shared/event.model";

@Component({
    selector: "session-list",
    templateUrl: "./session-list.component.html",
})
export class SessionListComponent implements OnChanges {
    ngOnChanges(): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === "name" ? this.visibleSession.sort(sortByNameAsc) : this.visibleSession.sort(sortByVotesDesc);
        }
    }
    filterSessions(filterBy: string) {
        if (filterBy === 'all') {
            this.visibleSession = this.sessions.slice(0);
        }
        else {
            this.visibleSession = this.sessions.filter((session: ISession) => {
                return session.level.toLocaleLowerCase() === filterBy.toLocaleLowerCase();
            });
        }
    }

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSession: ISession[] = [];

}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
        return 1;
    }
    else if (s1.name === s2.name) {
        return 0;
    }
    else {
        return -1;
    }
}
function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}

