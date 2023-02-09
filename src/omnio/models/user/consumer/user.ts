import { IConsumerUserProfile } from './profile';

export interface IConsumerUser {
	profile?: IConsumerUserProfile;
	purchase_history?: any[];
}
