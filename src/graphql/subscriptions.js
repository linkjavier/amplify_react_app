/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      productName
      productDescription
      productPurchasePrice
      productSellPrice
      productQuantity
      productBrand
      productCategoryId
      productIsDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      productName
      productDescription
      productPurchasePrice
      productSellPrice
      productQuantity
      productBrand
      productCategoryId
      productIsDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      productName
      productDescription
      productPurchasePrice
      productSellPrice
      productQuantity
      productBrand
      productCategoryId
      productIsDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSaleOrder = /* GraphQL */ `
  subscription OnCreateSaleOrder(
    $filter: ModelSubscriptionSaleOrderFilterInput
  ) {
    onCreateSaleOrder(filter: $filter) {
      id
      orderNumber
      orderClientId
      orderVehicleName
      orderVehiclePlate
      orderVehicleBrand
      orderVehicleModel
      orderVehicleType
      orderDate
      orderOperators
      orderObservations
      orderTotalValue
      orderInvoiceId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSaleOrder = /* GraphQL */ `
  subscription OnUpdateSaleOrder(
    $filter: ModelSubscriptionSaleOrderFilterInput
  ) {
    onUpdateSaleOrder(filter: $filter) {
      id
      orderNumber
      orderClientId
      orderVehicleName
      orderVehiclePlate
      orderVehicleBrand
      orderVehicleModel
      orderVehicleType
      orderDate
      orderOperators
      orderObservations
      orderTotalValue
      orderInvoiceId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSaleOrder = /* GraphQL */ `
  subscription OnDeleteSaleOrder(
    $filter: ModelSubscriptionSaleOrderFilterInput
  ) {
    onDeleteSaleOrder(filter: $filter) {
      id
      orderNumber
      orderClientId
      orderVehicleName
      orderVehiclePlate
      orderVehicleBrand
      orderVehicleModel
      orderVehicleType
      orderDate
      orderOperators
      orderObservations
      orderTotalValue
      orderInvoiceId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      userDocumentType
      userDocumentNumber
      userName
      userSurname
      userContactPhone
      userContactPhone2
      userAddress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      userDocumentType
      userDocumentNumber
      userName
      userSurname
      userContactPhone
      userContactPhone2
      userAddress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      userDocumentType
      userDocumentNumber
      userName
      userSurname
      userContactPhone
      userContactPhone2
      userAddress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
