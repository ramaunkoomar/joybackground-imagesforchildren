const initialState = {
    posts: {
        results: [],
        count: 0,
        next: null,
        previous: null
    },
    images:{
        list: [],
        hasNext: true,
    },
    favourites: {
        list: [],
    },
    tags: {
        list: [],
    }
};

export default initialState;
