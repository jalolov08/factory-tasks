import { AuthProvider } from "@contexts/AuthContext/auth.context";
import Login from "@screens/Login/login.screen";
import React from "react";
import { SafeAreaView } from "react-native";

function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Login />
      </SafeAreaView>
    </AuthProvider>
  );
}

export default App;
