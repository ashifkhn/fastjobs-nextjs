// 'use client'
// import React, { useEffect, useMemo, useState } from 'react'
// import axios from 'axios'
// import { useTable } from 'react-table'

// const table = () => {
// 	// const [data, setData] = useState([])
// 	const mockData = [
// 		{
// 			email: 'cellison4a@comsenz.com',
// 			first_name: 'Claudian',
// 			gender: 'Male',
// 			id: 155,
// 			last_name: 'Ellison',
// 		},
// 	]

// 	const columns = React.useMemo(
// 		() => [
// 			{
// 				Header: 'First Name',
// 				accessor: 'first_name', // accessor is the "key" in the data
// 			},
// 			{
// 				Header: 'Last Name',
// 				accessor: 'last_name',
// 			},
// 			{
// 				Header: 'Gender',
// 				accessor: 'gender',
// 			},
// 			{
// 				Header: 'Email',
// 				accessor: 'email',
// 			},
// 		],
// 		[]
// 	)

// 	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
// 		useTable({ columns, mockData })
// 	// const getTable = () => {
// 	// 	axios
// 	// 		.get(
// 	// 			'https://frontendtestapi.staging.fastjobs.io/data?page1&results=10',
// 	// 			{
// 	// 				withCredentials: true,
// 	// 			}
// 	// 		)
// 	// 		.then((res) => {
// 	// 			console.log(res)
// 	// 			// setData(res.data)
// 	// 		})
// 	// }
// 	// useEffect(() => {
// 	// 	getTable()
// 	// }, [])

// 	return (
// 		<div>
// 			<div className='text-3xl'>Graphic Designer</div>
// 			<div className='px-5'>
// 				<div className='flex flex-row justify-between'>
// 					<div className='flex flex-row '>
// 						<div>Table View</div>
// 						<div>Kanban</div>
// 					</div>
// 					<div className='flex flex-row'>
// 						<div>Table View</div>
// 						<div>Table View</div>
// 						<div>Table View</div>
// 						<div>Table View</div>
// 					</div>
// 				</div>
// 				<table {...getTableProps()}>
// 					<thead>
// 						{headerGroups.map((headerGroup) => (
// 							<tr {...headerGroup.getHeaderGroupProps()}>
// 								{headerGroup.headers.map((column) => {
// 									;<th {...column.getHeaderGroupProps()}>
// 										{column.render('Header')}
// 									</th>
// 								})}
// 							</tr>
// 						))}
// 					</thead>
// 					<tbody {...getTableBodyProps()}>
// 						{rows.map((row) => {
// 							prepareRow(row)
// 							return (
// 								<tr>
// 									{row.cells.map((cell) => {
// 										return <td>{cell.render('Cell')}</td>
// 									})}
// 								</tr>
// 							)
// 						})}
// 					</tbody>
// 				</table>
// 			</div>
// 		</div>
// 	)
// }

// export default table

// 'use client'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useTable } from 'react-table'

// const table = () => {
// 	const [data, setData] = useState([])
// 	const columns = React.useMemo(
// 		() => [
// 			{
// 				Header: 'First Name',
// 				accessor: 'first_name', // accessor is the "key" in the data
// 			},
// 			{
// 				Header: 'Last Name',
// 				accessor: 'last_name',
// 			},
// 			{
// 				Header: 'Gender',
// 				accessor: 'gender',
// 			},
// 			{
// 				Header: 'Email',
// 				accessor: 'email',
// 			},
// 		],
// 		[]
// 	)

// 	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
// 		useTable({ columns, data })
// 	const getTable = () => {
// 		axios
// 			.get(
// 				'https://frontendtestapi.staging.fastjobs.io/data?page1&results=10',
// 				{
// 					withCredentials: true,
// 				}
// 			)
// 			.then((res) => {
// 				console.log(res)
// 				setData(res.data)
// 			})
// 	}
// 	useEffect(() => {
// 		getTable()
// 	}, [])
// 	return (
// 		<div>
// 			<div className='text-3xl'>Graphic Designer</div>
// 			<div className='px-5'>
// 				<div className='flex flex-row justify-between'>
// 					<div className='flex flex-row '>
// 						<div>Table View</div>
// 						<div>Kanban</div>
// 					</div>
// 					<div className='flex flex-row'>
// 						<div>Table View</div>
// 						<div>Table View</div>
// 						<div>Table View</div>
// 						<div>Table View</div>
// 					</div>
// 				</div>
// 				<table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
// 					<thead>
// 						{headerGroups.map((headerGroup) => (
// 							<tr {...headerGroup.getHeaderGroupProps()}>
// 								{headerGroup.headers.map((column) => (
// 									<th
// 										{...column.getHeaderProps()}
// 										style={{
// 											borderBottom: 'solid 3px red',
// 											background: 'aliceblue',
// 											color: '#474D4F',
// 											fontWeight: '400',
// 											padding: '10px',
// 										}}
// 									>
// 										{column.render('Header')}
// 									</th>
// 								))}
// 							</tr>
// 						))}
// 					</thead>
// 					<tbody {...getTableBodyProps()}>
// 						{rows.map((row) => {
// 							prepareRow(row)
// 							return (
// 								<tr {...row.getRowProps()}>
// 									{row.cells.map((cell, index) => {
// 										console.log(index)
// 										return (
// 											<td
// 												{...cell.getCellProps()}
// 												style={{
// 													padding: '10px',
// 												}}
// 											>
// 												{cell.render('Cell')}
// 											</td>
// 										)
// 									})}
// 								</tr>
// 							)
// 						})}
// 					</tbody>
// 				</table>
// 			</div>
// 		</div>
// 	)
// }

// export default table
