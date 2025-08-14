import React from 'react';


function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
               <div className='col-6 p-5'>
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                <h2 className='fs-4'>Customer-first here</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust StockTrade with 3.5+ rupees lakh crore worth of equity investment.</p>

                <h2 className='fs-4'>No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, span, "gamification", or annoying push notification. High quality apps that you use at ypur pace, the way you like.</p>

                <h2 className='fs-4'>The StockTrade universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our invertments in 30+ fintech startups offer you tailored services specific to yout needs.</p>

                <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and kill Switch, we dont just facilitate transactions, but actively help you do better with your money.</p>
               </div>
               <div className='col-6 p-5'>
                <img src="images\ecosystem.png" style={{width:"90%"}} />
                <div className='text-center'>
                    <a href="" className='mx-5' style={{textDecoration:"none"}}> Expolre our product <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href="" style={{textDecoration:"none"}}>Try kite demo </a>
                </div>
               </div>
            </div>

        </div>
     );
}

export default Stats;