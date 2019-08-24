import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  
  public formulario: Array<{ titulo: string; subtitulo: string;}> = [];
  constructor() { }
  preencheLista(titulo : string, subtitulo : string){
    if (titulo.length == 0)
      return ;

    if (subtitulo.length == 0)
      return ;
    
    this.formulario.push({
      titulo: titulo,
      subtitulo : subtitulo
    });
  }

  ngOnInit() {
  }

}
