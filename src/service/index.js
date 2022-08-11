import axios from 'axios'
const domain = `https://test.dk-tech.vn/`
export const callApiGet = async (url) => {
    await axios({
        url: `${domain}${url}`,
        method: "GET"
    })
}
