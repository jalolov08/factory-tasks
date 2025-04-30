import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Chip,
  IconButton,
  Text,
} from 'react-native-paper';
import { ITaskOrder } from '../../types/taskOrder.type';
import { colors, white } from '@constants/colors.constant';

interface TaskOrderProps {
  item: ITaskOrder;
}

export default function TaskOrder({ item }: TaskOrderProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Выполнено':
        return colors.status.success;
      case 'Отказ':
        return colors.status.error;
      case 'В ожидании':
        return colors.status.warning;
      case 'В процессе':
        return colors.additional.info;
      case 'Не обработан':
        return colors.text.secondary;
      default:
        return colors.text.primary;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Выполнено':
        return 'check-circle';
      case 'Отказ':
        return 'close-circle';
      case 'В ожидании':
        return 'clock';
      case 'В процессе':
        return 'cogs';
      case 'Не обработан':
        return 'alert-circle';
      default:
        return 'help-circle';
    }
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.title}>{item.produceName}</Title>

        <View style={styles.infoContainer}>
          <IconButton
            icon={getStatusIcon(item.status)}
            size={20}
            color={getStatusColor(item.status)}
          />
          <Paragraph style={styles.paragraph}>
            Клиент: <Text style={styles.boldText}>{item.clientName}</Text>
          </Paragraph>
        </View>

        <View style={styles.infoContainer}>
          <Paragraph style={styles.paragraph}>
            Сумма:{' '}
            <Text style={styles.boldText}>
              {item.totalCost} {item.currency}
            </Text>
          </Paragraph>
        </View>

        <View style={styles.infoContainer}>
          <Paragraph style={styles.paragraph}>
            Дата приёма:{' '}
            <Text style={styles.boldText}>{item.admissionDate}</Text>
          </Paragraph>
        </View>

        <Chip
          style={[
            styles.chip,
            { backgroundColor: getStatusColor(item.status) },
          ]}
          textStyle={styles.chipText}
        >
          {item.status}
        </Chip>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 12,
    backgroundColor: colors.surface,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    color: colors.text.primary,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  paragraph: {
    color: colors.text.secondary,
    fontSize: 14,
    marginBottom: 4,
  },
  boldText: {
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  chip: {
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  chipText: {
    color: white,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});
