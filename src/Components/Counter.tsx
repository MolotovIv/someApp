import { useState } from "react"
import classes from './Counter.module.scss'


export const Counter = () => {

	const [value, setValue] = useState(0)

	return (
		<div className={classes.green}>
			<button onClick={() => { setValue(value + 1) }}>{value}</button>
		</div>)
}

