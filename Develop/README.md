# E-Commerce Backend

## Description

This is the backend of an e-commerce website, built using Express.js and Sequelize, that allows users to interact with products, categories, and tags. It provides API endpoints for creating, reading, updating, and deleting products, categories, and tags. The application uses MySQL as its database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Database Models](#database-models)
- [Associations](#associations)
- [Video Walkthrough](#video-walkthrough)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the necessary dependencies, run the following command: npm start
Run in terminal: npm run seed
The server will run on port 3001 by default.

## Endpoints

### Products

- `GET /api/products`: Get all products with their associated category and tags.
- `GET /api/products/:id`: Get a single product by its ID with its associated category and tags.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update a product by its ID.
- `DELETE /api/products/:id`: Delete a product by its ID.

### Categories

- `GET /api/categories`: Get all categories with their associated products.
- `GET /api/categories/:id`: Get a single category by its ID with its associated products.
- `POST /api/categories`: Create a new category.
- `PUT /api/categories/:id`: Update a category by its ID.
- `DELETE /api/categories/:id`: Delete a category by its ID.

### Tags

- `GET /api/tags`: Get all tags with their associated products.
- `GET /api/tags/:id`: Get a single tag by its ID with its associated products.
- `POST /api/tags`: Create a new tag.
- `PUT /api/tags/:id`: Update a tag by its ID.
- `DELETE /api/tags/:id`: Delete a tag by its ID.

## Database Models

The application uses four database models:

- `Product`
- `Category`
- `Tag`
- `ProductTag`

## Associations

- A product belongs to a category (many-to-one).
- A category has many products (one-to-many).
- A product can have multiple tags, and a tag can be associated with multiple products (many-to-many through the `ProductTag` model).

## Video Walkthrough

[Link to Video Walkthrough](#) - Add a link to your video walkthrough here.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.a
