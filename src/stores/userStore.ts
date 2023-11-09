import { makeAutoObservable, action } from 'mobx';

export class UserStore {
  firstName = '';
  lastName = '';
  showModal = false;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    console.log('this', this)
    makeAutoObservable(this);
  }

  @action
  setFirstName(name: string) {
    console.log('setFirstName', this, name);
    this.firstName = name;
  }

  @action
  setLastName(name: string) {
    this.lastName = name;
  }

  @action
  toggleModal() {
    this.showModal = !this.showModal;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//const store = new UserStore();
//export default store;
