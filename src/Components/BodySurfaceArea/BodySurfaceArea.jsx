import './BodySurfaceArea.css';

import React, { useState } from 'react';
import QuestionIcon from '../Icons/QuestionIcon/QuestionIcon';
import REFERENCEINFORMATION from '../ReferenceInformation/ReferenceInformation';
import calcBodySurfaceArea from '../../functions/calcBodySurfaceArea';
import ResetBtn from '../ResetBtn/ResetBtn';

const BodySurfaceArea = () => {
    const [bodyParams, setBodyParams] = useState({
        mass: '',
        length: '',
        bodySurfArea: 0,
    });

    // const [bodySurfArea, setBodySurfArea] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();

        const result = calcBodySurfaceArea(bodyParams.mass, bodyParams.length);

        setBodyParams({ ...bodyParams, bodySurfArea: result });
    }

    function clearResult() {
        setBodyParams({
            mass: '',
            length: '',
            bodySurfArea: 0,
        });
    }

    return (
        <div className='component bodySurfaveArea'>
            <h2 className='component-title'>Расчет площади поверхности тела</h2>
            <form onSubmit={handleSubmit} className='bodySurfaveArea-inputs'>
                <QuestionIcon
                    reference={REFERENCEINFORMATION.bodySurfaceArea}
                />
                <span>
                    <input
                        className='bodySurfaceArea-input'
                        onChange={(e) =>
                            setBodyParams({
                                ...bodyParams,
                                length: e.target.value,
                            })
                        }
                        value={bodyParams.length}
                        placeholder='Рост в см'
                        name='body_length'
                        id='body_length'
                        type='number'
                    />

                    <input
                        className='bodySurfaceArea-input'
                        onChange={(e) =>
                            setBodyParams({
                                ...bodyParams,
                                mass: e.target.value,
                            })
                        }
                        value={bodyParams.mass}
                        placeholder='Масса тела в кг'
                        name='body_mass'
                        id='body_mass'
                        type='number'
                    />
                </span>
                <button className='ok-btn' type='submit'>
                    Рассчитать
                </button>
            </form>

            <div className='bodySurfArea_result'>
                <h3>
                    Площадь поверхности тела: {bodyParams.bodySurfArea}{' '}
                    кв.метров
                </h3>
            </div>

            <ResetBtn reset={clearResult} />
        </div>
    );
};

export default BodySurfaceArea;
