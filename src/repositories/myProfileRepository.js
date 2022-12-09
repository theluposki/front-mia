import axios from 'axios'

export const MyProfileRepository = {

    async getMyProfile() {
      const URL = "/profiles/my"
      const TOKEN = localStorage.getItem("token")

      const result = axios.get(URL,{
        headers: {
          'Authorization': `Bearer ${TOKEN}`
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