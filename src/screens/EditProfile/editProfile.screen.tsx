import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { TextInput, Button, Text, Card, HelperText } from 'react-native-paper';
import { useAuthStore } from '@zustand/useAuthStore';
import { colors } from '@constants/colors.constant';
import styles from './editProfile.style';
import { useRequest } from '@hooks/useRequest';
import ToastManager, { Toast } from 'toastify-react-native';
import { User } from '../../types/user.type';
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
  const { goBack } = useNavigation();
  const { put } = useRequest();
  const { user, setUser } = useAuthStore();

  const [username, setUsername] = useState(user?.username || '');
  const [name, setName] = useState(user?.name || '');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!username || !name) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Ошибка',
        text2: 'Заполните все обязательные поля!',
      });
      return;
    }

    setLoading(true);

    try {
      const updatedUser = {
        username,
        name,
        password: password || undefined,
      };

      const response = await put<{ message: string; user: User }>('/app/profile', updatedUser);

      setUser(response.data.user);
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Успех',
        text2: 'Профиль успешно обновлён!',
        visibilityTime: 1000,
        onHide: () => {
          goBack();
        },
      });
    } catch (error: any) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Ошибка',
        text2: error.response.data.error || 'Произошла ошибка при сохранении данных!',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Изменить Профиль</Text>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.formContainer}>
            <TextInput
              label='Логин'
              mode='outlined'
              value={username}
              onChangeText={setUsername}
              style={styles.input}
              placeholder='Введите ваш логин'
            />
            <TextInput
              label='Имя'
              mode='outlined'
              value={name}
              onChangeText={setName}
              style={styles.input}
              placeholder='Введите ваше имя'
            />
            <TextInput
              label='Пароль'
              mode='outlined'
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              placeholder='Введите новый пароль (если хотите изменить)'
            />
            <HelperText type='info' visible={password === ''}>
              Если не хотите изменить пароль, оставьте поле пустым
            </HelperText>

            <Button
              mode='contained'
              onPress={handleSave}
              style={styles.saveButton}
              color={colors.primary}
              loading={loading}
            >
              Сохранить
            </Button>
          </View>
        </Card.Content>
      </Card>

      <ToastManager />
    </SafeAreaView>
  );
}
