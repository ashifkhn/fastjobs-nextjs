'use client'
import React, { useState, useEffect } from 'react'
import './page.css'
import Image from 'next/image'
import Logo from './assets/LoginPage/FastJobs_Logo.png'
import { PrimaryButton } from './components/Buttons'
import axios from 'axios'
import { useAuth } from './context/AuthContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

axios.defaults.withCredentials = true
const LoginPage = () => {
	const [username, setUsername] = useState('johndoe')
	const [password, setPassword] = useState('password')
	const { setUserAuthenticated } = useAuth()
	const loginHandler = async () => {
		try {
			await axios
				.post(
					`https://frontendtestapi.staging.fastjobs.io/auth/login`,
					{
						username: username.toLowerCase(),
						password: password,
					},
					{ withCredentials: true }
				)
				.then(async (response) => {
					if (response.data.message === 'success') {
						setUserAuthenticated(true)
					}
				})
		} catch (err) {
			console.log(err)
			if (err.response.data.message === 'Unauthorized') {
				toast.error('Please check your username and password', {
					position: toast.POSITION.TOP_RIGHT,
				})
			}
		}
	}

	useEffect(() => {
		setUserAuthenticated(false)
	}, [])

	return (
		<div className='main-container flex justify-between '>
			<div className='login-context-container pt-16 pl-24 relative'>
				<div className='relative'>
					<Image src={Logo} alt='Logo' width={70} height='auto' quality={79} />
					<div className='flex-col text-white mt-16'>
						<div>
							<div className='text-sm'>Congratulations!</div>
							<div className='text-3xl my-2'>
								Company XYZ is inviting <br /> you to take an interview
							</div>
						</div>
						<div>
							<div className='text-sm'>Skill being assessed:</div>
							<div className='flex flex-row gap-2'>
								<div className='skills'>UI/UX</div>
								<div className='skills'>Product Design</div>
								<div className='skills'>Motion Graphics</div>
							</div>
						</div>
						<div className='text-sm my-4'>Don't be nervous.</div>
					</div>
				</div>
				<div className='circles '>
					<div className='color-one'></div>
					<div className='color-two'></div>
					<div className='color-three'></div>
				</div>
			</div>

			<div className='username-password-container  pt-32 px-16'>
				<div className='text-3xl text-white my-4'>
					For us to stay <br /> in touch
				</div>

				<div className='my-8'>
					<div className='username-password flex flex-col my-4'>
						<label className='text-white text-xs'>Username</label>
						<input
							className='username-input'
							value={username}
							onChange={(e) => {
								setUsername(e.target.value)
							}}
						/>
					</div>
					<div className='username-password flex flex-col'>
						<label className='text-white text-xs'>Password</label>
						<input
							className='username-input'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value)
							}}
						/>
					</div>
					<PrimaryButton title='Continue' onClick={loginHandler} />
				</div>
			</div>
			<ToastContainer />
		</div>
	)
}

export default LoginPage
