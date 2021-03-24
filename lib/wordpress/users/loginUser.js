import {initializeWpApollo} from '@/lib/wordpress/connector'
import mutationLoginUser from './mutationLoginUser'

/**
 * Log user into WP.
 *
 * @author WebDevStudios
 * @param {string} username Username
 * @param {string} password Password
 * @return {object}         User data or error object.
 */
export default async function loginUser(username, password) {
  const apolloClient = initializeWpApollo()

  return apolloClient
    .mutate({
      mutation: mutationLoginUser,
      variables: {
        username,
        password
      }
    })
    .then(
      (response) =>
        response?.data?.login?.user ?? {
          error: true,
          errorMessage: `An error occurred while attempting to login.`
        }
    )
    .catch((error) => {
      return {
        error: true,
        errorMessage: error.message
      }
    })
}