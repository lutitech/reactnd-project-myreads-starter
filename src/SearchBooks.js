import React from 'react';
import './App.css'
import Book from './Book'
import { Link } from 'react-router-dom' 

class SearchBooks extends React.Component{

  state = {
          
          query: ''        
  }  

  updateQuery = (query) => {
    this.setState(() => ({          
           query        
        }))
    this.props.onSearch(query)        
  }

  clearQuery= () => {
    this.props.clearSearchResults();
  }


	render(){
    const { query} = this.state
    const{ onShelfChange ,  searchResults} =this.props

		return(			
          <div className="search-books">
                 <div className="search-books-bar">
                      <Link to='/' onClick={this.clearQuery} >
                      <button className="close-search">Close</button>
                      </Link>
              
                        <div className="search-books-input-wrapper">
              
               
                               <input type="text" placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => this.updateQuery(event.target.value)}
                               />
      	
                             </div>
                           </div>
                            <div className="search-books-results">
                            <ol className="books-grid">                
                           {  searchResults.length > 0 ? searchResults.map((book) => <Book key={book.id} book={book} onShelfChange={onShelfChange}/>):  'No books found' }
                           </ol>
                      </div>
                </div>        	
	    )
	}
}

export default SearchBooks;