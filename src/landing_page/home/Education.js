import React from 'react';

function Education() {
    return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
          <img src="media/images/education (1).svg" style={{width:"70%"}}></img>  
        </div>



        <div className='col-6'>
            <h1 className='mb-3 fs-2'>Free and open market education</h1>
            <p> Varsity, the largest online stock market education book in the world covering everything from the basic to advanced trading.</p>
            <a href="" className='mb-5' style={{textDecoration:"none"}}> versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <p className='mt-5'> TrandingQ&A, the most active trading and investment community in india for all your market related queries.</p>
            <a href="" className='mb-5' style={{textDecoration:"none"}}> TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            
        </div>
      
      </div>
  </div>
      );
}

export default Education;