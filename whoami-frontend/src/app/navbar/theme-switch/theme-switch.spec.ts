import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSwitch } from './theme-switch';

describe('ThemeSwitch', () => {
  let component: ThemeSwitch;
  let fixture: ComponentFixture<ThemeSwitch>;
  let mockStorage: { [key: string]: string | null } = {};

  beforeEach(async () => {
    mockStorage = {}
    spyOn(localStorage, 'getItem').and.callFake((key: string): string | null => {
      return mockStorage[key] || null;
    });

    await TestBed.configureTestingModule({
      imports: [ThemeSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch theme', () => {
    expect(component.isDarkMode).toBe(false)
    component.switchTheme()
    expect(component.isDarkMode).toBe(true)
  })

  it('should set to dark if localstorage is dark', () => {
    mockStorage["theme"] = null
    reinitComponent();

    expect(component.isDarkMode).toBe(false)
  })

  it('should set to dark if localstorage is dark', () => {
    mockStorage["theme"] = "true"
    reinitComponent();

    expect(component.isDarkMode).toBe(true)
  })

  it('should set to dark if localstorage is not dark', () => {
    mockStorage["theme"] = "false"
    reinitComponent();

    expect(component.isDarkMode).toBe(false)
  })



  function reinitComponent() {
    fixture.destroy(); // Optional: destroy old fixture
    fixture = TestBed.createComponent(ThemeSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }
});

