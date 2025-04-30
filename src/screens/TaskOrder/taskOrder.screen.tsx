import React, { useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { ActivityIndicator, Appbar, Text, Title, Card, Divider } from 'react-native-paper';
import { useGetRequest } from '@hooks/useGetRequest';
import { TaskOrderScreenProps } from '@navigation/TaskOrderStack/taskOrder.type';
import { ITaskOrder } from '../../types/taskOrder.type';
import styles from './taskOrder.style';
import { Field } from '@components/Field/field.component';

export default function TaskOrder({ route, navigation }: TaskOrderScreenProps) {
  const { id } = route.params;

  const {
    data: order,
    loading,
    error,
    refresh,
  } = useGetRequest<ITaskOrder>(`/app/task-order/${id}`);

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    try {
      setRefreshing(true);
      await refresh();
    } finally {
      setRefreshing(false);
    }
  };

  const goBack = () => navigation.goBack();

  if (loading && !refreshing) return <ActivityIndicator style={styles.centered} />;

  if (error || !order) return <Text style={styles.errorText}>Не удалось загрузить заказ.</Text>;

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title='Детали заказа' />
      </Appbar.Header>

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 80 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      >
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.sectionTitle}>Основная информация</Title>
            <Field label='Клиент' value={order.clientName} />
            <Field label='Продукция' value={order.produceName} />
            <Field label='Статус' value={order.status} />
            <Field label='Ответственный' value={order.ownerName} />
            <Divider style={styles.divider} />

            <Title style={styles.sectionTitle}>Параметры</Title>
            <Field label='Ед. измерения' value={order.unitOfMeasurement} />
            <Field label='Количество' value={order.total.toString()} />
            <Field label='Цена за ед.' value={`${order.price} ${order.currency}`} />
            <Field label='Цена со скидкой' value={`${order.priceDiscounted} ${order.currency}`} />
            <Field label='Скидка' value={`${order.discount}%`} />
            <Field label='Сумма' value={`${order.totalCost} ${order.currency}`} />
            <Divider style={styles.divider} />

            <Title style={styles.sectionTitle}>Даты</Title>
            <Field label='Дата поступления' value={order.admissionDate} />
            <Field label='Дата заготовки' value={order.tanningDate} />
            <Field label='Дата выдачи' value={order.givenDate} />
            <Field label='Выдано' value={`${order.given} ${order.unitOfMeasurement}`} />
            <Divider style={styles.divider} />

            <Title style={styles.sectionTitle}>Дополнительно</Title>
            <Field label='Описание' value={order.description || '—'} />
            <Field label='Причина отказа' value={order.rejectReason || '—'} />
          </Card.Content>
        </Card>
      </ScrollView>
    </>
  );
}
