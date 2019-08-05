import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../CSS/form.css';
import { connect } from 'react-redux';
import { addVolunteers } from '../actions/FormActions';

class VolunteerForm extends React.Component {
  state = {
    newVolunteer: {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      country: '',
      comment: ''
    },
    newInterests: {
      volunteering: false,
      donating: false,
      joinmm: false,
      mediacoverage: false,
      somethingelse: ''
    }
  };

  handleOnsubmit = e => {
    e.preventDefault();
    console.log(this.props.message);
    this.props.addVolunteers(this.state);

    this.setState({
      newVolunteer: {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        country: '',
        comment: ''
      },
      newInterests: {
        volunteering: false,
        donating: false,
        joinmm: false,
        mediacoverage: false,
        somethingelse: ''
      }
    });
  };

  handleToggle = e => {
    this.setState({
      newInterests: {
        ...this.state.newInterests,
        [e.target.name]: e.target.checked
      }
    });
  };

  handleOnChange = e => {
    this.setState({
      newVolunteer: {
        ...this.state.newVolunteer,
        [e.target.name]: e.target.value
      }
    });
  };

  handleOnChangeInterest = e => {
    this.setState({
      newInterests: {
        ...this.state.newInterests,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleOnsubmit}
        loading={this.addVolunteers}
      >
        <h2>Get Involved</h2>
        <p>{this.props.message}</p>
        <input
          className="input"
          type="text"
          onChange={this.handleOnChange}
          value={this.state.newVolunteer.fname}
          name="fname"
          placeholder="First Name"
          required
        />
        <br />
        <input
          className="input"
          type="text"
          onChange={this.handleOnChange}
          value={this.state.newVolunteer.lname}
          name="lname"
          placeholder="Last Name"
          required
        />
        <br />
        <input
          className="input"
          type="email"
          onChange={this.handleOnChange}
          value={this.state.newVolunteer.email}
          name="email"
          placeholder="E-mail"
          required
        />
        <br />
        <input
          className="input"
          type="tel"
          onChange={this.handleOnChange}
          value={this.state.newVolunteer.phone}
          name="phone"
          placeholder="Phone Number"
        />
        <br />
        <input
          className="input"
          type="text"
          onChange={this.handleOnChange}
          value={this.state.newVolunteer.city}
          name="city"
          placeholder="City"
          required
        />
        <br />
        <input
          className="input"
          type="text"
          onChange={this.handleOnChange}
          value={this.state.newVolunteer.state}
          name="state"
          placeholder="State"
          required
        />
        <br />
        <input
          className="input"
          type="text"
          onChange={this.handleOnChange}
          value={this.state.newVolunteer.country}
          name="country"
          placeholder="Country"
          required
        />
        <br />
        <h2>I am Interested In</h2>
        <input
          onChange={this.handleToggle}
          className="chbox"
          type="checkbox"
          name="volunteering"
          checked={this.state.newInterests.volunteering}
        />
        Volunteering
        <br />
        <input
          onChange={this.handleToggle}
          className="chbox"
          type="checkbox"
          name="donating"
          checked={this.state.newInterests.donating}
        />
        Donating
        <br />
        <input
          onChange={this.handleToggle}
          className="chbox"
          type="checkbox"
          name="joinmm"
          checked={this.state.newInterests.joinmm}
        />
        Join MM
        <br />
        <input
          onChange={this.handleToggle}
          className="chbox"
          type="checkbox"
          name="mediacoverage"
          checked={this.state.newInterests.mediacoverage}
        />
        Media Coverage
        <br />
        <input
          className="chbox"
          type="text"
          onChange={this.handleOnChangeInterest}
          name="somethingelse"
          value={this.state.newInterests.somethingelse}
        />
        Something Else
        <br />
        <textarea
          className="comment"
          onChange={this.handleOnChange}
          value={this.state.newVolunteer.comment}
          name="comment"
          placeholder="Leave Your Comments"
        />
        <br />
        <button className="submitb" type="submit">
          Submit
        </button>
        <button className="clearb" type="reset">
          Clear
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
 message: state.status.message,
  //  volunteers: state.volunteerReducer.addVolunteers
});

export default connect(
  mapStateToProps,
  { addVolunteers }
)(VolunteerForm);
