export const load = async () => {
	const fakeSlowResult = await new Promise<string>((resolve) => {
		setTimeout(() => {
			resolve('Hello from the server');
		}, 4000);
	});

	return {
		message: fakeSlowResult
	};
};
