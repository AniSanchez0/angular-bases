import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironMan';
  public age:   number = 39;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} -  ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }
  changeAge(): void{
    this.age = 60;
  }

  resetForm(): void{
    this.name = 'ironMan';
    this.age = 39;

    document.querySelectorAll('h1')!.forEach(element =>{
      element.innerHTML= '<h1>Angular</h1>'
    }      )
  }
}
