export const logger = (state) => (next) => (action) => {

	console.log('dispatching', action);
	console.log('before', state.getState());

	let result = next(action);

	console.log(`after`, state.getState());
	return result;
}
