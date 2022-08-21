import { StyleSheet, Text, View } from "react-native";

import ReadMore from "react-native-read-more-text";

const ReadMore = ({text}) => {
  return (
    <ReadMore
      numberOfLines={3}
      renderTruncatedFooter={this._renderTruncatedFooter}
      renderRevealedFooter={this._renderRevealedFooter}
      onReady={this._handleTextReady}
    >
      <Text style={styles.cardText}>{text}</Text>
    </ReadMore>
  );
};

export default ReadMore;

const styles = StyleSheet.create({});
