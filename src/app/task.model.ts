export interface Task {
    id: number;
    title: string;
    isComplete: boolean;
    assignee?: string; 
}