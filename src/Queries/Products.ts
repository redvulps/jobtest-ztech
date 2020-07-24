import { useQuery, gql } from "@apollo/client";

export const useQueryProducts = (
  id: number,
  search: string,
  categoryId?: number
) =>
  useQuery(
    gql`
      query poc($id: ID!, $categoryId: Int, $search: String) {
        poc(id: $id) {
          id
          products(categoryId: $categoryId, search: $search) {
            id
            title
            rgb
            images {
              url
            }
            productVariants {
              availableDate
              productVariantId
              price
              inventoryItemId
              shortDescription
              title
              published
              volume
              volumeUnit
              description
              subtitle
              components {
                id
                productVariantId
                productVariant {
                  id
                  title
                  description
                  shortDescription
                }
              }
            }
          }
        }
      }
    `,
    { variables: { id, categoryId, search } }
  );
