import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { style } from "./style";
import { Path } from "./path";
const StackNavigation = (props) => {
  const [path, setPath] = useState("")
  const initalRoute = props.isUserLoggedIn ? Path.AUTH_SCREEN : Path.LOGIN_SCREEN
  const navigate = (screen) => {
    setPath(screen)
  }
  useEffect(() => {
    setPath(initalRoute)
  }, [props.isUserLoggedIn])
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