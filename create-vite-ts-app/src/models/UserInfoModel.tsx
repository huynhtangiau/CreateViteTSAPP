export default interface IUserInfoModel {
    Name: string;
    Gender: string;
    Birthday: string;
    Address: string;
    Phone: string;
    Email: string;
}
export class UserInfoModel implements IUserInfoModel {
    Name: string = '';
    Gender: string = '';
    Birthday: string = '';
    Address: string = '';
    Phone: string = '';
    Email: string = '';
}
