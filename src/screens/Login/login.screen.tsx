import { Typography } from '@components/Typography/typography.component';
import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useAuth } from '@contexts/AuthContext/auth.context';
import ToastManager, { Toast } from 'toastify-react-native';
import styles from './login.style';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { onLogin } = useAuth();

  const handleLogin = async () => {
    if (!username || !password) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Ошибка',
        text2: 'Заполните все поля.',
      });
      return;
    }

    setLoading(true);
    const success = await onLogin(username, password);
    setLoading(false);

    if (success) {
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Успех',
        text2: 'Вы успешно вошли в систему!',
      });
    } else {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Ошибка',
        text2: 'Неверный логин или пароль.',
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
          label="Логин"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Пароль"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          mode="outlined"
          secureTextEntry
        />

        <Button
          mode="contained"
          style={styles.button}
          onPress={handleLogin}
          loading={loading}
        >
          Войти
        </Button>
      </View>

      <ToastManager />
    </SafeAreaView>
  );
}
