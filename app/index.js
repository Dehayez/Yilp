import { useRouter } from "expo-router";
import { Map, ProfileButton } from './components';

export default function Page() {
  const router = useRouter();

  return (
      <>
        <Map/>
        <ProfileButton onPress={()=>router.push('/dehayez')}/>
      </>
  );
}

