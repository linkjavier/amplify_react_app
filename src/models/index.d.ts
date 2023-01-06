import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productName?: string | null;
  readonly productDescription?: string | null;
  readonly productPurchasePrice?: string | null;
  readonly productSellPrice?: string | null;
  readonly productQuantity?: string | null;
  readonly productBrand?: string | null;
  readonly productCategoryId?: string | null;
  readonly productIsDeleted?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productName?: string | null;
  readonly productDescription?: string | null;
  readonly productPurchasePrice?: string | null;
  readonly productSellPrice?: string | null;
  readonly productQuantity?: string | null;
  readonly productBrand?: string | null;
  readonly productCategoryId?: string | null;
  readonly productIsDeleted?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerSaleOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SaleOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderNumber?: string | null;
  readonly orderClientId?: string | null;
  readonly orderVehicleName?: string | null;
  readonly orderVehiclePlate?: string | null;
  readonly orderVehicleBrand?: string | null;
  readonly orderVehicleModel?: string | null;
  readonly orderVehicleType?: string | null;
  readonly orderDate?: string | null;
  readonly orderOperators?: string | null;
  readonly orderObservations?: string | null;
  readonly orderTotalValue?: string | null;
  readonly orderInvoiceId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySaleOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SaleOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderNumber?: string | null;
  readonly orderClientId?: string | null;
  readonly orderVehicleName?: string | null;
  readonly orderVehiclePlate?: string | null;
  readonly orderVehicleBrand?: string | null;
  readonly orderVehicleModel?: string | null;
  readonly orderVehicleType?: string | null;
  readonly orderDate?: string | null;
  readonly orderOperators?: string | null;
  readonly orderObservations?: string | null;
  readonly orderTotalValue?: string | null;
  readonly orderInvoiceId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SaleOrder = LazyLoading extends LazyLoadingDisabled ? EagerSaleOrder : LazySaleOrder

export declare const SaleOrder: (new (init: ModelInit<SaleOrder>) => SaleOrder) & {
  copyOf(source: SaleOrder, mutator: (draft: MutableModel<SaleOrder>) => MutableModel<SaleOrder> | void): SaleOrder;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userDocumentType?: string | null;
  readonly userDocumentNumber?: string | null;
  readonly userName?: string | null;
  readonly userSurname?: string | null;
  readonly userContactPhone?: string | null;
  readonly userContactPhone2?: string | null;
  readonly userAddress?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userDocumentType?: string | null;
  readonly userDocumentNumber?: string | null;
  readonly userName?: string | null;
  readonly userSurname?: string | null;
  readonly userContactPhone?: string | null;
  readonly userContactPhone2?: string | null;
  readonly userAddress?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}