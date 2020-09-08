import * as S from './styles';

export interface MainProps {
  title?: string;
  description?: string;
}

const Main: React.FC<MainProps> = ({
  title = 'React Avançado',
  description = 'A startup boilerplate'
}) => {
  return (
    <S.Container>
      <S.Logo src="/img/logo.svg" alt="Imagem de um átomo" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration src="/img/hero-illustration.svg" />
    </S.Container>
  );
};

export default Main;
