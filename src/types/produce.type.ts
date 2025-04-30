import { UnitOfMeasurement } from './unitOfMeasurement.type';

export interface Produce {
  _id: string;
  name: string;
  unitOfMeasurement: UnitOfMeasurement;
}
