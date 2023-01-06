/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSaleOrder = /* GraphQL */ `
  query GetSaleOrder($id: ID!) {
    getSaleOrder(id: $id) {
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
export const listSaleOrders = /* GraphQL */ `
  query ListSaleOrders(
    $filter: ModelSaleOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSaleOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSaleOrders = /* GraphQL */ `
  query SyncSaleOrders(
    $filter: ModelSaleOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSaleOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
