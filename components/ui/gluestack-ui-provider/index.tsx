import React, { createContext, useContext, type ReactNode } from 'react';

type ColorMode = 'light' | 'dark';

type GluestackUIProviderProps = {
  mode?: ColorMode;
  children: ReactNode;
};

const GluestackUIContext = createContext<{ colorMode: ColorMode }>({
  colorMode: 'light',
});

export function GluestackUIProvider({ mode = 'light', children }: GluestackUIProviderProps) {
  return (
    <GluestackUIContext.Provider value={{ colorMode: mode }}>
      {children}
    </GluestackUIContext.Provider>
  );
}

export function useColorMode() {
  return useContext(GluestackUIContext).colorMode;
}
