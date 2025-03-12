import {useCallback, useEffect, useState} from "@lynx-js/react";

import "./App.css";
import arrow from "./assets/arrow.png";
import lynxLogo from "./assets/lynx-logo.png";
import reactLynxLogo from "./assets/react-logo.png";
import me from "./assets/me.jpeg";
export function App() {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info("Hello, ReactLynx");
  }, []);

  const onTap = useCallback(() => {
    "background only";
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (<view>
    <view className="Background"/>
    <view className="App">
      <view className="Banner">
        <view className="image">
          <image src={me} className="mayer"/>
        </view>
        <view className="Logo" bindtap={onTap}>
          {
            alterLogo
              ? (<image src={reactLynxLogo} className="Logo--react"/>)
              : (<image src={lynxLogo} className="Logo--lynx"/>)
          }
        </view>
        <text className="Title">React Native 2</text>
        <text className="Subtitle">on Lynx</text>
      </view>
      <view className="Content">
        <image src={arrow} className="Arrow"/>
        <text className="Description">Tap the logo and have fun!</text>
        <text className="Hint">
          Edit
          <text style={{
              fontStyle: "italic"
            }}>
            {" src/App.tsx "}
          </text>
          How to create new app click here!
        </text>
      </view>
      <view style={{
          flex: 1
        }}></view>
    </view>
  </view>);
}
