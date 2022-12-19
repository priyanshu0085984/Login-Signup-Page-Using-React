import Axios from "axios";

const axios = Axios.create({
  baseURL:
    "http://loginsignup-env.eba-5rc74w62.ap-northeast-1.elasticbeanstalk.com/",
});

export default axios;
