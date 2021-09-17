import React from 'react';
import Login from "./components/Login"
import * as eva from "@eva-design/eva"
import type { Node } from 'react';
import Navigation from "./components/Navigation"

import {
  ApplicationProvider,
} from '@ui-kitten/components';

const App: () => Node = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Navigation/>
    </ApplicationProvider>
  );
};

export default App;
