import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";
import {TaskType} from "../Todolist";
import {ReduxStoreProviderDecorator} from "../state/ReduxStoreProviderDecorator";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TODOLISTS/Task',
  component: Task,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: [ReduxStoreProviderDecorator],
  args: {
    todolistId: 'todolistId'

  }
} as ComponentMeta<typeof Task>;

// const TaskUsingRedux = () => {
//   const task = useSelector<AppRootStateType, TaskType>(state => state.tasks['todolistId'][0])
//   return <Task task={task} todolistId={'todolistId'} />
// }

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args}/>;

// export const TaskIsDoneStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args


export const TaskIsNotDoneStory = Template.bind({});

TaskIsNotDoneStory.args = {
  todolistId: 'blablaTask',
  task: {id: 'qwew', title: 'HTML', isDone: false}
}