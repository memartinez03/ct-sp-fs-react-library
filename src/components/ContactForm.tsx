import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseISBN, chooseAuthor, chooseTitle, chooseLength, chooseCover } from "../redux/slices/RootSlice";

interface ContactFormProps {
  id?: string[]
}

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    if (props.id && props.id.length > 0 ) {
      server_calls.update(props.id[0], data);
      console.log(`Updated: ${ data.name } ${ props.id }`);
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset();
    } else {
      dispatch(chooseISBN(data.isbn_number));
      dispatch(chooseAuthor(data.author_name));
      dispatch(chooseTitle(data.book_title));
      dispatch(chooseLength(data.book_length));
      dispatch(chooseCover(data.hardcover_or_paperback)); 

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);

    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="isbn_number">ISBN</label>
          <Input {...register('isbn_number')} name='isbn_number' placeholder="ISBN"/>
        </div>
        <div>
          <label htmlFor="author_name">Author</label>
          <Input {...register('author_name')} name='author_name' placeholder="Author"/>
        </div>
        <div>
          <label htmlFor="book_title">Title</label>
          <Input {...register('book_title')} name='book_title' placeholder="Title"/>
        </div>
        <div>
          <label htmlFor="book_length">Length</label>
          <Input {...register('book_length')} name='book_length' placeholder="Length"/>
        </div>
        <div>
          <label htmlFor="hardcover_or_paperback">Cover</label>
          <Input {...register('hardcover_or_paperback')} name='hardcover_or_paperback' placeholder="Cover"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>

    </div>
  )
}

export default ContactForm