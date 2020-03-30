import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer cltttCydg9xcgOlkp9pb5sQGJd44eBTOzEGkKy8JsIvSXlq4bhQBY6P6JEu6W_bj1w5uiwEjyI4p-cz2kFfEMDod1FKocxJx0yn8gZbc1JJm8sbvtzLuCOifA_iBXnYx',
  },
});
