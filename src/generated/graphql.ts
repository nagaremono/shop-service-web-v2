import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library. */
  Decimal: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
};

export type AggregateSoldItem = {
  __typename?: 'AggregateSoldItem';
  _avg?: Maybe<SoldItemAvgAggregate>;
  _count?: Maybe<SoldItemCountAggregate>;
  _max?: Maybe<SoldItemMaxAggregate>;
  _min?: Maybe<SoldItemMinAggregate>;
  _sum?: Maybe<SoldItemSumAggregate>;
};

export type AggregateTransaction = {
  __typename?: 'AggregateTransaction';
  _avg?: Maybe<TransactionAvgAggregate>;
  _count?: Maybe<TransactionCountAggregate>;
  _max?: Maybe<TransactionMaxAggregate>;
  _min?: Maybe<TransactionMinAggregate>;
  _sum?: Maybe<TransactionSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export enum AuthMessage {
  CredentialsAccepted = 'CREDENTIALS_ACCEPTED',
  IncorrectCredentials = 'INCORRECT_CREDENTIALS',
  LoggedOut = 'LOGGED_OUT',
  NonexistentAccount = 'NONEXISTENT_ACCOUNT',
  Unauthorized = 'UNAUTHORIZED'
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DecimalFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Decimal']>;
  divide?: Maybe<Scalars['Decimal']>;
  increment?: Maybe<Scalars['Decimal']>;
  multiply?: Maybe<Scalars['Decimal']>;
  set?: Maybe<Scalars['Decimal']>;
};

export type DecimalFilter = {
  equals?: Maybe<Scalars['Decimal']>;
  gt?: Maybe<Scalars['Decimal']>;
  gte?: Maybe<Scalars['Decimal']>;
  in?: Maybe<Array<Scalars['Decimal']>>;
  lt?: Maybe<Scalars['Decimal']>;
  lte?: Maybe<Scalars['Decimal']>;
  not?: Maybe<NestedDecimalFilter>;
  notIn?: Maybe<Array<Scalars['Decimal']>>;
};

export type DecimalWithAggregatesFilter = {
  _avg?: Maybe<NestedDecimalFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDecimalFilter>;
  _min?: Maybe<NestedDecimalFilter>;
  _sum?: Maybe<NestedDecimalFilter>;
  equals?: Maybe<Scalars['Decimal']>;
  gt?: Maybe<Scalars['Decimal']>;
  gte?: Maybe<Scalars['Decimal']>;
  in?: Maybe<Array<Scalars['Decimal']>>;
  lt?: Maybe<Scalars['Decimal']>;
  lte?: Maybe<Scalars['Decimal']>;
  not?: Maybe<NestedDecimalWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Decimal']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type JsonFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type JsonWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedJsonFilter>;
  _min?: Maybe<NestedJsonFilter>;
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProduct: AffectedRowsOutput;
  createManySoldItem: AffectedRowsOutput;
  createManyTransaction: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createProduct: Product;
  createSoldItem: SoldItem;
  createTransaction: Transaction;
  createUser: User;
  deleteManyProduct: AffectedRowsOutput;
  deleteManySoldItem: AffectedRowsOutput;
  deleteManyTransaction: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteProduct?: Maybe<Product>;
  deleteSoldItem?: Maybe<SoldItem>;
  deleteTransaction?: Maybe<Transaction>;
  deleteUser?: Maybe<User>;
  login: AuthMessage;
  logout: AuthMessage;
  updateManyProduct: AffectedRowsOutput;
  updateManySoldItem: AffectedRowsOutput;
  updateManyTransaction: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateProduct?: Maybe<Product>;
  updateSoldItem?: Maybe<SoldItem>;
  updateTransaction?: Maybe<Transaction>;
  updateUser?: Maybe<User>;
  upsertProduct: Product;
  upsertSoldItem: SoldItem;
  upsertTransaction: Transaction;
  upsertUser: User;
};


export type MutationCreateManyProductArgs = {
  data: Array<ProductCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManySoldItemArgs = {
  data: Array<SoldItemCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyTransactionArgs = {
  data: Array<TransactionCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateSoldItemArgs = {
  data: SoldItemCreateInput;
};


export type MutationCreateTransactionArgs = {
  data: TransactionCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyProductArgs = {
  where?: Maybe<ProductWhereInput>;
};


export type MutationDeleteManySoldItemArgs = {
  where?: Maybe<SoldItemWhereInput>;
};


export type MutationDeleteManyTransactionArgs = {
  where?: Maybe<TransactionWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteSoldItemArgs = {
  where: SoldItemWhereUniqueInput;
};


export type MutationDeleteTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: Maybe<ProductWhereInput>;
};


export type MutationUpdateManySoldItemArgs = {
  data: SoldItemUpdateManyMutationInput;
  where?: Maybe<SoldItemWhereInput>;
};


export type MutationUpdateManyTransactionArgs = {
  data: TransactionUpdateManyMutationInput;
  where?: Maybe<TransactionWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateSoldItemArgs = {
  data: SoldItemUpdateInput;
  where: SoldItemWhereUniqueInput;
};


export type MutationUpdateTransactionArgs = {
  data: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertSoldItemArgs = {
  create: SoldItemCreateInput;
  update: SoldItemUpdateInput;
  where: SoldItemWhereUniqueInput;
};


export type MutationUpsertTransactionArgs = {
  create: TransactionCreateInput;
  update: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDecimalFilter = {
  equals?: Maybe<Scalars['Decimal']>;
  gt?: Maybe<Scalars['Decimal']>;
  gte?: Maybe<Scalars['Decimal']>;
  in?: Maybe<Array<Scalars['Decimal']>>;
  lt?: Maybe<Scalars['Decimal']>;
  lte?: Maybe<Scalars['Decimal']>;
  not?: Maybe<NestedDecimalFilter>;
  notIn?: Maybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalWithAggregatesFilter = {
  _avg?: Maybe<NestedDecimalFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDecimalFilter>;
  _min?: Maybe<NestedDecimalFilter>;
  _sum?: Maybe<NestedDecimalFilter>;
  equals?: Maybe<Scalars['Decimal']>;
  gt?: Maybe<Scalars['Decimal']>;
  gte?: Maybe<Scalars['Decimal']>;
  in?: Maybe<Array<Scalars['Decimal']>>;
  lt?: Maybe<Scalars['Decimal']>;
  lte?: Maybe<Scalars['Decimal']>;
  not?: Maybe<NestedDecimalWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Decimal']>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedJsonFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  _count?: Maybe<ProductCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  images: Scalars['JSON'];
  name: Scalars['String'];
  price: Scalars['Decimal'];
  soldItems: Array<SoldItem>;
  stock: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};


export type ProductSoldItemsArgs = {
  cursor?: Maybe<SoldItemWhereUniqueInput>;
  distinct?: Maybe<Array<SoldItemScalarFieldEnum>>;
  orderBy?: Maybe<Array<SoldItemOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SoldItemWhereInput>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  price?: Maybe<Scalars['Decimal']>;
  stock?: Maybe<Scalars['Float']>;
};

export type ProductAvgOrderByAggregateInput = {
  price?: Maybe<SortOrder>;
  stock?: Maybe<SortOrder>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  soldItems: Scalars['Int'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  images: Scalars['Int'];
  name: Scalars['Int'];
  price: Scalars['Int'];
  stock: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ProductCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  images?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  stock?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProductCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  soldItems?: Maybe<SoldItemCreateNestedManyWithoutProductInput>;
  stock: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  stock: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCreateNestedOneWithoutSoldItemsInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutSoldItemsInput>;
  create?: Maybe<ProductCreateWithoutSoldItemsInput>;
};

export type ProductCreateOrConnectWithoutSoldItemsInput = {
  create: ProductCreateWithoutSoldItemsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutSoldItemsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  stock: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  images: Scalars['JSON'];
  name: Scalars['String'];
  price: Scalars['Decimal'];
  stock: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Decimal']>;
  stock?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  stock?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Decimal']>;
  stock?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  stock?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  _avg?: Maybe<ProductAvgOrderByAggregateInput>;
  _count?: Maybe<ProductCountOrderByAggregateInput>;
  _max?: Maybe<ProductMaxOrderByAggregateInput>;
  _min?: Maybe<ProductMinOrderByAggregateInput>;
  _sum?: Maybe<ProductSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  images?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  stock?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  images?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  soldItems?: Maybe<SoldItemOrderByRelationAggregateInput>;
  stock?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProductRelationFilter = {
  is?: Maybe<ProductWhereInput>;
  isNot?: Maybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Images = 'images',
  Name = 'name',
  Price = 'price',
  Stock = 'stock',
  UpdatedAt = 'updatedAt'
}

export type ProductScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ProductScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  images?: Maybe<JsonWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  price?: Maybe<DecimalWithAggregatesFilter>;
  stock?: Maybe<IntWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  price?: Maybe<Scalars['Decimal']>;
  stock?: Maybe<Scalars['Int']>;
};

export type ProductSumOrderByAggregateInput = {
  price?: Maybe<SortOrder>;
  stock?: Maybe<SortOrder>;
};

export type ProductUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  images?: Maybe<Scalars['JSON']>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<DecimalFieldUpdateOperationsInput>;
  soldItems?: Maybe<SoldItemUpdateManyWithoutProductInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  images?: Maybe<Scalars['JSON']>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<DecimalFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateOneRequiredWithoutSoldItemsInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutSoldItemsInput>;
  create?: Maybe<ProductCreateWithoutSoldItemsInput>;
  update?: Maybe<ProductUpdateWithoutSoldItemsInput>;
  upsert?: Maybe<ProductUpsertWithoutSoldItemsInput>;
};

export type ProductUpdateWithoutSoldItemsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  images?: Maybe<Scalars['JSON']>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<DecimalFieldUpdateOperationsInput>;
  stock?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpsertWithoutSoldItemsInput = {
  create: ProductCreateWithoutSoldItemsInput;
  update: ProductUpdateWithoutSoldItemsInput;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  images?: Maybe<JsonFilter>;
  name?: Maybe<StringFilter>;
  price?: Maybe<DecimalFilter>;
  soldItems?: Maybe<SoldItemListRelationFilter>;
  stock?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateProduct: AggregateProduct;
  aggregateSoldItem: AggregateSoldItem;
  aggregateTransaction: AggregateTransaction;
  aggregateUser: AggregateUser;
  findFirstProduct?: Maybe<Product>;
  findFirstSoldItem?: Maybe<SoldItem>;
  findFirstTransaction?: Maybe<Transaction>;
  findFirstUser?: Maybe<User>;
  groupByProduct: Array<ProductGroupBy>;
  groupBySoldItem: Array<SoldItemGroupBy>;
  groupByTransaction: Array<TransactionGroupBy>;
  groupByUser: Array<UserGroupBy>;
  me?: Maybe<User>;
  product?: Maybe<Product>;
  products: Array<Product>;
  soldItem?: Maybe<SoldItem>;
  soldItems: Array<SoldItem>;
  testauth: Scalars['String'];
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  orderBy?: Maybe<Array<ProductOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryAggregateSoldItemArgs = {
  cursor?: Maybe<SoldItemWhereUniqueInput>;
  orderBy?: Maybe<Array<SoldItemOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SoldItemWhereInput>;
};


export type QueryAggregateTransactionArgs = {
  cursor?: Maybe<TransactionWhereUniqueInput>;
  orderBy?: Maybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransactionWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProductOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryFindFirstSoldItemArgs = {
  cursor?: Maybe<SoldItemWhereUniqueInput>;
  distinct?: Maybe<Array<SoldItemScalarFieldEnum>>;
  orderBy?: Maybe<Array<SoldItemOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SoldItemWhereInput>;
};


export type QueryFindFirstTransactionArgs = {
  cursor?: Maybe<TransactionWhereUniqueInput>;
  distinct?: Maybe<Array<TransactionScalarFieldEnum>>;
  orderBy?: Maybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransactionWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryGroupByProductArgs = {
  by: Array<ProductScalarFieldEnum>;
  having?: Maybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryGroupBySoldItemArgs = {
  by: Array<SoldItemScalarFieldEnum>;
  having?: Maybe<SoldItemScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<SoldItemOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SoldItemWhereInput>;
};


export type QueryGroupByTransactionArgs = {
  by: Array<TransactionScalarFieldEnum>;
  having?: Maybe<TransactionScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<TransactionOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransactionWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: Maybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<UserOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProductOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QuerySoldItemArgs = {
  where: SoldItemWhereUniqueInput;
};


export type QuerySoldItemsArgs = {
  cursor?: Maybe<SoldItemWhereUniqueInput>;
  distinct?: Maybe<Array<SoldItemScalarFieldEnum>>;
  orderBy?: Maybe<Array<SoldItemOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SoldItemWhereInput>;
};


export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type QueryTransactionsArgs = {
  cursor?: Maybe<TransactionWhereUniqueInput>;
  distinct?: Maybe<Array<TransactionScalarFieldEnum>>;
  orderBy?: Maybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransactionWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type SoldItem = {
  __typename?: 'SoldItem';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  images: Scalars['JSON'];
  name: Scalars['String'];
  price: Scalars['Decimal'];
  product: Product;
  productId: Scalars['String'];
  quantity: Scalars['Int'];
  transaction: Transaction;
  transactionId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SoldItemAvgAggregate = {
  __typename?: 'SoldItemAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Decimal']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type SoldItemAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
};

export type SoldItemCountAggregate = {
  __typename?: 'SoldItemCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  images: Scalars['Int'];
  name: Scalars['Int'];
  price: Scalars['Int'];
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  transactionId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type SoldItemCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  images?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
  transactionId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SoldItemCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  product: ProductCreateNestedOneWithoutSoldItemsInput;
  quantity: Scalars['Int'];
  transaction: TransactionCreateNestedOneWithoutSoldItemsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SoldItemCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  productId: Scalars['String'];
  quantity: Scalars['Int'];
  transactionId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SoldItemCreateManyProductInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  quantity: Scalars['Int'];
  transactionId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SoldItemCreateManyProductInputEnvelope = {
  data: Array<SoldItemCreateManyProductInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SoldItemCreateManyTransactionInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  images?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  productId: Scalars['String'];
  quantity: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SoldItemCreateManyTransactionInputEnvelope = {
  data: Array<SoldItemCreateManyTransactionInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SoldItemCreateNestedManyWithoutProductInput = {
  connect?: Maybe<Array<SoldItemWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SoldItemCreateOrConnectWithoutProductInput>>;
  create?: Maybe<Array<SoldItemCreateWithoutProductInput>>;
  createMany?: Maybe<SoldItemCreateManyProductInputEnvelope>;
};

export type SoldItemCreateNestedManyWithoutTransactionInput = {
  connect?: Maybe<Array<SoldItemWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SoldItemCreateOrConnectWithoutTransactionInput>>;
  create?: Maybe<Array<SoldItemCreateWithoutTransactionInput>>;
  createMany?: Maybe<SoldItemCreateManyTransactionInputEnvelope>;
};

export type SoldItemCreateOrConnectWithoutProductInput = {
  create: SoldItemCreateWithoutProductInput;
  where: SoldItemWhereUniqueInput;
};

export type SoldItemCreateOrConnectWithoutTransactionInput = {
  create: SoldItemCreateWithoutTransactionInput;
  where: SoldItemWhereUniqueInput;
};

export type SoldItemCreateWithoutProductInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  quantity: Scalars['Int'];
  transaction: TransactionCreateNestedOneWithoutSoldItemsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SoldItemCreateWithoutTransactionInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Decimal'];
  product: ProductCreateNestedOneWithoutSoldItemsInput;
  quantity: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SoldItemGroupBy = {
  __typename?: 'SoldItemGroupBy';
  _avg?: Maybe<SoldItemAvgAggregate>;
  _count?: Maybe<SoldItemCountAggregate>;
  _max?: Maybe<SoldItemMaxAggregate>;
  _min?: Maybe<SoldItemMinAggregate>;
  _sum?: Maybe<SoldItemSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  images: Scalars['JSON'];
  name: Scalars['String'];
  price: Scalars['Decimal'];
  productId: Scalars['String'];
  quantity: Scalars['Int'];
  transactionId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SoldItemListRelationFilter = {
  every?: Maybe<SoldItemWhereInput>;
  none?: Maybe<SoldItemWhereInput>;
  some?: Maybe<SoldItemWhereInput>;
};

export type SoldItemMaxAggregate = {
  __typename?: 'SoldItemMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Decimal']>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SoldItemMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
  transactionId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SoldItemMinAggregate = {
  __typename?: 'SoldItemMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Decimal']>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SoldItemMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
  transactionId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SoldItemOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type SoldItemOrderByWithAggregationInput = {
  _avg?: Maybe<SoldItemAvgOrderByAggregateInput>;
  _count?: Maybe<SoldItemCountOrderByAggregateInput>;
  _max?: Maybe<SoldItemMaxOrderByAggregateInput>;
  _min?: Maybe<SoldItemMinOrderByAggregateInput>;
  _sum?: Maybe<SoldItemSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  images?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
  transactionId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SoldItemOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  images?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  product?: Maybe<ProductOrderByWithRelationInput>;
  productId?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
  transaction?: Maybe<TransactionOrderByWithRelationInput>;
  transactionId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum SoldItemScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Images = 'images',
  Name = 'name',
  Price = 'price',
  ProductId = 'productId',
  Quantity = 'quantity',
  TransactionId = 'transactionId',
  UpdatedAt = 'updatedAt'
}

export type SoldItemScalarWhereInput = {
  AND?: Maybe<Array<SoldItemScalarWhereInput>>;
  NOT?: Maybe<Array<SoldItemScalarWhereInput>>;
  OR?: Maybe<Array<SoldItemScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  images?: Maybe<JsonFilter>;
  name?: Maybe<StringFilter>;
  price?: Maybe<DecimalFilter>;
  productId?: Maybe<StringFilter>;
  quantity?: Maybe<IntFilter>;
  transactionId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SoldItemScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<SoldItemScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<SoldItemScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<SoldItemScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  images?: Maybe<JsonWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  price?: Maybe<DecimalWithAggregatesFilter>;
  productId?: Maybe<StringWithAggregatesFilter>;
  quantity?: Maybe<IntWithAggregatesFilter>;
  transactionId?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type SoldItemSumAggregate = {
  __typename?: 'SoldItemSumAggregate';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Decimal']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type SoldItemSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
};

export type SoldItemUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  images?: Maybe<Scalars['JSON']>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<DecimalFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutSoldItemsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  transaction?: Maybe<TransactionUpdateOneRequiredWithoutSoldItemsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SoldItemUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  images?: Maybe<Scalars['JSON']>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<DecimalFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SoldItemUpdateManyWithWhereWithoutProductInput = {
  data: SoldItemUpdateManyMutationInput;
  where: SoldItemScalarWhereInput;
};

export type SoldItemUpdateManyWithWhereWithoutTransactionInput = {
  data: SoldItemUpdateManyMutationInput;
  where: SoldItemScalarWhereInput;
};

export type SoldItemUpdateManyWithoutProductInput = {
  connect?: Maybe<Array<SoldItemWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SoldItemCreateOrConnectWithoutProductInput>>;
  create?: Maybe<Array<SoldItemCreateWithoutProductInput>>;
  createMany?: Maybe<SoldItemCreateManyProductInputEnvelope>;
  delete?: Maybe<Array<SoldItemWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SoldItemScalarWhereInput>>;
  disconnect?: Maybe<Array<SoldItemWhereUniqueInput>>;
  set?: Maybe<Array<SoldItemWhereUniqueInput>>;
  update?: Maybe<Array<SoldItemUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<SoldItemUpdateManyWithWhereWithoutProductInput>>;
  upsert?: Maybe<Array<SoldItemUpsertWithWhereUniqueWithoutProductInput>>;
};

export type SoldItemUpdateManyWithoutTransactionInput = {
  connect?: Maybe<Array<SoldItemWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SoldItemCreateOrConnectWithoutTransactionInput>>;
  create?: Maybe<Array<SoldItemCreateWithoutTransactionInput>>;
  createMany?: Maybe<SoldItemCreateManyTransactionInputEnvelope>;
  delete?: Maybe<Array<SoldItemWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SoldItemScalarWhereInput>>;
  disconnect?: Maybe<Array<SoldItemWhereUniqueInput>>;
  set?: Maybe<Array<SoldItemWhereUniqueInput>>;
  update?: Maybe<Array<SoldItemUpdateWithWhereUniqueWithoutTransactionInput>>;
  updateMany?: Maybe<Array<SoldItemUpdateManyWithWhereWithoutTransactionInput>>;
  upsert?: Maybe<Array<SoldItemUpsertWithWhereUniqueWithoutTransactionInput>>;
};

export type SoldItemUpdateWithWhereUniqueWithoutProductInput = {
  data: SoldItemUpdateWithoutProductInput;
  where: SoldItemWhereUniqueInput;
};

export type SoldItemUpdateWithWhereUniqueWithoutTransactionInput = {
  data: SoldItemUpdateWithoutTransactionInput;
  where: SoldItemWhereUniqueInput;
};

export type SoldItemUpdateWithoutProductInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  images?: Maybe<Scalars['JSON']>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<DecimalFieldUpdateOperationsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  transaction?: Maybe<TransactionUpdateOneRequiredWithoutSoldItemsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SoldItemUpdateWithoutTransactionInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  images?: Maybe<Scalars['JSON']>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<DecimalFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutSoldItemsInput>;
  quantity?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SoldItemUpsertWithWhereUniqueWithoutProductInput = {
  create: SoldItemCreateWithoutProductInput;
  update: SoldItemUpdateWithoutProductInput;
  where: SoldItemWhereUniqueInput;
};

export type SoldItemUpsertWithWhereUniqueWithoutTransactionInput = {
  create: SoldItemCreateWithoutTransactionInput;
  update: SoldItemUpdateWithoutTransactionInput;
  where: SoldItemWhereUniqueInput;
};

export type SoldItemWhereInput = {
  AND?: Maybe<Array<SoldItemWhereInput>>;
  NOT?: Maybe<Array<SoldItemWhereInput>>;
  OR?: Maybe<Array<SoldItemWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  images?: Maybe<JsonFilter>;
  name?: Maybe<StringFilter>;
  price?: Maybe<DecimalFilter>;
  product?: Maybe<ProductRelationFilter>;
  productId?: Maybe<StringFilter>;
  quantity?: Maybe<IntFilter>;
  transaction?: Maybe<TransactionRelationFilter>;
  transactionId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SoldItemWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  _count?: Maybe<TransactionCount>;
  createdAt: Scalars['DateTime'];
  customer: User;
  customerid: Scalars['Int'];
  id: Scalars['String'];
  paymentStatus: Scalars['String'];
  soldItems: Array<SoldItem>;
  totalAmount: Scalars['Decimal'];
  updatedAt: Scalars['DateTime'];
};


export type TransactionSoldItemsArgs = {
  cursor?: Maybe<SoldItemWhereUniqueInput>;
  distinct?: Maybe<Array<SoldItemScalarFieldEnum>>;
  orderBy?: Maybe<Array<SoldItemOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SoldItemWhereInput>;
};

export type TransactionAvgAggregate = {
  __typename?: 'TransactionAvgAggregate';
  customerid?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type TransactionAvgOrderByAggregateInput = {
  customerid?: Maybe<SortOrder>;
  totalAmount?: Maybe<SortOrder>;
};

export type TransactionCount = {
  __typename?: 'TransactionCount';
  soldItems: Scalars['Int'];
};

export type TransactionCountAggregate = {
  __typename?: 'TransactionCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  customerid: Scalars['Int'];
  id: Scalars['Int'];
  paymentStatus: Scalars['Int'];
  totalAmount: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TransactionCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  customerid?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  paymentStatus?: Maybe<SortOrder>;
  totalAmount?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TransactionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  customer: UserCreateNestedOneWithoutPurchasesInput;
  id?: Maybe<Scalars['String']>;
  paymentStatus: Scalars['String'];
  soldItems?: Maybe<SoldItemCreateNestedManyWithoutTransactionInput>;
  totalAmount: Scalars['Decimal'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransactionCreateManyCustomerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  paymentStatus: Scalars['String'];
  totalAmount: Scalars['Decimal'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransactionCreateManyCustomerInputEnvelope = {
  data: Array<TransactionCreateManyCustomerInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TransactionCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  customerid: Scalars['Int'];
  id?: Maybe<Scalars['String']>;
  paymentStatus: Scalars['String'];
  totalAmount: Scalars['Decimal'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransactionCreateNestedManyWithoutCustomerInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TransactionCreateOrConnectWithoutCustomerInput>>;
  create?: Maybe<Array<TransactionCreateWithoutCustomerInput>>;
  createMany?: Maybe<TransactionCreateManyCustomerInputEnvelope>;
};

export type TransactionCreateNestedOneWithoutSoldItemsInput = {
  connect?: Maybe<TransactionWhereUniqueInput>;
  connectOrCreate?: Maybe<TransactionCreateOrConnectWithoutSoldItemsInput>;
  create?: Maybe<TransactionCreateWithoutSoldItemsInput>;
};

export type TransactionCreateOrConnectWithoutCustomerInput = {
  create: TransactionCreateWithoutCustomerInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutSoldItemsInput = {
  create: TransactionCreateWithoutSoldItemsInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateWithoutCustomerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  paymentStatus: Scalars['String'];
  soldItems?: Maybe<SoldItemCreateNestedManyWithoutTransactionInput>;
  totalAmount: Scalars['Decimal'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransactionCreateWithoutSoldItemsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  customer: UserCreateNestedOneWithoutPurchasesInput;
  id?: Maybe<Scalars['String']>;
  paymentStatus: Scalars['String'];
  totalAmount: Scalars['Decimal'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransactionGroupBy = {
  __typename?: 'TransactionGroupBy';
  _avg?: Maybe<TransactionAvgAggregate>;
  _count?: Maybe<TransactionCountAggregate>;
  _max?: Maybe<TransactionMaxAggregate>;
  _min?: Maybe<TransactionMinAggregate>;
  _sum?: Maybe<TransactionSumAggregate>;
  createdAt: Scalars['DateTime'];
  customerid: Scalars['Int'];
  id: Scalars['String'];
  paymentStatus: Scalars['String'];
  totalAmount: Scalars['Decimal'];
  updatedAt: Scalars['DateTime'];
};

export type TransactionListRelationFilter = {
  every?: Maybe<TransactionWhereInput>;
  none?: Maybe<TransactionWhereInput>;
  some?: Maybe<TransactionWhereInput>;
};

export type TransactionMaxAggregate = {
  __typename?: 'TransactionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  customerid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  paymentStatus?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransactionMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  customerid?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  paymentStatus?: Maybe<SortOrder>;
  totalAmount?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TransactionMinAggregate = {
  __typename?: 'TransactionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  customerid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  paymentStatus?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransactionMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  customerid?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  paymentStatus?: Maybe<SortOrder>;
  totalAmount?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TransactionOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type TransactionOrderByWithAggregationInput = {
  _avg?: Maybe<TransactionAvgOrderByAggregateInput>;
  _count?: Maybe<TransactionCountOrderByAggregateInput>;
  _max?: Maybe<TransactionMaxOrderByAggregateInput>;
  _min?: Maybe<TransactionMinOrderByAggregateInput>;
  _sum?: Maybe<TransactionSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  customerid?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  paymentStatus?: Maybe<SortOrder>;
  totalAmount?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TransactionOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  customer?: Maybe<UserOrderByWithRelationInput>;
  customerid?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  paymentStatus?: Maybe<SortOrder>;
  soldItems?: Maybe<SoldItemOrderByRelationAggregateInput>;
  totalAmount?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TransactionRelationFilter = {
  is?: Maybe<TransactionWhereInput>;
  isNot?: Maybe<TransactionWhereInput>;
};

export enum TransactionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Customerid = 'customerid',
  Id = 'id',
  PaymentStatus = 'paymentStatus',
  TotalAmount = 'totalAmount',
  UpdatedAt = 'updatedAt'
}

export type TransactionScalarWhereInput = {
  AND?: Maybe<Array<TransactionScalarWhereInput>>;
  NOT?: Maybe<Array<TransactionScalarWhereInput>>;
  OR?: Maybe<Array<TransactionScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  customerid?: Maybe<IntFilter>;
  id?: Maybe<StringFilter>;
  paymentStatus?: Maybe<StringFilter>;
  totalAmount?: Maybe<DecimalFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TransactionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<TransactionScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<TransactionScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<TransactionScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  customerid?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  paymentStatus?: Maybe<StringWithAggregatesFilter>;
  totalAmount?: Maybe<DecimalWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type TransactionSumAggregate = {
  __typename?: 'TransactionSumAggregate';
  customerid?: Maybe<Scalars['Int']>;
  totalAmount?: Maybe<Scalars['Decimal']>;
};

export type TransactionSumOrderByAggregateInput = {
  customerid?: Maybe<SortOrder>;
  totalAmount?: Maybe<SortOrder>;
};

export type TransactionUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  customer?: Maybe<UserUpdateOneRequiredWithoutPurchasesInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<StringFieldUpdateOperationsInput>;
  soldItems?: Maybe<SoldItemUpdateManyWithoutTransactionInput>;
  totalAmount?: Maybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<StringFieldUpdateOperationsInput>;
  totalAmount?: Maybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpdateManyWithWhereWithoutCustomerInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithoutCustomerInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TransactionCreateOrConnectWithoutCustomerInput>>;
  create?: Maybe<Array<TransactionCreateWithoutCustomerInput>>;
  createMany?: Maybe<TransactionCreateManyCustomerInputEnvelope>;
  delete?: Maybe<Array<TransactionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TransactionScalarWhereInput>>;
  disconnect?: Maybe<Array<TransactionWhereUniqueInput>>;
  set?: Maybe<Array<TransactionWhereUniqueInput>>;
  update?: Maybe<Array<TransactionUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: Maybe<Array<TransactionUpdateManyWithWhereWithoutCustomerInput>>;
  upsert?: Maybe<Array<TransactionUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type TransactionUpdateOneRequiredWithoutSoldItemsInput = {
  connect?: Maybe<TransactionWhereUniqueInput>;
  connectOrCreate?: Maybe<TransactionCreateOrConnectWithoutSoldItemsInput>;
  create?: Maybe<TransactionCreateWithoutSoldItemsInput>;
  update?: Maybe<TransactionUpdateWithoutSoldItemsInput>;
  upsert?: Maybe<TransactionUpsertWithoutSoldItemsInput>;
};

export type TransactionUpdateWithWhereUniqueWithoutCustomerInput = {
  data: TransactionUpdateWithoutCustomerInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithoutCustomerInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<StringFieldUpdateOperationsInput>;
  soldItems?: Maybe<SoldItemUpdateManyWithoutTransactionInput>;
  totalAmount?: Maybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpdateWithoutSoldItemsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  customer?: Maybe<UserUpdateOneRequiredWithoutPurchasesInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentStatus?: Maybe<StringFieldUpdateOperationsInput>;
  totalAmount?: Maybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpsertWithWhereUniqueWithoutCustomerInput = {
  create: TransactionCreateWithoutCustomerInput;
  update: TransactionUpdateWithoutCustomerInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpsertWithoutSoldItemsInput = {
  create: TransactionCreateWithoutSoldItemsInput;
  update: TransactionUpdateWithoutSoldItemsInput;
};

export type TransactionWhereInput = {
  AND?: Maybe<Array<TransactionWhereInput>>;
  NOT?: Maybe<Array<TransactionWhereInput>>;
  OR?: Maybe<Array<TransactionWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  customer?: Maybe<UserRelationFilter>;
  customerid?: Maybe<IntFilter>;
  id?: Maybe<StringFilter>;
  paymentStatus?: Maybe<StringFilter>;
  soldItems?: Maybe<SoldItemListRelationFilter>;
  totalAmount?: Maybe<DecimalFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  password: Scalars['String'];
  purchases: Array<Transaction>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};


export type UserPurchasesArgs = {
  cursor?: Maybe<TransactionWhereUniqueInput>;
  distinct?: Maybe<Array<TransactionScalarFieldEnum>>;
  orderBy?: Maybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransactionWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  purchases: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  password: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password: Scalars['String'];
  purchases?: Maybe<TransactionCreateNestedManyWithoutCustomerInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  password: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateNestedOneWithoutPurchasesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPurchasesInput>;
  create?: Maybe<UserCreateWithoutPurchasesInput>;
};

export type UserCreateOrConnectWithoutPurchasesInput = {
  create: UserCreateWithoutPurchasesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutPurchasesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: Maybe<UserAvgOrderByAggregateInput>;
  _count?: Maybe<UserCountOrderByAggregateInput>;
  _max?: Maybe<UserMaxOrderByAggregateInput>;
  _min?: Maybe<UserMinOrderByAggregateInput>;
  _sum?: Maybe<UserSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  purchases?: Maybe<TransactionOrderByRelationAggregateInput>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Password = 'password',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  username?: Maybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UserUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  purchases?: Maybe<TransactionUpdateManyWithoutCustomerInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutPurchasesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPurchasesInput>;
  create?: Maybe<UserCreateWithoutPurchasesInput>;
  update?: Maybe<UserUpdateWithoutPurchasesInput>;
  upsert?: Maybe<UserUpsertWithoutPurchasesInput>;
};

export type UserUpdateWithoutPurchasesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutPurchasesInput = {
  create: UserCreateWithoutPurchasesInput;
  update: UserUpdateWithoutPurchasesInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  password?: Maybe<StringFilter>;
  purchases?: Maybe<TransactionListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  username?: Maybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: AuthMessage };

export type ProductsQueryVariables = Exact<{
  orderBy?: Maybe<Array<ProductOrderByWithRelationInput> | ProductOrderByWithRelationInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, createdAt: any, updatedAt: any, stock: number, price: any, name: string, images: any }> };


export const LoginDocument = `
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => 
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );
export const ProductsDocument = `
    query products($orderBy: [ProductOrderByWithRelationInput!], $take: Int, $skip: Int) {
  products(orderBy: $orderBy, take: $take, skip: $skip) {
    id
    createdAt
    updatedAt
    stock
    price
    name
    images
  }
}
    `;
export const useProductsQuery = <
      TData = ProductsQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: ProductsQueryVariables, 
      options?: UseQueryOptions<ProductsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => 
    useQuery<ProductsQuery, TError, TData>(
      variables === undefined ? ['products'] : ['products', variables],
      fetcher<ProductsQuery, ProductsQueryVariables>(client, ProductsDocument, variables, headers),
      options
    );