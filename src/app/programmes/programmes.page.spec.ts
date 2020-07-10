import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgrammesPage } from './programmes.page';

describe('ProgrammesPage', () => {
  let component: ProgrammesPage;
  let fixture: ComponentFixture<ProgrammesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgrammesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
