import React, { useEffect, useState } from 'react';
import { View, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { Title, ActivityIndicator, Text } from 'react-native-paper';
import { ITaskOrder } from '../../types/taskOrder.type';
import { api } from '@api/api';
import TaskOrder from '@components/TaskOrder/taskOrder.component';
import { TaskOrdersScreenProps } from '@navigation/TaskOrderStack/taskOrder.type';
import styles from './taskOrders.style';
import { useFiltersStore } from '@zustand/useFiltersStore';

export default function TaskOrders({ navigation }: TaskOrdersScreenProps) {
  const {
    status,
    startDate,
    endDate,
    page,
    clientId,
    produceId,
    limit,
    sortBy,
    order,
    setFilters,
  } = useFiltersStore();

  const [taskOrders, setTaskOrders] = useState<ITaskOrder[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchTaskOrders = async (pageNumber: number, isRefresh = false) => {
    if (loading) return;

    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    try {
      const response = await api.get<{
        orders: ITaskOrder[];
        totalPages: number;
        total: number;
      }>(`/app/task-orders`, {
        params: {
          page: pageNumber,
          status,
          startDate,
          endDate,
          limit,
          sortBy,
          order,
          clientId,
          produceId,
        },
      });

      if (pageNumber === 1) {
        setTaskOrders(response.data.orders);
      } else {
        setTaskOrders((prev) => [...prev, ...response.data.orders]);
      }

      setTotalPages(response.data.totalPages);
    } catch (error) {
      setError('Не удалось загрузить заказы');
      console.log(error);
    } finally {
      isRefresh ? setRefreshing(false) : setLoading(false);
    }
  };

  useEffect(() => {
    fetchTaskOrders(page);
  }, [page, status, startDate, endDate, sortBy, order, clientId, produceId]);

  const handleRefresh = () => {
    fetchTaskOrders(1, true);
  };

  const handleLoadMore = () => {
    if (page < totalPages && !loading) {
      fetchTaskOrders(page + 1);
      setFilters({ page: page + 1 });
    }
  };

  const handleFilterPress = () => {
    navigation.navigate('Filters');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.title}>Заказы на выполнение</Title>
        <TouchableOpacity
          onPress={handleFilterPress}
          style={styles.filterButton}
        >
          <Text style={styles.filterText}>Фильтры</Text>
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <FlatList
        data={taskOrders}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <TaskOrder item={item} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListFooterComponent={
          loading && !refreshing ? <ActivityIndicator /> : null
        }
        ListEmptyComponent={
          !loading && !refreshing && taskOrders.length === 0 ? (
            <View style={styles.emptyStateContainer}>
              <Text style={styles.emptyText}>Нет заказов для отображения</Text>
            </View>
          ) : null
        }
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
}
