import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BoardModule } from './modules/board/board.module';
import { MatGridListModule, MatButtonModule } from '@angular/material';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BoardModule,
        MatGridListModule,
        MatButtonModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
