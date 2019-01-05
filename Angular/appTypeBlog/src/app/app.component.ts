import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Posts';
  posts = [
    {
      title: 'comment1',
      content: 'blablabla',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'comment2',
      content: 'blablabla2',
      loveIts: 0,
      created_at: Date()
    }
  ];

}
