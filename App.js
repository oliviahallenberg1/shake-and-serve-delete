import { StyleSheet } from 'react-native';
import HomePage from './components/screens/HomePage';

export default function App() {

  
  return (
     <HomePage></HomePage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
