import { View, Text, StyleSheet } from "react-native";
import { isMobile as isRunningOnMobileDevice } from "react-device-detect";

import Utils from "../common/Utils";
import { FontNames } from "../common/Const";

interface IGameHeaderProps {
  tHours: number;
  tMinutes: number;
  tSeconds: number;
  noOfRolls: number;
}

const GameHeader: React.FC<IGameHeaderProps> = ({
  tHours,
  tMinutes,
  tSeconds,
  noOfRolls,
}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>جُفتیز</Text>
      <Text style={styles.instructions}>
        تاس بنداز تا یکی بشن!{"\n"}تاس های یکی رو نگه دار
        دوباره بندازشون
        {isRunningOnMobileDevice === false &&
          "\n"}
      </Text>
      <View style={styles.container}>
        <Text style={styles.text}>
          {Utils.GetTimerText({ tHours, tMinutes, tSeconds })}
        </Text>
        <Text style={styles.text}>تعداد تاس های بازی شده {noOfRolls}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    margin: 12,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 44,
    letterSpacing: 5,
  },
  instructions: {
    textAlign: "center",
    fontFamily: FontNames.MouldyCheese,
    fontSize: 18,
    letterSpacing: 0.3,
  },
  container: {
    flexDirection: "row",
    marginTop: 12,
    width: "100%",
    maxWidth: 480,
  },
  text: {
    flex: 1,
    fontSize: 24,
    textAlign: "center",
    fontFamily: FontNames.MouldyCheese,
    letterSpacing: 1,
  },
});

export default GameHeader;
