import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const useAuthContext = () => {
  const { currentUser } = useContext(AuthContext)
  return { currentUser }
}
export default useAuthContext
