import { colors } from "@constants/colors.constant";
import React from "react";
import { Text, TextStyle, StyleSheet } from "react-native";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "body" | "caption";
  children: React.ReactNode;
  style?: TextStyle;
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  style,
}) => {
  const variantStyle = styles[variant];

  return <Text style={[variantStyle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.text.primary,
  },
  h2: {
    fontSize: 28,
    fontWeight: "600",
    color: colors.text.primary,
  },
  h3: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.text.primary,
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.text.secondary,
  },
  caption: {
    fontSize: 12,
    fontWeight: "300",
    color: colors.text.secondary,
  },
});
