import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        isbn_number: "ISBN",
        author_name: 'Author',
        book_title: "Title",
        book_length: "Length",
        hardcover_or_paperback: "Cover"
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseISBN: (state, action) => { state.isbn_number = action.payload }, // All we're doing is setting the input to the state.name
        chooseAuthor: (state, action) => { state.author_name = action.payload },
        chooseTitle: (state, action) => { state.book_title = action.payload },
        chooseLength: (state, action) => { state.book_length = action.payload },
        chooseCover: (state, action) => { state.hardcover_or_paperback = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseISBN, chooseAuthor, chooseTitle, chooseLength, chooseCover } = rootSlice.actions