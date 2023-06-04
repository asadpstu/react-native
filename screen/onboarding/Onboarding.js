import React, { useEffect, useState } from 'react';
import {
  Image,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ navigation }) => {

  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('hasCompletedOnboarding').then((value) => {
      if (value === 'true') {
        setShowOnboarding(false);
        navigation.navigate('Login');
      } else {
        setShowOnboarding(true);
      }
    });
  }, []);

  const handleOnDone = () => {
    AsyncStorage.setItem('hasCompletedOnboarding', 'true');
    setShowOnboarding(false);
    navigation.navigate('Login');
  };

  if (showOnboarding) {
    return (
      <Onboarding
        bottomBarColor="rgba(0,0,0,.1)"
        onSkip={() => navigation.replace("Login")}
        onDone={handleOnDone}
        pages={[
          {
            backgroundColor: '#ffffff',
            image: <Image source={require('../../asset/image/1.png')} />,
            title: 'Welcome',
            subtitle: 'We welcome you to the world of joy!',
          },
          {
            backgroundColor: '#d3eced',
            image: <Image source={require('../../asset/image/2.png')} />,
            title: 'Whats Inside',
            subtitle: 'Entertainment contents to learn things with smile.',
          },
          {
            backgroundColor: '#d3eced',
            image: <Image source={require('../../asset/image/3.png')} />,
            title: 'Effort',
            subtitle: 'Your little effort will help us build a rich community.',
          },
          {
            backgroundColor: '#d3eced',
            image: <Image source={require('../../asset/image/4.png')} />,
            title: 'Lets Race',
            subtitle: 'Togater we win for a better tomorrow.',
          },

        ]}
      />
    );
  }
  return null;
}

export default OnboardingScreen;
