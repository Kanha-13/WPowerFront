import React, { useEffect, useState, useContext } from "react";
import { View } from "react-native";
import { style } from "./style";
import { Path } from "./path";
import { StateContext } from '../../Utils/StateProvider';

const StackNavigation = (props) => {
  const [path, setPath] = useState("")
  const State = useContext(StateContext);
  const { isUserSignedIn } = State;
  const initalRoute = isUserSignedIn ? Path.AUTH_SCREEN : Path.LOGIN_SCREEN
  const navigate = (screen) => {
    setPath(screen)
  }
  useEffect(() => {
    setPath(initalRoute)
  }, [isUserSignedIn])

  return (
    <View style={style.container} >
      {props.children.map(child => {
        if (path === child.type.name) {
          return React.cloneElement(child, {
            path: path,
            navigate: navigate,
            key: child.type.name
          });
        }
      })}
    </View>
  );
}
export default StackNavigation;