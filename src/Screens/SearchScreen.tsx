import {
  Text,
  TopNavigation,
  Layout,
  TabView,
  Icon,
  Tab,
  Button,
  TopNavigationAction,
  Input
} from "@ui-kitten/components";
import * as React from "react";
import {
  StatusBar,
  View,
  Dimensions
} from "react-native";

export default function Translate({
  navigation
}: {
  navigation: any
}) {
  const [selectIndex, setSelectIndex] = React.useState(0);
  const [result, setResult] = React.useState<any>([]);
  const [result2, setResult2] = React.useState<any>([]);
  const [input, setInput] = React.useState('');
  const [input2, setInput2] = React.useState('');
  const [asal, setAsal] = React.useState([]);
  const [asal2, setAsal2] = React.useState([]);

  function handleTerjemah() {
    let url = "https://anrekus.tech/api/kamus/bahasa-lampung/translate?from=" + (selectIndex == 0 ? 'indonesia' : 'lampung') + '&kata='
      +
      (selectIndex == 0 ? input.split(' ').join('%20') : input2.split(' ').join('%20'));
    console.log(url)
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(res => {
      if (selectIndex == 0) {
        setResult(res.result as any || [] as any);
        setAsal(typeof res.kata == 'string' ? [res.kata] : res.kata);
      } else {
        setResult2(res.result as any || [] as any);
        setAsal2(typeof res.kata == 'string' ? [res.kata] : res.kata);
      }
    });
  }

  return (
    <Layout level="2" style={{
      flex: 1
    }}>
      <TopNavigation style={{
        paddingTop: (StatusBar.currentHeight as number) + 15,
        paddingBottom: 20,
      }} title={() => (
        <Text category="h6">
          Cari Kata
        </Text>
      )}
        accessoryLeft={() => <TopNavigationAction
          onPress={() => {
            navigation.goBack()
          }}
          icon={() => (
            <Icon style={{
              width: 24,
              height: 24
            }} fill='black' name="arrow-ios-back" />
          )} />}
      />
      <View>
        <TabView
          selectedIndex={selectIndex}
          onSelect={index => setSelectIndex(index)}
        >
          <Tab title="Indonesia">
            <Container>
              <Input
                placeholder="Masukkan kata/kalimat"
                value={input}
                onChangeText={nextValue => setInput(nextValue)}
                style={{
                  marginBottom: 10
                }}
              />
              <Button onPress={handleTerjemah}>Cari Kata</Button>
              <Text style={{
                marginTop: 10,
                fontWeight: 'bold'
              }}>Hasil Pencarian</Text>
              <View style={{
                marginTop: 5,
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 10,
                gap: 4
              }}>
                {asal.map((item, index) => {
                  if (!item) return (
                    <Text key={index} style={{
                      color: 'red'
                    }}>Tidak ada data</Text>
                  );
                  return (
                    <View key={index} style={{
                      // flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}>
                      <Text style={{
                        fontWeight: 'bold',
                        color: 'black'
                      }}>{item}</Text>
                      <Text>{result[index].map ? result[index].map((x: any) => (x.lpgkata)).join(', ') : item}</Text>
                    </View>
                  )
                })}
              </View>
            </Container>
          </Tab>
          <Tab title="Lampung">
          <Container>
              <Input
                placeholder="Masukkan kata/kalimat"
                value={input2}
                onChangeText={nextValue => setInput2(nextValue)}
                style={{
                  marginBottom: 10
                }}
              />
              <Button onPress={handleTerjemah}>Cari Kata</Button>
              <Text style={{
                marginTop: 10,
                fontWeight: 'bold'
              }}>Hasil Pencarian</Text>
              <View style={{
                marginTop: 5,
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 10,
                gap: 4
              }}>
                {asal2.map((item, index) => {
                  if (!item) return (
                    <Text key={index} style={{
                      color: 'red'
                    }}>Tidak ada data</Text>
                  );
                  return (
                    <View key={index} style={{
                      // flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}>
                      <Text style={{
                        fontWeight: 'bold',
                        color: 'black'
                      }}>{item}</Text>
                      <Text>{result2[index].map ? result2[index].map((x: any) => (x.idkata)).join(', ') : item}</Text>
                    </View>
                  )
                })}
              </View>
            </Container>
          </Tab>
        </TabView>
      </View>
    </Layout>
  )
}

function Container({ children }: {
  children: any
}) {
  return (
    <Layout level="2" style={{
      height: Dimensions.get('window').height,

      padding: 15
    }}>
      {children}
    </Layout>
  )
}