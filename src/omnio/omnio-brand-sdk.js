import { Ceramic } from './ceramic';
import encryptedDataModelAliases from './models/encrypted-data/ceramic/aliases.json';

class OmnioBrand {
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

	async saveProfile(profile) {
		let brandProfile = await this.ceramic.get(this.modelDefinitionName);

		brandProfile = this.mergeWithExistingProfile(brandProfile, profile);

		await this.ceramic.update(this.modelDefinitionName, brandProfile);
		return brandProfile;
	}

	async getProfile() {
		return this.ceramic.get(this.modelDefinitionName);
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

const omnio = new OmnioBrand();

export default omnio;
