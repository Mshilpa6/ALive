import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ErrorBoundary from 'react-native-error-boundary';

const FallbackComponent = () => <View style={{flex: 1}} />;

const ScreenComponentView = ({
  MainHeadingChild,
  MainBodyChild,
  MainBottomChild,
}) => {
  return (
    <SafeAreaView
      style={styles.container}
      // edges={['top']}
      >
      <StatusBar
        translucent={false}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <ErrorBoundary FallbackComponent={FallbackComponent}>
        {MainHeadingChild}

        <View style={styles.body}>
          {MainBodyChild}
        </View>
      </ErrorBoundary>

      {MainBottomChild}
    </SafeAreaView>
  );
};

export default ScreenComponentView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // marginTop: StatusBar.currentHeight || 0,
  },

  body: {
    flex: 1,
  },
});