export enum UserRole {
  Admin = 'admin',
  Cashier = 'cashier',
  WarehouseMgr = 'warehouseMgr',
  SalesDept = 'salesDept',
  Manager = 'manager',
  Accountant = 'accountant',
  Foreman = 'foreman',
  InventoryMgr = 'inventoryMgr',
}

export interface User {
  _id: string;
  name: string;
  username: string;
  password: string;
  role: UserRole;
}
