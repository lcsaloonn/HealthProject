import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/shared/services/contentful/contentful.service';
import { Iingredient } from 'src/interface/ingredient.interface';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

@Component({
  selector: '[view-recipe]',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss'],
})
export class ViewRecipeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private contentful: ContentfulService
  ) {}

  title: string[] = ['Ingrédient', 'Étapes'];
  recipe$: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.recipe$ = this.contentful.getEntryById(id);
    });
  }

  _returnHtmlFromRichText(richText: any) {
    const options2: any = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, next: any) =>
          `<p class="pb-5">${next(node.content)}</p>`,
      },
    };

    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>No text</p>';
    }
    return documentToHtmlString(richText, options2);
  }
  /**
 * 
 * 
 * 
 * 
 * 
 * 













d
 */
  mock: Iingredient[] = [
    {
      name: 'Tomate',
      quantity: 5,
      quantityValue: 'kg',
      description: '',
    },
    {
      name: 'Chou',
      quantity: 5,
      quantityValue: 'kg',
      description: '',
    },
    {
      name: 'Patate',
      quantity: 5,
      quantityValue: 'kg',
      description: 'couper en rondelle',
    },
    {
      name: 'Tomate',
      quantity: 5,
      quantityValue: 'kg',
      description: '',
    },
  ];
}
