import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'hunch-data-table';
  selected_count: number = 0;

  addSelectedCount(newCount: number) {
    return this.selected_count = newCount;
  }

  alert() {
    window.alert("Clicked");
  }

  clearSelected() {
    this.selected_count = 0;
  }

  toggle() {
    const sidebar = document.getElementById('sidebar');
    const table_wrapper = document.getElementById('table_wrapper');
    const arrow_collapse = document.getElementById('arrow_collapse');
    const sidebar_menu = document.getElementById('sidebar_menu');

    sidebar.classList.toggle('active');
    table_wrapper.classList.toggle('active');
    arrow_collapse.classList.toggle('active');
    sidebar_menu.classList.toggle('active');

  }
}
