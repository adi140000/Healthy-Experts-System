import React from 'react';
import Ok from './../../img/ok.png'
import Fault from './../../img/fault.png'

const Done = (props) => {
    const { illnesses } = props;

    const items = illnesses.map(item => (<li key={item} className='li_illnesses'>{item}</li>))

    const content = illnesses.length ?
        (
            <section className='result-section'>
                <div className='result'>Mozesz byc chory na :</div>
                <ul className='list_illnesses'>
                    {items}
                </ul>
                <img src={Fault} alt='Fault' className='result-img' />
            </section>
        )
        :
        (
            <section className='result-section'>
                <div className='result'>Wszystko prawdopodobnie jest wpozadku !</div>
                <img src={Ok} alt='OK' className='result-img' />
            </section>
        )




    return (<section className='form-main section-center'>
        <div className='section-title'>To twoj wynik :</div>
        {content}
    </section>);
}

export default Done;