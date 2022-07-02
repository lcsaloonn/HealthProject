import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: '[select-research]',
  templateUrl: './select-research.component.html',
  styleUrls: ['./select-research.component.scss'],
})
export class SelectResearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  items!: string[];

  @Input()
  selectName!: string;

  @Output()
  itemSelected!: string | number;

  @ViewChild('optionsContainer') optionsContainer!: ElementRef;
  @ViewChild('selected') selected!: ElementRef;
  @ViewChild('searchBox') searchBox!: ElementRef;
  @ViewChildren('options') options!: QueryList<ElementRef>;

  toogleSelection() {
    this.optionsContainer.nativeElement.classList.toggle('active');
    this.searchBox.nativeElement.value = '';
    //this.filterList('');
    if (this.optionsContainer.nativeElement.classList.contains('active')) {
      this.searchBox.nativeElement.focus();
    }
  }

  removeActiveLabel(labelName: string) {
    this.selected.nativeElement.innerHTML = labelName;
  }

  filterList(searchTerm: string) {
    searchTerm.toLowerCase();
    this.options.forEach((option) => {
      let label =
        option.nativeElement.firstElementChild.nextElementSibling.innerText.toLowerCase();
      if (label.indexOf(searchTerm) != -1) {
        option.nativeElement.style.display = 'block';
      } else {
        option.nativeElement.style.display = 'none';
      }
    });
  }

  addToItemSelected(item: string | number) {
    this.itemSelected = item;
  }
}
