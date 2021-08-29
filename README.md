# Introduction to TypeORM (with PostgreSQL)

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

**Install most recent versions of TypeScript and TS-Node**

- The default versions of TypeScript and TS-Node are outdated, run this script to update them.
- The `-D` flag installs them as Dev Dependencies.

```
npm i -D typescript@latest ts-node@latest
```

**Install the rest of the necessary packages**

```
npm i
```

## Setup for ormconfig.json file

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

## Setup for tsconfig.json file

```
{
	"compilerOptions": {
		"lib": ["es5", "es6", "ES2018"],
		"target": "es5",
		"module": "commonjs",
		"moduleResolution": "node",
		"outDir": "./build",
		"emitDecoratorMetadata": true,
		"experimentalDecorators": true,
		"sourceMap": true,
		"esModuleInterop": true
	}
}
```

## Setup for package.json file

```
{
	"name": "new-typeorm-project",
	"version": "0.0.1",
	"description": "Awesome project developed with TypeORM.",
	"devDependencies": {
		"@types/express": "^4.17.13",
		"@types/node": "^8.0.29",
		"@types/uuid": "^8.3.1",
		"ts-node": "^10.2.1",
		"typescript": "^4.4.2"
	},
	"dependencies": {
		"class-validator": "^0.13.1",
		"express": "^4.17.1",
		"pg": "^8.7.1",
		"reflect-metadata": "^0.1.10",
		"typeorm": "0.2.37",
		"uuid": "^8.3.2"
	},
	"scripts": {
		"start": "ts-node src/index.ts",
		"typeorm": "ts-node ./node_modules/typeorm/cli.js",
		"dev": "nodemon --exec ts-node src/index.ts",
		"build": "tsc"
	}
}
```

## Migration Commands

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

## Schema Commands

**Drop Schema**

```
npm run typeorm schema:drop
```

**Synchronize Schema**

```
npm run typeorm schema:sync
```

## Other Packages to Install

- Install Class Validator to set conditions on your table schema.

```
npm i class-validator
```

## Compile TS files to JS for production

- Set up a `"build"` script for in package.json file to compile the your TypeScript into JavaScript

```
"build": "tsc"
```
