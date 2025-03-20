export class User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    img: string;
    relatedChats: string[];
    phoneNumber?: string;
    checked?: boolean;
    password?: string; // Optionales Passwort-Feld
  
    constructor(obj?: any) {
      this.id = obj?.id || 0;
      this.name = obj?.name || '';
      this.email = obj?.email || '';
      this.isActive = obj?.isActive || false;
      this.img = obj?.img || 'assets/img/avatars/default.svg';
      this.relatedChats = obj?.relatedChats || [];
      this.phoneNumber = obj?.phoneNumber || '';
      this.checked = obj?.checked || false;
      this.password = obj?.password || '';  // Standardmäßig leer, falls nicht gesetzt
    }
  }