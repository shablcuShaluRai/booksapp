import React, { Component } from 'react'


class Book extends Component{


render(){
  console.log("books", this.props)
  return(
    <div className = "book">
    <div className = "book-top">
    <div className = "book-cover" style = {{height:192
    ,width : 128,
 backgroundImage:`url(${this.props.book.imageLinks!== undefined?this.props.book.imageLinks.thumbnail:''})`}}
    >
</div>

    </div>

    </div>

  )
}

}

export default Book
