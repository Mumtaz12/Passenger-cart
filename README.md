# E-Commerce Website with Next.js, Ant Design, MobX

This project is a simple e-commerce website built using Next.js, Ant Design, and MobX for state management. It showcases ferry products and allows users to add products to their shopping cart while collecting passenger information.

## Features

- Display 4 ferry products with descriptions and images.
- Use MobX for state management, managing a shopping cart.
- Allow users to add products to the cart and collect passenger information.
- Implement Incremental Static Regeneration (ISR) to fetch product data.
- Showcase product images from a "public/images" folder.

## Technologies Used

- Next.js
- CSS/Ant Design
- MobX
- React
- JavaScript/ES6
- HTML/CSS

## Getting Started

Follow these steps to run the project on your local machine:

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/your-e-commerce-app.git
   cd your-e-commerce-app
## Install project dependencies:

  bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your web browser and visit http://localhost:3000 to see the website.

## Project Structure
src folder: Contains the source code for the Next.js application.
components: React components, including the ProductCard.
pages: Next.js pages, including the home page.
stores: MobX store for managing the cart state.
public folder: Contains static assets, including product images.
styles folder: Global CSS and styling.
MobX Store
The CartStore in the stores directory manages the cart state, allowing users to add products.

## Data Fetching and ISR
Product data is fetched using ISR from a JSON file hosted on a public GitHub repository. Editing the JSON file allows for updating product information on the website without a full rebuild.

## Project Customization
You can customize this project by adding more products, modifying styles, or expanding the functionality. Feel free to explore and enhance it according to based on Customer requirements.

## Author
Name  Mohammad Mumtaz
GitHub: LLink Here<a href="https://github.com/Mumtaz12/Passenger-cart">
## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
