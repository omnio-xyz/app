import { Integration } from './integration';

class Omnio {
	integration;

	constructor() {
		this.integration = new Integration();
	}

	async savePurchase(purchase) {
		// TODO: Improve Append
		let userOmnioData = await JSON.parse(await this.integration.readAndDecrypt());
		if (userOmnioData == null) {
			userOmnioData = { shopping_history: [] };
		}
		userOmnioData.shopping_history.push(purchase);

		await this.integration.encryptAndWrite(JSON.stringify(userOmnioData));
	}

	async generateRecommendation() {
		const userOmnioData = JSON.parse(await this.integration.readAndDecrypt());
		if (userOmnioData == null) {
			return 0;
		}

		console.log(userOmnioData.shopping_history);
		return userOmnioData.shopping_history?.length;
	}
}

export default new Omnio();
