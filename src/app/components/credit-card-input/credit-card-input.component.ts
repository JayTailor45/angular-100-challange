import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent {

  @Input() public creditCardNumber = '';
  private readonly = false;
  public get isReadonly() {
    return this.readonly;
  }
  @Input() public set isReadonly(value: boolean) {
    this.creditCardNumber = value ? this.formatReadonlyCCNum(this.creditCardNumber) : this.creditCardNumber;
    this.readonly = value;
  }

  private formatReadonlyCCNum(ccNumber: string): string {
    const parts = ccNumber.match(/[\s\S]{1,4}/g) || [];
    const onlyLast4NumShown = parts.map((part, index) => {
      if (index === part.length - 1) {
        return part;
      }
      return 'xxxx';
    });
    return onlyLast4NumShown.join('-');
  }
}
