import React from 'react'
import "./contact.css"
import PinkStripeTitle from './PinkStripeTitle'
import RoundButton from './RoundButton';
import ArrowRight from "./icons/ArrowRight"
import Mail from "./icons/Mail"

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          url: '',
          email: '',
          message: ''
        }
    }

    onNameChange(event) {
        // console.log(this.state)
        this.setState({name: event.target.value})
    }

    onURLChange(event) {
        // console.log(this.state)
        this.setState({url: event.target.value})
    }

    onEmailChange(event) {
       //  console.log(this.state)
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        // console.log(this.state)
        this.setState({message: event.target.value})
    }

    handleSubmit(event) {
        console.log("Submitting Message")
        event.preventDefault();
        fetch('https://maltehillebrand.de/send.php', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
          (response) => (response.json())
            ).then((response)=> {
          if (response.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
          } else if(response.status === 'fail') {
            alert("Message failed to send.")
          }
        })
    }
    resetForm(){
        this.setState({name: "", url: "", email: "", message: ""})
      }
      render() {
        return(
            <div id="contactPage">
                <PinkStripeTitle text={"Let's create together!"} textPos={"center"} />
                <div className="contactContentWrapper">
                    <p>I'm open to all ideas and always eager to create something unique and fitting to the person and/or company I am working with.</p>
                    <p>My typical day to day includes <b>album artworks, Instagram filters, websites, animations, corporate designs and all kinds of graphic design</b>, but I am always seeking new challenges.</p>
                
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">URL</label>
                            <input type="text" className="form-control" id="url" value={this.state.url} onChange={this.onURLChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                        </div>
                        <RoundButton specialID={"submitbutton"} specialType="submit" text="Send message" fill={true} inverted={false} hover={true} IconLeft={Mail} IconRight={ArrowRight} rightIconHidden={true}/> 
                    </form>
                    <p>I'm excited to hear from you!</p>
                </div>
          </div>
        );
      }

}

export default Contact