import React, { useEffect, } from 'react'
import { 
    StyleSheet, 
    View, 
    Text,
    Image,
} from 'react-native'
import PushNotification from "react-native-push-notification"

export default ({ navigation, }) => {

  useEffect(() => {
    createChannels()
    setTimeout(() => {
      navigation.replace('Home')
    }, 2000)
  })

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'task-channel',
      channelName: 'task channel',
    })
  }

  return (
    <View
      style={styles.body}
    >
      <Image
        style={[
          // GlobalStyles.CustomFont,
          styles.logo,
        ]}
        source={require('../../assets/flags.jpg')}
      />
      <Text style={styles.text}>City Maps</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  text: {
    fontSize: 40,
    color: '#fff',
  },
  logo: {
    height: 150,
    width: 250,
    margin: 20,
  },
})
