import React, { useEffect, useRef, useState } from "react";
import { Keyboard, StyleSheet } from "react-native";
import { View, TextInput } from "react-native";
import { FONT_FAMILY_BOLD, PRIMARY_COLOR } from "../../constants";

const OptInput = (props) => {
  const [code1, setCode1] = useState();
  const [code2, setCode2] = useState();
  const [code3, setCode3] = useState();
  const [code4, setCode4] = useState();

  const refInput1 = useRef();
  const refInput2 = useRef();
  const refInput3 = useRef();
  const refInput4 = useRef();

  const getAllOtpCode = () => {
    let optCodes = "" + code1 + code2 + code3 + code4;
    props?.handleOptCode(optCodes);
  };

  useEffect(() => {
    getAllOtpCode();
  }, [code4]);
  return (
    <View style={styles.optContainer}>
      <TextInput
        ref={refInput1}
        style={styles.opt}
        autoFocus={true}
        placeholder="⚫"
        returnKeyType="next"
        maxLength={1}
        onChangeText={(v) => {
          setCode1(v);
          refInput2.current.focus();
        }}
        value={code1}
        keyboardType="numeric"
      />
      <TextInput
        ref={refInput2}
        style={styles.opt}
        placeholder="⚫"
        returnKeyType="next"
        maxLength={1}
        onChangeText={(v) => {
          setCode2(v);
          refInput3.current.focus();
        }}
        value={code2}
        keyboardType="numeric"
      />
      <TextInput
        ref={refInput3}
        style={styles.opt}
        maxLength={1}
        placeholder="⚫"
        returnKeyType="next"
        onChangeText={(v) => {
          setCode3(v);
          refInput4.current.focus();
        }}
        value={code3}
        keyboardType="numeric"
      />
      <TextInput
        ref={refInput4}
        style={styles.opt}
        maxLength={1}
        placeholder="⚫"
        returnKeyType="next"
        onChangeText={(v) => {
          setCode4(v);
        }}
        value={code4}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  opt: {
    borderWidth: 3,
    // backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderColor: PRIMARY_COLOR,
    marginRight: 10,
    fontFamily: FONT_FAMILY_BOLD,
  },
  optContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export { OptInput };
