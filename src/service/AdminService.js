import BaseService from "./BaseService";

class AdminService extends BaseService {
    constructor() {
        super()
    }

    getAllUserKyc = (data) => {
        return this.post('api/admin/getAllUserKyc', data)
    }
    updateKyc = (data) => {
        return this.post('api/admin/updateKyc', data)
    }
    getAllUser = (data) => {
        return this.post('api/admin/getAllUser', data)
    }
    sreachListUserKyc = (data) => {
        return this.post('sreachListUserKyc', data)
    }
    blockAndUnBlockUser = (data) => {
        return this.post('api/admin/blockAndUnBlockUser', data)
    }
    activeUser = (data) => {
        return this.post('api/admin/activeUser', data)
    }

}
export const adminService = new AdminService()