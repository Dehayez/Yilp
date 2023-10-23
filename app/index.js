import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Map } from './components'

export default function Page() {
  return (
      <>
        <Map/>
        <Link style={styles.profileButton} href="/dehayez">Open Profile</Link>
      </>
  );
}

const styles = StyleSheet.create({
 profileButton: {
  position: "absolute",
  bottom: 0,
  left: 0,
  margin: 8,
  marginBottom: 40,
  backgroundColor: "white",
  padding: 16,
 }
});
