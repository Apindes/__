import { makeAutoObservable, action } from 'mobx';

export class UserStore {
  firstName = '';
  lastName = '';
  showModal = false;

  constructor() {
    makeAutoObservable(this);
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  @action setFirstName(name: string) {
    this.firstName = name.trim();
  }

  @action setLastName(name: string) {
    this.lastName = name.trim();
  }

  @action toggleModal() {
    this.showModal = !this.showModal;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
