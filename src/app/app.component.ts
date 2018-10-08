import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date =  new Date;
  posts = [
  new Post('Mon premier Post', 'Haec igitur Epicuri non probo, inquam. De cetero vellem equidem aut' +
  ' ipse doctrinis fuisset instructior est enim, quo' + 'tibi ita videri necesse est, non satis politus iis artibus, quas qui tene'
  , 0, this.date),
  new Post('Deuxième Post', 'Haec igitur Epicuri non probo, inquam. De cetero vellem equidem aut' +
  ' ipse doctrinis fuisset instructior est enim, quo' + 'tibi ita videri necesse est, non satis politus iis artibus'
  , 0, this.date),
  new Post('Troisème Post', 'Haec igitur Epicuri non probo, inquam. De cetero vellem equidem aut' +
  ' ipse doctrinis fuisset instructior est enim, quo'+ 'tibi ita videri necesse est, non satis politus iis artibus', 0, this.date)
];

}

export class Post {

  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(titre: string, contenu: string, aime: number, creele: Date) {
    this.title = titre;
    this.content = contenu;
    this.loveIts = aime;
    this.created_at = creele;
  }

}
