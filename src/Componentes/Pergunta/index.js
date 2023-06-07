import { BancoDeDados } from '../BancoDeDados';
import { Textos } from '../Textos';

export const Pergunta = ({numeroSecreto}) => {
  const sinopses = Object.values(BancoDeDados).map((sin) => sin.sinopse);

  const pergunta = sinopses[numeroSecreto];
  return (
    <Textos>
      {pergunta}
    </Textos>
  );
};




