import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Dash = props => {
	// const isRow = isStyleRow(props.style)
    // const length = isRow ? props.width : props.height
    // const length = 20
	// const n = Math.ceil(length / (props.dashGap + props.dashLength))
    // const calculatedDashStyles = getDashStyle(props)
    
    const n = 10;
	let dash = []
	for (let i = 0; i < n; i++) {
		dash.push(
			<View
                key={ i }
                style={styles.dash}
				// style={ [
				// 	calculatedDashStyles,
				// 	props.dashStyle,
				// ] }
			/>
		)
	}
	return (
		<View
			// onLayout={ props.onLayout }
            // style={ [ props.style, isRow ? styles.row : styles.column ] }
            style={styles.dashContainer}>
			{ dash }
            {/* <Text>moshe</Text> */}
		</View>
	)
}

export default Dash