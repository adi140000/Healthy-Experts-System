import React, { Component } from 'react';

class Main extends Component {
    state = {
        age: '',
        sex: 'male',
        temperature: '',
        pressure: '',
        pain: [],
        nodes: '',
        tired: true,
        overweight: false,
        breath: false,
        vomiting: false
    }

    submitData = (e) => {
        e.preventDefault();
        console.log(e.target)
    }

    handle = (e) => {
        const { target } = e;
        const { id, value } = target;

        if (target.hasOwnProperty('value') || id === 'sex') {
            console.log(target)
            this.setState({
                [id]: value,
            })
        } else if (target.hasOwnProperty('checked')) {

            if (target.name === 'pain') {
                let { pain } = this.state;

                if (target.checked) {
                    pain.push(value);
                    this.setState({
                        pain
                    })
                } else {
                    const newArr = pain.filter(item => {
                        if (item === value) {
                            return false
                        } else {
                            return true
                        }
                    })
                    console.log(newArr)
                    this.setState({
                        pain: newArr,
                    })
                }
            } else {
                this.setState({
                    [id]: target.checked,
                })
            }
        }
    }

    render() {
        const { age, sex, temperature, pressure, pain, nodes, tired, overweight, breath, vomiting } = this.state;
        return (
            < main >
                <form className='form-main' onSubmit={this.submitData}>
                    <div className='form-part'>
                        <label htmlFor='age' className='label'>Ile masz lat ?</label>
                        <input id='age' className='inputData part' type='number' value={age} onChange={this.handle} />
                    </div>
                    <div className='form-part'>
                        <label className='label'>Jakiej jestes płci ?</label>
                        <select id='sex' className='inputData part' value={sex} onChange={this.handle}>
                            <option value='male'>Mezczyzna</option>
                            <option value='female'>Kobieta</option>
                        </select>
                    </div>
                    <div className='form-part'>
                        <label htmlFor='temperature' className='label'>Jaka jest temperatura twojego ciała ?</label>
                        <input onChange={this.handle} value={temperature} type='number' id='temperature' className='inputData part' />
                    </div>

                    <div className='form-part'>
                        <label className='label' htmlFor='pressure'>Jakie masz ciśnienie krwi ?</label>
                        <input onChange={this.handle} value={pressure} type='number' id='pressure' className='inputData part' />
                    </div>
                    <div className='form-part'>
                        <label className='label' >Odczuwasz jakis ból ?</label>
                        <div id='pain' className='part clearfix'>
                            <label><input onChange={this.handle} type='checkbox' name='pain' value='Stomach' />Brzuch</label>
                            <label><input onChange={this.handle} type='checkbox' name='pain' value='Head' />Glowa</label>
                            <label><input onChange={this.handle} type='checkbox' name='pain' value='Heart' />Serce</label>
                            <label><input onChange={this.handle} type='checkbox' name='pain' value='Spine' />Kregoslup</label>
                        </div>
                    </div>

                    <div className='form-part'>
                        <label className='label' htmlFor='nodes'>Czy masz powiekszone węzły chłonne ?</label>
                        <input onChange={this.handle} checked={nodes} type='checkbox' id='nodes' className='inputData part' />
                    </div>
                    <div className='form-part'>
                        <label className='label' htmlFor='tired'>Czy szybko się męczysz ?</label>
                        <input onChange={this.handle} checked={tired} type='checkbox' className='inputData part' id='tired' />
                    </div>
                    <div className='form-part'>
                        <label className='label' htmlFor='overweight'>Czy masz nadwage ?</label>
                        <input onChange={this.handle} checked={overweight} type='checkbox' className='inputData part' id='overweight' />
                    </div>
                    <div className='form-part'>
                        <label className='label' htmlFor='breath'>Czy masz problemy z drogami oddechowymiswwww swsw wssw ?</label>
                        <input onChange={this.handle} checked={breath} type='checkbox' className='inputData part' id='breath' />
                    </div>
                    <div className='form-part'>
                        <label className='label' htmlFor='vomiting'>Czy miałeś w ostatnim czasie wymioty / nudnosci / biegunke ?</label>
                        <input onChange={this.handle} checked={vomiting} type='checkbox' className='inputData part' id='vomiting' />
                    </div>

                    <input type='submit' className='btnSend' value='Sprawdz' />
                </form>
            </main >
        );
    }
}

export default Main;