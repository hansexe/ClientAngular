import { Component , OnInit } from '@angular/core';
import { AnimeService } from "../services/Anime.service"
@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
    providers: [AnimeService],
})
export class SidebarComponent{

}
