import React, { useState, useEffect, useRef, PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Button,
} from "react-native";
import { useScrollToTop } from "@react-navigation/native";
import { connect } from "react-redux";
import { getPhotos } from "../auth_redux/actions/todosActions";

class ImagePureComponent extends PureComponent {
  render() {
    return (
      <View>
        <Text>{this.props.index}</Text>
        <Image
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
          source={{ uri: this.props.item.url }}
        />
      </View>
    );
  }
}

export const LoadMore = ({ photoData, getPhotos, loading }) => {
  const [page, setPage] = useState(1);
  const scrollRef = useRef();
  useScrollToTop(scrollRef);
  useEffect(() => {
    getPhotos(page);
  }, []);

  const loadMore = () => {
    setPage(page + 1);
    getPhotos(page + 1);
  };
  return (
    <View>
      <FlatList
        ref={scrollRef}
        data={photoData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ImagePureComponent item={item} index={index} />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        ListHeaderComponent={() => (
          <Button
            title="scrollToEnd"
            onPress={() => scrollRef.current.scrollToEnd()}
          />
        )}
        ListFooterComponent={() =>
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  photoData: state.todosReducer.photos,
  loading: state.todosReducer.loading,
});
const dispatchToProps = (dispatch) => ({
  getPhotos: (data) => dispatch(getPhotos(data)),
});
export default connect(mapStateToProps, dispatchToProps)(LoadMore);

const styles = StyleSheet.create({});
