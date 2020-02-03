import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {

  //props here
  @Input() trailerInput: string = '';
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log('object modal',this.trailerInput)
  }

  // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
  //   //if changes.trailerInput
  //   if (changes.trailerInput.currentValue !== changes.trailerInput.previousValue) {
  //     console.log(changes)
  //   }
  //  }

}
