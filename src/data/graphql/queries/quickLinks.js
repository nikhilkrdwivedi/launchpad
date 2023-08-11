import { useQuery, gql, useMutation } from '@apollo/client'

export const QUICKLINKS_QUERY = gql`
  query QuickLinkCollection($first: Int, $after: String, $authorId: String) {
    quickLinkSearch(first: $first , after: $after, filter: {authorId:{eq:$authorId}},) {# orderBy:{createdAt:ASC}
    edges {
      node {
        link
        quickNote
        authorId
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
  mutation QuickLinkCreate($link: String!, $quickNote: String!,$authorId: String!) {
    quickLinkCreate(input: { link: $link, quickNote: $quickNote,authorId:$authorId }) {
        quickLink {
            link
            quickNote
        }
    }
  }
`
export const UPDATE_QUICKLINK__MUTATION = gql`
mutation QuickLinkUpdate ($id: ID, $link:String, $quickNote: String,$authorId: String! ){
  quickLinkUpdate(by: {id:$id}, input:{link:$link, quickNote: $quickNote,authorId:$authorId}) {
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