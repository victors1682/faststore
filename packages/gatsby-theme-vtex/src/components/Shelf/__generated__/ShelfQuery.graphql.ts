/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
}

// Operation related types
export type ShelfQueryQueryVariables = Exact<{
  simulationBehavior?: Maybe<Vtex_SimulationBehavior>
  hideUnavailableItems?: Maybe<Scalars['Boolean']>
  salesChannel?: Maybe<Scalars['String']>
  collection: Maybe<Scalars['String']>
  category?: Maybe<Scalars['String']>
  orderBy?: Maybe<Scalars['String']>
  query: Maybe<Scalars['String']>
  map: Maybe<Scalars['String']>
  from?: Maybe<Scalars['Int']>
  to?: Maybe<Scalars['Int']>
}>

export type ShelfQueryQuery = {
  vtex: {
    products: Maybe<
      Array<
        Maybe<{
          productId: Maybe<string>
          productName: Maybe<string>
          description: Maybe<string>
          linkText: Maybe<string>
          items: Maybe<
            Array<
              Maybe<{
                itemId: Maybe<string>
                images: Maybe<
                  Array<
                    Maybe<{ imageUrl: Maybe<string>; imageText: Maybe<string> }>
                  >
                >
                sellers: Maybe<
                  Array<
                    Maybe<{
                      sellerId: Maybe<string>
                      commercialOffer: Maybe<{
                        availableQuantity: Maybe<number>
                        price: Maybe<number>
                        listPrice: Maybe<number>
                      }>
                    }>
                  >
                >
              }>
            >
          >
        }>
      >
    >
  }
}

// Query Related Code

export const ShelfQuery = {
  query:
    'query ShelfQuery($simulationBehavior: VTEX_SimulationBehavior = default, $hideUnavailableItems: Boolean = true, $salesChannel: String = "1", $collection: String, $category: String = "", $orderBy: String = "OrderByTopSaleDESC", $query: String, $map: String, $from: Int = 0, $to: Int = 9) {\n  vtex {\n    products(query: $query, map: $map, from: $from, to: $to, orderBy: $orderBy, collection: $collection, salesChannel: $salesChannel, hideUnavailableItems: $hideUnavailableItems, category: $category, simulationBehavior: $simulationBehavior) {\n      productId\n      productName\n      description\n      linkText\n      items {\n        itemId\n        images {\n          imageUrl\n          imageText\n        }\n        sellers {\n          sellerId\n          commercialOffer: commertialOffer {\n            availableQuantity: AvailableQuantity\n            price: Price\n            listPrice: ListPrice\n          }\n        }\n      }\n    }\n  }\n}\n',
  sha256Hash:
    '914db2682c76a194fce33c1a7e5a34cbcad75bfe2d85cd96c4cd420f51d146f9',
  operationName: 'ShelfQuery',
}
