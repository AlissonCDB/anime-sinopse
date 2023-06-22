import { Textos } from '../ObjetosReutilizaveis/Textos';
import { getAnimes } from '../../Servicos/animes';
import { useState } from 'react';
import { useEffect } from 'react';

export const Pergunta = ({ numeroSecreto }) => {
  const [sinopses, setSinopses] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const animes = await getAnimes();
        const sinopses = animes.map((anime) => anime.sinopse);
        setSinopses(sinopses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimes();
  }, []);

  const pergunta = sinopses[numeroSecreto];
  return <Textos>{pergunta}</Textos>;
};


