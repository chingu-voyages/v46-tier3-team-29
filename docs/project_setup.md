## Requirements

- Bun >= 1.0 (Bun is a CLI tool for creating and managing projects)
- Node >= 14.17.0

## Installation

Install dependencies

`bun install`

Generate prisma client

`bun prisma:generate`

Create env file

- In the root of the project create a file called `.env.local`
- Add the following to the file, and replace `<username>` and `<password>` with your own credentials

`DATABASE_URL="mongodb+srv://<username>:<password>@racers-db.shysvvd.mongodb.net/racers-db?retryWrites=true&w=majority"`

Test db connection

`bun db:seed`
