import { Integration } from './integration';

class Omnio {
	integration;

	constructor() {
		this.integration = new Integration();
	}

	async saveUserConsumerProfile(profile) {
		let userOmnioData = await JSON.parse(await this.integration.readAndDecrypt());
		userOmnioData = {
			...userOmnioData,
			profile: this.mergeWithExistingProfile(userOmnioData?.profile, profile),
		};

		await this.integration.encryptAndWrite(JSON.stringify(userOmnioData));
	}

	async getUserData() {
		return JSON.parse(await this.integration.readAndDecrypt());
	}

	mergeWithExistingProfile(existingProfile, profileUpdated) {
		return {
			username: profileUpdated.username ?? existingProfile.username,
			name: profileUpdated.name ?? existingProfile.name,
			surname: profileUpdated.surname ?? existingProfile.surname,
			email: profileUpdated.email ?? existingProfile.email,
		};
	}
}

const omnio = new Omnio();

export default omnio;
