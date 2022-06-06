import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss'],
})

/**
 * Composant permetant de recevoir une liste d'image 12 au total pour être display en galerie
 *
 */
export class GalerieComponent implements OnInit {
  @Input() posts!: any[];

  images!: any[];

  constructor() {}

  ngOnInit(): void {
    this.posts.splice(12);
    this.images = this.splitToChunks(this.posts, 4);
    console.log(this.images);
  }

  splitToChunks(array: any, parts: number) {
    let result = [];
    for (let i = parts; i > 0; i--) {
      result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
  }
}
