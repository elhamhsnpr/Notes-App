const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesTokeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesTokeep.length) {
        saveNotes(notesTokeep)
        console.log(chalk.green.inverse('Node removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}
const getNotes = () => {
    return "Your notes..."
}
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote
}