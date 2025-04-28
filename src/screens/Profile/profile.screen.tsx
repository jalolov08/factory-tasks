import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text, Card, Avatar, Button } from 'react-native-paper';
import { useAuthStore } from '@zustand/useAuthStore';
import { ProfileScreenProps } from '@navigation/ProfileStack/profile.type';
import styles from './profile.style';

const defaultProfileImage = 'https://www.w3schools.com/w3images/avatar2.png';

export default function Profile({ navigation }: ProfileScreenProps) {
  const { user } = useAuthStore();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Avatar.Image
              source={{ uri: defaultProfileImage }}
              size={100}
              style={styles.avatar}
            />
            <Text variant="headlineSmall" style={styles.header}>
              Профиль
            </Text>
            {user ? (
              <View style={styles.userInfoContainer}>
                <Text style={styles.text}>
                  Логин: <Text style={styles.username}>{user.username}</Text>
                </Text>
                <Text style={styles.text}>
                  Имя: <Text style={styles.username}>{user.username}</Text>
                </Text>
                <Text style={styles.text}>
                  Роль: <Text style={styles.role}>{user.role}</Text>
                </Text>
              </View>
            ) : (
              <Text style={styles.text}>No user data available.</Text>
            )}
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('EditProfile')}
            >
              Изменить
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </SafeAreaView>
  );
}
