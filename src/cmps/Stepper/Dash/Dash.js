import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Dash = props => {
    const n = 10;
	let dash = []
	for (let i = 0; i < n; i++) {
		dash.push(
			<View
                key={ i }
                style={styles.dash}
			/>
		)
	}
	return (
		<View
            style={styles.dashContainer}>
			{ dash }
		</View>
	)
}

export default Dash