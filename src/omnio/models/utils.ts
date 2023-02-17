export function isInstanceOf<T>(input: unknown, schema: Record<keyof T, string>): input is T {
	if (!input || typeof input !== 'object') {
		return false;
	}
	const object = input as Record<keyof T, unknown>;

	return Object.keys(schema).every((field) => {
		return (
			object.hasOwnProperty(field) &&
			typeof object[field as keyof T] === schema[field as keyof T]
		);
	});
}
