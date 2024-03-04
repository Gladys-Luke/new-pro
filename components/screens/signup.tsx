import React, { useState } from "react";
import { Text, SafeAreaView, View, TextInput, StyleSheet, Alert, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import InColorBtn from "../buttons/inColorBtn";
import UpColorBtn from "../buttons/upColorBtn";
import { zodResolver } from "@hookform/resolvers/zod";

type SignUpProps = {
  navigation: StackNavigationProp<any>;
};

const formSchema = z.object({
  full_name: z.string().min(3, {
    message: "Full name must be at least 3 characters",
  }),
  phone_email: z.string().email("Please enter a valid email or phone number"),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  confirm_password: z.string(),
});

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(formSchema), 
    defaultValues: {
      full_name: "",
      phone_email: "",
      password: "",
      confirm_password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (data: any) => {
    try {
      const validatedData = formSchema.safeParse(data);

      if (!validatedData.success) {
        const errorMessages = Object.values(validatedData.error.errors).join("\n");
        Alert.alert("Validation Error", errorMessages);
        return;
      }

      if (data.password !== data.confirm_password) {
        Alert.alert("Validation Error", "Passwords do not match");
        return;
      }

      Alert.alert("Successful");
    } catch (error: any) {
      console.error(error);
      Alert.alert("Error", "An unexpected error occurred.");
    }
  };

  return (
    <LinearGradient
      colors={["#B11938", "#22092C"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={styles.body}>
            <View style={styles.iconHeader}>
              <View style={styles.textCon}>
                <Text style={styles.iconText}>Create Your </Text>
                <Text style={styles.iconText}>Account</Text>
              </View>
              <Ionicons
                name="ellipsis-horizontal"
                size={22}
                color="#fff"
              ></Ionicons>
            </View>
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <Controller
                control={control}
                name="full_name"
                render={({ field: { value, onChange, onBlur } }) => (
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholder="Enter your full name"
                    />
                    {!!value && <Ionicons name="checkmark-outline" size={24} color="grey" />}
                  </View>
                )}
              />
              {errors.full_name && (
                <Text style={styles.error}>{errors.full_name.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone or Email</Text>
              <Controller
                control={control}
                name="phone_email"
                render={({ field: { value, onChange, onBlur } }) => (
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholder="Enter your phone or email"
                    />
                    {!!value && <Ionicons name="checkmark-outline" size={24} color="grey" />}
                  </View>
                )}
              />
              {errors.phone_email && (
                <Text style={styles.error}>{errors.phone_email.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={watch("password")}
                  onChangeText={(text) => setValue("password", text)}
                  placeholder="Enter your password"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#ccc"
                  />
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Text style={styles.error}>{errors.password.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}> Confirm Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={watch("confirm_password")}
                  onChangeText={(text) => setValue("confirm_password", text)}
                  placeholder="Confirm your password"
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                  <Ionicons
                    name={showConfirmPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#ccc"
                  />
                </TouchableOpacity>
              </View>
              {errors.confirm_password && (
                <Text style={styles.error}>{errors.confirm_password.message}</Text>
              )}
            </View>

            <View style={styles.section}>
              <View style={styles.btnCon}>
                <UpColorBtn title="SIGN UP" onPress={handleSubmit(onSubmit)} />
              </View>

              <View style={styles.footerCon}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <Text style={styles.footerSign}>Sign In</Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  body: {
    flex: 1,
    marginTop: 45,
    marginBottom: 20,
  },
  iconHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  textCon: {},
  iconText: {
    fontSize: 25,
    color: "#fff",
  },
  bottomSection: {
    flex: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50, 
  },
  inputGroup: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#F70776",
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#E1E5EA",
    marginBottom: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
  },
  section: {
    gap: 50,
  },
  btnCon: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30, 
  },
  footerCon: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 20,
   
  },
  footerText: {
    color: "#9e9e9e",
  },
  footerSign: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default SignUp;
