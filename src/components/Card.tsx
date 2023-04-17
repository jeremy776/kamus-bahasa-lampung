import { View, TouchableOpacity } from "react-native";
import { Text, useTheme } from "@ui-kitten/components";

interface CardProps {
  title: string;
  description: string;
  onPress?: () => void;
}

export default function Card({
  title,
  description,
  onPress
}: CardProps) {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={{
      padding: 10,
      paddingLeft: 20,
      backgroundColor: theme["color-basic-100"],
      borderRadius: 6,
    }}>
      <Text category="h6" style={{
        color: theme["color-basic-700"]
      }}>
        {title}
      </Text>
      <Text style={{
        marginTop: 5,
        color: theme["color-basic-600"]
      }}>
        {description}
      </Text>
    </TouchableOpacity>
  )
}