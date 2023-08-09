import { useQuery, gql, useMutation } from '@apollo/client'

export const QUICKLINKS_QUERY = gql`
  query QuickLinkCollection($first: Int) { #$after:String, after:$after
    quickLinkCollection(first: $first , orderBy:{createdAt:DESC}) {
    edges {
      node {
        link
        quickNote
        updatedAt
        id
        createdAt
      }
    }
    pageInfo {
        hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
  }
  }
`
export const USERS_QUERY = gql`
  query @live {
    userCollection(first: 10) {
      edges {
        node {
          name
          email
        }
      }
    }
  }
`



// mutation QuickLinkDelete {
//     quickLinkDelete(by: {id:"quicklink_01H7CQAM47H68PMAAB0336ZJ19"}) {
//       deletedId
//     }
//   }
// query QuickLinkCollection {
//     quickLinkCollection(first: 10) {
//       edges {
//         node {
//           link
//           quickNotes
//           updatedAt
//           id
//           createdAt
//         }
//       }
//       pageInfo {
//         hasPreviousPage
//         hasNextPage
//       }
//     }
//   }

//   mutation QuickLinkCreate {
//     quickLinkCreate(input: {link:"https://google.com", quickNotes:"first try to check"}) {
//       quickLink {
//         link
//         quickNotes
//       }
//     }
//   }


export const CREATE_QUICKLINK__MUTATION = gql`
  mutation QuickLinkCreate($link: String!, $quickNote: String!) {
    quickLinkCreate(input: { link: $link, quickNote: $quickNote }) {
        quickLink {
            link
            quickNote
        }
    }
  }
`
export const UPDATE_QUICKLINK__MUTATION = gql`
mutation QuickLinkUpdate ($id: ID, $link:String, $quickNote: String ){
  quickLinkUpdate(by: {id:$id}, input:{link:$link, quickNote: $quickNote}) {
    quickLink {
      link
      quickNote
      id
      updatedAt
      createdAt
    }
  }
}
`;