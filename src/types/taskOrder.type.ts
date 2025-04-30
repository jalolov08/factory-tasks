import { Currency } from './currency.type';
import { UnitOfMeasurement } from './unitOfMeasurement.type';

export enum TaskOrderStatus {
  Completed = 'Выполнено',
  Pending = 'В ожидании',
  InProgress = 'В процессе',
  Rejected = 'Отказ',
  Unprocessed = 'Не обработан',
}

export interface ITaskOrder {
  _id: string;
  admissionDate: string;
  produceId: string;
  produceName: string;
  unitOfMeasurement: UnitOfMeasurement;
  total: number;
  price: number;
  priceDiscounted: number;
  currency: Currency;
  discount: number;
  totalCost: number;
  clientId: string;
  clientName: string;
  description: string;
  ownerId: string;
  ownerName: string;
  tanningDate: string;
  givenDate: string;
  status: TaskOrderStatus;
  given: number;
}
