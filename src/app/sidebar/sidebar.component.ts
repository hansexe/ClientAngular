import { Component , OnInit } from '@angular/core';
import { AnimeService } from "../services/Anime.service"
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { error } from 'util';
@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
    providers: [AnimeService],
})
export class SidebarComponent{
  

}
