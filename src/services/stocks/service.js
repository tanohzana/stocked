
import axios from "axios"

const baseUrl = "https://api.iextrading.com/1.0"

const getOne = async (stockId) => {
  const response = await axios.get(`${baseUrl}/stock/${stockId}/book`)

  return response.data
}

const stockService = {
  getOne,
}

export default stockService