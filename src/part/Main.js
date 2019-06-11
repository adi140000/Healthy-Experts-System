import React, { Component } from 'react';

class Main extends Component {
    state = {}

    submitData = (e) => {
        e.preventDefault();
        console.log(e.target)
    }

    render() {
        return (
            <main>
                <form className='form-main' onSubmit={this.submitData}>
                    <div className='form-part'>
                        <label htmlFor='age' className='label'>Ile masz lat ?</label>
                        <input id='age' className='inputData part' type='number' />
                    </div>
                    <div className='form-part'>
                        <label className='label'>Jakiej jestes płci ?</label>
                        <select id='sex' className='inputData part'>
                            <option>Meżczyzna</option>
                            <option>Kobieta</option>
                        </select>
                    </div>
                    <div className='form-part'>
                        <label htmlFor='temperature' className='label'>Jaka jest temperatura twojego ciała ?</label>
                        <input type='number' id='temperature' className='inputData part' />
                    </div>

                    <div className='form-part'>
                        <label className='label' htmlFor='pressure'>Jakie masz ciśnienie krwi ?</label>
                        <input type='number' id='pressure' className='inputData part' />
                    </div>
                    <div className='form-part'>
                        <label className='label' >Odczuwasz jakisz ból ?</label>
                        <div className='part clearfix'>
                            <label><input type='checkbox' name='pain' value='Brzuch' />Brzuch</label>
                            <label><input type='checkbox' name='pain' value='Brzuch' />Glowa</label>
                            <label><input type='checkbox' name='pain' value='Brzuch' />Serce</label>
                            <label><input type='checkbox' name='pain' value='Brzuch' />Kregoslup</label>
                        </div>
                    </div>

                    <div className='form-part'>
                        <label className='label' htmlFor='bind'>Czy masz powiekszone węzły chłonne ?</label>
                        <input type='checkbox' id='bind' className='inputData part' />
                    </div>
                    <div className='form-part'>
                        <label className='label' htmlFor='tired'>Czy szybko się męczysz ?</label>
                        <input type='checkbox' className='inputData part' id='tired' />
                    </div>
                    <div className='form-part'>
                        <label className='label' htmlFor='overweight'>Czy masz nadwage ?</label>
                        <input type='checkbox' className='inputData part' id='overweight' />
                    </div>
                    <div className='form-part'>
                        <label className='label' htmlFor='breath'>Czy masz problemy z drogami oddechowymiswwww swsw wssw ?</label>
                        <input type='checkbox' className='inputData part' id='breath' />
                    </div>
                    <div className='form-part'>
                        <label className='label' htmlFor='overweight'>Czy miałeś w ostatnim czasie wymioty / nudnosci / biegunke ?</label>
                        <input type='checkbox' className='inputData part' id='overweight' />
                    </div>

                    <input type='submit' className='btnSend' value='Sprawdz' />
                </form>
            </main>
        );
    }
}

export default Main;