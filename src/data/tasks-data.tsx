import dataTasks from './tasks_job_titles.json'

export type lable = 'Bug' | 'Feature' | 'Documentation';
export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'Backlog' | 'Todo' | 'In Progress' | 'Done' | 'Canceled';

export type Task = {
    taskId: string,
    title: string,
    lable: lable,
    isFavorite: boolean,
    priority: Priority,
    status: Status,
    createdAt: Date,
}
console.log();

export const tasks: Task[] = JSON.parse(JSON.stringify(dataTasks))

export const tasks2: Task[] = [
    {
        taskId: "Task-001",
        title: "Task number 2",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-02T09:00:00Z")
    },
    {
        taskId: "Task-002",
        title: "Task number 0",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-03T09:00:00Z")
    },
    {
        taskId: "Task-003",
        title: "Task number 3",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-04T09:00:00Z")
    },
    {
        taskId: "Task-004",
        title: "Task number 4",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-05T09:00:00Z")
    },
    {
        taskId: "Task-005",
        title: "Task number 5",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-06T09:00:00Z")
    },
    {
        taskId: "Task-006",
        title: "Task number 6",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-07T09:00:00Z")
    },
    {
        taskId: "Task-007",
        title: "Task number 7",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-08T09:00:00Z")
    },
    {
        taskId: "Task-008",
        title: "Task number 8",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-09T09:00:00Z")
    },
    {
        taskId: "Task-009",
        title: "Task number 9",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-10T09:00:00Z")
    },
    {
        taskId: "Task-001",
        title: "Task number 1",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-11T09:00:00Z")
    },
]
export const tasks1: Task[] = [
    {
        taskId: "Task-001",
        title: "Task number 1",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-02T09:00:00Z")
    },
    {
        taskId: "Task-002",
        title: "Task number 2",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-03T09:00:00Z")
    },
    {
        taskId: "Task-003",
        title: "Task number 3",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-04T09:00:00Z")
    },
    {
        taskId: "Task-004",
        title: "Task number 4",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-05T09:00:00Z")
    },
    {
        taskId: "Task-005",
        title: "Task number 5",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-06T09:00:00Z")
    },
    {
        taskId: "Task-006",
        title: "Task number 6",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-07T09:00:00Z")
    },
    {
        taskId: "Task-007",
        title: "Task number 7",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-08T09:00:00Z")
    },
    {
        taskId: "Task-008",
        title: "Task number 8",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-09T09:00:00Z")
    },
    {
        taskId: "Task-009",
        title: "Task number 9",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-10T09:00:00Z")
    },
    {
        taskId: "Task-010",
        title: "Task number 10",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-11T09:00:00Z")
    },
    {
        taskId: "Task-011",
        title: "Task number 11",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-12T09:00:00Z")
    },
    {
        taskId: "Task-012",
        title: "Task number 12",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-13T09:00:00Z")
    },
    {
        taskId: "Task-013",
        title: "Task number 13",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-14T09:00:00Z")
    },
    {
        taskId: "Task-014",
        title: "Task number 14",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-15T09:00:00Z")
    },
    {
        taskId: "Task-015",
        title: "Task number 15",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-16T09:00:00Z")
    },
    {
        taskId: "Task-016",
        title: "Task number 16",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-17T09:00:00Z")
    },
    {
        taskId: "Task-017",
        title: "Task number 17",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-18T09:00:00Z")
    },
    {
        taskId: "Task-018",
        title: "Task number 18",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-19T09:00:00Z")
    },
    {
        taskId: "Task-019",
        title: "Task number 19",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-20T09:00:00Z")
    },
    {
        taskId: "Task-020",
        title: "Task number 20",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-21T09:00:00Z")
    },
    {
        taskId: "Task-021",
        title: "Task number 21",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-22T09:00:00Z")
    },
    {
        taskId: "Task-022",
        title: "Task number 22",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-23T09:00:00Z")
    },
    {
        taskId: "Task-023",
        title: "Task number 23",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-24T09:00:00Z")
    },
    {
        taskId: "Task-024",
        title: "Task number 24",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-25T09:00:00Z")
    },
    {
        taskId: "Task-025",
        title: "Task number 25",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-26T09:00:00Z")
    },
    {
        taskId: "Task-026",
        title: "Task number 26",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-27T09:00:00Z")
    },
    {
        taskId: "Task-027",
        title: "Task number 27",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-28T09:00:00Z")
    },
    {
        taskId: "Task-028",
        title: "Task number 28",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-01-29T09:00:00Z")
    },
    {
        taskId: "Task-029",
        title: "Task number 29",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-01-30T09:00:00Z")
    },
    {
        taskId: "Task-030",
        title: "Task number 30",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-01-31T09:00:00Z")
    },
    {
        taskId: "Task-031",
        title: "Task number 31",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-02-01T09:00:00Z")
    },
    {
        taskId: "Task-032",
        title: "Task number 32",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-02-02T09:00:00Z")
    },
    {
        taskId: "Task-033",
        title: "Task number 33",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-02-03T09:00:00Z")
    },
    {
        taskId: "Task-034",
        title: "Task number 34",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-02-04T09:00:00Z")
    },
    {
        taskId: "Task-035",
        title: "Task number 35",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-02-05T09:00:00Z")
    },
    {
        taskId: "Task-036",
        title: "Task number 36",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-02-06T09:00:00Z")
    },
    {
        taskId: "Task-037",
        title: "Task number 37",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-02-07T09:00:00Z")
    },
    {
        taskId: "Task-038",
        title: "Task number 38",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-02-08T09:00:00Z")
    },
    {
        taskId: "Task-039",
        title: "Task number 39",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-02-09T09:00:00Z")
    },
    {
        taskId: "Task-040",
        title: "Task number 40",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-02-10T09:00:00Z")
    },
    {
        taskId: "Task-041",
        title: "Task number 41",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-02-11T09:00:00Z")
    },
    {
        taskId: "Task-042",
        title: "Task number 42",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-02-12T09:00:00Z")
    },
    {
        taskId: "Task-043",
        title: "Task number 43",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-02-13T09:00:00Z")
    },
    {
        taskId: "Task-044",
        title: "Task number 44",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-02-14T09:00:00Z")
    },
    {
        taskId: "Task-045",
        title: "Task number 45",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-02-15T09:00:00Z")
    },
    {
        taskId: "Task-046",
        title: "Task number 46",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-02-16T09:00:00Z")
    },
    {
        taskId: "Task-047",
        title: "Task number 47",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-02-17T09:00:00Z")
    },
    {
        taskId: "Task-048",
        title: "Task number 48",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-02-18T09:00:00Z")
    },
    {
        taskId: "Task-049",
        title: "Task number 49",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-02-19T09:00:00Z")
    },
    {
        taskId: "Task-050",
        title: "Task number 50",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-02-20T09:00:00Z")
    },
    {
        taskId: "Task-051",
        title: "Task number 51",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-02-21T09:00:00Z")
    },
    {
        taskId: "Task-052",
        title: "Task number 52",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-02-22T09:00:00Z")
    },
    {
        taskId: "Task-053",
        title: "Task number 53",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-02-23T09:00:00Z")
    },
    {
        taskId: "Task-054",
        title: "Task number 54",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-02-24T09:00:00Z")
    },
    {
        taskId: "Task-055",
        title: "Task number 55",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-02-25T09:00:00Z")
    },
    {
        taskId: "Task-056",
        title: "Task number 56",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-02-26T09:00:00Z")
    },
    {
        taskId: "Task-057",
        title: "Task number 57",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-02-27T09:00:00Z")
    },
    {
        taskId: "Task-058",
        title: "Task number 58",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-02-28T09:00:00Z")
    },
    {
        taskId: "Task-059",
        title: "Task number 59",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-02-29T09:00:00Z")
    },
    {
        taskId: "Task-060",
        title: "Task number 60",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-03-01T09:00:00Z")
    },
    {
        taskId: "Task-061",
        title: "Task number 61",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-03-02T09:00:00Z")
    },
    {
        taskId: "Task-062",
        title: "Task number 62",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-03-03T09:00:00Z")
    },
    {
        taskId: "Task-063",
        title: "Task number 63",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-03-04T09:00:00Z")
    },
    {
        taskId: "Task-064",
        title: "Task number 64",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-03-05T09:00:00Z")
    },
    {
        taskId: "Task-065",
        title: "Task number 65",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-03-06T09:00:00Z")
    },
    {
        taskId: "Task-066",
        title: "Task number 66",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-03-07T09:00:00Z")
    },
    {
        taskId: "Task-067",
        title: "Task number 67",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-03-08T09:00:00Z")
    },
    {
        taskId: "Task-068",
        title: "Task number 68",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-03-09T09:00:00Z")
    },
    {
        taskId: "Task-069",
        title: "Task number 69",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-03-10T09:00:00Z")
    },
    {
        taskId: "Task-070",
        title: "Task number 70",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-03-11T09:00:00Z")
    },
    {
        taskId: "Task-071",
        title: "Task number 71",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-03-12T09:00:00Z")
    },
    {
        taskId: "Task-072",
        title: "Task number 72",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-03-13T09:00:00Z")
    },
    {
        taskId: "Task-073",
        title: "Task number 73",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-03-14T09:00:00Z")
    },
    {
        taskId: "Task-074",
        title: "Task number 74",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-03-15T09:00:00Z")
    },
    {
        taskId: "Task-075",
        title: "Task number 75",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-03-16T09:00:00Z")
    },
    {
        taskId: "Task-076",
        title: "Task number 76",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-03-17T09:00:00Z")
    },
    {
        taskId: "Task-077",
        title: "Task number 77",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-03-18T09:00:00Z")
    },
    {
        taskId: "Task-078",
        title: "Task number 78",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-03-19T09:00:00Z")
    },
    {
        taskId: "Task-079",
        title: "Task number 79",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-03-20T09:00:00Z")
    },
    {
        taskId: "Task-080",
        title: "Task number 80",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-03-21T09:00:00Z")
    },
    {
        taskId: "Task-081",
        title: "Task number 81",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-03-22T09:00:00Z")
    },
    {
        taskId: "Task-082",
        title: "Task number 82",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-03-23T09:00:00Z")
    },
    {
        taskId: "Task-083",
        title: "Task number 83",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-03-24T09:00:00Z")
    },
    {
        taskId: "Task-084",
        title: "Task number 84",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-03-25T09:00:00Z")
    },
    {
        taskId: "Task-085",
        title: "Task number 85",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-03-26T09:00:00Z")
    },
    {
        taskId: "Task-086",
        title: "Task number 86",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-03-27T09:00:00Z")
    },
    {
        taskId: "Task-087",
        title: "Task number 87",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-03-28T09:00:00Z")
    },
    {
        taskId: "Task-088",
        title: "Task number 88",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-03-29T09:00:00Z")
    },
    {
        taskId: "Task-089",
        title: "Task number 89",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-03-30T09:00:00Z")
    },
    {
        taskId: "Task-090",
        title: "Task number 90",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-03-31T09:00:00Z")
    },
    {
        taskId: "Task-091",
        title: "Task number 91",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-04-01T09:00:00Z")
    },
    {
        taskId: "Task-092",
        title: "Task number 92",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-04-02T09:00:00Z")
    },
    {
        taskId: "Task-093",
        title: "Task number 93",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-04-03T09:00:00Z")
    },
    {
        taskId: "Task-094",
        title: "Task number 94",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-04-04T09:00:00Z")
    },
    {
        taskId: "Task-095",
        title: "Task number 95",
        lable: "Documentation",
        isFavorite: true,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-04-05T09:00:00Z")
    },
    {
        taskId: "Task-096",
        title: "Task number 96",
        lable: "Bug",
        isFavorite: false,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-04-06T09:00:00Z")
    },
    {
        taskId: "Task-097",
        title: "Task number 97",
        lable: "Feature",
        isFavorite: true,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-04-07T09:00:00Z")
    },
    {
        taskId: "Task-098",
        title: "Task number 98",
        lable: "Documentation",
        isFavorite: false,
        priority: "High",
        status: "Backlog",
        createdAt: new Date("2024-04-08T09:00:00Z")
    },
    {
        taskId: "Task-099",
        title: "Task number 99",
        lable: "Bug",
        isFavorite: true,
        priority: "Low",
        status: "Todo",
        createdAt: new Date("2024-04-09T09:00:00Z")
    },
    {
        taskId: "Task-100",
        title: "Task number 100",
        lable: "Feature",
        isFavorite: false,
        priority: "Medium",
        status: "In Progress",
        createdAt: new Date("2024-04-10T09:00:00Z")
    }

];