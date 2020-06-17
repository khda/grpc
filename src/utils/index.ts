export const serialize = (object: {
	[prop: string]: any;
}): { body: Buffer | Uint8Array } => ({
	body: Buffer.from(JSON.stringify(object)),
});

export const deserialize = (request: { body: Buffer | Uint8Array }) =>
	JSON.parse(request.body.toString());
