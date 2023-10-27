import { useFetch } from "../hooks/useFetch";
import { useFunctionCard } from "../hooks/useFunctionCard";
import { RickCardLayout } from "../layout/RickCardLayout";
import { CardCase } from "./CardCase";


export const CardContainer = () => {

   
const { counter, onIncrement, onDecrement } = useFunctionCard(1)
const { data } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

  return (
    <RickCardLayout>
    <CardCase data={ data } onDecrement={ onDecrement } onIncrement={ onIncrement } />
    </RickCardLayout>

  )
}
