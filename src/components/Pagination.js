import React from 'react'; 

const Pagination = ({ resPerPage, totalRes, paginate }) => {
	const pageNumbers =[];

	for(let i = 1; i <= Math.ceil(totalRes / resPerPage); i++) {
		pageNumbers.push(i);
	}

  if (pageNumbers.length === 1) return (
    <div> </div>
    )

	return (
      <nav>
        <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={(e) => paginate(number)} href='!#' className='page-link'>
            {number}
            </a>
          </li>
          ))}
        </ul>
      </nav>
	)
}

export default Pagination;