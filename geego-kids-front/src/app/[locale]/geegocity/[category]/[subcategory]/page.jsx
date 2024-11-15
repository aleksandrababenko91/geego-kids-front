import TaskList from '@/components/challenges-page//Tasks/TaskList';

export default function Task({params} ) {
  return (
    <main>
        <TaskList params={params}/>
    </main>
  );
};

