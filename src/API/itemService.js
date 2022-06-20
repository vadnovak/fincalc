import axios from "axios";

export default class itemService {
    static async getAll(limit = 5, page = 1) {
        const response = await axios.get('http://localhost:3001/items', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }
}