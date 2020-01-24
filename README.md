# Express: Note Taker

## Description

This application is used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file.

- The app has the following HTML routes:

  - GET `/notes` - returns the `notes.html` file.

  - GET `*` - returns the `index.html` file

- The application saves to `db.json` file on the backend that is used to store and retrieve notes using the `fs` module.

- The following API routes are created:

  - GET `/api/notes` - read the `db.json` file and return all saved notes as JSON.

  - POST `/api/notes` - receives a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  - DELETE `/api/notes/:id` - receives a query parameter containing the id of a note to delete. A unique `id` is given by using shortid NPM package. Unique `id` is used to remove the note with the given `id` property.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.
