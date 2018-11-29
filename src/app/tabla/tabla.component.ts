import { Component , OnInit } from '@angular/core';
import { AnimeService } from "../services/Anime.service"
import { TablaInterface } from "../interface";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { error } from 'util';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
    selector: 'tabla',
    templateUrl: 'tabla.component.html',
    styleUrls: ['tabla.component.css'],
    providers: [AnimeService],
})


@Pipe({
  name: 'appProperties'
})


export class TablaComponent implements OnInit {

  Anid: any;
  Annombre: any;
  Anautor: any;
  Ancategoria: any;
  Antemporada: any;
  Animg: any;

  ejemplo = 'Listar';
  closeResult: string;
  mr: NgbModalRef;
  ListAnimeArray: TablaInterface[];


  objectKeys = Object.keys;

  constructor(private apiService: AnimeService , private modalService: NgbModal , private toastr : ToastrService){}

 public ListAnimeComponent(): void {
      this.apiService.ListAnimeService().subscribe(
        data => { this.ListAnimeArray = data;
   this.ListAnimeArray = Array.of(this.ListAnimeArray); 
         },
        err => console.error(err), 
        () => console.log('lista :D' ) 
        );
  
  }

  public ngOnInit(): void{
    this.ListAnimeComponent();
    this.resetForm();
  }


  public resetForm(form? : NgForm){
    if(form !=null)
    form.reset();
    this.apiService.selectedEmployee = {
      id : null,
      nombre : '',
      autor: '',
      temporada: null,
      categoria: '',
      img : '',
    }

}


  //  MODAL EMPIEZA AQUI
  


   public registrar(formularioregistro) {
    this.mr = this.modalService.open(formularioregistro);
   }

  //  public editar(formularioeditar) {
  //   this.mr = this.modalService.open(formularioeditar);
  //  }

   
  public onSubmit(form : NgForm){
    this.apiService.postEmployee(form.value)
    .subscribe( data => {
    this.resetForm(form);
    this.ListAnimeComponent();
    this.closeModal();
    this.toastr.success("Registro de un Anime" , "Completado :) ")
   })
   
   }

   
   public eliminarmodal(formularioeliminar , id, username) {

    this.Anid = id;
    // this.Annombre = nombre;
    // this.Anautor = autor;
    // this.Antemporada = temporada;
    // this.Ancategoria = categoria;
    // this.Animg = img;

    console.log(username);

     this.modalService.open(formularioeliminar).result.then((result) => {
      this.apiService.deleteEmployee(id)
      .subscribe(x => {
        this.ListAnimeComponent();
        this.toastr.error('se elimino el anime ' + username);
        console.log('se elimino el anime ' + username);
      })
      
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
   }


   public editarmodal(formularioeditar , id, nombre, autor, temporada, categoria, img) {

    this.Anid = id;
    this.Annombre = nombre;
    this.Anautor = autor;
    this.Antemporada = temporada;
    this.Ancategoria = categoria;
    this.Animg = img;

    var Arrayedit = {
       id,
       nombre,
       autor,
       temporada,
       categoria,
       img,
    }


    console.log(Arrayedit);
 
    this.mr = this.modalService.open(formularioeditar);

  }


  // public onUpdate(form : NgForm){
  //   this.apiService.postEmployee(form.value)
  //   .subscribe( data => {
  //   this.resetForm(form);
  //   this.ListAnimeComponent();
  //   this.closeModal();
  //   this.toastr.success("Registro de Usuarios" , "Completado :) ")
  //  })
   
  //  }




  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
 


   public closeModal() {
    this.mr.close();
 }



 

//  public onDelete(id : number) {

//    this.apiService.deleteEmployee(id)
//     .subscribe(x => {
//       this.getPosts();
//     this.toastr.success("Eliminacion de Usuario" +  id, "Se elimino correctamente");

//     })

//  }



}

