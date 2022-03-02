import React, { useEffect, } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import { useSelector, useDispatch, } from 'react-redux'
import { getCities, } from '../redux/actions/cityActions'
import PushNotification from 'react-native-push-notification'

export default function({ navigation, }) {
  const cities = useSelector(state => state.cities.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCities())
  }, [])
  
  function handleNotification(item, index) {
    PushNotification.localNotification({
      channelId: 'task-channel',
      title: 'You clicked on ' + item.country,
      message: item.city,
      bigText: `You clicked on ${item.city}, ${item.country}`,
      id: index,
    })
  }

  function handleButtonPress(item, index) {
    handleNotification(item, index) 
    navigation.navigate('Map', {
      city: item.city,
      lat: item.lat,
      long: item.long,
    })
  }

  function renderCities({ item, index, }) {
    return (
      <TouchableOpacity
        onPress={() => { handleButtonPress(item, index) }}
      >
        <View style={styles.item}>
          <Text style={styles.text}>{item.country}</Text>
          <Text style={styles.subtext}>{item.city}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.body}>
      <View style={styles.citiesContainer}>
        <FlatList 
          data={cities}
          renderItem={renderCities}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  citiesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 40,
    margin: 10,
  },
  subtext: {
    color: 'gray',
    fontSize: 20,
    margin: 10,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    padding: 5,
    margin: 5,
  },
})
