import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { usersSlice } from '../../store/usersSlice'
import './Filter.css'

export const Filter = () => {
	const [inputValue, setInputValue] = useState<string>('')
	const dispatch = useAppDispatch()
	const { filterByName, sortByIdASC, sortByIdDESC } = usersSlice.actions

	useEffect(() => {
		dispatch(filterByName(inputValue))
	}, [inputValue])

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		if (e.target.value === 'asc') {
			dispatch(sortByIdASC())
		}

		if (e.target.value === 'desc') {
			dispatch(sortByIdDESC())
		}
	}
	return (
		<div className='filter'>
			<input
				className='filter__input'
				value={inputValue}
				type='text'
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setInputValue(e.target.value)
				}}
				placeholder='search'
			/>
			<select className='filter__select' onChange={handleChange}>
				<option>sort by</option>
				<option value='asc'>asc</option>
				<option value='desc'>desc</option>
			</select>
		</div>
	)
}
