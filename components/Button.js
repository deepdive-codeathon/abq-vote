import React from './node_modules/react'
import {Button} from './node_modules/react-native-paper'

export default ({label, color, style, mode,  zeroMargin, onPress, loading ,contentStyle, ...other}) => {
    return(
        <Button
            style={[{ marginTop: zeroMargin ? 0 : 20 } , style]}
            loading={loading}
            mode ={mode || 'contained'}
            contentStyle={{ padding:8, ...contentStyle }}
            color={color}
            onPress={!loading ? onPress : null}
            {...other}
        >
            {label}
        </Button>
    )
}
