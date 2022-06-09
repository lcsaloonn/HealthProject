import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/shared/services/contentful/contentful.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss'],
})
export class ViewHomeComponent implements OnInit {
  constructor(private contentful: ContentfulService) {}

  post$: Observable<any> | undefined;

  ngOnInit(): void {
    this.post$ = this.contentful.getAllEntries();
  }

  //MOCKS
  mock = [
    {
      src: './assets/images/muscu-test.jpg',
      alt: 'MUSCULATION',
      link: '',
    },
    {
      src: './assets/images/recette-test.jpg',
      alt: 'RECETTES',
      link: '',
    },
    {
      src: './assets/images/entrainement-test.jpg',
      alt: 'ENTRAINEMENTS',
      link: '',
    },
    {
      src: './assets/images/defis-test.png',
      alt: 'DÉFIS',
      link: '',
    },
  ];
}
