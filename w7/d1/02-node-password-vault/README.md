#node password app

```npm init``` set up project info
```npm install node-persist@0.0.6 --save``` 

In package.json, added 'start': 'node app.js' to 'scripts'


##get and set data with persist
```
console.log('starting node app')
var storage = require('node-persist');

storage.initSync();
// storage.setItemSync('account', [{name: 'vincent', password: '123'}]);
// var name = storage.getItemSync('name');

var account = storage.getItemSync('account')
account.push({name: 'dan', password: '123'});
console.log(account);
```


##create and get accounts

####create: pulls pre-existing data (if none, set an empty array) and adds new account

####get: retrieves specific account by name (if none, returns undefined)
```
var storage = require('node-persist');
storage.initSync();
//Password Vault
	//create account
function createAccount(account) {
	var accounts = storage.getItemSync('accounts');
	if (typeof accounts === 'undefined') {
		accounts = [];
	}
	accounts.push(account);
	storage.setItemSync('accounts', accounts)
	return accounts;
}
	//get account}
function getAccount(accountName) {
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;
	accounts.forEach(function(account) {
		if(account.name === accountName) {
			matchedAccount = account;
		}
	})
	return matchedAccount;
}
```

##create and get without yargs
```
createAccount({
	name: 'Yahoo',
	username: 'corbout',
	password: 'pass123'
})

var yahoo = getAccount('Yahoo');
console.log(yahoo);
```

##create and get with yargs
```
var argv = require('yargs')
//create command
	//options name, username, password
//get command
	//options name
	.command('create', 'Create an account', function(yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'your name',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'your username',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'your password',
				type: 'string'
			}
		}).help('help')
	})
	.command('get', 'Get an account', function(yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'name you want to search for',
				type: 'string'
			}
		}).help('help')
	}).argv;
```
```
var command = argv._[0];
if (command === 'create') {
	createAccount({
		name: argv.name,
		username: argv.username,
		password: argv.password
	})	
}
else if (command === 'get') {
	console.log(getAccount(argv.name));
}
```