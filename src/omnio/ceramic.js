import LitJsSdk from '@lit-protocol/sdk-browser';
import { CeramicClient } from '@ceramicnetwork/http-client';
import { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking';
import { DIDDataStore } from '@glazed/did-datastore';
import { DIDSession } from '@glazed/did-session';

export class Ceramic {
	ceramicClient;

	datastore;

	constructor(aliases, nodeUrl = 'https://ceramic-clay.3boxlabs.com') {
		this.ceramicClient = new CeramicClient(nodeUrl);
		this.datastore = new DIDDataStore({ ceramic: this.ceramicClient, model: aliases });
	}

	async _authenticateWithEthereum(ethereumProvider) {
		const accounts = await ethereumProvider.request({
			method: 'eth_requestAccounts',
		});

		const authProvider = new EthereumAuthProvider(ethereumProvider, accounts[0]);
		const session = new DIDSession({ authProvider });

		const did = await session.authorize();
		this.ceramicClient.did = did;
	}

	async auth() {
		const { web3 } = await LitJsSdk.connectWeb3();
		await this._authenticateWithEthereum(web3.provider);
	}

	async get(key) {
		if (!this.ceramicClient.did) {
			await this.auth();
		}

		try {
			return await this.datastore.get(key);
		} catch (error) {
			console.error(error);
		}
	}

	async update(key, updatedModel) {
		if (!this.ceramicClient.did) {
			await this.auth();
		}

		try {
			// use the DIDDatastore to merge data to Ceramic
			await this.datastore.merge(key, updatedModel);

			// use the DIDDatastore to get data from Ceramic
			return await this.datastore.get(key);
		} catch (error) {
			console.error(error);
		}
	}
}
