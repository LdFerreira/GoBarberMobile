import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Colors } from '../../styles/colors';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${Colors.cinzaEscuro};
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${Colors.cinzaEscuro};

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${Colors.laranja};
    `}
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: ${Colors.brancoTexto};
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;
export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
