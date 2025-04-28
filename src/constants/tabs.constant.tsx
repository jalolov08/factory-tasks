import TaskOrderStack from "@navigation/TaskOrderStack/taskOrder.stack";
import ProfileStack from "@navigation/ProfileStack/profile.stack";

export const tabs = [
  {
    name: "Задачи",
    component: TaskOrderStack,
    icon: "file-text",
  },
  {
    name: "Профиль",
    component: ProfileStack,
    icon: "user",
  },
];
