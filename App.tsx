import { View } from 'react-native';
import TodoListManager from './components/TodoListManager';

export default function App() {
  return (
    <View style={{ paddingTop: 60 }}>
      <TodoListManager />
    </View>
  );
}
