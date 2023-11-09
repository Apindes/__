import { createContext, useContext } from 'react';
import {UserStore} from './userStore';
export interface IStore {
  UserStore: UserStore;
}

export const store: IStore = {
  UserStore: new UserStore(),
}

export const StoreContext = createContext(store);
export const useStore = () => {
  return useContext(StoreContext);
};

