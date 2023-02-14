interface UserProfileAddress {
	line?: string;
	line2?: string;
	city?: string;
	country?: string;
	zip?: string;
}

export interface IConsumerUserProfile {
	username?: string;
	prefix?: string;
	firstName?: string;
	middleName?: string;
	surname?: string;
	email?: string;
	phone?: string;
	address?: UserProfileAddress;
}
