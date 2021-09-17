import React from 'react';
import Login from "./components/Login"
import * as eva from "@eva-design/eva"
import type { Node } from 'react';
import Navigation from "./components/Navigation"
import { default as theme } from "./static/theme.json"

import {
  ApplicationProvider,
} from '@ui-kitten/components';
import { ImageBackground, StyleSheet, View} from 'react-native';

const App: () => Node = () => {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <ImageBackground resizeMode="cover" source={require("./static/img/kiz-kulesi.jpg")} style={styles.backgroundImage}>
        <View style={styles.labelWhite} />
        <Navigation />
      </ImageBackground>
    </ApplicationProvider>

  );
};

export default App;


const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1
  },

  labelWhite: {
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      opacity: 0.9,
      position: "absolute"
  },
})
