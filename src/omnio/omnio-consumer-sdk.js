import { Integration } from './integration';

class OmnioConsumer {
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
		return userOmnioData;
	}

	async getUserData() {
		return JSON.parse(await this.integration.readAndDecrypt());
	}

	mergeWithExistingProfile(existingProfile, profileUpdated) {
		return {
			username: profileUpdated.username ?? existingProfile?.username,
			prefix: profileUpdated.prefix ?? existingProfile?.prefix,
			firstName: profileUpdated.firstName ?? existingProfile?.firstName,
			middleName: profileUpdated.middleName ?? existingProfile?.middleName,
			surname: profileUpdated.surname ?? existingProfile?.surname,
			email: profileUpdated.email ?? existingProfile?.email,
			phone: profileUpdated.phone ?? existingProfile?.phone,
			address: {
				line: profileUpdated.address?.line ?? existingProfile?.address?.line,
				line2: profileUpdated.address?.line2 ?? existingProfile?.address?.line2,
				city: profileUpdated.address?.city ?? existingProfile?.address?.city,
				country: profileUpdated.address?.country ?? existingProfile?.address?.country,
				zip: profileUpdated.address?.zip ?? existingProfile?.address?.zip,
			},
		};
	}
}

const omnio = new OmnioConsumer();

export default omnio;
