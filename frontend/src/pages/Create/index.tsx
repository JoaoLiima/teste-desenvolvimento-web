import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { backendApi } from '../../services/api';

import { Container } from './styles';

import NavigationMenu from '../../components/NavigationMenu';
import Input from '../../components/Input';

interface CreateFormData {
  name: string;
  type_1: string;
  type_2: string;
  weather_1: string;
  weather_2: string;
  attack: number;
  defense: number;
  stamina: number;
  cp_40: number;
  cp_39: number;
  legendary: boolean;
  shiny: boolean;
  pokedex_number: number;
  stat_total: number;
}

interface PokedexNumber {
  data: {
    pokedex_number: number;
  };
}

const CreatePokemon: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: CreateFormData) {
    try {
      const lastPokemon: PokedexNumber = await backendApi.get('/last');
      const newPokemon: CreateFormData = data;
      newPokemon.pokedex_number = lastPokemon.data.pokedex_number + 1;
      newPokemon.stat_total =
        newPokemon.attack + newPokemon.defense + newPokemon.stamina;
      await backendApi.post('/createPokemon', newPokemon);
    } catch (err) {
      alert('Erro ao criar um novo pokemon');
    }
  }

  return (
    <>
      <NavigationMenu />
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input text="Nome" name="name" size={200} />
          <Input text="Tipo 1" name="type_1" size={100} />
          <Input text="Tipo 2" name="type_2" size={100} />
          <Input text="Clima 1" name="weather_1" size={100} />
          <Input text="Clima 2" name="weather_2" size={100} />
          <Input text="Ataque" name="attack" size={50} />
          <Input text="Defesa" name="defense" size={50} />
          <Input text="Estâmina" name="stamina" size={50} />
          <Input text="CP 40" name="cp_40" size={75} />
          <Input text="CP 39" name="cp_39" size={75} />
          <div className="filler" />
          <button type="submit">Enviar</button>
        </Form>
      </Container>
    </>
  );
};

export default CreatePokemon;
