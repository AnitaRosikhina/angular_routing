import { Component} from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent {

  input: any
  textarea: any
  showError: boolean = false
  showErrorTextarea: boolean = false
  badWords: string[] = []

  addBadWord() {
    if (!this.input) {
      this.showError = true
    } else {
      this.badWords.push(this.input)
      this.showError = false
      this.input = ''
    }
  }

  resetBadWords() {
    this.badWords = []
  }

  censor() {
    if (!this.textarea) {
      this.showErrorTextarea = true
    }
    else {
      this.showErrorTextarea = false
      this.textarea = this.textarea
        .split(' ')
        .map((el: string) => this.badWords.some(elem => elem === el) ? '*'.repeat(el.length) : el)
        .join(' ');
    }
  }

}
