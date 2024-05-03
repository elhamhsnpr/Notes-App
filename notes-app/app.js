const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

//Customize the version
yargs.version('1.1.0')

//Create add Command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    handler: function () {
        console.log('Adding the note!')
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List a notes',
    handler: function () {
        console.log('Listing out all notes!')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading the note!')
    }
})

console.log(yargs.argv)