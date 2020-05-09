const Customer = require("../models/Customer");

class CustomerController {
    async getAll(req, res) {
        const customers = await Customer.find().populate({
            path: "files",
            options: { sort: { createdAt: -1 } }
        });

        return res.json(customers);
    }

    async set(req, res) {
        var newCustomer = {
            name: req.body.name,
            age: req.body.age,
            address: req.body.address
        }

        const customer = await Customer.create(newCustomer);

        return res.json(customer);
    }

    async get(req, res) {
        const customer = await Customer.findById(req.params.id).populate({
            path: "files",
            options: { sort: { createdAt: -1 } }
        });

        return res.json(customer);
    }

    async delete(req, res) {
        await Customer.findByIdAndDelete(req.params.id);

        return res.send("Customer deleted with success");
    }
}

module.exports = new CustomerController();