import axios from 'axios'
const backend_url = 'http://localhost:5000'

// Get running status of backend
export const getStatus = async () => {
  try {
    const status = await axios.get(`${backend_url}/`)
    return status && status.status && status.status === 200
  } catch (error) {
    // console.error(error)
    return false
  }
}

// Get technology details of backend
export const getDetails = async () => {
  try {
    const status = await axios.get(`${backend_url}/detail`)

    return status && status.status && status.status === 200 && status.data
  } catch (error) {
    // console.error(error)
    return null
  }
}

// Get members list
export const getMembers = async () => {
  try {
    const status = await axios.get(`${backend_url}/members`)

    return status && status.status && status.status === 200 && status.data
  } catch (error) {
    // console.error(error)
    return null
  }
}

// Add Member method
export const addMember = async (newmember) => {
  try {
    const status = await axios.post(
      `${backend_url}/addmember`,
      {
        newmember,
      },
      {
        headers: {
          accept: 'application/json',
        },
      }
    )

    return status && status.status && status.status === 200 && status.data
  } catch (error) {
    // console.error(error)
    return false
  }
}
