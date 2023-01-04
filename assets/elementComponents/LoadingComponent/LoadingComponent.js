import React from "react";
import { ActivityIndicator, Dialog, Portal } from "react-native-paper";

const LoadingComponent = ({
  visible,
  containerStyle,
  loadingSize,
  loadingColor,
}) => {
  return (
    <Portal>
      <Dialog visible={visible} style={containerStyle}>
        <Dialog.Content>
          <ActivityIndicator size={loadingSize} color={loadingColor} />
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default LoadingComponent;
