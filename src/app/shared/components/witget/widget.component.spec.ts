import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetComponent } from './widget.component';
import { WidgetModule } from './witget.module';

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        WidgetModule
      ]
    });

    return TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create widget instance', () => {
    const widget = fixture.debugElement.componentInstance;

    expect(widget).toBeTruthy();
  });

  it('should show loading bar', () => {
    component.isLoading = true;

    fixture.detectChanges();

    const processBar = fixture.nativeElement.querySelector(
      '.mat-progress-bar'
    ) as HTMLElement;

    expect(processBar).toBeTruthy();
  });

  it('should should not show loading bar', () => {
    component.isLoading = false;

    fixture.detectChanges();

    const processBar = fixture.nativeElement.querySelector(
      '.mat-progress-bar'
    ) as HTMLElement;

    expect(processBar).toBeFalsy();
  });
});
