'use client'
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {
	const [userAuthenticated, setUserAuthenticated] = useState(false)
	const router = useRouter()
	const isAuthenticated = async () => {
		try {
			if (userAuthenticated) {
				await axios
					.get(`https://frontendtestapi.staging.fastjobs.io/auth/me`, {
						withCredentials: true,
					})
					.then((response) => {
						console.log(response)
						router.push('./../table')
					})
			}
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		isAuthenticated()
		console.log('useEffect called')
	}, [userAuthenticated])

	return (
		<AuthContext.Provider value={{ userAuthenticated, setUserAuthenticated }}>
			{children}
		</AuthContext.Provider>
	)
}
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthContextProvider }