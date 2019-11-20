import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomCommentsComponent } from './random-comments.component';
import { RandomCommentsModule } from './random-comments.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RandomCommentsComponent', () => {
  let component: RandomCommentsComponent;
  let fixture: ComponentFixture<RandomCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RandomCommentsModule
      ]
    });

    return TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
