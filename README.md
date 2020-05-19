## Payment Gateway - Customer Transactions API
##### Description  
This implementation was carried through with the following technical specifications:
- PHP Framework Laravel 7
- remotemysql.com was used as database host
- Laravel builtin Web Server.
- ReacJs fof front end.

### Project Requirements.
1. Task description
Let’s say you want to start a new pizza delivery business. Please create a web application for
ordering pizza for your clients, which contains a shopping cart. Take the pizza order and the
delivery address and contact details for the client. Login is not required but could be available
for checking the history of orders.
2. Requirements
• Your clients should be able to order pizzas from the menu
• The menu contains at least 8 pizzas
• You can decide what else you want in the menu
• Processing order/etc. with payment is NOT required. Concentrate on the interface to your
pizza customer up to the point the customer confirms his order.
• The pizza order process should cover ordering single or several pizzas with definition of the
quantity and calucation of a total price in Euros and US$ also adding delivery costs to the bill.
3. Technology (preferred as we use them in our company)
• Frontend – ReactJS
• Backend – Laravel
• Database – MySQL
• You get extra points for adding testing (for both frontend and backend);
• Design - you are free to use any framework or library whatever you want but keep in mind
we primarly judge functionality and workflow. Less is more.
4. Delivery format
• Please provide the repository links separately for frontend and backend with Demo
application URL (e.g. in Heroku).
• The solution has to be testable by a non-technical person
5. Resources
• Deployment of the application: Heroku
• Free mysql db host (https://remotemysql.com/);
• Use Git as code source management tool (following Git Flow will be assessed)
• Add Readme.md file

### Installation

After cloning the repository on the master branch, carry on the following
- Cloning the repository.
- cd into project directory.
- execute `composer install` (https://getcomposer.org/) if not installed.
- Create a database with name 'payment-gateway' and adjust the database host, port, username, password variables on the `.env.example`.
- rename `.env.example` to `.env`.
- execute `php artisan migrate:install`.
- execute `php artisan migrate`.
- execute `npm install && npm run dev` (nodejs.org) if not installed for the assets build.
- run local server `php artisan serve` and follow the link. 
- If you are having issues setting up, a docker configuration could follow up if needed. Please email`redilinxa@gmail.com` for support.


### Usage
- Open the route `http://laravel-yummi-pizza.herokuapp.com/register`.
- Register a user. and login.
- Follow the flow until the end. if you have not completed all the flow to ordering the pizzas.
- After the completion of the order the system will notify you and send you to the menu page again.