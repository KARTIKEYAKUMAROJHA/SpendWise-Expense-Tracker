# SpendWise Expense Tracker - Database

## Setup Instructions

### 1. Create Database

Open MySQL command line or client and run:

```bash
mysql -u root -p
```

Then execute the schema:

```bash
source schema.sql
```

Or copy and paste the contents of `schema.sql` into your MySQL client.

### 2. Verify Installation

```sql
USE spendwise_db;
SHOW TABLES;
DESC users;
DESC expenses;
```

## Database Details

**Database Name:** `spendwise_db`
**User:** `root`
**Password:** `root`

### Tables

#### Users Table
- `id` - Primary key
- `name` - User's full name
- `email` - Unique email address
- `password` - Encrypted password
- `created_at` - Account creation timestamp

#### Expenses Table
- `id` - Primary key
- `title` - Expense title
- `amount` - Expense amount (decimal)
- `category` - Expense category
- `date` - Expense date
- `note` - Optional note
- `user_id` - Foreign key to users table
- `created_at` - Record creation timestamp

## Indexes

- `users.email` - For fast user lookups
- `expenses.user_id` - For user expense queries
- `expenses.user_id, date` - For date-range queries
- `expenses.category` - For category filtering

## Security Notes

- Passwords are stored encrypted in the backend
- All queries use parameterized statements
- Foreign key constraints enforce data integrity
