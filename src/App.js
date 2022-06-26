import Parse from 'parse';
import { useEffect, useState } from 'react';
import { initializeParse } from '@parse/react';

const PARSE_APPLICATION_ID = 'mobi';
const PARSE_JAVASCRIPT_KEY = 'mobi-JSKEY';
const PARSE_HOST_URL = 'http://pulsecheck.9ijakids.com/parse';

// import axios from 'axios';
// import { useForm } from 'react-hook-form';

// const PARSE_APPLICATION_ID = 'mobi';
// const PARSE_HOST_URL = 'https://pulsecheck.9ijakids.com';
// const PARSE_JAVASCRIPT_KEY = 'mobi-JSKEY';
// Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
// Parse.serverURL = PARSE_HOST_URL;
initializeParse(PARSE_HOST_URL, PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.liveQueryServerURL = 'wss://pulsecheck.9ijakids.com/parse';
// Parse.enableLocalDatastore();

// var client = new Parse.LiveQueryClient({
// 	applicationId: PARSE_APPLICATION_ID,
// 	serverURL: 'wss://pulsecheck.9ijakids.com/parse', // Example: 'wss://livequerytutorial.back4app.io'
// 	javascriptKey: PARSE_JAVASCRIPT_KEY,
// });
// client.open();

// client.on('connection', () => {
// 	console.log('connected');
// });

function App() {
	const [sub, setSub] = useState(null);

	useEffect(() => {
		async function setSubscription() {
			let query = new Parse.Query('Messages');

			try {
				let subscription = await query.subscribe();

				subscription.on('open', () => {
					console.log('subscription opened');
				});

				subscription.on('create', (data) => {
					console.log(data);
				});
				setSub(subscription);
			} catch (error) {
				console.error(error);
			}
		}

		setSubscription()
	}, []);

	// useEffect(() => {}, [sub]);

	return (
		<div className="App">
			<h1>Parse Testing</h1>
		</div>
	);
}

export default App;
