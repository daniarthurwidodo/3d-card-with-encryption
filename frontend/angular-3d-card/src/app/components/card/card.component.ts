import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  public number = '12345';
  public status = true;
  constructor() {
    let message = 'Hi Mom!';
    let hash = CryptoJS.AES.encrypt(message, 'Secret Passphrase').toString();
    let dehash = CryptoJS.AES.decrypt(hash, 'Secret Passphrase').toString(
      CryptoJS.enc.Utf8
    );
    console.log(hash, dehash);
  }

  toggleFlip() {
    this.status = !this.status;
    
    const card = document.getElementById('card');

    if (!card?.classList.contains('sideA')) {
      card?.classList.add('sideA');
    } else if (card?.classList.contains('sideA')) {
      card?.classList.remove('sideA');
      card.classList.add('sideB');
    }
  }
}
