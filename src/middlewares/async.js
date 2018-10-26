export default ({ dispatch }) => next => action => {
    if (!action.payload || !action.payload.then ) {
        return next(action);
    } else {
        action.payload.then(function(response) {
            const newAction = { ...action, payload: response };
            dispatch(newAction); //takes the action and sends through all the middlewares again
        });
    }
}

