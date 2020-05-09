Customers API

Base URL - https://api-customers-node.herokuapp.com/

GET - /customers - Get all customers<br>
GET - /customer/:id - Get customer of specific id<br>
DELETE - /customer/:id - Delete customer of specific id<br>

POST - /customer - Create new customer<br>
customer = {<br>
  name: {
    type: String,
    require: true
  },<br>
  age: {
    type: Number,
    require: true
  },<br>
  address: {
    type: String,
    require: false
  }<br>
}
