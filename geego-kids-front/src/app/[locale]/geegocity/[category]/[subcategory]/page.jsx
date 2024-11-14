import TaskList from '@/components/challenges-page/TaskList';
import '@/styles/global.scss';

export default function Task({params} ) {


  return (
    <main>
        <TaskList params={params}/>
    </main>
  );
};

