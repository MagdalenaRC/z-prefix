const express = require('express');

const app = express();
const cors =require('cors');
const PORT = 3001;
const knex = require('knex')(require('../knexfile.js')['development']);

app.use(express.json());
app.use(cors());

//gets all items for every user
app.get('/', function(req, res) {
    knex('item')
        .select('*')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(500).json({
            message: 'An error occurred while fetching the workouts',
            error: err,
            })
        );
})

//gets all items under a specific user
app.get('/myitems/:user_account_id', function(req, res) {
    const userAccountId = req.params.user_account_id;
    knex('item')
        .select('*')
        .where('user_account_id', userAccountId)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(500).json({
            message: 'An error occurred while fetching the items under that user account',
            error: err,
            })
        );
})

//check login info of the user and returns the user ID
app.post('/login/', (req, res) => {
    const { username, password } = req.body;
    knex('user_account')
    .select('id')
    .where('username', username)
    .where('password', password)
    .then((data) => {
        if (data.length === 0) {
        return res.status(404).json({
            message: 'User name and/or passowrd are incorrect',
        });
        }
        res.status(200).json(data);
    })
    .catch((err) =>
        res.status(500).json({
        message: 'An error occurred while fetching the login',
        error: err,
        })
    );
})

//post new item into item table under user account
app.post('/', (req, res) => {
    const { user_account_id, itemname, description, quantity } = req.body;
    knex('item')
    .insert({ user_account_id, itemname, description, quantity })
    .returning('id')
    .then(() =>
        res.status(201).json({
        message: 'Workout created successfully',
        })
    )
    .catch((err) =>
        res.status(500).json({
        message: 'An error occurred while creating the item',
        error: err,
        })
    );
})

//create user account (post into user table)
app.post('/createuser', (req, res) => {
    const { firstname, lastname, username, password } = req.body;
    console.log( firstname, lastname, username, password);
    knex('user_account')
        .insert({ firstname, lastname, username, password })
        .then(() => {
            res.status(201).json({message: "User account created."})
        })
        .catch((err) =>
        res.status(500).json({
        message: 'An error occurred while creating user',
        error: err,
        })
    );
})

app.delete('/myitems/:item_id', function(req, res) {
    const itemId  = req.params.item_id
    knex('item')
        .where('id', itemId)
        .del()
        .then((data) => {
            if(data === 0) {
                return res.status(404).json({
                    message: "Item not found",
                });  
            }
            res.status(200).json({
                message: 'An error occured while deleting the item'
            })
        })
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
    });

