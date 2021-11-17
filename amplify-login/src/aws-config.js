import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region:"us-west-2",
        userPoolId:"us-west-2_z5vwSq93M",
        userPoolWebClientId:"33tll4oquef203ube1cl84t4ln",
    }
});
export default Auth.configure();