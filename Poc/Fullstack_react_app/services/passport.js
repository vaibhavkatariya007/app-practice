const passport = require('passport');
const GoogleStartegy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
})

passport.use(new GoogleStartegy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    // console.log('Access Token', accessToken);
    // console.log('Refresh Token', refreshToken);
    // console.log('User Profile', profile);
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
        return done(null, existingUser);
    }
    const user = await new User({ googleId: profile.id }).save();
    done(null, user);

    // User.findOne({ googleId: profile.id }).then((existingUser) => {
    //     if (existingUser) {
    //         done(null, existingUser);
    //     } else {
    //         new User({
    //             googleId: profile.id
    //         }).save().then((user) => {
    //             done(null, user);
    //         });
    //     }
    // });
}));