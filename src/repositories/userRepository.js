import axios from 'axios'

export const UserRepository = {
    async signIn(email, password) {
        const URL = "/users/auth"

        const result = axios.post(URL, { 
          email: email, 
          password: password
        }).then(data => {
            return data.data
        }).catch((error) => {
            if (error.response) {
              console.error(error.response.data.error);
              return error.response.data.error
            } 
        });

        return result

    },
    async signUp() {

    },
    async signOut() {

    },
    async getMyUser(token) {
      const URL = "/users/my"

      const result = axios.get(URL,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(data => {
          return data.data
      }).catch((error) => {
          if (error.response) {
            console.error(error.response.data.error);
            return error.response.data.error
          } 
      });

      return result

  },
}