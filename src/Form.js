import React, { Component } from 'react'
import './Form.css';
import axios from 'axios';

 class Form extends Component {

    state={
        fullName: '',
        lastName: '',
        email: '',
        message: '',
        sent: false
    }

    handleName = (e) => {
        console.log(e);
        this.setState({
            fullName: e.target.value
        })
      
    }

    // handleLastName =(e) => {
    //     this.setState({
    //         lastName: e.target.value
    //     })
   
    // }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();

        let data = {
            fullName:this.state.fullName,
            // LastName:this.state.lastName,
            email:this.state.email,
            message:this.state.message
        }
    axios.post('/api/forma',data)
    .then(res => {
        console.log('senddddd',res)
        this.setState({
            sent: true,
        }, this.resetForm())
    }).catch(() => {
        console.log('message not sent');
    })
    }
/// reseting

resetForm = () => {
    this.setState({
        fullName: '',
        // lastName: '',
        email: '',
        message: ''
    })

    setTimeout(() => {
        this.setState({
            sent: false,
        })
    }, 3000)
}



    render() {
        return (
            <div className='container'>

                <form onSubmit={this.formSubmit}>
                    <div className='singlItem'>
                        <label htmlFor='fullName'>Name</label>
                          <input type='text'
                           name='fullName'
                          className='fullName'
                           placeholder= 'Your Full Name...'
                           value={this.state.fullName} 
                           onChange={this.handleName}
                            />
                    </div>
                    {/* <div className='singleItem'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text'
                         name='LastName'
                        className='LastName' 
                        placeholder='Your Last Name...'
                        value={this.state.lastName}
                        onChange={this.handleLastName}
                        />
                    </div> */}
                    <div className='singleItem'>
                        <label htmlFor='email'>Email</label>
                        <input type='text'
                         name='email'
                         className='email'
                         placeholder='Your email...'
                         value={this.state.email}
                         onChange={this.handleEmail}
                         />
                    </div>
                    <div className='textArea singleItem'>
                        <label htmlFor='message'>Message</label>
                        <textarea name='message'
                         id='' cols='30' rows='5'
                         value={this.state.message}
                         onChange={this.handleMessage}
                        placeholder='I was wondering about availability and rates. I need help with the following:'>
                        
                        </textarea>
                    </div>
                    <div className={this.state.sent ? 'msg msgAppear':'msg'}>Message has been sent</div>
                    <div className='btn'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
                <div className='note'>
                    <p style={{fontSize: '1.1rem', background: 'none'}}>Ph:214.604.1745</p>
                    <h3>Hours of operation:</h3>
                    <p style={{background: 'none', fontSize: '1rem'}}>Mon-Fri:9AM-6PM<br/>Sat:10AM-5PM</p>
  {/* <h3>We offer timely and reliable hemming and alteration services for mens and womens garments of any shape or size.
contact us today for a free consultation.</h3> */}
</div>
                
            </div>
        )
    }
}

export default Form;
