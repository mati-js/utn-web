import { useState } from 'react';
import { Input, Button } from 'antd';
import { CheckOutlined, CloseCircleOutlined } from '@ant-design/icons';
import '../styles/task.css';

const Task = ({ taskId, onDestroy }) => {
  // Cuando una tarea se completa, se bloquea
  // el input y se pone verde el fondo.
  const [isDone, setDone] = useState(false);

  // Cuando una tarea se cancela, se bloquea
  // el input y se pone rojo el fondo.
  const [isCancelled, setCancelled] = useState(false);

  // Setea la tarea como no-cancelada
  // (esto evita que el estado anterior
  // se mantenga) y setea el estado contrario
  const handleDoneTask = () => {
    setCancelled(false);
    setDone(!isDone);
  };

  // Lo mismo acá
  const handleCancelledTask = () => {
    setDone(false);
    setCancelled(!isCancelled);
  };

  // Acá llamo la función que le pasé
  // como un prop. Al usar el hook 
  // {useEffect}, la lista está actualizada
  const handleDestroy = () => {
    onDestroy(taskId);
  }

  const setCorrectBackground = () => {
    return {
      background: `${isDone ? '#00a362' : isCancelled ? '#a12a2a' : 'black'}`
    };
  };

  return (
    <div className='container' style={setCorrectBackground()}>
      <Input className='text' style={isDone || isCancelled ? {textDecoration: 'line-through'} : {textDecoration: 'none'}} placeholder='Editame' bordered={false} disabled={isDone || isCancelled}/>
      <Button className='complete' onClick={handleDoneTask} size='middle' icon={ <CheckOutlined/> }/>
      <Button className='cancel' onClick={isCancelled ? handleDestroy : handleCancelledTask} size='middle' icon={ <CloseCircleOutlined /> }/>
    </div>
  );
};

export default Task;