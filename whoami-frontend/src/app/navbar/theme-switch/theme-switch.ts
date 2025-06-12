import { Component, DOCUMENT, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  imports: [],
  templateUrl: './theme-switch.html',
  styleUrl: './theme-switch.scss'
})
export class ThemeSwitch {
  isDarkMode =false
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.isDarkMode = (localStorage.getItem("theme") ?? "false") === "true"
    this.setTheme()
  }

  switchTheme() {
    this.isDarkMode = !this.isDarkMode
    this.setTheme()
  }

  private setTheme() {
localStorage.setItem("theme", this.isDarkMode.toString())
    this.isDarkMode ?
      this.renderer.addClass(this.document.body, 'dark') : 
      this.renderer.removeClass(this.document.body, 'dark')
  }
}
