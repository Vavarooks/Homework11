const util = require("util")
const fs = require("fs")
const uuidv1 = require('uuid/v1');
const readfile = util.promisify(fs.readFile)
const writefile = util.promisify(fs.writeFile)

class Data {
    read() {
        return readfile("db/db.json", "utf8")
    }
    write(note) {
        return writefile("db/db.json", JSON.stringify(note)),
    }

    getNotes() {
        return this.read().then(notes => {
            var journel;
            try {
                journel = [].concat(JSON.parse(notes));
            }
            catch (error) {
                journel = [];
            }
            return journel;
        })
    }
    addNote(note) {
        const title = note.title
        const entery = note.text
        if (!title || !entery) {
            console.log("cannot be empty")
            throw "Title or Message is empty, please enter text."
        }
        const newRecord = {
            title: title,
            text: entery,
            id: uuidv1()
        }
        return this.getNotes().then(note => [...note, newRecord]).then(updateNote => this.write(updateNote))
            .then(() => allNotes)
    }
    removeNote(id) {

        return this.getNotes().then(noteDelete => noteDelete.filter(currentNote => currentNote.id !== id))
            .then(upnotes => this.write(upnotes))
    }
}
module.exports = new Data()
