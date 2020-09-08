/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from '@vtex/gatsby-plugin-graphql'
import { Button, Grid } from '@vtex/store-ui'
import React, { FC, Fragment } from 'react'

import {
  SearchQuery,
  SearchQueryQuery,
} from './__generated__/SearchQuery.graphql'
import OverlaySpinner from './OverlaySpinner'
import Page from './Page'
import { useSearch } from '../../sdk/search/useSearch'

interface Props {
  initialData: SearchQueryQuery | undefined
}

const List: FC<Props> = ({ initialData }) => {
  const { data, fetchMore, isLoadingMore, isReachingEnd } = useSearch({
    query: SearchQuery,
    initialData,
  })

  if (!data) {
    return <OverlaySpinner />
  }

  return (
    <Fragment>
      <Grid my={4} gap={3} columns={[2, 2, 3, 5]}>
        {data.map((searchQuery, index) => (
          <Page
            key={`summary-page-${index}`}
            products={searchQuery!.vtex.productSearch!.products!}
          />
        ))}
      </Grid>
      <Button
        variant="loadMore"
        onClick={(e) => {
          ;(e.target as any).blur?.()
          fetchMore()
        }}
        disabled={isReachingEnd || isLoadingMore}
      >
        {isLoadingMore ? 'Loading...' : 'More'}
      </Button>
    </Fragment>
  )
}

export const query = gql`
  query SearchQuery(
    $query: String
    $map: String
    $from: Int
    $to: Int
    $orderBy: String
  ) {
    vtex {
      productSearch(
        query: $query
        map: $map
        from: $from
        to: $to
        orderBy: $orderBy
      ) {
        products {
          ...ProductSummary_syncProduct
        }
      }
    }
  }
`

export default List
