function MyTabBar({ state, descriptors, navigation }) {
  const tabRef = React.createRef();
  const fall = new Animated.Value(1);

  const renderInner = () => (
    <View style={styles.panel}>{/* ButtomSheet body */}</View>
  );

  const renderHeader = () => (
    <View style={styles.header}>{/* ButtomSheet header */}</View>
  );

  return (
    <View style={{ flexDirection: "row" }}>
      <BottomSheet
        ref={tabRef}
        snapPoints={[CONST.HEIGHT * 0.5, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          switch (index) {
            // add button's case ( which I want to show bottom sheet)
            case 2:
              tabRef.current.snapTo(0);
              break;

            default:
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
              break;
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const TabIcon = () => {
          // custom your tab
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <TabIcon />
            {/* {label} */}
          </Pressable>
        );
      })}
    </View>
  );
}
