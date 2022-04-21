import {createContext} from 'react';

interface IalertContext {
  size:string
}

export const AlertContextState:IalertContext = {
  size: 'mall'
}
const AlertContext = createContext(AlertContextState);
export default AlertContext