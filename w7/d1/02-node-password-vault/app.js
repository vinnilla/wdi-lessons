var storage = require('node-persist');
storage.initSync();
var crypto = require('crypto-js');
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
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'master password',
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
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'master password',
				type: 'string'
			}
		}).help('help')
	}).argv;


//Password Vault
	
function getAccounts(masterPassword) {
	//using getItemSync to fetch all accounts
	var encrypted = storage.getItemSync('accounts');
	var accounts = [];
	//decrypt
	if (typeof encrypted !== 'undefined') {
		var bytes = crypto.AES.decrypt(encrypted, masterPassword);
		accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}
	return accounts;
}

function saveAccounts(accounts, masterPassword) {
	//encrypt
	var encrypted = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
	//setItemSync
	storage.setItemSync('accounts', encrypted.toString());
	return accounts;
}

	//create account
function createAccount(account, secret) {
	// var accounts = storage.getItemSync('accounts');
	// if (typeof accounts === 'undefined') {
	// 	accounts = [];
	// }
	var accounts = getAccounts(secret);
	accounts.push(account);
	saveAccounts(accounts, secret);
	return accounts;
}
	//get account}
function getAccount(accountName, secret) {
	// var accounts = storage.getItemSync('accounts');
	var accounts = getAccounts(secret);
	var matchedAccount;
	accounts.forEach(function(account) {
		if(account.name === accountName) {
			matchedAccount = account;
		}
	})
	return matchedAccount;
}

//yargs control flow
var command = argv._[0];
if (command === 'create') {
	try{
		createAccount({
			name: argv.name,
			username: argv.username,
			password: argv.password,	
		}, argv.masterPassword)	
	} catch(e) {
		console.log('unable to create account');
		console.log(e.message);
	}
}

else if (command === 'get') {
	try{
		var fetchedAccount = getAccount(argv.name, argv.masterPassword);
		if (typeof fetchedAccount == 'undefined'){
			console.log('account not found')
		}
		else {
			console.log('account found')
			console.log(fetchedAccount)
		}
	} catch(e) {
		console.log('unable to get account');
		console.log(e.message);
	}
}