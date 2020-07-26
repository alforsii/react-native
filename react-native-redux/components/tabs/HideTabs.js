// But if we want to show the tab bar only on the Home, Feed and Notifications screens,
// but not on the Profile and Settings screens, we'll need to change the navigation structure.
// The easiest way to achieve this is to nest the tab navigator inside the first screen of the stack instead of nesting stack inside tab navigator:
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
