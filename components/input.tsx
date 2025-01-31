import React, { useState } from "react";
import { View, TextInput, Pressable } from "react-native";
import Icons from "../constants/icons";
import { Image } from "expo-image";

// We still keep these for reference, but we'll assign them automatically now
type InputStatus = "default" | "active" | "filled";
type InputType =
  | "default"
  | "username"
  | "email"
  | "password"
  | "address"
  | "phone"
  | "DOB"
  | "Email-right"
  | "normal";

interface InputFieldProps {
  type?: InputType;
  /** The current text value of the input field. */
  value?: string;
  /** Callback when text changes. */
  onChange?: (value: string) => void;
  /** Placeholder text shown when empty. */
  placeholder?: string;
  /** If true, shows a toggle icon for password fields. */
  showPasswordToggle?: boolean;
  /** Extra classes for tailwind (nativewind). */
  className?: string;
  /** If you want to override the default logic and set the status yourself, you can pass a status. */
  forcedStatus?: InputStatus;
}

export default function InputField({
  type = "default",
  value = "",
  onChange,
  placeholder = "",
  showPasswordToggle = true,
  className = "",
  /**
   * If you really want to override the auto-status logic,
   * pass forcedStatus, otherwise we'll do the focus/fill detection.
   */
  forcedStatus,
}: InputFieldProps) {
  // Local states
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Determine the actual status based on focus & value
  const hasValue = !!value; // true if there's text

  // If the user passes a forced status, use that. Otherwise do our auto logic.
  let derivedStatus: InputStatus;
  if (forcedStatus) {
    derivedStatus = forcedStatus;
  } else if (isFocused) {
    derivedStatus = "active";
  } else if (hasValue) {
    derivedStatus = "filled";
  } else {
    derivedStatus = "default";
  }

  // Container class names (Tailwind via nativewind)
  const baseContainerClasses =
    "flex-row items-center w-[380px] h-14 px-5 rounded-xl gap-3";

  // Status-based background/border
  const statusClasses: Record<InputStatus, string> = {
    default: "bg-[#f9f9f9]",
    active: "bg-[#7210ff]/10 border border-[#7210ff]",
    filled: "bg-[#f9f9f9]",
  };

  const containerClassName = [
    baseContainerClasses,
    statusClasses[derivedStatus],
    className,
  ].join(" ");

  // Status-based text color & weight
  const labelStatusClasses: Record<InputStatus, string> = {
    default: "text-[#9e9e9e] font-normal",
    active: "text-[#212121] font-semibold",
    filled: "text-[#212121] font-semibold",
  };

  const labelClassName = [
    "text-sm leading-tight tracking-tight font-urmedium flex-1",
    labelStatusClasses[derivedStatus],
  ].join(" ");

  // Icon color based on status
  const iconColor =
    derivedStatus === "default"
      ? "#9e9e9e"
      : derivedStatus === "active"
      ? "#7121DF"
      : "#212121";

  // Render left icon if needed
  const renderLeftIcon = () => {
    switch (type) {
      case "phone":
        return (
          <Image
            source={Icons.Call}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
              tintColor: iconColor,
            }}
          />
        );
      case "username":
        return (
          <Image
            source={Icons.Profile}
            style={{
              width: 13,
              height: 17,
              resizeMode: "contain",
              tintColor: iconColor,
            }}
          />
        );
      case "email":
        return (
          <Image
            source={Icons.Message}
            style={{
              width: 17,
              height: 15,
              resizeMode: "contain",
              tintColor: iconColor,
            }}
          />
        );
      case "password":
        return (
          <Image
            source={Icons.Lock}
            style={{
              width: 14,
              height: 17,
              resizeMode: "contain",
              tintColor: iconColor,
            }}
          />
        );
      case "normal":
        return (
          <Image
            source={Icons.Profile}
            style={{
              width: 13,
              height: 17,
              resizeMode: "contain",
              tintColor: iconColor,
            }}
          />
        );
      default:
        return null; // type='default' => no icon
    }
  };

  // Render right icon if needed
  const renderRightIcon = () => {
    if (type === "password" && showPasswordToggle) {
      return (
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={Icons.Hide}
            style={{
              width: 17,
              height: 14,
              resizeMode: "contain",
              tintColor: iconColor,
            }}
          />
        </Pressable>
      );
    }
    if (type === "normal") {
      return (
        <Image
          source={Icons.ArrowDown2}
          style={{
            width: 16,
            height: 16,
            resizeMode: "contain",
            tintColor: iconColor,
          }}
        />
      );
    }
    if (type === "DOB") {
      return (
        <Image
          source={Icons.Calendar}
          style={{
            width: 16,
            height: 16,
            resizeMode: "contain",
            tintColor: iconColor,
          }}
        />
      );
    }
    if (type === "address") {
      return (
        <Image
          source={Icons.Location}
          style={{
            width: 16,
            height: 16,
            resizeMode: "contain",
            tintColor: iconColor,
          }}
        />
      );
    }
    if (type === "Email-right") {
      return (
        <Image
          source={Icons.MessageCurved}
          style={{
            width: 17,
            height: 15,
            resizeMode: "contain",
            tintColor: iconColor,
          }}
        />
      );
    }
    return null;
  };

  // Handle text changes
  const handleTextChange = (text: string) => {
    onChange?.(text);
  };

  // For password fields, if not showing password, secureTextEntry = true
  const secureEntry = type === "password" && !showPassword;

  // Placeholder logic: only show placeholder if we are in "default" status
  // (meaning no focus and empty).
  const showPlaceholder = derivedStatus === "default";

  return (
    <View className={containerClassName}>
      {/* Left Icon */}
      {renderLeftIcon()}

      {/* Actual text input */}
      <TextInput
        className={labelClassName}
        placeholder={showPlaceholder ? placeholder : ""}
        placeholderTextColor="#9e9e9e"
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={handleTextChange}
        secureTextEntry={secureEntry}
        style={{
          // "active"/"filled": text color is #212121,
          // "default": text color is #9e9e9e
          color: derivedStatus === "default" ? "#9e9e9e" : "#212121",
        }}
      />

      {/* Right Icon */}
      {renderRightIcon()}
    </View>
  );
}
