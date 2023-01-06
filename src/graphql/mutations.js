/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createSaleOrder = /* GraphQL */ `
  mutation CreateSaleOrder(
    $input: CreateSaleOrderInput!
    $condition: ModelSaleOrderConditionInput
  ) {
    createSaleOrder(input: $input, condition: $condition) {
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
export const updateSaleOrder = /* GraphQL */ `
  mutation UpdateSaleOrder(
    $input: UpdateSaleOrderInput!
    $condition: ModelSaleOrderConditionInput
  ) {
    updateSaleOrder(input: $input, condition: $condition) {
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
export const deleteSaleOrder = /* GraphQL */ `
  mutation DeleteSaleOrder(
    $input: DeleteSaleOrderInput!
    $condition: ModelSaleOrderConditionInput
  ) {
    deleteSaleOrder(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
