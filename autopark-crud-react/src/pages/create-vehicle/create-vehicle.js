import React from 'react';
import { Link } from 'react-router-dom';

const id = 1234;

class CreateVehicle extends React.Component {

    park_id = this.props.park_id;

    componentDidMount () {
        console.log(this.park_id);
    }

    render() {
        return (
            <div>
                <h4>Create Vehicle</h4>

                <form>
                    <div className='form-group'>
                        <label htmlFor='inputMark'>Mark:</label>
                        <input type='text' className='form-control' id='inputMark' aria-describedby='markHep' placeholder='Mark:' />
                        <small id='markHelp' className='form-text text-muted'>Mark of new vehicle.</small>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='inputModel'>Model:</label>
                        <input type='text' className='form-control' id='inputModel' aria-describedby='modelHelp' placeholder='Model:' />
                        <small id='modelHelp' className='form-text text-muted'>Model of the new vehicle.</small>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='inputRelase'>Relase Date:</label>
                        <input type='text' className='form-control' id='inputRelase' aria-describedby='relaseHelp' placeholder='Relase Date:' />
                        <small id='relaseHelp' className='form-text text-muted'>Relase date of new vehicle.</small>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='inputCreated'>Created At:</label>
                        <input type='text' className='form-control' id='inputCreated' aria-describedby='createdHelp' placeholder='Created At:' />
                        <small id='createdHelp' className='form-text text-muted'>Date of creation entry of new vehicle.</small>
                    </div>

                    <div className='form-footer'>
                        <button type='button' className='btn btn-secondary'>
                            <Link to={`/auto-park/parks/${id}/vehicles`}>Cancel</Link>
                        </button>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default CreateVehicle;