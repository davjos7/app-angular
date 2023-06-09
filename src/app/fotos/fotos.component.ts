import { Component } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent {
  imagenes : any = [
    { imagen: "https://www.okchicas.com/wp-content/uploads/2019/08/Gato-meme-tiene-cuenta-de-Instagram-4.jpg"},
    { imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/3BI4V6LC2ZAI3K6DUJHYOQP7RM.jpg"},
    { imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grumpy-cat-gatos-internet-meme-1582125875.jpg?crop=0.663xw:1.00xh;0.169xw,0&resize=1200:*"},
    { imagen: "https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-25.jpg"}


  ]
}
