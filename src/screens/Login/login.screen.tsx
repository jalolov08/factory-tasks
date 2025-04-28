import { Typography } from "@components/Typography/typography.component";
import React, { useState } from "react";
import { View, TextInput, SafeAreaView } from "react-native";
import styles from "./login.style";
import Button from "@components/Button/button.component";
import { useAuth } from "@contexts/AuthContext/auth.context";
import ToastManager, { Toast } from "toastify-react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { onLogin } = useAuth();

  const handleLogin = async () => {
    if (!username || !password) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Ошибка",
        text2: "Заполните все поля.",
      });
      return;
    }

    setLoading(true);
    const success = await onLogin(username, password);
    setLoading(false);

    if (success) {
      Toast.show({
        type: "success",
        position: "bottom",
        text1: "Успех",
        text2: "Вы успешно вошли в систему!",
      });
    } else {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Ошибка",
        text2: "Неверный логин или пароль.",
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Typography variant="h2" style={styles.heading}>
        Войти
      </Typography>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Логин"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button
          style={{ marginTop: 30 }}
          title="Войти"
          onPress={handleLogin}
          loading={loading}
        />
      </View>

      <ToastManager />
    </SafeAreaView>
  );
}
