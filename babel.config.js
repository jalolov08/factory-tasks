module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".ios.js",
          ".android.js",
          ".ios.jsx",
          ".android.jsx",
          ".js",
          ".jsx",
          ".json",
          ".ts",
          ".tsx",
        ],
        root: ["."],
        alias: {
          "@api": "./src/api",
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@types": "./src/types",
          "@utils": "./src/utils",
          "@hooks": "./src/hooks",
          "@constants": "./src/constants",
          "@navigation": "./src/navigation",
          "@zustand": "./src/zustand",
          "@contexts": "./src/contexts",
        },
      },
    ],
  ],
};
