import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TrilhasPage } from './trilhas.page';

describe('TrilhasPage', () => {
  let component: TrilhasPage;
  let fixture: ComponentFixture<TrilhasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrilhasPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrilhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
