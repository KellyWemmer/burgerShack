import { FAKE_DB} from "../db/FakeDb.js"

class BurgersService {
    async getBurgers() {
        return FAKE_DB.burgers
    }

    async createBurger(burgerData) {
        burgerData.id = FAKE_DB.burgers.length
        FAKE_DB.burgers.push(burgerData)
        return burgerData
    }
}

export const burgersService = new BurgersService()