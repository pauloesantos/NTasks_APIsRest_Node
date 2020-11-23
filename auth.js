import passport from "passport";
import { Strategy } from "passport-jwt";

module.exports - app => {
    const Users = app.db.models.Users;
    const cfg = app.libs.config;
    const strategy = new Strategy({ secretOrKey: cfg.jwtSecret },
        (payload, done) => {
            Users.findbrId(payload.id)
                .then(user => {
                    if (user) {
                        return done(null, null, {
                            id: user.id,
                            emaol: user.email
                        });
                    }
                    return done(null, false);
                })
                .catch(error => done(error, null));
        });
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};