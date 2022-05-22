import React,{FC} from 'react';

import './App.css';

const App:FC=()=> {
  return (
    <div className="App">
      <div className='top_header'> 
      <div className='container-fluid'> 
        <div className='row'>
            <div className='col-lg-12'>
              <div className='top_text text-center'>
                <h3>Calculator</h3>
              </div>
            </div>
        </div>
      </div>
      </div>
      <div className='main_area'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 offset-lg-3'>
                  <div className='calculator_form_area'>
                    <p>Enter the numbers</p>
                    <form id='main_form'>
                      <div className='form-group'>
                        <input type="text" className='form-control' placeholder='number 1' />
                      </div>
                      <div className='form-group'>
                        <input type="text" className='form-control' placeholder='number 2' />
                      </div>
                      <div className='submit-button'>
                        <button type='submit' className='submit_btn'>Sum</button>
                      </div>
                      <div className='border_bottom'></div>
                      <div className='search_result'>
                        <p>Results</p>
                        <div className='form-group'>
                        <input type="text" className='form-control' placeholder='1523' />
                      </div>
                      </div>
                      <div className='border_bottom'></div>
                      <p className='mt-4'>History</p>
                    </form>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
