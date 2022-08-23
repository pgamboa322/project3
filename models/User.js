const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
      username: {
        type: String,
        trim: true,
        required: 'Username is Required'
      },

      firstName: {
        type: String,
        trim: true,
        required: 'First Name is Required'
      },
  
      lastName: {
        type: String,
        trim: true,
        required: 'Last Name is Required'
      },
  
      password: {
        type: String,
        trim: true,
        required: 'Password is Required',
        validate: [({ length }) => length >= 6, 'Password should be longer.']
      },
  
      email: {
        type: String,
        unique: true,
        required: 'Email is Required',
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
      },

      phoneNumber: {
        type: String,
        trim: true,
        required: 'Phone Number is Required',
        match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Please enter a valid phone number']
      },
  
      userCreated: {
        type: Date,
        default: Date.now
      }
    },
    {
      toJSON: {
        virtuals: true
      },
      id: false
    }
);

UserSchema.virtual('username').get(function() {
    return this.email.slice(0, this.email.indexOf('@'));
});

const User = model('User', UserSchema);

module.exports = User;