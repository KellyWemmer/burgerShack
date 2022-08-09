import { burgersService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";
export class BurgersController extends BaseController {

    constructor() {
        super('/api/burgers')

        this.router
            .get('', this.getBurgers)
            .post('', this.createBurger)
    }

    async getBurgers(req, res, next) {
        try {
           let burgers = await burgersService.getBurgers()
           res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(req, res, next) {
        try {
            let burgerData = req.body 
            let burger = await burgersService.createBurger(burgerData)
            res.send(burger)           
        } catch (error) {
            next(error)
        }
    }

}