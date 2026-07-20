import React from 'react';
import {Dimensions} from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
} from 'react-native-svg';

const {width} = Dimensions.get('window');

const WaveBackground = () => {
  return (
    <Svg
      width={width}
      height="100%"
      viewBox={`0 0 ${width} 420`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}>

      <Defs>
        {/* Main Gradient */}
        <LinearGradient
          id="bgGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%">
          <Stop offset="0%" stopColor="#059A24" />
          <Stop offset="60%" stopColor="#4FC71B" />
          <Stop offset="100%" stopColor="#DFFF00" />
        </LinearGradient>

        {/* Wave Gradient */}
        <LinearGradient
          id="waveGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%">
          <Stop offset="0%" stopColor="#0A8E1F" />
          <Stop offset="100%" stopColor="#79D91A" />
        </LinearGradient>
      </Defs>

      {/* Main Background */}
      <Path
        d={`
          M0 120
          C70 70 170 50 280 75
          C380 100 470 150 ${width} 95
          L${width} 420
          L0 420
          Z
        `}
        fill="url(#bgGradient)"
      />

      {/* Left Wave */}
      <Path
        d={`
          M0 145
          C80 180 180 200 300 170
          C430 140 520 90 ${width} 80
          L${width} 420
          L0 420
          Z
        `}
        fill="#0AA62A"
        opacity={0.35}
      />

      {/* Middle Wave */}
      <Path
        d={`
          M0 175
          C120 135 240 120 360 150
          C470 180 560 175 ${width} 145
          L${width} 420
          L0 420
          Z
        `}
        fill="url(#waveGradient)"
        opacity={0.55}
      />

      {/* Right Wave */}
      <Path
        d={`
          M180 145
          C300 90 420 70 520 95
          C620 120 720 160 ${width} 185
          L${width} 420
          L180 420
          Z
        `}
        fill="#CFFF1A"
        opacity={0.30}
      />
    </Svg>
  );
};

export default WaveBackground;