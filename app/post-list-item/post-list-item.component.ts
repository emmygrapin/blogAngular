import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
	@Input() titreArticle:string;
	@Input() texteArticle:string;
	@Input() createdAt: Date;
  @Input() lovedIts: number;

  constructor() {

   }

  ngOnInit() {
 }

//Méthode pour ajouter des loves
  ajouterLove(){
    this.lovedIts = this.lovedIts+1;
  }

//Méthode pour supprimer des loves
  supprimerLove(){
    this.lovedIts = this.lovedIts-1;
  }
 

}
