import axios from "axios";

export default class PostService {
    static async getPageData(url) {
        try {
            const responce = await axios.get(url)
                .then((responce) => console.log(responce.data.current))

            return responce
        } catch (e) {
            window.alert(e.code)
        }
    }
}
