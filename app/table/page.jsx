'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner'
import axios from 'axios'
import { useTable, useSortBy } from 'react-table'
import './table.css'
import KanbanImage from './../assets/TablePage/kanban.svg'
import TableView from './../assets/TablePage/Path 29.svg'
import MemoImage from './../assets/TablePage/Memo@2x.png'
import Image from 'next/image'
import Search from './../assets/TablePage/Search.svg'
import Arrow from './../assets/TablePage/Vector.svg'
import { useRouter } from 'next/navigation'

const table = () => {
	const [data, setData] = useState([])
	const [searchQuery, setSearchQuery] = useState('')
	const [loader, setLoader] = useState(true)
	const router = useRouter()
	const SearchHandler = (e) => {
		e.preventDefault()
		setSearchQuery(e.target.value)
	}
	const columns = React.useMemo(
		() => [
			{
				Header: 'First Name',
				accessor: 'first_name', // accessor is the "key" in the data
				sortType: 'basic',
			},
			{
				Header: 'Last Name',
				accessor: 'last_name',
				sortType: 'basic',
			},
			{
				Header: 'Gender',
				accessor: 'gender',
				sortType: 'basic',
			},
			{
				Header: '@Email',
				accessor: 'email',
				sortType: 'basic',
			},
		],
		[]
	)

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data }, useSortBy)
	const getTable = async () => {
		try {
			await axios
				.get(
					'https://frontendtestapi.staging.fastjobs.io/data?page1&results=10',
					{
						withCredentials: true,
					}
				)
				.then((res) => {
					console.log(res)
					setData(res.data)
					setLoader(false)
				})
		} catch (err) {
			if (err.response.data.statusCode) {
				router.push('/')
			}
		}
	}
	useEffect(() => {
		getTable()
	}, [])
	return (
		<>
			{loader ? (
				<div
					className='flex justify-center items-center'
					style={{
						height: '100%',
					}}
				>
					<Audio
						height='100'
						width='100'
						radius='20'
						color='#6776ff'
						secondaryColor=''
						ariaLabel='revolving-dot-loading'
						wrapperStyle={{}}
						wrapperClass=''
						visible={true}
					/>
				</div>
			) : (
				<div className='pl-10 pr-40 pt-20'>
					<div className='px-5'>
						<div className='flex flex-row gap-2'>
							<div>
								<div className='text-3xl'>Graphic Designer </div>
								<hr style={{ border: '2px solid black' }} />
							</div>
							<div>
								<Image
									src={MemoImage}
									alt='Logo'
									width={40}
									height={35}
									quality={79}
								/>
							</div>
						</div>
						<div className='table-filter-left flex flex-row justify-between mb-1 mt-4'>
							<div className='flex flex-row gap-3 font-bold'>
								<div className='flex flex-row gap-1 items-center'>
									<div>
										<Image
											src={TableView}
											alt='Logo'
											width={14}
											height={10}
											quality={79}
										/>
									</div>

									<div className='cursor-pointer'>Table view</div>
								</div>
								<div className='flex flex-row gap-1 items-center cursor-pointer'>
									<Image
										src={KanbanImage}
										alt='Logo'
										width={14}
										height={10}
										quality={79}
									/>
									<div className='cursor-pointer'>Kanban</div>
								</div>
							</div>
							<div className='table-filter-right flex flex-row gap-5 '>
								<div className='cursor-pointer'> Sort</div>
								<div className='cursor-pointer'>Filter</div>
								<div className='flex flex-row gap-2'>
									<Image
										src={Search}
										alt='Logo'
										width={14}
										height={10}
										quality={79}
									/>
									<input
										className='cursor-pointer'
										placeholder='Type to search...'
										value={searchQuery}
										onChange={SearchHandler}
									/>
								</div>
								<div className='new-arrow flex flex-row cursor-pointer'>
									<div className='new'>New</div>

									<div className='flex new-icon items-center justify-center '>
										<Image
											src={Arrow}
											alt='Logo'
											width={14}
											height={10}
											quality={100}
											className='arrow-icon'
										/>
									</div>
								</div>
							</div>
						</div>
						<div className='table-container'>
							<table {...getTableProps()}>
								<thead>
									{headerGroups.map((headerGroup) => (
										<tr {...headerGroup.getHeaderGroupProps()}>
											{headerGroup.headers.map((column) => (
												<th
													{...column.getHeaderProps(
														column.getSortByToggleProps()
													)}
												>
													{column.render('Header')}
													<span>
														{column.isSorted
															? column.isSortedDesc
																? ' 🔽'
																: ' 🔼'
															: ''}
													</span>
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody {...getTableBodyProps()}>
									{rows.map((row) => {
										prepareRow(row)
										return (
											<tr {...row.getRowProps()}>
												{row.cells.map((cell) => {
													return (
														<td {...cell.getCellProps()}>
															{cell.render('Cell')}
														</td>
													)
												})}
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default table
