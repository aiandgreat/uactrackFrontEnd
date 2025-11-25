import { View, Text, TextInput, Button, Pressable, TouchableOpacity } from "react-native";
import styles from "../../styles/styles";
import NavBar from "../componentsFolder/NavBar";

export default function DashboardPage({navigation}) {
    // sample user role logic
    let user = "student" 
    let text = ""
    if (user !== "student") {
        text = "Admin Dashboard"
    }else{
        text = "Student Dashboard"
    }
  return (
    <View>
        
        <NavBar text={text}/>
        <View>
            <Text style={{ fontSize: 20, margin: 16 }}>Welcome</Text>
        </View>
        {user === "admin" ? 
        <View>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.card} >
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>
                        Ongoing Activities
                    </Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.card} >
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>
                        Pending Approvals
                    </Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.card} >
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>
                        Completed
                    </Text>
                </View>
            </Pressable>
        </View>
         : 
         <View>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.card} >
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>
                        Add Activity
                    </Text>
                </View>
            </Pressable>
            <View>
                <Text style={{ fontSize: 20, margin: 16 }}>Submitted Activities</Text>
                <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.card} >
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>
                        Activity1
                    </Text>
                </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <View style={styles.card} >
                    <Text style={{ fontSize: 18, marginBottom: 12 }}>
                        Activity2
                    </Text>
                </View>
            </Pressable>
            </View>
        </View>
          }
        
        

    </View>
  );
}