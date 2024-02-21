import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { object, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const PasswordSchema = object().shape({
  passwordLength: number()
    .min(4, "Should be minimum 4 characters")
    .max(16, "Should be less than 16 characters")
    .required("password is required"),
});

const initialValues = {
  passwordLength: 0,
};

const App = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: initialValues,
    mode: "onChange",
    resolver: yupResolver(PasswordSchema),
  });

  const onSubmit = (values) => {
    generatePasswordString(+values.passwordLength); // plus will convert it to number
  };

  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowercase, setLowerCase] = useState(true);
  const [upperCase, setUperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = "";

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwzyz";
    const digitChars = "0123456789";
    const specialChars = "!@$&*()_";

    if (upperCase) {
      characterList += upperCase;
    }
    if (lowercase) {
      characterList += lowercase;
    }

    if (numbers) {
      characterList += digitChars;
    }

    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
    setLowerCase(true);
    setUperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);

      result += characters.charAt(characterIndex);
    }

    return result;
  };

  const resetPassword = () => {
    setPassword("");
    setIsPassGenerated(false);
    reset(initialValues);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}> Password Generator</Text>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter Password Length"
                onBlur={onBlur}
                onChangeText={onChange}
                value={String(value)}
                style={styles.inputField}
              />
            )}
            name="passwordLength"
          />
          <Text style={styles.errorText}>{errors.passwordLength?.message}</Text>

          <View style={styles.checkboxesContainer}>
            <View style={styles.checkboxes}>
              <Text>UpperCase: </Text>
              <BouncyCheckbox
                onPress={(isChecked: boolean) => {
                  setUperCase(true);
                }}
                fillColor="red"
              />
            </View>

            <View style={styles.checkboxes}>
              <Text>LowerCase: </Text>
              <BouncyCheckbox
                onPress={(isChecked: boolean) => {
                  setLowerCase(true);
                }}
                fillColor="blue"
              />
            </View>

            <View style={styles.checkboxes}>
              <Text>Numbers: </Text>
              <BouncyCheckbox
                onPress={(isChecked: boolean) => {
                  setNumbers(true);
                }}
                fillColor="pink"
              />
            </View>

            <View style={styles.checkboxes}>
              <Text>Special Characters: </Text>
              <BouncyCheckbox
                onPress={(isChecked: boolean) => {
                  setSymbols(true);
                }}
                fillColor="green"
              />
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <Button title="Reset" onPress={resetPassword} />

            <Button
              title="Generate Password"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>

        {isPassGenerated ? (
          <View style={styles.generatedText}>
            <Text>Generated Password is: </Text>
            <Text>(Long Press to copy) </Text>
            <Text selectable style={styles.passwordGenerated}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 20,
    padding: 20,
  },

  formContainer: {},

  title: {
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 20,
  },

  inputField: {
    backgroundColor: "#3c403d",
    height: 50,
    color: "#FFF",
    borderRadius: 6,
    padding: 6,
  },

  errorText: {
    color: "red",
    fontSize: 12,
  },

  checkboxesContainer: {
    flex: 1,
    gap: 6,
    marginVertical: 15,
  },

  checkboxes: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },

  generatedText: {
    display: "flex",
    flexDirection: "column",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0dede",
    borderRadius: 8,
    padding: 10,
  },

  passwordGenerated: {
    backgroundColor: "black",
    color: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 6,
  },
});

export default App;
