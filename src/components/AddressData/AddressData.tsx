import { MdOutlineLocationOn } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import { Container } from './AddressDataStyle';

interface AddressDataProps {
  address: string;
  loading: boolean;
}

export const AddressData: React.FC<AddressDataProps> = ({
  address,
  loading,
}) => {
  return (
    <Container>
      <MdOutlineLocationOn />

      {loading ? (
        <Skeleton
          width="32rem"
          height="4rem"
          baseColor="rgb(255, 255, 255, 0.2)"
        />
      ) : (
        <span>{address}</span>
      )}
    </Container>
  );
};
