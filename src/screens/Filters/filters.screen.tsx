import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Menu, Title, Provider, ActivityIndicator, Button } from 'react-native-paper';
import { useFiltersStore } from '@zustand/useFiltersStore';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Produce } from '../../types/produce.type';
import { Client } from '../../types/client.type';
import { useGetRequest } from '@hooks/useGetRequest';
import { TaskOrderStatus } from '../../types/taskOrder.type';
import { formatDate } from '@utils/formatDate.util';
import { FiltersScreenProps } from '@navigation/TaskOrderStack/taskOrder.type';
import styles from './filters.style';

export default function Filters({ navigation }: FiltersScreenProps) {
  const {
    data: producesList,
    loading: loadingProduces,
    error: produceError,
  } = useGetRequest<Produce[]>('/produce/list');
  const {
    data: clientsList,
    loading: loadingClients,
    error: clientError,
  } = useGetRequest<Client[]>('/client/list');

  const { status, startDate, endDate, sortBy, order, setFilters, resetFilters } = useFiltersStore();

  const [selectedStatus, setSelectedStatus] = useState(status);
  const [startDateFilter, setStartDateFilter] = useState(startDate);
  const [endDateFilter, setEndDateFilter] = useState(endDate);
  const [sortByFilter, setSortByFilter] = useState(sortBy);
  const [orderFilter, setOrderFilter] = useState(order);

  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [selectedProduce, setSelectedProduce] = useState<string | null>(null);

  const [clientName, setClientName] = useState<string>('');
  const [produceName, setProduceName] = useState<string>('');

  const [statusMenuVisible, setStatusMenuVisible] = useState(false);
  const [sortByMenuVisible, setSortByMenuVisible] = useState(false);
  const [orderMenuVisible, setOrderMenuVisible] = useState(false);
  const [clientMenuVisible, setClientMenuVisible] = useState(false);
  const [produceMenuVisible, setProduceMenuVisible] = useState(false);

  const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);

  const handleConfirmStartDate = (date: Date) => {
    setStartDateFilter(formatDate(date));
    setStartDatePickerVisible(false);
  };

  const handleConfirmEndDate = (date: Date) => {
    setEndDateFilter(formatDate(date));
    setEndDatePickerVisible(false);
  };

  const handleApplyFilters = () => {
    setFilters({
      status: selectedStatus,
      startDate: startDateFilter,
      endDate: endDateFilter,
      sortBy: sortByFilter,
      order: orderFilter,
      clientId: selectedClient ?? undefined,
      produceId: selectedProduce ?? undefined,
    });
    navigation.goBack();
  };

  const handleResetFilters = () => {
    resetFilters();
    setSelectedStatus('');
    setStartDateFilter(startDate);
    setEndDateFilter(endDate);
    setSortByFilter('admissionDate');
    setOrderFilter('desc');
    setSelectedClient('');
    setSelectedProduce('');
    setClientName('');
    setProduceName('');
  };

  useEffect(() => {
    const selectedClientData = clientsList?.find((client) => client._id === selectedClient);
    const selectedProduceData = producesList?.find((produce) => produce._id === selectedProduce);

    if (selectedClientData) {
      setClientName(selectedClientData.name);
    }

    if (selectedProduceData) {
      setProduceName(selectedProduceData.name);
    }
  }, [selectedClient, selectedProduce, clientsList, producesList]);

  return (
    <Provider>
      <SafeAreaView style={styles.container}>
        <Title style={styles.title}>Фильтры</Title>

        <Text style={styles.label}>Статус</Text>
        <Menu
          visible={statusMenuVisible}
          onDismiss={() => setStatusMenuVisible(false)}
          anchor={
            <TouchableOpacity style={styles.menuButton} onPress={() => setStatusMenuVisible(true)}>
              <Text style={styles.buttonText}>{selectedStatus}</Text>
            </TouchableOpacity>
          }
        >
          {Object.values(TaskOrderStatus).map((status) => (
            <Menu.Item
              key={status}
              onPress={() => {
                setSelectedStatus(status);
                setStatusMenuVisible(false);
              }}
              title={status}
            />
          ))}
        </Menu>

        <Text style={styles.label}>Дата начала</Text>
        <TouchableOpacity style={styles.dateButton} onPress={() => setStartDatePickerVisible(true)}>
          <Text style={styles.buttonText}>{startDateFilter}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isStartDatePickerVisible}
          mode='date'
          onConfirm={handleConfirmStartDate}
          onCancel={() => setStartDatePickerVisible(false)}
        />

        <Text style={styles.label}>Дата окончания</Text>
        <TouchableOpacity style={styles.dateButton} onPress={() => setEndDatePickerVisible(true)}>
          <Text style={styles.buttonText}>{endDateFilter}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isEndDatePickerVisible}
          mode='date'
          onConfirm={handleConfirmEndDate}
          onCancel={() => setEndDatePickerVisible(false)}
        />

        <Text style={styles.label}>Сортировать по</Text>
        <Menu
          visible={sortByMenuVisible}
          onDismiss={() => setSortByMenuVisible(false)}
          anchor={
            <TouchableOpacity style={styles.menuButton} onPress={() => setSortByMenuVisible(true)}>
              <Text style={styles.buttonText}>{sortByFilter}</Text>
            </TouchableOpacity>
          }
        >
          <Menu.Item
            onPress={() => {
              setSortByFilter('admissionDate');
              setSortByMenuVisible(false);
            }}
            title='Дата поступления'
          />
          <Menu.Item
            onPress={() => {
              setSortByFilter('completionDate');
              setSortByMenuVisible(false);
            }}
            title='Дата завершения'
          />
        </Menu>

        <Text style={styles.label}>Порядок</Text>
        <Menu
          visible={orderMenuVisible}
          onDismiss={() => setOrderMenuVisible(false)}
          anchor={
            <TouchableOpacity style={styles.menuButton} onPress={() => setOrderMenuVisible(true)}>
              <Text style={styles.buttonText}>{orderFilter}</Text>
            </TouchableOpacity>
          }
        >
          <Menu.Item
            onPress={() => {
              setOrderFilter('asc');
              setOrderMenuVisible(false);
            }}
            title='По возрастанию'
          />
          <Menu.Item
            onPress={() => {
              setOrderFilter('desc');
              setOrderMenuVisible(false);
            }}
            title='По убыванию'
          />
        </Menu>

        <Text style={styles.label}>Клиент</Text>
        {loadingClients ? (
          <ActivityIndicator />
        ) : (
          <Menu
            visible={clientMenuVisible}
            onDismiss={() => setClientMenuVisible(false)}
            anchor={
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setClientMenuVisible(true)}
              >
                <Text style={styles.buttonText}>{clientName || 'Выберите клиента'}</Text>
              </TouchableOpacity>
            }
          >
            {clientsList?.map((client) => (
              <Menu.Item
                key={client._id}
                onPress={() => {
                  setSelectedClient(client._id);
                  setClientName(client.name);
                  setClientMenuVisible(false);
                }}
                title={client.name}
              />
            ))}
          </Menu>
        )}

        <Text style={styles.label}>Продукция</Text>
        {loadingProduces ? (
          <ActivityIndicator />
        ) : (
          <Menu
            visible={produceMenuVisible}
            onDismiss={() => setProduceMenuVisible(false)}
            anchor={
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setProduceMenuVisible(true)}
              >
                <Text style={styles.buttonText}>{produceName || 'Выберите продукцию'}</Text>
              </TouchableOpacity>
            }
          >
            {producesList?.map((produce) => (
              <Menu.Item
                key={produce._id}
                onPress={() => {
                  setSelectedProduce(produce._id);
                  setProduceName(produce.name);
                  setProduceMenuVisible(false);
                }}
                title={produce.name}
              />
            ))}
          </Menu>
        )}

        <Button onPress={handleApplyFilters} mode='contained' style={{ marginVertical: 12 }}>
          Применить фильтры
        </Button>
        <Button onPress={handleResetFilters} mode='elevated'>
          <Text style={styles.buttonText}>Сбросить фильтры</Text>
        </Button>
      </SafeAreaView>
    </Provider>
  );
}
