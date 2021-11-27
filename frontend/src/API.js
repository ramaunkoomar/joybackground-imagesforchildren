import axios from 'axios';
const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
    
baseURL = 'http://127.0.0.1:8000';

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    config => {
        if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {
    getImages = async (page=1, search, tagId) => {
        let url = "/images/?page=" + page;
        if (tagId) {
            url += "&tag=" + tagId;
        }
        if (search) {
            url += "&search" + search;
        }
        const images = await api
            .get(url)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw new Error(error);
            });
        return images;
    }

    getImage = async (name) => {
        const images = await api
          .get("/images/?search="+name)
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            throw new Error(error);
          });
        return images;
      };
    
      getTags = async () => {
        const tags = await api
          .get("/tags/")
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            throw new Error(error);
          });
        return tags;
      };
    
}
