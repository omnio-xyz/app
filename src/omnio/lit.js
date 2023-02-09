import LitJsSdk from '@lit-protocol/sdk-browser';

const client = new LitJsSdk.LitNodeClient();
const chain = 'mumbai';

// Checks if the user has at least 0 ETH
export const accessControlConditions = [
	{
		contractAddress: '',
		standardContractType: '',
		chain,
		method: 'eth_getBalance',
		parameters: [':userAddress', 'latest'],
		returnValueTest: {
			comparator: '>=',
			value: '0',
		},
	},
];

class Lit {
	litNodeClient;

	async connect() {
		await client.connect();
		this.litNodeClient = client;
	}

	async encryptText(text) {
		if (!this.litNodeClient) {
			await this.connect();
		}
		const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
		const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(text);

		const encryptedSymmetricKey = await this.litNodeClient.saveEncryptionKey({
			accessControlConditions: accessControlConditions,
			symmetricKey,
			authSig,
			chain,
		});

		return {
			encryptedString: await LitJsSdk.blobToBase64String(encryptedString),
			encryptedSymmetricKey: LitJsSdk.uint8arrayToString(encryptedSymmetricKey, 'base16'),
		};
	}

	async decryptText(encryptedString, encryptedSymmetricKey) {
		if (!this.litNodeClient) {
			await this.connect();
		}

		const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
		const symmetricKey = await this.litNodeClient.getEncryptionKey({
			accessControlConditions: accessControlConditions,
			toDecrypt: encryptedSymmetricKey,
			chain,
			authSig,
		});
		const encryptedStringBlob = LitJsSdk.base64StringToBlob(encryptedString);

		const decryptedString = await LitJsSdk.decryptString(encryptedStringBlob, symmetricKey);
		return decryptedString;
	}
}

const lit = new Lit();

export default lit;
