// With this structure, when we navigate to the Profile or Settings screen,
// the tab bar will still stay visible over those screens.

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}
