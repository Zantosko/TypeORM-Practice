# Into to TypeORM

## Setting up TypeORM

**Install TypeORM CLI Globally**

```
npm i -g typeorm
```

**Initialize TypeORM Project**

```
typeorm init
```

**Uninstall MySQL Driver and Install PostgreSQL Driver**

```
npm un mysql
npm i pg
```

## ormconfig.json file

```
{
	"type": "postgres",
	"host": "localhost",
	"port": 5432,
	"username": "<postgres username>",
	"password": "<postgres password>",
	"database": "typeorm_tutorial",
	"synchronize": false, (set to true if you want auto migrations)
	"logging": true,
	"entities": ["src/entity/**/*.ts", "./entity/**/*.js"],
	"migrations": ["src/migration/**/*.ts", "./migration/**/*.js"],
	"subscribers": ["src/subscriber/**/*.ts", "./subscriber/**/*.js"],
	"cli": {
		"entitiesDir": "src/entity",
		"migrationsDir": "src/migration",
		"subscribersDir": "src/subscriber"
	}
}

```

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
