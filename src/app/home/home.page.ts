import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  items: {
    id: number; name: string; datei: string, datef: string,
    confirm: boolean, orgname: string, orgphone: string, location: string
  }[] = [];
  nextId: number = 1;
  constructor(public navCtrl: NavController) {

  }
  addItem(name: string, datei: string, datef: string, orgname: string, orgphone: string, location: string): void {
    if (name.trim() && datei.trim() && datef.trim()) {
      this.items.push({
        id: this.nextId++,
        name: name.trim(),
        datei: datei.trim(),
        confirm: false,
        datef: datef.trim(),
        orgname: orgname.trim(),
        orgphone: orgphone.trim(),
        location: location.trim()
      });
    }
    else {
      console.error('El nombre y la fecha no pueden estar vacíos');
    }
  }
  toggleConfirm(id: number): void {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.confirm = !item.confirm;
    }
  }
  removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

}
