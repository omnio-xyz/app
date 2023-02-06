import lit, { accessControlConditions } from './lit';
import { Ceramic } from './ceramic';
import encryptedDataModelAliases from './models/encrypted-data/ceramic/aliases.json';

export class Integration {
	chain;

	nodeUrl;

	ceramic;

	modelDefinitionName;

	constructor(chain = 'mumbai', nodeUrl = 'https://ceramic-clay.3boxlabs.com') {
		this.chain = chain;
		this.nodeUrl = nodeUrl;
		this.ceramic = new Ceramic(encryptedDataModelAliases, nodeUrl);
		this.modelDefinitionName = Object.keys(encryptedDataModelAliases.definitions)[0];
	}

	async encryptAndWrite(toEncrypt) {
		const { encryptedString, encryptedSymmetricKey } = await lit.encryptText(toEncrypt);
		const encryptedDataModel = this.buildEncryptedDataModel(
			encryptedString,
			encryptedSymmetricKey,
		);
		return this.ceramic.update(this.modelDefinitionName, encryptedDataModel);
	}

	async readAndDecrypt() {
		const encryptedDataModel = await this.ceramic.get(this.modelDefinitionName);
		if (encryptedDataModel == null) {
			return null;
		}

		return lit.decryptText(
			encryptedDataModel.encryptedStringBase64,
			encryptedDataModel.encryptedSymmetricKeyBase64,
		);
	}

	buildEncryptedDataModel(encryptedString, encryptedSymmetricKey) {
		return {
			encryptedStringBase64: encryptedString,
			encryptedSymmetricKeyBase64: encryptedSymmetricKey,
			accessControlConditions: accessControlConditions,
			chain: this.chain,
		};
	}
}
