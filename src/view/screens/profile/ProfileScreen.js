import Container from 'components/Global/Container';
import HStack from 'components/Global/HStack';
import Typography from 'components/Global/Typography';
import VStack from 'components/Global/VStack';
import PROFILE_DATA from 'const/data/PROFILE_DATA';
import { Avatar, Divider, IconButton } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <Container backgroundColor="#fff">
      <IconButton icon="pencil" style={{ position: 'absolute', right: 20 }} />
      <Avatar.Image
        size={75}
        source={{ uri: 'https://i.pravatar.cc/300' }}
        style={{ alignSelf: 'center', marginTop: 20 }}
      />

      <Divider style={{ marginVertical: 20 }} />
      {PROFILE_DATA.map((item) => (
        <>
          <ProfileData title={item.title} data={item.data} />
          <Divider />
        </>
      ))}
    </Container>
  );
}

function ProfileData({ title, data }) {
  return (
    <VStack gap="20px">
      <Typography size="large" weight="bold">
        {title}
      </Typography>
      {data?.map((item) => (
        <HStack align="center">
          <Typography size="medium" weight="bold" style={{ minWidth: 150 }}>
            {item?.label}
          </Typography>
          <Typography style={{ flex: 1 }}>{item?.value}</Typography>
        </HStack>
      ))}
    </VStack>
  );
}
