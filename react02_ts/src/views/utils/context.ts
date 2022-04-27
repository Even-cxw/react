import {createContext} from 'react';
import storage,{IStorage} from '../store'
export const store = storage;
const StoreContext = createContext(store);
export default StoreContext