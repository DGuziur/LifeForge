import { Component, ElementRef, ViewChild } from '@angular/core';
import { Universe } from '../../../../../../pkg';

@Component({
  selector: 'app-game-of-life',
  standalone: true,
  imports: [],
  templateUrl: './game-of-life.component.html',
  styleUrl: './game-of-life.component.scss',
})
export class GameOfLifeComponent {
  @ViewChild('game') pre!: ElementRef;
  universe = Universe.new();

  renderLoop = () => {
    this.pre.nativeElement.textContent = this.universe.render();
    this.universe.tick();
    requestAnimationFrame(this.renderLoop);
  };
}
