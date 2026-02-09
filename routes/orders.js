// API endpoints for handling orders

const express = require('express');
const router = express.Router();

// Mock database for orders
let orders = [];

// Create a new order
router.post('/', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.status(201).json(order);
});

// Get all orders
router.get('/', (req, res) => {
    res.status(200).json(orders);
});

// Get a specific order by ID
router.get('/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Order not found');
    res.status(200).json(order);
});

// Update an existing order by ID
router.put('/:id', (req, res) => {
    let order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Order not found');
    order = {...order, ...req.body};
    res.status(200).json(order);
});

// Delete an order by ID
router.delete('/:id', (req, res) => {
    orders = orders.filter(o => o.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;