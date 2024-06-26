import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCarona from '../Telas/HomeCarona';
import HomeCaroneiro from '../Telas/HomeCaroneiro';
import CaronaRapida from '../Telas/CaronaRapida';
import LoginNova from '../Telas/LoginNova';
import Cadastrar from '../Telas/Cadastrar';
import Login from '../Telas/Login';
import CadastrarVeiculo from '../Telas/CadastrarVeiculo';
import CriarCarona from '../Telas/CriarCarona';
import CentralDeCaronas from '../Telas/CentralDeCaronas';
import Procurar from '../Telas/Procurar';
import Avaliacao from '../Telas/Avaliacao';
import PainelCarona from '../Telas/PainelCarona';
import PedirCarona from '../Telas/PedirCarona';
import Perfil from '../Telas/Perfil';
import EditarCarona from '../Telas/EditarCarona';
import Registrar from '../Telas/Registrar';
import AceitarCaronas from '../Telas/AceitarCaronas';


const Stack = createStackNavigator();

function Navegador() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginNova">
        <Stack.Screen name="Registrar" component={Registrar} options={{ headerShown: false }} />
        <Stack.Screen name="HomeCarona" component={HomeCarona} options={{ headerShown: false }} />
        <Stack.Screen name="HomeCaroneiro" component={HomeCaroneiro} options={{ headerShown: false }} />
        <Stack.Screen name="CaronaRapida" component={CaronaRapida} options={{ headerShown: false }} />
        <Stack.Screen name="LoginNova" component={LoginNova} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="CadastrarVeiculo" component={CadastrarVeiculo} options={{ headerShown: false }} />
        <Stack.Screen name="CriarCarona" component={CriarCarona} options={{ headerShown: false }} />
        <Stack.Screen name="CentralDeCaronas" component={CentralDeCaronas} options={{ headerShown: false }} />
        <Stack.Screen name="Procurar" component={Procurar} options={{ headerShown: false }} />
        <Stack.Screen name="Avaliacao" component={Avaliacao} options={{ headerShown: false }} />
        <Stack.Screen name="PainelCarona" component={PainelCarona} options={{ headerShown: false }} />
        <Stack.Screen name="PedirCarona" component={PedirCarona} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
        <Stack.Screen name="EditarCarona" component={EditarCarona} options={{ headerShown: false }} />
        <Stack.Screen name='AceitarCaronas' component={AceitarCaronas} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default Navegador;
