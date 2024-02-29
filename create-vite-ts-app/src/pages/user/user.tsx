import UserInfoModel from '../../models/UserInfoModel';
import * as Yup from 'yup';

export function onRegister(values: UserInfoModel) {
    console.log(values);
}

export const UserSchema = Yup.object<UserInfoModel>().shape({
    Name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Name is Required'),
    Address: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Address is Required'),
    Email: Yup.string().email('Invalid email').required('Email is Required'),
    Birthday: Yup.string().required('Birthday is Required'),
    Phone: Yup.string().required('Phone is Required'),
});
