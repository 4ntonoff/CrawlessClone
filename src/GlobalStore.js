import { observable, action, makeObservable } from 'mobx';

class AppStore {
  // Объявление переменной состояния
  NavbarIndex = null;

  constructor() {
    makeObservable(this, {
      NavbarIndex: observable,
      setNavbarIndex: action,
    });
  }

  // Действие для установки значения глобальной переменной
  setNavbarIndex(newValue) {
    this.NavbarIndex = newValue;
  }
}

const store = new AppStore();
export default store;
