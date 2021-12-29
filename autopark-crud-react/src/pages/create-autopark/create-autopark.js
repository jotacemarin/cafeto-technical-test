import React from 'react';
import { Link } from 'react-router-dom';

class CreateAutopark extends React.Component {

    render() {
        return (
            <div>
                <h4>Create Park</h4>

                <form>
                    <div className='form-group'>
                        <label htmlFor='imputName'>Name:</label>
                        <input type='text' className='form-control' id='imputName' aria-describedby='emailHelp' placeholder='Name:' />
                        <small id='emailHelp' className='form-text text-muted'>Give a name to new autopark.</small>
                    </div>

                    <div className='form-footer'>
                        <button type='button' className='btn btn-secondary'>
                            <Link to='/auto-park/parks'>Cancel</Link>
                        </button>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default CreateAutopark;