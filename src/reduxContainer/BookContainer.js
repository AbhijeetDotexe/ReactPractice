import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import purchaseBook from './BookAction'

function BookContainer() {
  const numberOfBooks = useSelector(state=>state.NumberOfBooks)
  const dispatch = useDispatch()
  return (
    <div>
        <h3>
            This is the Book Container Where all The Books are kept
            There are total of {numberOfBooks} of Books
        </h3>
        <button onClick={()=> dispatch(purchaseBook())}>Sell Books</button>

    </div>
  )
}

export default BookContainer