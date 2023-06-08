import { LinearGradient } from 'expo-linear-gradient';
import styled from "styled-components";

export const Container = styled(LinearGradient).attrs({
  colors: ['#9FB9FC', '#FFF', '#9FB9FC']
})`
  flex: 1;
`;

