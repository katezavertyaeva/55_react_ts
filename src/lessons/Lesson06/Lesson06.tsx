//пример импорта по умолчанию (нужно использовать точное название и заключать его 
//в фигурные скобки)
import Button from "../../components/Button/Button";
import { getAction, TRAFFIC_LIGHT } from "./object_types";

function Lesson06() {
  console.log(getAction(TRAFFIC_LIGHT.GREEN));
  

  return <Button />
}

//Экспорт по умолчанию для компонента Lesson06
export default Lesson06;