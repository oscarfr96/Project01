import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @HostBinding('class.container-custom') containerClass = true;
  title = 'Porject 1 - Oscar Fraile';

  items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
  ];

  agregarItem(itemForm: any) {
    const nuevoItemNombre = itemForm.value.itemName;
    if (nuevoItemNombre) {
      this.items.push({ name: nuevoItemNombre });
      // Limpiar el campo de entrada después de agregar el ítem
      itemForm.resetForm();
    }
  }

}
