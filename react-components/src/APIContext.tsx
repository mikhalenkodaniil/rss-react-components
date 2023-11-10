import { createContext } from 'react';
import { IResults } from './interfaces';

export const APIContext = createContext<IResults[] | undefined>(undefined);
