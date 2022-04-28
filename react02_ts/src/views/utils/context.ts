import {createContext} from 'react';
import {IinitState,initState} from '../store'
export const StoreContext = createContext(initState);
