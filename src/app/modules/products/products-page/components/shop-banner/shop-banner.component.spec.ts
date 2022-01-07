import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBannerComponent } from './shop-banner.component';

describe('ShopBannerComponent', () => {
  let component: ShopBannerComponent;
  let fixture: ComponentFixture<ShopBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
