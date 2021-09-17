module.exports = {
  root: true,
  extends: '@react-native-community',
  "rules": {
    // `.jsx` extension cannot be used with React Native
    // https://github.com/airbnb/javascript/issues/982
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
  }
};
