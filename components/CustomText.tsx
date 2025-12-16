import { Text, TextProps } from "react-native";

type CustomTextProps = TextProps & {
  children: React.ReactNode;
  className?: string;
};

export default function CustomText({
  children,
  style,
  className,
  ...props
}: CustomTextProps) {
  return (
    <Text
      {...props}
      className={className}
      style={[{ fontFamily: "Nunito-Regular" }, style]}
    >
      {children}
    </Text>
  );
}
