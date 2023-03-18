import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer p2oEWN9KHLbfCgGsMhVzvEzKe5qZu368mit6-hJ13VhjB_pZHsLKID5g5l6DDBc_fmvaui8_KtaxDWa2fcO2Z9SrwbBgW-L24JgAhm3JVfRCkaj2h5N6PMZ2F2sVZHYx'
    }
});