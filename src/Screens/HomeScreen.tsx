import {
  Text,
  TopNavigation,
  Layout,
  Button,
  useTheme,
} from "@ui-kitten/components";
import { View, StatusBar } from "react-native";
import Card from "../components/Card";

export default function HomeScreen({
  navigation
}: {
  navigation: any
}) {
  const theme = useTheme();
  return (
    <Layout level="2" style={{
      flex: 1,
    }}>
      <TopNavigation style={{
        paddingTop: (StatusBar.currentHeight as number) + 15,
        paddingBottom: 20,
        paddingLeft: 20
      }} title={() => (
        <Text category="h6">
          Lampung
        </Text>
      )} />

      <View style={{
        flex: 1,
        padding: 10,
        gap: 10,
        paddingTop: 20
      }}>
        <Card onPress={() => {
          navigation.navigate("Search")
        }} title="Cari Kata" description="Melakukan pencarian bahasa lampung ke bahasa indonesia, dan sebaliknya" />
      </View>
    </Layout>
  )
}