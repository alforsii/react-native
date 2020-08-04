import React, { createRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";
import { getRandomColor, immutableMove } from "./Utils";

const colorMap = {};
export default class App extends React.Component {
  state = {
    dragging: false,
    draggingIdx: -1,
    data: Array.from(Array(100), (_, i) => {
      colorMap[i] = getRandomColor();
      return i;
    }),
  };

  _panResponder;
  point = new Animated.ValueXY();
  currentY = 0;
  scrollOffset = 0;
  flatListTopOffset = 0;
  rowHeight = 0;
  currentIdx = -1;
  active = false;
  flatList = createRef();
  flatListHeight = 0;
  safeViewHeight = 105 + this.rowHeight / 2;

  constructor(props) {
    super(props);

    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // I minus this.rowHeight because of SafeView
        this.currentIdx = this.yToIndex(gestureState.y0 - this.safeViewHeight);
        this.currentY = gestureState.y0 - this.safeViewHeight;
        this.point.y.setValue(gestureState.y0 - this.safeViewHeight);
        // Animated.event([{ y: this.point.y }])({
        //   y: gestureState.y0 - this.rowHeight / 2,
        // });
        this.active = true;
        this.setState(
          {
            dragging: true,
            draggingIdx: this.currentIdx,
          },
          () => {
            this.animateList();
          }
        );
      },
      onPanResponderMove: (evt, gestureState) => {
        this.currentY = gestureState.moveY - this.safeViewHeight;
        this.point.y.setValue(gestureState.moveY - this.safeViewHeight);
        // Animated.event([{ y: this.point.y }])({
        //   y: gestureState.moveY - this.rowHeight / 2,
        // });
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        this.reset();
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        this.reset();
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  animateList = () => {
    if (!this.active) {
      return;
    }

    requestAnimationFrame(() => {
      // Check scroll top or bottom
      if (this.currentY + 50 > this.flatListHeight) {
        this.flatList.current?.scrollToOffset({
          offset: this.scrollOffset + 10,
          animated: false,
        });
      } else if (this.currentY < 50) {
        this.flatList.current?.scrollToOffset({
          offset: this.scrollOffset - 10,
          animated: false,
        });
      }

      // check y value see if we need to reorder
      const newIdx = this.yToIndex(this.currentY);
      if (this.currentIdx !== newIdx) {
        this.setState({
          data: immutableMove(this.state.data, this.currentIdx, newIdx),
          draggingIdx: newIdx,
        });
        this.currentIdx = newIdx;
      }

      this.animateList();
    });
  };

  yToIndex = (y) => {
    const value = Math.floor(
      (this.scrollOffset + y - this.flatListTopOffset) / this.rowHeight
    );

    if (value < 0) {
      return 0;
    }

    if (value > this.state.data.length - 1) {
      return this.state.data.length - 1;
    }

    return value;
  };

  reset = () => {
    this.active = false;
    this.setState({ dragging: false, draggingIdx: -1 });
  };

  render() {
    const { data, dragging, draggingIdx } = this.state;

    const renderItem = ({ item, index }, noPanResponder = false) => (
      <View
        onLayout={(e) => {
          this.rowHeight = e.nativeEvent.layout.height;
        }}
        style={{
          padding: 16,
          backgroundColor: colorMap[item],
          flexDirection: "row",
          opacity: draggingIdx === index ? 0 : 1,
        }}
      >
        <View {...(noPanResponder ? {} : this._panResponder.panHandlers)}>
          <Text style={{ fontSize: 28 }}>@</Text>
        </View>
        <Text style={{ fontSize: 22, textAlign: "center", flex: 1 }}>
          {item}
        </Text>
      </View>
    );

    return (
      <View style={styles.container}>
        {dragging && (
          <Animated.View
            style={{
              position: "absolute",
              backgroundColor: "black",
              zIndex: 2,
              width: "100%",
              top: this.point.getLayout().top,
            }}
          >
            {renderItem({ item: data[draggingIdx], index: -1 }, true)}
          </Animated.View>
        )}
        <FlatList
          ref={this.flatList}
          scrollEnabled={!dragging}
          style={{ width: "100%" }}
          data={data}
          renderItem={renderItem}
          onScroll={(e) => {
            this.scrollOffset = e.nativeEvent.contentOffset.y;
          }}
          onLayout={(e) => {
            this.flatListTopOffset = e.nativeEvent.layout.y;
            this.flatListHeight = e.nativeEvent.layout.height;
          }}
          scrollEventThrottle={16}
          keyExtractor={(item) => "" + item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
