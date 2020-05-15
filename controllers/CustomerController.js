const Customer = require("../models/Customer");

class CustomerController {
    async getAll(req, res) {
        try {
            const customers = await Customer.find().populate({
                path: "data",
                options: { sort: { createdAt: -1 } }
            });

            return res.json(customers);
        } catch (err) {
            next(err);
        }
    }

    async set(req, res) {
        try {
            var newCustomer = {
                name: req.body.name,
                age: req.body.age,
                address: req.body.address
            }

            const customer = await Customer.create(newCustomer);

            return res.json(customer);
        } catch (err) {
            next(err);
        }
    }

    async get(req, res) {
        try {
            const customer = await Customer.findById(req.params.id);

            return res.json(customer);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res) {
        try {
            await Customer.findByIdAndDelete(req.params.id);

            return res.send("Customer deleted with success");
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new CustomerController();