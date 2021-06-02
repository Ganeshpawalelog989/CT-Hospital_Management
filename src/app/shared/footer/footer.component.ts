import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public flatlogic: string = '';
  public flatlogicAbout: string = '';
  public flatlogicBlog: string = '';
}
