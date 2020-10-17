import React from 'react';
import ChartJS from '../ChartJS/ChartJS';
import D3JSComp from '../D3JSComp/D3JSComp';

function HomePage() {
  return (
    
    
    <main className="center">

        <div className="page-area">
            {/* <!-- This is a semantic html change (article) --> */}
            <article>
                <h1>Stay on track</h1>
                {/* <!-- This is a A11y change (Dir)--> */}
                <p dir="ltr">
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
            {/* <!-- This is a semantic html change (article)--> */}
            <article>
                <h1>Alerts</h1>
                {/* <!-- This is a A11y change (Dir)--> */}
                <p dir="ltr">
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
            {/* <!-- This is a semantic html change (article)--> */}
            <article>
                <h1>Results</h1>
                {/* <!-- This is a A11y change (Dir)--> */}
                <p dir="ltr">
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
            {/* <!-- This is a semantic html change (article)--> */}
            <article>
                <h1>Free</h1>
                {/* <!-- This is a A11y change (Dir)--> */}
                <p dir="ltr">
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
            {/* <!-- This is a semantic html change (article)--> */}
            <article>
                <h1>Stay on track</h1>
                {/* <!-- This is a A11y change (Dir)--> */}
                <p dir="ltr">
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
            {/* <!-- This is a semantic html change (article)--> */}
            <article>
                <h1>Alerts</h1>
                {/* <!-- This is a A11y change (Dir)--> */}
                <p dir="ltr">
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
            {/* <!-- This is a semantic html change (article)--> */}
            <article>
                <h1>Results</h1>
                {/* <!-- This is a A11y change (Dir)--> */}
                <p dir="ltr">
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
            {/* <!-- This is a semantic html change (article)--> */}

            
            <article>
                <h1>Chart 1</h1>
                {/* <!-- This is a A11y change (Dir)--> */}
                <p dir="ltr">
                    This app is free!!! And you are the only one holding your data!
                <canvas id="myChart" width="200" height="200" left="50%"></canvas>
                <ChartJS/>
                </p>
            </article>
            
            
        </div>
        <div>
                
                <br/>
                <div  id="dochart" className = "donutchart">
                <h1>Chart 2</h1>  
                <D3JSComp/>
                </div>
            </div>
       

    </main>
    
    
  );
}

export default HomePage;
