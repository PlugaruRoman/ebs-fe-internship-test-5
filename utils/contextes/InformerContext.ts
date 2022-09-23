import React from 'react';

export interface InformerContextProps {
  companies: Companies[];
}

export const InformerContext = React.createContext<InformerContextProps>({
  companies: [],
});
