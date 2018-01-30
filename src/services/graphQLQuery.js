import gql from 'graphql-tag'

export const getGithubActivity = gql`
  query {
    user(login: "${process.env.REACT_APP_USERNAME}") {
      following(last: 100) {
        totalCount
        nodes {
          login
          name
          avatarUrl
          issueComments(last: 5) {
            nodes {
              repository {
                name
              }
              issue {
                number
              }
              bodyHTML
              url
              createdAt
            }
          }
          pullRequests(last: 5) {
            nodes {
              repository {
                name
              }
              bodyHTML
              url
              number
              createdAt
            }
          }
          commitComments(last: 5) {
            nodes {
              repository {
                name
              }
              bodyHTML
              url
              createdAt
            }
          }
          starredRepositories(last: 5) {
            nodes {
              nameWithOwner
              createdAt
            }
          }
        }
      }
    }
  }
`

export const getProfileInfo = gql`
query {
  user(login: "${process.env.REACT_APP_USERNAME}") {
      avatarUrl
      login
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
  }
}
`
