import BaseService from "./BaseService";

class UserServicer extends BaseService {
    constructor() {
        super()
    }
    getReferral = () => {
        return this.get('api/user/getReferral')
    }
    signup = (data) => {
        return this.post('api/user/signup', data)
    }
    login = (data) => {
        return this.post('api/user/login', data)
    }
    getParent = (data) => {
        return this.post('api/user/getParent', data)
    }
    kycUser = (data) => {
        return this.post('api/user/kycUser', data)
    }
    changePassword = (data) => {
        return this.post('api/user/changePassword', data)
    }
    getCountry = () => {
        return this.get('api/user/getCountry')
    }
    checkKycUser = () => {
        return this.post('api/user/checkKycUser')
    }
    verifyEmail = (data) => {
        return this.post('api/user/verifyEmail', data)
    }
}
export const userService = new UserServicer()