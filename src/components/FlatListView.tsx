import { Alert, FlatList, Modal, Pressable, View } from 'react-native';
import Item from './Item';
import { Button, Text } from 'react-native-paper';

const FlatListView = ({
  goals,
  showModal,
  setShowModal,
}: {
  goals: string[];
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const hideModal = () => {
    setShowModal(false);
  };
  return (
    <View style={{ flex: 1 }}>
      <Modal
        style={{ flex: 1 }}
        visible={showModal}
        onDismiss={hideModal}
        animationType="slide"
        transparent={false}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShowModal(!showModal);
        }}
      >
        <Button
          icon="camera"
          mode="contained"
          onPress={() => setShowModal(!showModal)}
          style={{ marginTop: 50 }}
        >
          Press me
        </Button>
        <FlatList
          style={{ marginTop: 10 }}
          data={goals}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={item => item}
        />
      </Modal>
    </View>
  );
};

export default FlatListView;
