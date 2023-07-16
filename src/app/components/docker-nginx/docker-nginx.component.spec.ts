import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerNginxComponent } from './docker-nginx.component';

describe('DockerNginxComponent', () => {
  let component: DockerNginxComponent;
  let fixture: ComponentFixture<DockerNginxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerNginxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockerNginxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
