## Setting up TypeORM

## Migrations

**Generate Migrations**

```
npm run typeorm migration:generate -- -n <mirgration name>
```

**Run Migrations**

```
npm run typeorm migration:run
```

**Undo Migrations**

```
npm run typeorm migration:revert
```

**Check if Migration was executed**

```
npm run typeorm migration:show
```

## Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command
