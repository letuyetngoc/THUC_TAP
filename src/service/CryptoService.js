import BaseService from "./BaseService"

class CryptoService extends BaseService {
    getListCoinAll = () => {
        return this.post('api/crypto/getListCoinAll')
    }
}
export const cryptoService = new CryptoService()