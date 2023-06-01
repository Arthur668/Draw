import { Drawer } from "expo-router/drawer";


export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="\" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Principal",
        }}
      />
      <Drawer.Screen
        name="TelaA" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "TelaA",
          title: "Bem-Vindo a TelaA",
        }}
      />
      <Drawer.Screen
        name="TelaB" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "TelaB",
          title: " Bem-Vindo a TelaB",
        }}
      />
    </Drawer>
  );
}