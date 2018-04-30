const {app, BrowserWindow, ipcMain} = require('electron');
const mongoose = require('mongoose');
const User = require('./db/user');
const Note = require('./db/note');
const NestedNoteSchema = require('./db/nestedNote');

const mongoDB = 'mongodb://127.0.0.1/notes-app';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

let mainWin;

app.on('ready', () => {
    mainWin = new BrowserWindow({
        height: '600px',
        width: '600px'
    });

    mainWin.loadURL(`file://${__dirname}/dist/index.html`);
});

ipcMain.on('login', (event, data) => {
    db.collection('users').findOne({username: data.username, password: data.password}).then(user => {
        if (user != null) {
            event.sender.webContents.send('loginResponse', {success: true, userId: user._id.toString()});
        } else {
            event.sender.webContents.send('loginResponse', {success: false});
        }
    }).catch(err => {
        event.sender.webContents.send('loginResponse', {success: false});
    });
});

ipcMain.on('signup', (event, data) => {
    const user = new User({
        username: data['username'], 
        password: data['password']
    });
    user.save((err, userSaved) => {
        if (err) {
            event.sender.webContents.send('signupError', err);
        } else {
            event.sender.webContents.send('signupSuccess');
        }
    });
});

ipcMain.on('fetchNotes', (event, data) => {
    // db.collection('note').find()
});

ipcMain.on('createNote', (event, data) => {
    db.collection('notes').findOne({userId: data.userId}).then( (user) => {
        if (user == null) {
            const nestedNote = {
                noteTitle: data.note.title,
                noteBody: data.note.body
            };
            const note = new Note({
                userId: data.userId,
                notes: nestedNote
            });
            note.save((err, savedNote) => {
                event.sender.webContents.send('noteCreated', savedNote);
            });
        } else {
            db.collection('notes').update({userId: data.userId}, { $push: { notes: {
                noteTitle: data.note.title,
                noteBody: data.note.body}
             } }, (err, savedNote) => {
                event.sender.webContents.send('noteCreated', savedNote);
            });
        }
    })
});

ipcMain.on('updateNote', (event, data) => {
    
});

ipcMain.on('deleteNote', (event, data) => {
    
});